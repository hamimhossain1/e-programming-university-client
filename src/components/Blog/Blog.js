import React from 'react';
import { Card } from 'react-bootstrap';

const Blog = () => {
    return (
        <div className='container '>
            <h3 className='text-center m-4 text-success'> Blog section</h3>
            <Card className='w-50 mx-auto bg-light m-4'>
                <Card.Body>
                    <Card.Title>1.What is cors?</Card.Title>
                    <Card.Text>
                        Ans: CORS stands for Cross-Origin Resource Sharing. It allows us to relax the security applied to an API. This is done by bypassing the Access-Control-Allow-Origin headers, which specify which origins can access the API.
                        <br></br>
                        <br></br>

                        In other words, CORS is a browser security feature that restricts cross-origin HTTP requests with other servers and specifies which domains access your resources..
                    </Card.Text>
                </Card.Body>
            </Card>

            <Card className='w-50 mx-auto bg-light m-4'>
                <Card.Body>
                    <Card.Title>2. Why are you using firebase? What other options do you gave to implement authentication?</Card.Title>
                    <Card.Text>
                        Ans: Google Firebase is an application development platform that allows us to create iOS, Android, and Web apps.
                        <br></br>
                        <br></br>
                        Google Firebase offers many features that pitch it as the go-to backend development tool for web and mobile apps. It reduces development workload and time. And it's a perfect prototyping tool. Firebase is simple, lightweight, friendly, and industrially recognized.

                        <br></br>
                        <br></br>
                        Others options of implement authentication: 1. Stytch 2. Ory 3. Supabase 4. Okta 5. Pingldentity 6. Keycloak 7. Fontegg 8. Authress 9.AuthO
                    </Card.Text>
                </Card.Body>

            </Card>
            <Card className='w-50 mx-auto bg-light m-4'>
                <Card.Body>
                    <Card.Title>3. How dose the private route work?</Card.Title>
                    <Card.Text>
                        Ans: The react private route component renders a route component if the user is logged in and in an authorised role for the route, if the user isn’t logged in they’re redirected to the /login page, if the user is logged in but aren’t in an authorised role they’re redirected to the home page.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='w-50 mx-auto bg-light mt-4 mb-5'>
                <Card.Body>
                    <Card.Title>4. What is Node? How does Node work?</Card.Title>
                    <Card.Text>
                        Ans: Node allows developers to write JavaScript code that runs directly in a computer process itself instead of in a browser. Node can, therefore, be used to write server-side applications with access to the operating system, file system, and everything else required to build fully-functional applications.
                        <br></br>
                        <br></br>
                        Working of Node.js: Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Blog;