import React from "react";
import useAuth from "../../hooks/useAuth";


const AddJob = () => {

  const  {user} = useAuth(); 

  
  const handleAddAJob = e => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    //process salary datas
    const {salaryMin, salaryMax, currency, ...newJob} = data;
    newJob.salaryRange = {salaryMin, salaryMax, currency}

    //process requirements
    const requirementstring = newJob.requirement;
    const requirementDirty = requirementstring.split(',');
    const requirementClean = requirementDirty.map(req=>req.trim())
    newJob.requirement = requirementClean;
    const responsibilitystring = newJob.responsibilities;
    const responsibilityDirty = responsibilitystring.split(',');
    const responsibilityClean = responsibilityDirty.map(res=>res.trim())
    newJob.responsibilities = responsibilityClean;
  


    console.log(newJob);
    
  }





















  return (
    <form onSubmit={handleAddAJob} className="flex flex-col gap-2 items-center justify-center text-center  ">
      <h2 className="fieldset-legend  text-2xl  text-center p-3  ">
        Please <span className="text-amber-50 font-bold">Add A</span> Job
      </h2>
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <legend className="fieldset-legend    text-center p-3  ">
          Basic Info:
        </legend>
        {/* job title*/}
        <label className="label text-center mx-auto ">
          Enter your Job Title
        </label>
        <input
          type="text"
          name="jobTitle"
          className="input text-center "
          placeholder="Job Title"
        />
        {/* company */}
        <label className="label text-center mx-auto ">
          Enter your Company Name
        </label>
        <input
          type="text"
          className="input text-center "
          placeholder="Company Name"
          name="company"
        />
        {/* location */}
        <label className="label text-center mx-auto ">Give Location</label>
        <input
          type="text"
          className="input text-center "
          placeholder="location "
          name="location"
        />
        {/* company_logo */}
        <label className="label text-center mx-auto ">
          Give your Company Logo URL
        </label>
        <input
          type="url"
          className="input text-center "
          placeholder="Company Logo"
          name="companyLogo"
        />
      </fieldset>

      {/* Job Type */}

      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <legend className="fieldset-legend    text-center p-3  ">
          Job Type Info:
        </legend>
        <select  name="jobType" className="select">
          <option disabled={true}>Pick a JobType</option>
          <option>All</option>
          <option>Hybrid</option>
          <option>Remote</option>
          <option>On-Site</option>
        
        </select>
      </fieldset>
    
    
      {/* Job Category */}

      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <legend className="fieldset-legend    text-center p-3  ">
          Job category:
        </legend>
            <select defaultValue="Job category" name='category' className="select">
                <option disabled={true}>Pick a category</option>
                <option>Engineering</option>
                <option>marketting</option>
                <option>healthCare</option>
                <option>Sales</option>
            </select>
      </fieldset>
    
      {/* Application Deadline  */}

      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <legend className="fieldset-legend    text-center p-3  ">
          Application deadline:
        </legend>
           <input type="date" name='deadline' className="input" />
      </fieldset>

      {/* Salary Range   */}

      <fieldset className="  fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
            <legend className="fieldset-legend">Salary Range </legend>

            <label className="label">Enter Minimum Salary</label>
            <input type="text"  name="salaryMin" className="input" placeholder=" Minimum Salary" />

            <label className="label"> Enter Maximum Salary</label>
            <input type="text"   name="salaryMax" className="input" placeholder="Maximum Salary" />

            <label className="label">Currency</label>
            <select defaultValue="Select a Currency" name='currency' className="currency">
                <option disabled={true}>Pick a Currency</option>
                <option>USD</option>
                <option>BDT</option>
                <option>DIrham</option>
                <option>Euro</option>
            </select>
            </fieldset>
      </fieldset>


    {/*Job Description*/}
    <div>
      <legend className="fieldset-legend text-center my-1">Job Description  </legend>
      <textarea name='description' placeholder="Job Description" className="textarea textarea-xl"></textarea>
    </div>
    {/*Job Requirements*/}
    <div>
      <legend className="fieldset-legend text-center my-1">Job Requirements  </legend>
      <textarea name='requirement' placeholder="Job Requirements" className="textarea textarea-xl"></textarea>
    </div>
    {/*Job Responsibilities*/}
    <div>
      <legend className="fieldset-legend text-center my-1">Job Responsibilities  </legend>
      <textarea name='responsibilities' placeholder="Job Responsibilities" className="textarea textarea-xl"></textarea>
    </div>
    {/*HR Related Info*/}

   
        <label className="label text-center mx-auto ">
         Enter HR Name
        </label>
        <input
          type="text"
          defaultValue={user.name}
          
          className="input text-center "
          placeholder="HR  Name"
          name="HRName"
        />
    
        <label className="label text-center mx-auto "> Enter HR Email </label>
        <input
          type="text"
          defaultValue={user?.email}
          readOnly
          className="input text-center "
          placeholder="HR Email "
          name="HREmail"
        />


      <button className="btn-primary py-10">Add A Job</button>
    </form>
  );
};

export default AddJob;
