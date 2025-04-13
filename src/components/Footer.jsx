import { Container, Row, Col } from 'react-bootstrap';
import logo from '../assets/images/logo.png';

function Footer() {
  return (
    <footer style={{ backgroundColor: '#d8e6db' }}>
      <Container fluid>
        <Row className="text-center text-md-left py-4 mt-5">
          <Col xs={12} md={3} className="mx-auto mt-1">
            <img src={logo} alt="YUKU Logo" style={{ width: '100%' }} />
            <p style={{ color: '#133421', textAlign: 'left', marginTop: '10px' }}>
              <i className="fas fa-location-pin" style={{ marginRight: '5px' }}></i>
              Khoa tiếng Trung, Đại học Sư phạm TP.HCM
            </p>
            <p style={{ color: '#133421', textAlign: 'left' }}>
              <i className="fas fa-mail-bulk" style={{ marginRight: '5px' }}></i>
              yuku.nguphaptiengtrungquoc@gmail.com
            </p>
          </Col>
          <Col xs={6} md={1} className="mx-auto mt-3">
            <h5 className="text-uppercase mb-4" style={{ color: '#133421', fontFamily: "'Mali', cursive" }}>
              Thông Tin
            </h5>
            <p>
              <a href="/ve-chung-toi" style={{ color: '#133421', textDecoration: 'none' }}>
                Về Chúng Tôi
              </a>
            </p>
          </Col>
          <Col xs={6} md={1} className="mx-auto mt-3">
            <h5 className="text-uppercase mb-4" style={{ color: '#133421', fontFamily: "'Mali', cursive" }}>
              Tài Liệu
            </h5>
            <p>
              <a href="https://www.facebook.com/profile.php?id=100090749690156" style={{ color: '#133421', textDecoration: 'none' }}>
                FaceBook
              </a>
            </p>
            <p>
              <a href="https://gitmind.com/app/docs/m9s578s5" style={{ color: '#133421', textDecoration: 'none' }}>
                GitMind
              </a>
            </p>
          </Col>
          <Col xs={12} md={2} className="mx-auto mt-3">
            <h5 className="text-uppercase mb-4" style={{ color: '#133421', fontFamily: "'Mali', cursive" }}>
              Cộng Đồng
            </h5>
            <p>
              <a href="https://www.facebook.com/profile.php?id=100090749690156" style={{ color: '#133421', textDecoration: 'none' }}>
                FaceBook
              </a>
            </p>
            <p>
              <a href="https://yukuvn.com" style={{ color: '#133421', textDecoration: 'none' }}>
                WebSite
              </a>
            </p>
            <p>
              <a href="https://discord.gg/DJBKmjpPEW" style={{ color: '#133421', textDecoration: 'none' }}>
                Discord
              </a>
            </p>
          </Col>
        </Row>
        <Container style={{ backgroundColor: '#93bc9c' }}>
          <Row className="justify-content-between">
            <Col className="text-center mt-3">
              <p style={{ fontSize: '20px', color: 'black' }}>
                Bản quyền thuộc nhóm NCKH Khoa tiếng Trung, Đại học Sư phạm TP.HCM
              </p>
            </Col>
          </Row>
        </Container>
      </Container>
    </footer>
  );
}

export default Footer;