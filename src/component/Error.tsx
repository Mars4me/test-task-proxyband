import { Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';

interface ErrorProps {
    message?: string;
}

const Error = ({ message }: Readonly<ErrorProps>) => {
    return (
        <>
            <Link to={`${import.meta.env.BASE_URL}`}>Back to Home</Link>
            <Alert variant="danger">{'Something gone wrong... ' || message}</Alert>
        </>
    );
};

export default Error;
