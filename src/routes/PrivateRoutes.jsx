import React, { use } from 'react';
import { AuthContext } from '../Contexts/AuthContext/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivateRoutes = ({children}) => {
    const {user,loading} = use(AuthContext);

    const location = useLocation();

    if(loading){
        return <span className='loading loading-ring loading-xl text-center my-10 mx-auto'></span>
    }

    if(!user){
        return <Navigate to='/signin' state={location.pathname}   />
    }


    
    return children;
};

export default PrivateRoutes;