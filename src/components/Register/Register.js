import { useContext, } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Contexts/UserContext/UserContext';





function Register() {

    const { signInWithGoogle, signInWithGithub} = useContext(AuthContext);


    const handleGoogleSignIn = () =>{
        signInWithGoogle()
        .then(result =>{
            const user = result.user;
            console.log(user);
        })
        .error((error) => {
            console.error('error:', error);
        })
    }

    const handleGithubSignIn = () =>{
        signInWithGithub()
        .then((result) =>{
            const user = result.user;
            console.log(user);
        })
        .catch((error) => {
            console.error('error:', error);
        })
    }


    return (
        <div className='container bg-light rounded-2 px-1 pt-1 pb-5 mt-4 w-75'>
            <h3 className=' font-bold   mt-5 text-center'> Register </h3>
            <p className='text-center'>Create a new account</p>
            <Form className='mt-5 w-50 mx-auto'>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Full name</Form.Label>
                    <Form.Control name="name" id="name" type="name" placeholder="Enter name" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name="email" id="email" type="email" placeholder="Enter email" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" id="password" type="password" placeholder="Password" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control name="confirmPassword" id="confirmPassword" type="password" placeholder="Confirm Password " required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>

                <Button className='inline-block w-100' variant="primary" type="submit">
                    Register
                </Button>


                <p className='text-uppercase text-center mt-4 inline-block'>Login with social account</p>
                <hr ></hr>
                <div  className='d-flex justify-content-center'>

                <button  onClick={handleGoogleSignIn} type="button" className='btn btn-light fs-5 me-3 '><FaGoogle></FaGoogle></button>


                <button type="button" className=' btn btn-light fs-5 me-3'><FaFacebook></FaFacebook></button>

                <button onClick={handleGithubSignIn} type="button" className=' btn btn-light fs-5 '><FaGithub></FaGithub></button>
                </div>

                <p className='text-center'>Don't have an account yet? <Link to="/login" className='text-decoration-none fw-bold'>Sign In.</Link></p>
               
            </Form>
        </div>

        
    );
}

export default Register;