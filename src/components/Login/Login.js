import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaFacebook, FaGithub, FaGoogle, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Login() {
    return (
        <div className='container bg-light rounded-2 px-1 pt-1 pb-5 mt-4 w-75'>
            <h3 className=' font-bold  mt-5 text-center'>Login</h3>
            <p className='text-center'>Login with your account</p>
            <Form className='w-50 mx-auto mt-5'>


                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name="email" id="email" type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" id="password" type="password" placeholder="Password" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>


                <Button className='inline-block w-100' variant="primary" type="submit">
                    Sign In
                </Button>
                <p className='mt-2'>Forget Password?</p>


                <p className='text-uppercase text-center mt-4 inline-block'>Login with social account</p>
                <hr ></hr>
                <div className='d-flex justify-content-center'>
                    <p className=' fs-5 me-3 '><FaGoogle></FaGoogle></p>
                    <p className=' fs-5 me-3'><FaFacebook></FaFacebook></p>
                    <p className=' fs-5 '><FaGithub></FaGithub></p>
                </div>

                <p className='text-center'>Don't have an account yet? <Link to="/register" className='text-decoration-none fw-bold'>Register.</Link></p>






            </Form>
        </div>
    );
}

export default Login;