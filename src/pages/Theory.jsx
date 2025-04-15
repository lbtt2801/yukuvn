import { useEffect, useRef, useState } from 'react';
import { Container } from 'react-bootstrap';
import CustomNavbar from '../components/Navbar';
import Footer from '../components/Footer';
import mindmapImage from '../assets/images/mindmap.png';
import '../styles/Theory.css';

function Theory() {
  const imgRef = useRef(null);
  const popupRef = useRef(null);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(false); 
  const zoomFactor = 4; 
  const zoomWidth = 500; 
  const zoomHeight = 500; 

  useEffect(() => {
    const img = imgRef.current;
    const popup = popupRef.current;

    // Đợi hình ảnh tải xong
    img.onload = () => {
      setIsImageLoaded(true);
    };

    if (!isImageLoaded) return;

    // Thiết lập background cho popup
    popup.style.backgroundImage = `url('${img.src}')`;
    popup.style.backgroundSize = `${img.width * zoomFactor}px ${img.height * zoomFactor}px`;

    // Hàm lấy vị trí con trỏ
    const getCursorPos = (e) => {
      let x = 0, y = 0;
      const a = img.getBoundingClientRect();
      x = e.pageX - a.left - window.pageXOffset;
      y = e.pageY - a.top - window.pageYOffset;
      return { x, y };
    };

    // Hàm xử lý click trên ảnh
    const handleClickOnImage = (e) => {
      e.preventDefault();
      const pos = getCursorPos(e);

      // Tính vị trí popup (gần vị trí click)
      const popupX = e.pageX + 10; // Dịch popup sang phải 10px
      const popupY = e.pageY + 10; // Dịch popup xuống dưới 10px

      // Tính vị trí khu vực phóng to
      const zoomAreaWidth = zoomWidth / zoomFactor;
      const zoomAreaHeight = zoomHeight / zoomFactor;
      let x = pos.x - zoomAreaWidth / 2;
      let y = pos.y - zoomAreaHeight / 2;

      // Giới hạn khu vực phóng to trong ảnh
      if (x < 0) x = 0;
      if (x > img.width - zoomAreaWidth) x = img.width - zoomAreaWidth;
      if (y < 0) y = 0;
      if (y > img.height - zoomAreaHeight) y = img.height - zoomAreaHeight;

      // Cập nhật style cho popup
      popup.style.left = `${popupX}px`;
      popup.style.top = `${popupY}px`;
      popup.style.backgroundPosition = `-${x * zoomFactor}px -${y * zoomFactor}px`;

      // Toggle hiển thị popup
      setIsPopupVisible((prev) => !prev);
    };

    // Hàm xử lý click ra ngoài để ẩn popup
    const handleClickOutside = (e) => {
      if (!img.contains(e.target) && !popup.contains(e.target)) {
        setIsPopupVisible(false);
      }
    };

    // Thêm sự kiện
    img.addEventListener('click', handleClickOnImage);
    document.addEventListener('click', handleClickOutside);

    return () => {
      img.removeEventListener('click', handleClickOnImage);
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isImageLoaded]);

  return (
    <div className="d-flex flex-column min-vh-100">
      <CustomNavbar />

      <main className="main flex-grow-1" id="top">
        <Container fluid className="px-0">
          <div className="img-zoom-container">
            <img
              id="myimage"
              ref={imgRef}
              src={mindmapImage}
              alt="mind-map"
              style={{ width: '100%', maxWidth: '100%', height: 'auto', cursor: 'pointer' }}
              onLoad={() => setIsImageLoaded(true)}
            />
            {/* Popup hiển thị phần phóng to */}
            <div
              ref={popupRef}
              className="img-zoom-popup"
              style={{
                width: `${zoomWidth}px`,
                height: `${zoomHeight}px`,
                display: isPopupVisible ? 'block' : 'none',
              }}
            ></div>
          </div>

          <div className="text-center mt-4">
            <span style={{ fontSize: '20px' }}>
              (Khuyến cáo: Dành cho SmartPhone) - Chuyển đến trang thiết kế để xem rõ hơn:
            </span>
            <a
              href="https://gitmind.com/app/docs/m9s578s5"
              target="_self"
              style={{ fontSize: '20px', marginLeft: '5px', color: '#168445', textDecoration: 'none' }}
            >
              Click here
            </a>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}

export default Theory;