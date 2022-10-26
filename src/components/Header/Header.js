import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'

function Header() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">
                    <Link to="/">
                        <img
                            src={logo}
                            width="40"
                            height="40"
                            className="d-inline-block align-top"
                            alt=""
                        />
                    </Link>
                </Navbar.Brand>
                <Navbar.Brand href="#"><Link className='text-decoration-none fw-bold fs-2  text-dark ' to="/">E-programming University</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0 mx-auto"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link ><Link className='text-decoration-none fw-bold   text-dark ' to="/home">Home</Link></Nav.Link>

                        <Nav.Link ><Link className='text-decoration-none fw-bold   text-dark ' to="/courses">Courses</Link></Nav.Link>

                        <Nav.Link ><Link className='text-decoration-none fw-bold   text-dark ' to="/faq">FAQ</Link></Nav.Link>

                        <Nav.Link><Link className='text-decoration-none fw-bold   text-dark ' to="/blog">Blog</Link></Nav.Link>
                    </Nav>
                    
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;