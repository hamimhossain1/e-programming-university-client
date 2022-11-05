import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../components/Contexts/UserContext/UserContext';

const PrivetRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        <div className="spinner-border text-dark" role="status">
            <span className="visually-hidden">Loading...</span>
            <div>Loading.........</div>
        </div>
    }

    if (user && user.uid) {
        return children
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>


};

export default PrivetRoute;