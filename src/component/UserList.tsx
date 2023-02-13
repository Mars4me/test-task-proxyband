import { useState } from 'react';
import { UserItem } from './UserItem';
import Row from 'react-bootstrap/esm/Row';
import { useGetAllUsersQuery } from '../store/jsonplaceholderApi';
import { Loader } from './Loader';
import Error from './Error';
import { IUser } from '../interfaces';
import ModalAlbumList from './ModalAlbumList';

const UsersList = () => {
    const [modalShow, setModalShow] = useState(false);
    const [activeUserId, setActiveUserId] = useState(1);
    const { data: users, error, isLoading } = useGetAllUsersQuery('', { pollingInterval: 60_000 });

    const handleOpenModal = (userId: number) => {
        setModalShow(true);
        setActiveUserId(userId);
    };

    if (error) {
        return <Error />;
    }

    return (
        <div>
            {isLoading ? (
                <Loader />
            ) : (
                users &&
                users.map((user: IUser) => (
                    <Row key={user.id}>
                        <UserItem user={user} handleOpenModal={handleOpenModal} />
                    </Row>
                ))
            )}
            {modalShow && (
                <ModalAlbumList userId={activeUserId} show={modalShow} onHide={() => setModalShow(false)} />
            )}
        </div>
    );
};

export default UsersList;
