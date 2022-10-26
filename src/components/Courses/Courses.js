import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './Courses.css';

const Courses = () => {
    const courses = useLoaderData();
    console.log(courses);
    return (
        <div className='courses-main'>
            
        </div>
    );
};

export default Courses;