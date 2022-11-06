import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Contexts/UserContext/UserContext';

function Login() {

    const { user, signInWithGoogle, signInWithGithub, signInWithFacebook, loginUser } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';


    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('Google sign in successful.')
                navigate(from, { replace: true });
            })
            .catch((error) => {
                console.error('error:', error);
            })
    }

    const handleFacebookSignIn = () => {
        console.log('hello')
        signInWithFacebook()
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('Facebook sign in successful.')
                navigate(from, { replace: true });
            })
            .catch(error => console.error('error:', error))
    }

    const handleGithubSignIn = () => {
        console.log('hello')
        signInWithGithub()
            .then((result) => {
                const user = result.user;
                console.log(user);
                toast.success('Github sign in successful.')
                navigate(from, { replace: true });
            })
            .catch((error) => {
                console.error('error:', error);
            })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        form.reset();

        loginUser(email, password)
            .then(result => {
                toast.success('Login successfully...!!!')
                    navigate(from, { replace: true });
                    console.log(result.user);
            })
            .catch(error => {
                toast.error(error.message)
                // console.log(error)
                if(!user){
                    navigate('/register')
                    toast('Please register first')
                }
            })
    }




    return (
        <div className='container bg-light rounded-2 px-1 pt-1 pb-5 mt-4 w-75'>
            <h3 className=' font-bold  mt-5 text-center'>Login</h3>
            <p className='text-center'>Login with your account</p>
            <Form onSubmit={handleSubmit} className='w-50 mx-auto mt-5'>


                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name="email" type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" type="password" placeholder="Password" required />
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

                    <button onClick={handleGoogleSignIn} type="button" className='btn btn-light fs-5 me-3 '><FaGoogle></FaGoogle></button>


                    <button onClick={handleFacebookSignIn} type="button" className=' btn btn-light fs-5 me-3'><FaFacebook></FaFacebook></button>

                    <button onClick={handleGithubSignIn} type="button" className=' btn btn-light fs-5 '><FaGithub></FaGithub></button>
                </div>

                <p className='text-center'>Don't have an account yet? <Link to="/register" className='text-decoration-none fw-bold'>Register.</Link></p>

            </Form>
        </div>
    );
}

export default Login;