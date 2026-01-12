import React from "react";
import { Link, useParams } from "react-router";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";

const JobApply = () => {
     const { user } = useAuth();
     const { id: jobId } = useParams();
    console.log(jobId, user);

    const handleApplyFormSubmit = e =>{
        e.preventDefault();
        const form = e.target;
        const profilePic = form.profilePic.value;
        const linkedin = form.linkedin.value;
        const github = form.github.value;
        const resume = form.resume.value;

        console.log(profilePic,linkedin,github,resume);
        

        const application = {
            jobId,
            applicant: user.email,
            profilePic,
            linkedin,
            github,
            resume
        };

        axios.post('http://localhost:3000/applications', application)
        .then(res=>{
            console.log(res.data);

            if(res.data.insertedId){
                Swal.fire({
                    position: 'top-end',
                    icon:'success',
                    title:'Your job application successfully Done !',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        }).catch(error=>{
            console.log(error);
        });
    };


    

  return (
    <div className="flex flex-col items-center justify-center ">
      <h2 className="text-center text-amber-200 font-bold mx-auto p-8">
        Apply for this Job: <Link  to={`/jobs/${jobId}`}  /> 
      </h2>
      <p>Please give data only in   <span className="text-amber-50 font-bold py-3 text-center">URL</span>   format. Not plain text</p>
      <form onSubmit={handleApplyFormSubmit} className="text-center  items-center">
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">

          <label className="label">Photograph Link</label>
          <input name='profilePic' type="url" className="input" placeholder=" Profile Photo Link" />
          <label className="label">linkedIn Link</label>
          <input name='linkedin' type="url" className="input" placeholder="LinkedIn Profile Link" />

          <label className="label">GitHub Link</label>
          <input type="url" name='github' className="input" placeholder="Github Profile Link" />

          <label className="label">Resume Link</label>
          <input name='resume' type="url" className="input" placeholder="Resume Link" />

          <button type='submit' className="btn btn-primary">Apply</button>

        </fieldset>
      </form>
    </div>
  );
};

export default JobApply;
