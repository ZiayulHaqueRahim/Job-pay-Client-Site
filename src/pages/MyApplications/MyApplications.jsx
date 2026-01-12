import React from 'react';
import ApplicationStats from './ApplicationStats';
import ApplicationList from './ApplicationList';
import useAuth from '../../hooks/useAuth';


const myApplicationsPromise = email => {
    return fetch(`http://localhost:3000/applications/?email=${email}`)
            .then(res => res.json())
}


const MyApplications = () => {

    const {user} = useAuth();

    return (
        <div>
            <ApplicationStats />
            <Suspense fallback={'Applications list are loading....'}>
                <ApplicationList myApplicationsPromise={myApplicationsPromise(user.email)} />
            </Suspense>
            
        </div>
    );
};

export default MyApplications;