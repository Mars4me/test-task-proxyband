import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/esm/Button';
import { useGetAlbumsByUserQuery, useGetAllUsersQuery } from '../store/jsonplaceholderApi';
import { Loader } from './Loader';

interface AlbumListProps {
    userId: number;
    show: boolean;
    onHide: Function;
}

const ModalAlbumList = ({ userId, onHide, show }: AlbumListProps) => {
    const {
        data: albums,
        error,
        isLoading,
    } = useGetAlbumsByUserQuery(userId ?? 0, { pollingInterval: 60_000 });
    const { data: users } = useGetAllUsersQuery('', { pollingInterval: 60_000 });

    return (
        <>
            {isLoading && <Loader />}
            {error && (
                <Modal keyboard={true} show={show} size="lg" centered onHide={() => onHide()}>
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">Whoops, Error</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Something gone wrong. Please try again.</Modal.Body>
                    <Modal.Footer>
                        <Button onClick={() => onHide()}>Close</Button>
                    </Modal.Footer>
                </Modal>
            )}

            {users && albums && (
                <Modal keyboard={true} show={show} size="lg" centered onHide={() => onHide()}>
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            {users && users[userId - 1].name}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {albums.map((album) => (
                            <div key={album.id}>
                                <p>
                                    {album.id}: {album.title}
                                </p>
                            </div>
                        ))}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={() => onHide()}>Close</Button>
                    </Modal.Footer>
                </Modal>
            )}
        </>
    );
};

export default ModalAlbumList;
