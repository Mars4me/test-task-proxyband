import UsersList from './component/UserList';
import { Route, Routes } from 'react-router-dom';
import PostList from './component/PostList';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Error from './component/Error';

function App() {
    return (
        <Container>
            <Row>
                <Col md="10" className="mx-auto my-2"></Col>
                <Routes>
                    <Route path="/" element={<UsersList />} />
                    <Route path="/posts/:userId" element={<PostList />} />
                    <Route path="/*" element={<Error />} />
                </Routes>
            </Row>
        </Container>
    );
}

export default App;
