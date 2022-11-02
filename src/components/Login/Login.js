import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaFacebook, FaGithub, FaGoogle, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Contexts/UserContext/UserContext';

function Login() {

    const { signInWithGoogle, signInWithGithub, signInWithFacebook, signInWithEmailAndPassword, updateUserProfile } = useContext(AuthContext);


    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .error((error) => {
                console.error('error:', error);
            })
    }

    const handleFacebookSignIn = () => {
        console.log('hello')
        signInWithFacebook()
            .then(result => {
                const user = result.user;
                console.log(user);

                updateUserProfile()
            })
            .catch(error => console.error('error:', error))
    }

    const handleGithubSignIn = () => {
        console.log('hello')
        signInWithGithub()
            .then((result) => {
                const user = result.user;
                console.log(user);
            })
            .catch((error) => {
                console.error('error:', error);
            })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoURL = form.photoURL.value;

        console.log(name, email, password)
        signInWithEmailAndPassword(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);

                updateUserProfile(name, photoURL)
                    .then(() => {

                    })
                    .catch((error) => console.error('error:', error))

                form.reset()
            })
            .catch(error => console.error('error:', error))
    }




    return (
        <div className='container bg-light rounded-2 px-1 pt-1 pb-5 mt-4 w-75'>
            <h3 className=' font-bold  mt-5 text-center'>Login</h3>
            <p className='text-center'>Login with your account</p>
            <Form onSubmit={handleSubmit}  className='w-50 mx-auto mt-5'>


                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name="email"  type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password"  type="password" placeholder="Password" required />
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