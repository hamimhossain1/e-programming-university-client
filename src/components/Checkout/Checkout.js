import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const courses = useLoaderData();
    console.log(courses)
    return (
        <div className='container'>
            <h3 className='text-success text-center m-3'>Checkout page!</h3>

            <div className='row'>
                <div className='col-10 col-md-8 col-lg-5 mx-auto'>

            <div className="card mx-auto">
                <img src={courses.image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title text-center">{courses.title}</h5>
                    <div className='d-flex justify-content-around'>
                        <p className="card-text ">Price: {courses.price}</p>
                        <p className="card-text">Rating: {courses.rating.rate}</p>
                        <p className="card-text">Count: {courses.rating.count}</p>
                    </div>

                    <Link href="#" className="btn btn-primary w-100 mb-4 mt-4">Buy Now</Link>
                </div>
            </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;