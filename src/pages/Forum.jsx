import CustomNavbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Container, Row, Col, Card } from 'react-bootstrap';
import img_discord from '../assets/images/img_discord.png';
import img_facebook from '../assets/images/img_facebook.png';
import '../styles/Forum.css';

function Forum() {
    // Hàm điều hướng khi click vào card
    const handleRedirect = (url) => {
        window.location.href = url;
    };

    return (
        <>
            <CustomNavbar />
            <main>
                <section>
                    <Container>
                        <Row style={{ textAlign: 'center' }}>
                            <h1 className="font-des text-center mb-5 mt-4">
                                Diễn đàn Yuku trên các nền tảng Mạng xã hội!!! <br /> Nơi giải đáp thắc mắc và trao đổi kiến thức{' '}
                                <span role="img" aria-label="heart">
                                    ❤️
                                </span>
                            </h1>
                            <Col md={6} className="mb-4">
                                <Card className="h-90" onClick={() => handleRedirect('https://discord.gg/DJBKmjpPEW')} style={{ cursor: 'pointer' }}>
                                    <Card.Img variant="top" src={img_discord} alt="img_discord" className="w-90" style={{ height: '400px' }} />
                                    <Card.Body>
                                        <Card.Title className="font-des fw-bold fs-md-0 fs-lg-1">Diễn Đàn Discord</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={6} className="mb-4">
                                <Card
                                    className="h-90"
                                    onClick={() => handleRedirect('https://www.facebook.com/profile.php?id=100090749690156')}
                                    style={{ cursor: 'pointer' }}
                                >
                                    <Card.Img variant="top" src={img_facebook} alt="img_facebook" className="w-90" style={{ height: '400px' }} />
                                    <Card.Body>
                                        <Card.Title className="font-des fw-bold fs-md-0 fs-lg-1">Kênh Truyền Thông</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </main>
            <Footer />
        </>
    );
}

export default Forum;