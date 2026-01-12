import { use } from "react";
import JobCard from "./JobCard";

const HotJobs = ({ jobs }) => {
  const allJobs = use(jobs);
  return (
    <div>
      <h2 className="text-amber-300 text-center text-3xl py-4">
        Total Jobs Posting: {allJobs.length}
      </h2>

      <div className="grid gap-4 border-1 rounded-2xl text-center  grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {allJobs.map(job => (
                <JobCard  key={job._id} job={job} />
            ))}
      </div>
    </div>
  );
};

export default HotJobs;
