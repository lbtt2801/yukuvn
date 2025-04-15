import { useState } from 'react';
import { Container, Row, Col, Card, Modal, Button } from 'react-bootstrap';
import CustomNavbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import '../../styles/practices/SimpleSentence.css';
import tracNghiemImg from '../../assets/images/gallery/trac_nghiem.png';
import dienCauDonImg from '../../assets/images/gallery/dien_cau_don.png';
import dungSaiImg from '../../assets/images/gallery/dung_sai.png';
import phanLoaiImg from '../../assets/images/gallery/phan_loai.png';
import phanTangImg from '../../assets/images/gallery/caudon_phantang.png';

function SimpleSentence() {
    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState({ title: '', image: '' });
    const [questions, setQuestions] = useState([]); // Danh sách câu hỏi
    const [showQuestions, setShowQuestions] = useState(false); // Hiển thị câu hỏi
    const [showButtons, setShowButtons] = useState(false); // Hiển thị nút Kiểm tra/Làm lại
    const [showCards, setShowCards] = useState(true); // Hiển thị các card chọn loại bài tập
    const [exerciseType, setExerciseType] = useState(0); // Loại bài tập (0: Trắc Nghiệm, 1: Điền, 2: Đúng Sai, 3: Phân Loại, 4: Phân Tầng)
    const [result, setResult] = useState({ show: false, mark: 0, total: 0 }); // Kết quả sau khi kiểm tra
    const [columns, setColumns] = useState(['', '', '', '']); // Cột phân loại (cho bài Phân Loại)

    // Hiển thị modal hướng dẫn
    const showInstructionModal = (title, image) => {
        setModalContent({ title, image });
        setShowModal(true);
    };

    // Đóng modal và bắt đầu bài tập
    const startExercise = () => {
        setShowModal(false);
        setShowQuestions(true);
        setShowButtons(true);
        setShowCards(false);
    };

    // Lấy câu hỏi Trắc Nghiệm
    const getQuestions = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/questions/trac_nghiem');
            const data = await response.json();
            setQuestions(data);
        } catch (error) {
            console.error('Error fetching questions:', error);
        }
    };

    // Lấy câu hỏi Điền Vào Chỗ Trống
    const getQuestionsDT = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/questions/dien_vao_cho_trong');
            const data = await response.json();
            setQuestions(data);
        } catch (error) {
            console.error('Error fetching questions DT:', error);
        }
    };

    // Lấy câu hỏi Đúng Sai
    const getQuestionsDS = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/questions/dung_sai');
            const data = await response.json();
            setQuestions(data);
        } catch (error) {
            console.error('Error fetching questions DS:', error);
        }
    };

    // Lấy câu hỏi Phân Loại
    const getQuestionsPL = async () => {
        const rand = Math.floor(Math.random() * 4);
        let col1 = '', col2 = '', col3 = '', col4 = '';
        if (rand === 0) {
            col1 = '名词性谓语句'; col2 = '动词性谓语句'; col3 = '形容词性谓语句'; col4 = '主谓谓语句';
        } else if (rand === 1) {
            col1 = '陈述句'; col2 = '感叹句'; col3 = '祈使句'; col4 = '疑问句';
        } else if (rand === 2) {
            col1 = '特指问句'; col2 = '正反问句'; col3 = '选择问句'; col4 = '是非问句';
        } else {
            col1 = '“是……的”句'; col2 = '“比”字句'; col3 = '“把”字句'; col4 = '存现句';
        }
        setColumns([col1, col2, col3, col4]);
        try {
            const response = await fetch('http://localhost:5000/api/questions/phan_loai');
            const data = await response.json();
            setQuestions(data);
        } catch (error) {
            console.error('Error fetching questions PL:', error);
        }
    };

    // Lấy câu hỏi Phân Tầng
    const getQuestionsPT = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/questions/phan_tang');
            const data = await response.json();
            setQuestions(data);
        } catch (error) {
            console.error('Error fetching questions PT:', error);
        }
    };

    // Kiểm tra đáp án Trắc Nghiệm
    const checkResult = () => {
        let mark = 0;
        const updatedQuestions = questions.map((q) => {
            const selectedAnswer = document.querySelector(`input[name="${q.id}"]:checked`)?.className;
            if (selectedAnswer === q.answer) {
                mark += 1;
                return { ...q, correct: true };
            } else {
                return { ...q, correct: false, selectedAnswer };
            }
        });
        setQuestions(updatedQuestions);
        setResult({ show: true, mark, total: questions.length });
    };

    // Kiểm tra đáp án Điền Vào Chỗ Trống
    const checkResultDT = () => {
        let mark = 0;
        const updatedQuestions = questions.map((q) => {
            const userAnswer = document.getElementById(`ans_${q.id}`).value;
            if (userAnswer === q.answer) {
                mark += 1;
                return { ...q, correct: true };
            } else {
                return { ...q, correct: false, userAnswer };
            }
        });
        setQuestions(updatedQuestions);
        setResult({ show: true, mark, total: questions.length });
    };

    // Kiểm tra đáp án Đúng Sai
    const checkResultDS = () => {
        let mark = 0;
        const updatedQuestions = questions.map((q) => {
            const userAnswer = document.getElementById(`select_${q.id}`).value;
            if (userAnswer === q.answer) {
                mark += 1;
                return { ...q, correct: true };
            } else {
                return { ...q, correct: false, userAnswer };
            }
        });
        setQuestions(updatedQuestions);
        setResult({ show: true, mark, total: questions.length });
    };

    // Kiểm tra đáp án Phân Loại
    const checkResultPL = () => {
        let mark = 0;
        const updatedQuestions = questions.map((q) => {
            const checkboxes = document.getElementsByName(q.id);
            let userAnswer = '';
            for (let i = 0; i < checkboxes.length; i++) {
                if (checkboxes[i].checked) {
                    userAnswer += checkboxes[i].value;
                }
            }
            if (userAnswer === q.answer) {
                mark += 1;
                return { ...q, correct: true };
            } else {
                return { ...q, correct: false };
            }
        });
        setQuestions(updatedQuestions);
        setResult({ show: true, mark, total: questions.length });
    };

    // Kiểm tra đáp án Phân Tầng
    const checkResultPT = () => {
        let mark = 0;
        const updatedQuestions = questions.map((q) => {
            const answerInput = [];
            getRowQuestion(q.answer, 100, answerInput);
            let correctCount = 0;
            for (let i = 0; i < q.number_ans; i++) {
                const userAnswer = document.getElementById(`input_${i}`).value;
                if (userAnswer === answerInput[i]) {
                    correctCount += 1;
                }
            }
            mark += correctCount;
            return { ...q, correctCount, answerInput };
        });
        setQuestions(updatedQuestions);
        setResult({ show: true, mark, total: questions[0]?.number_ans || 0 });
    };

    // Tách đáp án Phân Tầng
    const getRowQuestion = (text, length, arr) => {
        let answer = text;
        let currentAnswer = '';
        for (let i = 0; i < length; i++) {
            if (!answer[i] || answer[i] === '-') {
                if (currentAnswer) arr.push(currentAnswer);
                currentAnswer = '';
            } else {
                currentAnswer += answer[i];
            }
        }
        if (currentAnswer) arr.push(currentAnswer);
    };

    // Xử lý khi click "Làm tiếp"
    const handleContinue = () => {
        setResult({ show: false, mark: 0, total: 0 });
        if (exerciseType === 0) getQuestions();
        if (exerciseType === 1) getQuestionsDT();
        if (exerciseType === 2) getQuestionsDS();
        if (exerciseType === 3) getQuestionsPL();
        if (exerciseType === 4) getQuestionsPT();
    };

    // Xử lý khi click "Đổi Dạng Khác"
    const handleReload = () => {
        window.location.reload();
    };

    return (
        <div className="d-flex flex-column min-vh-100">
            <CustomNavbar />

            <main className="main flex-grow-1" id="top">
                <Container fluid className="px-0">
                    <div className="panel-group">
                        <div className="panel panel-primary">
                            <span
                                className="mt-3 mb-3 d-block"
                                style={{ color: '#168445', fontSize: '30px', fontWeight: 'bold', textAlign: 'center' }}
                            >
                                Bài tập Câu Đơn
                            </span>

                            {/* Cột phân loại (cho bài Phân Loại) */}
                            {exerciseType === 3 && (
                                <div className="col-hidden" style={{ fontFamily: 'font_china', fontSize: '25px', fontWeight: 500, marginTop: '20px' }}>
                                    <div className="col-wrap">
                                        <div id="col" style={{ width: '28%' }}></div>
                                        <div className="colchk" style={{ width: '18%' }}>{columns[0]}</div>
                                        <div className="colchk" style={{ width: '18%' }}>{columns[1]}</div>
                                        <div className="colchk" style={{ width: '18%' }}>{columns[2]}</div>
                                        <div className="colchk" style={{ width: '18%' }}>{columns[3]}</div>
                                    </div>
                                </div>
                            )}

                            {/* Hiển thị câu hỏi */}
                            {showQuestions && (
                                <div className="input" id="questions">
                                    {exerciseType === 0 && questions.map((q, index) => (
                                        <div key={q.id} className="row" style={{ fontFamily: 'font_china', marginLeft: '10px', marginBottom: '10px' }}>
                                            <span style={{ fontFamily: 'font_china', fontSize: '25px' }} id={q.id}>
                                                <span className="text-twitter">Câu {index + 1}: </span> {q.question}
                                            </span>
                                            <fieldset>
                                                <div className="radio col-md-12">
                                                    <label style={{ fontFamily: 'font_china', fontSize: '23px' }}>
                                                        <span id={`da_A${q.id}`}>{q.correct === true ? '✔️' : q.correct === false && q.selectedAnswer === 'A' ? '❌' : q.correct === false && q.answer === 'A' ? '✔️' : ''}</span>
                                                        <input type="radio" className="A" name={q.id} />
                                                        <span className="text-danger" style={{ fontSize: '23px' }}>&ensp; A. &ensp;</span>{q.option_a}
                                                    </label>
                                                </div>
                                                <div className="radio col-md-12">
                                                    <label style={{ fontFamily: 'font_china', fontSize: '23px' }}>
                                                        <span id={`da_B${q.id}`}>{q.correct === true ? '✔️' : q.correct === false && q.selectedAnswer === 'B' ? '❌' : q.correct === false && q.answer === 'B' ? '✔️' : ''}</span>
                                                        <input type="radio" className="B" name={q.id} />
                                                        <span className="text-danger" style={{ fontSize: '23px' }}>&ensp; B. &ensp;</span>{q.option_b}
                                                    </label>
                                                </div>
                                                <div className="radio col-md-12">
                                                    <label style={{ fontFamily: 'font_china', fontSize: '23px' }}>
                                                        <span id={`da_C${q.id}`}>{q.correct === true ? '✔️' : q.correct === false && q.selectedAnswer === 'C' ? '❌' : q.correct === false && q.answer === 'C' ? '✔️' : ''}</span>
                                                        <input type="radio" className="C" name={q.id} />
                                                        <span className="text-danger" style={{ fontSize: '23px' }}>&ensp; C. &ensp;</span>{q.option_c}
                                                    </label>
                                                </div>
                                                <div className="radio col-md-12">
                                                    <label style={{ fontFamily: 'font_china', fontSize: '23px' }}>
                                                        <span id={`da_D${q.id}`}>{q.correct === true ? '✔️' : q.correct === false && q.selectedAnswer === 'D' ? '❌' : q.correct === false && q.answer === 'D' ? '✔️' : ''}</span>
                                                        <input type="radio" className="D" name={q.id} />
                                                        <span className="text-danger" style={{ fontSize: '23px' }}>&ensp; D. &ensp;</span>{q.option_d}
                                                    </label>
                                                </div>
                                            </fieldset>
                                        </div>
                                    ))}

                                    {exerciseType === 1 && questions.map((q, index) => (
                                        <div key={q.id} style={{ marginLeft: '5px', marginBottom: '10px' }}>
                                            <h5 style={{ fontSize: '25px', fontFamily: 'font_china' }} id={q.id}>
                                                <span className="text-twitter" style={{ fontSize: '23px' }}>Câu {index + 1}: </span>{q.question}
                                            </h5>
                                            <span style={{ fontFamily: 'font_china', fontSize: '23px' }}>回复：</span>
                                            <input
                                                className="input"
                                                id={`ans_${q.id}`}
                                                type="text"
                                                size="20"
                                                style={{ border: q.correct === true ? '3px solid green' : q.correct === false ? '3px solid red' : '' }}
                                            />
                                            <p style={{ marginTop: '5px' }} id={`answer_${q.id}`}>
                                                {q.correct === false ? `答案：${q.answer}` : ''}
                                            </p>
                                        </div>
                                    ))}

                                    {exerciseType === 2 && questions.map((q, index) => (
                                        <div key={q.id} className="row" style={{ marginLeft: '20px', marginBottom: '10px' }}>
                                            <p style={{ fontFamily: 'font_china', fontSize: '25px' }} id={q.id}>
                                                <span id={`chk_${q.id}`}>{q.correct === true ? '✔️' : q.correct === false ? '❌' : ''}</span>
                                                <span className="text-twitter" style={{ fontSize: '23px' }}>Câu {index + 1}: </span>{q.question} &emsp;
                                                <select id={`select_${q.id}`} style={{ fontFamily: 'font_china', fontSize: '25px' }}>
                                                    <option value="choose">选择</option>
                                                    <option value="对">对</option>
                                                    <option value="错">错</option>
                                                </select>
                                            </p>
                                            <p style={{ fontFamily: 'font_china', fontSize: '25px', marginTop: '3px', color: '#FF4500' }} id={`answer_${q.id}`}>
                                                {q.correct === false ? `答案：${q.answer}` : ''}
                                            </p>
                                        </div>
                                    ))}

                                    {exerciseType === 3 && questions.map((q) => (
                                        <div key={q.id} className="col-wrap" style={{ marginLeft: '20px', marginBottom: '10px', fontSize: '20px', fontWeight: 500 }}>
                                            <div id="col" style={{ width: '28%' }}>
                                                <span id={`chk_${q.id}`}>{q.correct === true ? '✔️' : q.correct === false ? '❌' : ''}</span>
                                                <span className="text-black" style={{ fontFamily: 'font_china', fontSize: '28px' }}>{q.question}</span>
                                            </div>
                                            <div className="colchk" style={{ width: '18%' }}>
                                                <p><input type="checkbox" name={q.id} value="A" /></p>
                                            </div>
                                            <div className="colchk" style={{ width: '18%' }}>
                                                <p><input type="checkbox" name={q.id} value="B" /></p>
                                            </div>
                                            <div className="colchk" style={{ width: '18%' }}>
                                                <p><input type="checkbox" name={q.id} value="C" /></p>
                                            </div>
                                            <div className="colchk" style={{ width: '18%' }}>
                                                <p><input type="checkbox" name={q.id} value="D" /></p>
                                            </div>
                                        </div>
                                    ))}

                                    {exerciseType === 4 && questions.map((q) => {
                                        const answerInput = [];
                                        getRowQuestion(q.answer, 100, answerInput);
                                        return (
                                            <div key={q.id} style={{ marginLeft: '5px', marginBottom: '10px' }}>
                                                <h5 style={{ fontFamily: 'font_china', fontWeight: 'bold', fontSize: '25px' }}>
                                                    用层次分析法来分析这个句子：{q.title}
                                                </h5>
                                                <span style={{ fontFamily: 'font_china', fontSize: '18px' }} id={q.id}>
                                                    {q.row_1}{q.row_2}{q.row_3}{q.row_4}{q.row_5}{q.row_6}{q.row_7}{q.row_8}
                                                </span>
                                                <div>
                                                    {Array.from({ length: q.number_ans }).map((_, i) => (
                                                        <input
                                                            key={i}
                                                            id={`input_${i}`}
                                                            type="text"
                                                            style={{
                                                                border: q.correctCount !== undefined && answerInput[i]
                                                                    ? document.getElementById(`input_${i}`)?.value === answerInput[i]
                                                                        ? '3px solid green'
                                                                        : '3px solid red'
                                                                    : '',
                                                                margin: '5px',
                                                            }}
                                                        />
                                                    ))}
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            )}

                            {/* Nút Kiểm tra/Làm lại */}
                            {showButtons && (
                                <div className="row" id="btn">
                                    <span className="font-des cd-popup-trigger" onClick={() => {
                                        if (exerciseType === 0) checkResult();
                                        if (exerciseType === 1) checkResultDT();
                                        if (exerciseType === 2) checkResultDS();
                                        if (exerciseType === 3) checkResultPL();
                                        if (exerciseType === 4) checkResultPT();
                                    }}>
                                        Kiểm tra
                                    </span>
                                    <span className="font-des cd-popup-next" onClick={handleContinue}>
                                        Làm Bài Khác
                                    </span>
                                    <span className="font-des cd-popup-rand" onClick={handleReload}>
                                        Đổi Dạng Khác
                                    </span>
                                </div>
                            )}

                            {/* Popup kết quả */}
                            <Modal show={result.show} onHide={() => setResult({ show: false, mark: 0, total: 0 })}>
                                <Modal.Body>
                                    <p style={{ marginTop: '10px', marginBottom: '10px', fontSize: '20px' }}>
                                        Bạn đúng được: {result.mark} / {result.total} câu!
                                    </p>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="primary" onClick={handleContinue}>
                                        Làm tiếp
                                    </Button>
                                    <Button variant="secondary" onClick={() => setResult({ show: false, mark: 0, total: 0 })}>
                                        Xem lại
                                    </Button>
                                </Modal.Footer>
                            </Modal>

                            {/* Modal hướng dẫn */}
                            <Modal show={showModal} onHide={() => setShowModal(false)}>
                                <Modal.Body>
                                    <img id="img" src={modalContent.image} alt="Ảnh Hướng Dẫn" style={{ width: '100%' }} />
                                    <h4 className="text-center font-des" style={{ fontSize: '25px', marginTop: '10px' }}>{modalContent.title}</h4>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="primary" onClick={startExercise}>
                                        Làm Bài
                                    </Button>
                                </Modal.Footer>
                            </Modal>

                            {/* Các card chọn loại bài tập */}
                            {showCards && (
                                <main className="main mt-5" id="top">
                                    <Container>
                                        <Row style={{ textAlign: 'center' }}>
                                            <Col md={6} className="mb-4">
                                                <Card className="h-100">
                                                    <Card.Body className="d-flex flex-column align-items-center justify-content-center" onClick={() => {
                                                        setExerciseType(0);
                                                        getQuestions();
                                                        showInstructionModal('Hướng dẫn làm Bài tập Trắc Nghiệm', tracNghiemImg);
                                                    }}>
                                                        <h4 className="font-des fw-bold fs-md-0 fs-lg-1 m-0 text-center title-text" style={{ color: '#168445', cursor: 'pointer' }}
                                                        >
                                                            Trắc Nghiệm
                                                        </h4>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col md={6} className="mb-4">
                                                <Card className="h-100">
                                                    <Card.Body className="d-flex flex-column align-items-center justify-content-center" onClick={() => {
                                                        setExerciseType(1);
                                                        getQuestionsDT();
                                                        showInstructionModal('Hướng dẫn làm Bài tập Điền Vào Chỗ Trống', dienCauDonImg);
                                                    }}>
                                                        <h4 className="font-des fw-bold fs-md-0 fs-lg-1 m-0 text-center title-text" style={{ color: '#168445', cursor: 'pointer' }}
                                                        >
                                                            Điền Vào Chỗ Trống
                                                        </h4>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col md={6} className="mb-4">
                                                <Card className="h-100">
                                                    <Card.Body className="d-flex flex-column align-items-center justify-content-center" onClick={() => {
                                                        setExerciseType(2);
                                                        getQuestionsDS();
                                                        showInstructionModal('Hướng dẫn làm Bài tập Đúng Sai', dungSaiImg);
                                                    }}>
                                                        <h4 className="font-des fw-bold fs-md-0 fs-lg-1 m-0 text-center title-text" style={{ color: '#168445', cursor: 'pointer' }}
                                                        >
                                                            Đúng Sai
                                                        </h4>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col md={6} className="mb-4">
                                                <Card className="h-100">
                                                    <Card.Body className="d-flex flex-column align-items-center justify-content-center" onClick={() => {
                                                        setExerciseType(3);
                                                        getQuestionsPL();
                                                        showInstructionModal('Hướng dẫn làm Bài tập Phân Loại', phanLoaiImg);
                                                    }}>
                                                        <h4 className="font-des fw-bold fs-md-0 fs-lg-1 m-0 text-center title-text" style={{ color: '#168445', cursor: 'pointer' }}
                                                        >
                                                            Phân Loại
                                                        </h4>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col md={6} className="mb-4">
                                                <Card className="h-100">
                                                    <Card.Body className="d-flex flex-column align-items-center justify-content-center" onClick={() => {
                                                        setExerciseType(4);
                                                        getQuestionsPT();
                                                        showInstructionModal('Hướng dẫn làm Bài tập Phân Tầng', phanTangImg);
                                                    }}>
                                                        <h4 className="font-des fw-bold fs-md-0 fs-lg-1 m-0 text-center title-text" style={{ color: '#168445', cursor: 'pointer' }}
                                                        >
                                                            Phân Tầng
                                                        </h4>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        </Row>
                                    </Container>
                                </main>
                            )}
                        </div>
                    </div>
                </Container>
            </main>
            <Footer />
        </div>
    );
}

export default SimpleSentence;