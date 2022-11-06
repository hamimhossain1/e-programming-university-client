import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../components/Contexts/UserContext/UserContext';

const PrivetRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {

        return <div class="d-flex mt-5 justify-content-center">
            <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    }

    if (user && user?.uid) {
        return children
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default PrivetRoute;