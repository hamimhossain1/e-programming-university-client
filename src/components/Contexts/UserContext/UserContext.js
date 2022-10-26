import React, { Children, createContext } from 'react';



export const AuthContext = createContext()

const UserContext = ({children}) => {
    const rahul = {fullname: 'Md: Rahul', age: 22}

    const authInfo = {rahul}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;