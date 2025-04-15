import { Container, Row, Col, Card } from 'react-bootstrap';
import CustomNavbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

function Practice() {
    return (
        <>
            <CustomNavbar />

            <style>
                {`
                .title-text {
                    /* Cỡ chữ mặc định được định nghĩa bởi fs-md-0 fs-lg-1 của Bootstrap */
                }

                .description-text {
                    font-size: 0.9rem;
                }

                @media (max-width: 576px) {
                    .title-text {
                        font-size: 1rem;
                    }
                    .description-text {
                        font-size: 0.75rem;
                        text-align: justify;
                        text-align-last: center;
                    }
                }
                `}
            </style>

            <main className="main" id="top">
                <Container>
                    <Row style={{ textAlign: 'center' }}>
                        <h1 className="font-des text-center mb-5 mt-4">
                            Ở YuKu có 4 Chủ đề học tập
                        </h1>
                        <Col md={6} className="mb-4">
                            <Card className="h-100">
                                <Card.Body className="d-flex flex-column align-items-center justify-content-center">
                                    <Link to="/luyen-tap/tu-loai" style={{ color: '#168445', textDecoration: 'none' }}>
                                        <h4 className="font-des fw-bold fs-md-0 fs-lg-1 m-0 text-center title-text">
                                            Từ Loại – Nền tảng để "mở khóa" tiếng Trung!
                                        </h4>
                                        <hr className="mx-auto" style={{ width: '50%', border: '1px solid #168445', margin: '8px 0' }} />
                                        <p className="m-0 text-center description-text" style={{ color: '#333' }}>
                                            Bạn đã bao giờ tự hỏi làm sao để nói tiếng Trung một cách chuẩn chỉnh chưa? Chủ đề Từ Loại sẽ giúp bạn phân biệt các "ngôi sao" trong câu như danh từ (名词 - míngcí) để gọi tên mọi thứ, động từ (动词 - dòngcí) để diễn tả hành động, hay tính từ (形容词 - xíngróngcí) để miêu tả mọi cảm xúc. Hiểu rõ từ loại, bạn sẽ dễ dàng đặt những viên gạch đầu tiên để xây nên "tòa nhà" tiếng Trung của mình!
                                        </p>
                                    </Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6} className="mb-4">
                            <Card className="h-100">
                                <Card.Body className="d-flex flex-column align-items-center justify-content-center">
                                    <Link to="/luyen-tap/cum-tu" style={{ color: '#168445', textDecoration: 'none' }}>
                                        <h4 className="font-des fw-bold fs-md-0 fs-lg-1 m-0 text-center title-text">
                                            Cụm Từ – Bí quyết nói chuyện như người bản xứ!
                                        </h4>
                                        <hr className="mx-auto" style={{ width: '50%', border: '1px solid #168445', margin: '8px 0' }} />
                                        <p className="m-0 text-center description-text" style={{ color: '#333' }}>
                                            Muốn gây ấn tượng với bạn bè Trung Quốc? Hãy làm chủ các cụm từ! Chủ đề này sẽ đưa bạn vào thế giới của những cụm từ đầy màu sắc như "很高兴" (hěn gāoxìng - rất vui) hay "慢慢来" (màn màn lái - từ từ thôi). Học cụm từ không chỉ giúp bạn nói chuyện tự nhiên hơn mà còn khiến bạn cảm nhận được sự phong phú và tinh tế của tiếng Trung – như đang thưởng thức một món ăn ngon vậy!
                                        </p>
                                    </Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6} className="mb-4">
                            <Card className="h-100">
                                <Card.Body className="d-flex flex-column align-items-center justify-content-center">
                                    <Link to="/practice/simple-sentence" style={{ color: '#168445', textDecoration: 'none' }}>
                                        <h4 className="font-des fw-bold fs-md-0 fs-lg-1 m-0 text-center title-text">
                                            Câu Đơn – Bước đầu tiên để giao tiếp trơn tru!
                                        </h4>
                                        <hr className="mx-auto" style={{ width: '50%', border: '1px solid #168445', margin: '8px 0' }} />
                                        <p className="m-0 text-center description-text" style={{ color: '#333' }}>
                                            Hãy tưởng tượng bạn có thể nói "我喜欢你" (Wǒ xǐhuān nǐ - Tôi thích bạn) một cách tự tin – đó chính là sức mạnh của câu đơn! Chủ đề này sẽ giúp bạn nắm vững cấu trúc cơ bản của tiếng Trung, nơi chỉ cần một chủ ngữ và vị ngữ là bạn đã có thể diễn đạt ý tưởng. Đây là bước đệm hoàn hảo để bạn bắt đầu "tỏa sáng" trong các cuộc hội thoại hàng ngày.
                                        </p>
                                    </Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6} className="mb-4">
                            <Card className="h-100">
                                <Card.Body className="d-flex flex-column align-items-center justify-content-center">
                                    <Link to="/luyen-tap/cau-phuc" style={{ color: '#168445', textDecoration: 'none' }}>
                                        <h4 className="font-des fw-bold fs-md-0 fs-lg-1 m-0 text-center title-text">
                                            Câu Phức – Nâng tầm câu chuyện của bạn!
                                        </h4>
                                        <hr className="mx-auto" style={{ width: '50%', border: '1px solid #168445', margin: '8px 0' }} />
                                        <p className="m-0 text-center description-text" style={{ color: '#333' }}>
                                            Khi bạn đã quen với câu đơn, hãy thử thách bản thân với câu phức để kể những câu chuyện đầy cảm xúc! Chủ đề này sẽ hướng dẫn bạn cách dùng các từ nối như 虽然 (suīrán - mặc dù) hay 因为 (yīnwèi - bởi vì) để tạo nên những câu văn logic và sâu sắc, ví dụ: "虽然我很忙，但是我还是来了" (Suīrán wǒ hěn máng, dànshì wǒ háishì lái le - Mặc dù tôi rất bận, nhưng tôi vẫn đến). Câu phức sẽ giúp bạn thể hiện ý tưởng phức tạp, khiến người nghe phải trầm trồ!
                                        </p>
                                    </Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>

                <Footer />
            </main>
        </>
    );
}

export default Practice;