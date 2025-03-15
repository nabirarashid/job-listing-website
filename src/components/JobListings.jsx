import React from 'react'
import JobListing from './JobListing'
import {useState, useEffect} from 'react'

const JobListings = ({isHome=false}) => {
  const [jobs, setJobs] = useState([]); // set initial state to empty array
  const [loading, setLoading] = useState(true); // set initial state to true

  useEffect(() => {
    const fetchJobs = async () => {
      const apiUrl = isHome ? "/api/jobs?_limit=3" : "/api/jobs";
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setJobs(data);
      } catch (error) {
        console.log("Error fetching jobs", error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? "Recent Jobs" : "All Available Jobs"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          { loading ? (<h2>Loading...</h2>) : (
            <>
            { jobs.map((job) => (
            <JobListing key={job.id} job={job}/>
          )) } 
            </>
          )}
          
        </div>
      </div>
    </section>
  )
}

export default JobListings