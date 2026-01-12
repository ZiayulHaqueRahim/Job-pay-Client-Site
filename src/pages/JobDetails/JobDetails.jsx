
import { Link, useLoaderData } from 'react-router';

const JobDetails = () => {
    const {title, company,company_logo,_id,location,description,responsibilities,hr_email,hr_name} = useLoaderData();
    return (
        <div className='flex items-center text-center gap-6 px-auto py-10 flex-col my-10 mx-auto '>
            <div>
                <img src={company_logo} />
            </div>
            <h2>Job Details of: {title}</h2>
            <p>Company: {company}</p>
            <div className='text-center mx-auto py-2 '>
                <p><span className='text-bold text-amber-100'>More about Job:</span>{description}</p>
                <h4><span className='text-bold text-amber-100'>Responsibilities:</span> {responsibilities}</h4>
                <p><span className='text-bold text-amber-100'>Location:</span> {location}</p>
            </div>
            <div className='border-1 p-10 mx-auto border-amber-50 rounded-xl flex flex-col gap-3 justify-center'>
                <h5>HR: {hr_name}</h5>
                <h5>HR Email:{hr_email}</h5>
            </div>

           <Link to={`/jobApply/${_id}`}>
                 <button className='btn btn-primary'>Apply Now</button>
           </Link>
        </div>
    );
};

export default JobDetails;