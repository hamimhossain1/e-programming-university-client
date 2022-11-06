import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import toast from 'react-hot-toast';
import { FaArrowRight, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'
import { AuthContext } from '../Contexts/UserContext/UserContext';
import ReactSwitch from 'react-switch';
import ToggleButton from '../ToggleButton/ToggleButton';

function Header() {

    const { user, signOutUser } = useContext(AuthContext);

    const handleSignOut = () => {
        signOutUser()
            .then(toast.success('User logged out'))
            .catch((error) => console.log(error))
    }

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

                        {user?.uid || user?.email ?
                            <>
                                <Nav.Link ><Link className='text-decoration-none    text-dark ' to="/courses">Courses</Link></Nav.Link>

                                <Nav.Link ><Link className='text-decoration-none    text-dark ' to="/faq">FAQ</Link></Nav.Link>

                                <Nav.Link><Link className='text-decoration-none    text-dark ' to="/blog">Blog</Link></Nav.Link>

                                <Nav.Link><Link onClick={handleSignOut} className='text-decoration-none    text-dark me-3' to="/login">Logout <FaArrowRight></FaArrowRight> </Link></Nav.Link>
                            </>
                            :

                            <Nav.Link><Link className='text-decoration-none  me-3   text-dark ' to="/login">Login</Link></Nav.Link>
                        }

                    </Nav>

                    <div className="d-flex align-items-center">

                        {/* <Nav.Link ><Link className='text-decoration-none -bold   text-dark me-2 ' to="/register">Register</Link></Nav.Link> */}

                        {/* <Nav.Link><Link onClick={handleSignOut} className='text-decoration-none    text-dark me-3' to="/login">Logout</Link></Nav.Link> */}
                        <div>
                        {user?.uid ?
                            <span data-bs-toggle="tooltip" data-bs-placement="bottom" title={user.displayName}>
                                <img className='rounded-circle' style={{ width: '30px' }} src={user?.photoURL} alt="" /></span>
                            :
                            <FaUser></FaUser>
                        }
                        </div>


                        {/* <Nav.Link><Link className='text-decoration-none fw-bold  me-2 text-dark ' to="/login">{user?.displayName}</Link></Nav.Link> */}
                        <div>
                        <Nav.Link ><Link className='text-decoration-none    text-dark ' to="/home"><ToggleButton></ToggleButton></Link></Nav.Link>
                        </div>


                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;