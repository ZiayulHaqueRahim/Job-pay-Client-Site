import React, { use } from "react";
import ApplicationRaw from "./ApplicationRaw";

const ApplicationList = ({ myApplicationsPromise }) => {
  const applications = use(myApplicationsPromise);
  return (
    <div>
      <h3 className="text-3xl text-center p-5 my-3 mx-auto">
        Jobs Applied so far: {applications.length}
      </h3>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Company Logo</th>
              <th>Job Title</th>
              <th>Company Name</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
            applications.map((application,index)=><ApplicationRaw 
                application={application}
                key={application._id} 
                index={index}
                 />)
            }
          
          
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApplicationList;
