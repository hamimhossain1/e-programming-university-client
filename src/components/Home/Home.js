import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../Contexts/UserContext/UserContext';
import './Home.css';



const Home = () => {
    
    return (
        <div className='home-page'>
            <h3 className=''>This is home Section</h3>
            <button >Click</button>
        </div>
    );
};

export default Home;