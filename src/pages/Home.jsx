import { Container, Row, Col } from 'react-bootstrap';
import CustomNavbar from '../components/Navbar';
import Footer from '../components/Footer';
import bodyHeader from '../assets/images/body_header.png';
import img_main from '../assets/images/img_main.jpg';
import gif_fill_blanks from '../assets/images/gif_fill_blanks.gif';
import gif_true_false from '../assets/images/gif_true_false.gif';
import gif_choice from '../assets/images/gif_choice.gif';
import gif_stratification from '../assets/images/gif_stratification.gif';
import gif_categorization from '../assets/images/gif_categorization.gif';
import '../styles/Home.css';

function Home() {
  return (
    <>
      <CustomNavbar />
      <main>
        {/* Header Section */}
        <section className="pt-6 bg-600" id="home">
          <Container>
            <Row className="align-items-center">
              <Col md={6} className="order-0 order-md-1 text-end">
                <img src={bodyHeader} alt="Body Header" className="w-100 pt-7 pt-md-0" style={{ maxWidth: '470px', marginBottom: '20px' }} />
              </Col>
              <Col md={6} className="text-md-start text-center py-6">
                <span className="font-des" style={{ color: '#133421', fontSize: '50px' }}>
                  Ôn luyện YUKU
                </span>
                <br />
                <span className="font-des" style={{ color: '#133421', fontSize: '50px' }}>
                  Nắm vững <span style={{ color: '#168445' }}>ngữ pháp <br /> tiếng Trung</span>
                </span>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Main Section */}
        <section>
          <Container>
            <Row>
              <h1 className="font-des text-center mb-4" style={{ fontWeight: 700, marginTop: '50px' }}>
                Hệ thống bài tập ngữ pháp <span style={{ color: '#168445' }}>1000 </span>câu
              </h1>
              <img src={img_main} alt="img_main" className="img mb-4" style={{ maxWidth: '800px' }} />
              <h1 className="font-des text-center mb-2 mt-3" style={{ fontWeight: 700 }}>
                Các dạng bài tập của YuKu
              </h1>
              <Col md={4} className="mb-4">
                <img src={gif_choice} alt="gif_choice" className="w-100" />
              </Col>
              <Col md={4} className="mb-4">
                <img src={gif_true_false} alt="gif_true_false" className="w-100" />
              </Col>
              <Col md={4} className="mb-4">
                <img src={gif_fill_blanks} alt="gif_categorization" className="w-100" />
              </Col>
              <Col md={4} className="mb-4">
                <img src={gif_stratification} alt="gif_stratification" className="w-100" />
              </Col>
              <Col md={4} className="mb-4">
                <img src={gif_categorization} alt="gif_categorization" className="w-100" />
              </Col>
            </Row>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Home;