import React from "react";
import { Link } from "react-router";

const JobCard = ({ job }) => {
  const { title,requirements,salaryRange, company_logo, location, jobType, category, description, company } = job;
  return (
    <div className=" border-1 border-amber-50 p-5 m-3 card bg-base-100 w-96 shadow-sm">
     <div className="flex flex-row items-center ">
        <figure className="px-10 pt-10">
        <img
          src={company_logo}
          alt="company_logo"
          className="rounded-xl"
        />
      </figure>
      <div className=" items-center ">
        <h3 className="text-xl">{company}</h3>
        <p className="text-gray-600">{location}</p>
      </div>
     </div>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <p>
          {description}
        </p>
        <div>
            {
                requirements.map((skill,index) =><div key={index} className="badge badge-outline">{skill}</div>)
            }
            
        </div>
        <p>Salary: {salaryRange.min}-{salaryRange.max} {salaryRange.currency}</p>
        <div className="card-actions">
          <Link to={`/jobs/${job._id}`}><button className="btn btn-primary">Show Details </button></Link>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
