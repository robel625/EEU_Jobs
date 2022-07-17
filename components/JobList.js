import React from 'react'
import Jobcard from './Jobcard'

function JobList({ jobs }) {
  return (
    <div className='m-5 max-w-3xl'>
           <h1 className='bg-white dark:bg-transparent text-2xl font-bold mb-2'>5 Jobs Avalable</h1>
           <p className='mb-2'>
              Lorem ipsum dolor sit amet,consectetur adipiscing elit.Ut blandit arcu
              in pretium molestie.Interdum et malesuada fames acme.Lorem ipsum dolor
               sit amet,consectetur adipiscing elit.
            </p>
            <div className='space-y-6 pb-7 '>
                 {jobs.map((job) => (
                  <Jobcard key={job.id} job={job}/>
                ))}
            </div>
        </div>
  )
}

export default JobList