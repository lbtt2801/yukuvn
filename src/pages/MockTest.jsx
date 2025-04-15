import { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import CustomNavbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/MockTest.css';
function MockTest() {
  const [selectedTest, setSelectedTest] = useState(null); 

  const tests = [
    { id: 1, title: 'Mã đề 01', url: 'https://docs.google.com/forms/d/1QzXHyrOtr4-xtVn-h-eSEZxtYzGG04OfmsEAJeuFo6o/viewform?fbclid=IwAR0Lvro5CyEIccGYmG4ycHkOIefDLITkzn_mhPnjUUu7pSaGV4-XHmMIEew&edit_requested=true' },
    { id: 2, title: 'Mã đề 02', url: 'https://docs.google.com/forms/d/e/1FAIpQLSefSmyk-c-BrE0EjiR4JiuM1WdBVPFxiQsEnFB-l_dL0JnCYQ/viewform?fbclid=IwAR17WB77JtOLbQIWwAttmI_q3BbtmVYMtF1da-w-BhzB1KFhKCfZ3keYz-Q' },
    { id: 3, title: 'Mã đề 03', url: 'https://docs.google.com/forms/d/e/1FAIpQLSdYSBkZrXcNQqhPiGJP3DaczVjs-LX-hEc4DzRZuuhUVrQxrA/viewform' },
    { id: 4, title: 'Mã đề 04', url: 'https://docs.google.com/forms/d/e/1FAIpQLSdxKHvefEZVAGCJXDL4ZN2Q-FiAD8oC3QkPMc5_8JVQPGAkWg/viewform?fbclid=IwAR385EtZfr-ZDMeVtXr6oMf5tKrncwOZ-Q6vdNOpGGG7cG_fVtI8OJh89Ow' },
    { id: 5, title: 'Mã đề 05', url: 'https://docs.google.com/forms/d/e/1FAIpQLSd1egKnRBILJj7GQ8l_qnnmFGI4tXLoa11wG2TznsKrpp7G1w/viewform' },
    { id: 6, title: 'Mã đề 06', url: 'https://docs.google.com/forms/d/1MI1BHNgCsrSs99NDmg1WNbYt_ZIl0lNZax1kVt9LjK4/edit' },
    { id: 7, title: 'Mã đề 07', url: 'https://forms.gle/cGiZ2z4ZYHJdZmUb6' },
    { id: 8, title: 'Mã đề 08', url: 'https://forms.gle/TBoy7p5bdqmcyAcXA' },
    { id: 9, title: 'Mã đề 09', url: 'https://docs.google.com/forms/d/e/1FAIpQLSc51qgGXdIP-hczFhjAyg2a5UjuFGKek7Yq4OiRNtECflr-Xg/viewform' },
    { id: 10, title: 'Mã đề 10', url: 'https://docs.google.com/forms/d/e/1FAIpQLScyDju0rB0nshUsoCSpzVh-9PFAHbQsWgafivw9wgQ11KWy8A/viewform' },
    { id: 11, title: 'Mã đề 11', url: 'https://docs.google.com/forms/d/e/1FAIpQLSeuxlAS6gfQDZvUE7QKgFBBplXz0lpJD0Hija_-UbDubN6HQg/viewform' },
    { id: 12, title: 'Mã đề 12', url: 'https://docs.google.com/forms/d/e/1FAIpQLScBa-fD1WpsUlN5lHqVeFfiAnncsl129MUd5TpCnLLKt5gzWg/viewform' },
    { id: 13, title: 'Mã đề 13', url: 'https://docs.google.com/forms/d/e/1FAIpQLSf6o0BnIUj1Zp5MTgghoa4Cfd49TwAuieYF_K61swDL_VZkqw/viewform' },
  ];

  // Hàm chọn đề ngẫu nhiên
  const handleRandomTest = () => {
    const randomIndex = Math.floor(Math.random() * tests.length);
    setSelectedTest(tests[randomIndex].url);
  };

  // Hàm chọn đề cụ thể
  const handleTestSelect = (url) => {
    setSelectedTest(url);
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <CustomNavbar />

      <main className="main flex-grow-1" id="top">
        <Container fluid className="px-0">
          {selectedTest && (
            <div id="debai">
              <iframe
                src={selectedTest}
                width="100%"
                height="1000px"
                frameBorder="0"
                title="Mock Test"
              ></iframe>
            </div>
          )}

          <div id="cumde" className={selectedTest ? 'hide_button' : ''}>
            <Row className="justify-content-center" style={{ textAlign: 'center' }}>
              <h1 className="font-des text-center mb-5 mt-4">
                Một số đề thi thử ở YuKu
              </h1>
              {tests.map((test) => (
                <Col xs={12} md={6} lg={3} className="mb-4 px-2" key={test.id}>
                  <Card className="h-100">
                    <Card.Body>
                      <h5 className="font-des fw-bold fs-md-0 fs-lg-1">
                        <button
                          onClick={() => handleTestSelect(test.url)}
                          style={{ color: '#168445', textDecoration: 'none', cursor: 'pointer', background: 'none', border: 'none', padding: 0 }}
                        >
                          {test.title}
                        </button>
                      </h5>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
              <Col xs={12} md={6} lg={3} className="mb-4 px-2">
                <Card className="h-100">
                  <Card.Body>
                    <h5 className="font-des fw-bold fs-md-0 fs-lg-1">
                      <button
                        onClick={handleRandomTest}
                        style={{ color: '#168445', textDecoration: 'none', cursor: 'pointer', background: 'none', border: 'none', padding: 0 }}
                      >
                        Đề Ngẫu Nhiên
                      </button>
                    </h5>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}

export default MockTest;