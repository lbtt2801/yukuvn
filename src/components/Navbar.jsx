import { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import logo from '../assets/images/logo.png';

function CustomNavbar() {
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  const getNavLinkStyle = (path) => {
    return currentPath === path
      ? { borderBottom: '2px solid #168445', paddingBottom: '5px', fontWeight: 'bold' }
      : {};
  };

  return (
    <Navbar expand="lg" sticky="top" className="py-3" style={{ backgroundColor: 'white' }} expanded={expanded}>
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} alt="YUKU Logo" style={{ height: '70px', width: '100%' }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarSupportedContent" onClick={() => setExpanded(!expanded)} />
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="ms-auto font-base">
            <Nav.Link href="/" style={{ ...stylePri, ...getNavLinkStyle('/') }}>
              Trang chủ
            </Nav.Link>
            <Nav.Link href="/theory" style={{ ...stylePri, ...getNavLinkStyle('/theory') }}>
              Lý thuyết
            </Nav.Link>
            <Nav.Link href="/practice" style={{ ...stylePri, ...getNavLinkStyle('/practice') }}>
              Luyện tập
            </Nav.Link>
            <Nav.Link href="/mock-test" style={{ ...stylePri, ...getNavLinkStyle('/mock-test') }}>
              Thi thử
            </Nav.Link>
            <Nav.Link href="/forum" style={{ ...stylePri, ...getNavLinkStyle('/forum') }}>
              Diễn đàn
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

const stylePri = {
  color: '#168445',
  fontSize: '18px',
  fontWeight: 'normal',
  minWidth: '125px',
  display: 'inline-block',
  textAlign: 'center'
};

export default CustomNavbar;