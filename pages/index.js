import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Front from '../components/Front'
import JobList from '../components/JobList'
import Sidebar from '../components/Sidebar'
import { getSession, signIn } from "next-auth/react";
import { connectToDatabase } from "../util/mongodb";

export default function Home({jobs}) {
 
  return (
    <div>
      <Head>
        <title>EEU</title>
        <meta charset="UTF-8" />
        <link href="https://cdn.quilljs.com/1.0.0/quill.snow.css" rel="stylesheet"></link>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
       <Front/>
       <div className="flex flex-col md:flex-row gap-5 ">
          <JobList jobs={jobs}/>
          <Sidebar/>
       </div>


    </div>
    
  )
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  const { db } = await connectToDatabase();
   const jobs = await db
     .collection("jobs")
     .find()
     .sort({ timestamp: -1 })
     .toArray();
  
  return {
    props: {
      session,
      jobs: jobs.map((job) => ({
        _id: job._id.toString(),
        position: job.position,
        avalablity: job.avalablity,
        status:job.status,
        miniDesc: job.miniDesc,
        discripition: job.descripition,
        posted: job.createdAt

      })),
    },
  };
}
