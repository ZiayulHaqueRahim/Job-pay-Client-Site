import React, { Suspense } from 'react';
import ApplicationStats from './ApplicationStats';
import ApplicationList from './ApplicationList';
import useAuth from '../../hooks/useAuth';
import { myApplicationsPromise } from '../../api/myApplicationsApi';

//----------------------api of myApplications---------------------//

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