import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const CourseDetail = () => {
    const detail = useLoaderData();
    console.log(detail)
    console.log('hello')
    return (
        <div className='container'>
            <h3 className='mt-4 text-center text-success'>Course details</h3>
            
                
                    <div className="card text-center w-50 mx-auto">
                                <h5 className="card-title">{detail.title}</h5>
                        <img src={detail.image} class="card-img-top" alt="..."/>
                            <div className="card-body">
                                <p className="card-text">{detail.description}</p>
                                <Link to='/home' className="btn btn-primary">Back Course List</Link>

                                <Link to={`/checkout/${detail.id}`} type="button" className="btn btn-warning ms-5">Get premium access</Link>
                            </div>
                    </div>
                
            


        </div>
    );
};

export default CourseDetail;