import React from 'react';
import { Link } from 'react-router-dom';
import errorImage from '../../assets/error-Img.jpg'

const Error = () => {
    return (
        <div className='text-center'>

            <div className=' d-flex justify-content-center mx-auto'>
                <div><img className='d-block w-75 ms-5 mt-5' src={errorImage} alt="error-Img" /></div>
            </div>

            <Link className='text-decoration-none text-center' to='/'> <button type="button" class="btn btn-warning">Back to homepage</button></Link>

        </div>
    );
};

export default Error;