import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'
import { AuthContext } from '../Contexts/UserContext/UserContext';

function Header() {

    const { user } = useContext(AuthContext);

    return (
        <Navbar sticky="top" bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">
                    <Link to="/home">
                        <img
                            src={logo}
                            width="40"
                            height="40"
                            className="d-inline-block align-top"
                            alt=""
                        />
                    </Link>
                </Navbar.Brand>
                <Navbar.Brand href="#"><Link className='text-decoration-none fw-bold fs-2  text-dark ' to="/home">E-programming University</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0 mx-auto"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link ><Link className='text-decoration-none    text-dark ' to="/home">Home</Link></Nav.Link>

                        <Nav.Link ><Link className='text-decoration-none    text-dark ' to="/courses">Courses</Link></Nav.Link>

                        <Nav.Link ><Link className='text-decoration-none    text-dark ' to="/faq">FAQ</Link></Nav.Link>

                        <Nav.Link><Link className='text-decoration-none    text-dark ' to="/blog">Blog</Link></Nav.Link>
                    </Nav>

                    <div className="d-flex">

                        <Nav.Link ><Link className='text-decoration-none -bold   text-dark me-2 ' to="/register">Register</Link></Nav.Link>

                        {user?.uid ?

                            <Nav.Link><Link className='text-decoration-none fw-bold   text-dark ' to="/login">
                                {user?.photoURL ?
                                    <img className='rounded-circle' style={{ width: '30px' }} src={user?.photoURL} alt="" />
                                    :
                                    <FaUser></FaUser>
                                }
                            </Link></Nav.Link>
                            :
                            <Nav.Link><Link className='text-decoration-none  me-3   text-dark ' to="/login">Login</Link></Nav.Link>


                        }


                        {/* <Nav.Link><Link className='text-decoration-none fw-bold  me-2 text-dark ' to="/login">{user?.displayName}</Link></Nav.Link> */}





                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;