import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseDetail = () => {
    const courseDetalis = useLoaderData();
    console.log(courseDetalis)
    console.log('hello')
    return (
        <div>
            <h3>This is detail page</h3>
            {/* {
                courseDetalis.map(course => <p>{course.title}</p>)
            } */}
        </div>
    );
};

export default CourseDetail;