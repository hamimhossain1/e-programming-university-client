import React from 'react';
import { Link } from 'react-router-dom';

const OrderSummury = () => {
    return (
        <div className='container'>
            <div className="card w-50 mx-auto mt-5 mb-5 bg-light" >
                <div className="card-body">
                    <h5 className="card-title">Order Summury</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Thank you for buying book from us..!!</h6>
                    <p className="card-text">Please come again.......!!!!!</p>
                    <Link to='/' className="card-link"> <button type="button" class="btn btn-warning">Go To Home</button></Link>
                    
                </div>
            </div>
        </div>
    );
};

export default OrderSummury;