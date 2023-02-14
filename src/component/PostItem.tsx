import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import { IPost } from '../interfaces';

interface PostItemProps {
    post: IPost;
}

const PostItem = ({ post }: PostItemProps) => {
    return (
        <Col className="p-3">
            <Row>
                <Col md={10} sm={10}>
                    <h5>
                        {post.id}. {post.title}
                    </h5>
                    <p>{post.body}</p>
                </Col>
            </Row>
        </Col>
    );
};

export default PostItem;
