import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import './Courses.css';

const Courses = () => {
    const courses = useLoaderData();
    console.log(courses);
    return (
        <div className='courses-main'>
            <div className='p-5 container '>
                <div className='row'>
                <div className='col-4'>
                    <h1 className='mb-5'>Courses</h1>
                    {
                        courses.map(couTitle => <Link
                            key={couTitle.id}
                            className='text-white h3 d-block text-decoration-none mb-4'
                        >{couTitle.title}</Link>)
                    }
                </div>

                <div className='col-8 mx-auto'>
                    <h1>Main Content</h1>
                    <div className='row g-4'>
                    {
                        courses.map(course =>
                    <div className='col-lg-4'>
                            
                            <div key={course.id} class="card ">
                                <img style={{height: '200px'}} className=' ' src={course.image} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title text-success">{}</h5>
                                    <p class="card-text text-black">{}</p>
                                    <Link to='/information' class="btn btn-primary">Go somewhere</Link>
                                </div>
                            </div>
                        
        
                        </div>
                        )
                    }
                    </div>

                </div>
                </div>
            </div>
        </div>
    );
};

export default Courses;