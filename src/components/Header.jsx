import { Container, Row, Col } from 'react-bootstrap';
import bodyHeader from '../assets/images/body_header.png';

function Header() {
    return (
        <section className="pt-6 bg-600" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col md={6} className="order-0 order-md-1 text-end">
                        <img
                            src={bodyHeader}
                            alt="Body Header"
                            className="w-100 pt-7 pt-md-0"
                            style={{ maxWidth: '470px' }}
                        />
                    </Col>
                    <Col md={6} className="text-md-start text-center py-6">
                        <span className="font-des" style={{ color: '#133421', fontSize: '50px' }}>
                            Ôn luyện YUKU
                        </span>
                        <br />
                        <span className="font-des" style={{ color: '#133421', fontSize: '50px' }}>
                            Nắm vững <span style={{ color: '#168445' }}>ngữ pháp tiếng Trung</span>
                        </span>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Header;