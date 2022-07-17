
import ApplicationsList from '../../components/admin/ApplicationsList'
import SideNavbar from '../../components/admin/SideNavbar'
import { getSession, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { connectToDatabase } from "../../util/mongodb";

function applications() {
  return (
    <div>
      <div className='flex'>
           <SideNavbar/>
           <ApplicationsList/>
        </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        permanent: false,
        destination: "/",
      },
    };
  }
  
  const { db } = await connectToDatabase();
   const jobs = await db
     .collection("jobs")
     .find()
     .populate("jobSeekers")
     .exec((err, comment) => {
      console.log(comment);
    })
     .sort({ timestamp: -1 })
     .toArray();

  return {
    props: {
      session,
    },
  };
}


export default applications