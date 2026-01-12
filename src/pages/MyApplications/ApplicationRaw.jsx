import React from "react";

const ApplicationRaw = ({application, index}) => {
    const {company,title,company_logo} = application
  return (
    <tr>
      <th>
        <label>
          {index + 1}
        </label>
      </th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img
                src={company_logo}
                
              />
            </div>
          </div>
          
        </div>
      </td>
      <td>
       {title}
        
      </td>
      <td>{company}</td>
      <th>
        <button className="btn btn-ghost btn-xs">details</button>
      </th>
    </tr>
  );
};

export default ApplicationRaw;
