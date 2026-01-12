import { Suspense, useEffect, useState } from "react";
import HotJobs from "./HotJobs";

const Home = () => {
  const jobs = fetch('http://localhost:3000/jobs').then(res=>res.json());

  return (
    <div>
      <h1 className="text-6xl text-center py-7 text-amber-400">Jobs For You</h1>
      <Suspense fallback={'Loading......'}>
              <HotJobs jobs={jobs} />
      </Suspense>
    </div>
  );
};

export default Home;
