import React from 'react';
import { Card } from 'react-bootstrap';

const FAQ = () => {
    return (
        <div>
            <h4 className='text-center mt-5 text-success'> FAQ section.</h4>

            <Card className='w-50 mx-auto bg-light m-4'>
                <Card.Body>
                    <Card.Title>1. What do you mean by “Computer Programming”?</Card.Title>
                    <Card.Text>
                        Ans: This is one of the very basic programming interview questions. It is often asked at the beginning of every interview. Our collection will include such common questions for you to cover up all the levels of the interview.

                        Computer programming, also known as computer coding, is a series of tasks implemented to achieve certain figurative results. The process takes place through the meaningful execution of computer programs. It involves planning and coding algorithms, reforming a program, and also maintenance and updating different structured codes.

                        <br></br>
                        <br></br>
                        Computer programming is executed by any of the programming languages available. Every programming language is actually a group of instructions that command the machine to execute any specific task set by the programmer. Computer programming is a complex process that requires knowledge over specific programming languages users want to use to obtain the specific output.

                        In other words, CORS is a browser security feature that restricts cross-origin HTTP requests with other servers and specifies which domains access your resources..
                    </Card.Text>
                </Card.Body>
            </Card>

            <Card className='w-50 mx-auto bg-light m-4'>
                <Card.Body>
                    <Card.Title>2. Do you know about High level and Low-level programming languages?</Card.Title>
                    <Card.Text>
                        Yes, I can. High-level programming languages are not dependent on the machine type you are using. A high-level programming language is highly simplified. It is close to regular languages so that programmers can have an easy experience with program development. For example, C, Java, FORTRAN, etc. are high-level programming languages.

                        On the contrary, low-level language is close to machine language. The low-level programming language offers no simplification of machine instructions. Such as Assembly language.

                        <br></br>
                        <br></br>
                        Computer programming is executed by any of the programming languages available. Every programming language is actually a group of instructions that command the machine to execute any specific task set by the programmer. Computer programming is a complex process that requires knowledge over specific programming languages users want to use to obtain the specific output.

                        
                    </Card.Text>
                </Card.Body>
            </Card>


        </div>
    );
};

export default FAQ;