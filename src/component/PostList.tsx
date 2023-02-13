import { useParams } from 'react-router-dom';
import { useGetAllUsersQuery, useGetPostsByUserQuery } from '../store/jsonplaceholderApi';
import Error from './Error';
import PostItem from './PostItem';
import { Loader } from './Loader';
import { Link } from 'react-router-dom';

const PostList = () => {
    const { userId } = useParams();

    const {
        data: posts,
        error,
        isLoading,
    } = useGetPostsByUserQuery((userId && +userId) || 0, { pollingInterval: 60_000 });

    const { data: users } = useGetAllUsersQuery('', { pollingInterval: 60_000 });

    if (error || !userId) {
        return <Error message={"Can't find user's posts"} />;
    }

    if (userId) {
        if (+userId && users && +userId >= users.length) {
            return <Error message={"Can't find user's posts"} />;
        }
    }

    return (
        <div>
            {isLoading && <Loader />}
            {users && userId && (
                <>
                    <h2>{users[+userId - 1].name} posts.</h2>
                    <Link to={`${import.meta.env.BASE_URL}`} className="text-white btn btn-primary">
                        Users list
                    </Link>
                </>
            )}
            {posts && posts.map((post) => <PostItem post={post} key={post.id} />)}
        </div>
    );
};

export default PostList;
