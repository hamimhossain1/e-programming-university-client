import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import CourseDetail from '../CourseDetail/CourseDetail';
import './Courses.css';

const Courses = () => {
    const courses = useLoaderData();
    // console.log(courses);
    return (
        <div className='courses-main'>
            <div className='p-5 container '>
                <div className='row'>
                <div className='col-md-4'>
                    {/* <h1 className='mb-5 text-success'>Courses list</h1> */}
                    {
                        courses.map(couTitle => <Link
                        to={`/detail/${couTitle.category}`}
                            key={couTitle.id}
                            className='text-white h3 d-block text-decoration-none mb-4'
                        >{couTitle.title} </Link>)
                    }
                </div>

                <div className='col-md-8 mx-auto'>
                    {/* <h1 className='text-success mb-5'>Course Details</h1> */}
                    <div className='row g-5'>
                    {
                        courses.map(course =>
                    <div className='col-12 col-md-6 col-lg-4'>
                            
                            <div key={course.id} className="card ">
                                <img style={{height: '200px'}} className=' ' src={course.image}  class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <Link className="btn btn-primary">{course.title}</Link>
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