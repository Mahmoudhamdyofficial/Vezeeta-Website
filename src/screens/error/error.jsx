import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FaSadTear } from 'react-icons/fa';
import './error.css';

export default function ErrorPage() {
    const navigate = useNavigate();

    const handleRetry = () => {
        navigate('/'); 
    };

    return (
        <Container className="error-page-container text-center d-flex flex-column justify-content-center align-items-center">
            <Row>
                <Col>
                    <div className="error-icon mb-4">
                        <FaSadTear size={80} color="red" />
                    </div>
                    <h1 className="error-heading text-danger">Oops! Something went wrong.</h1>
                    <p className="error-message">
                        We’re sorry, but we couldn’t process your request. Please check your internet connection or try again later.
                    </p>
                    <Button variant="primary" className="mt-3" onClick={handleRetry}>
                        Go Back to Home
                    </Button>
                    <Button variant="secondary" className="mt-3 ms-2" onClick={() => navigate(-1)}>
                        Retry
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}
