import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css'; 
import { useEffect, useState } from "react";
import axios from "axios";
import { connectToDatabase } from "../util/mongodb";
import { ObjectId } from "mongodb";
import { useSession } from "next-auth/react";

const jobdesc = ({ job }) => {
    const { quill, quillRef } = useQuill();
    const { data: session } = useSession();
    
    const requestOptions = {
      method: 'PUT',
      headers: { 
        'Accept': 'application/json',
        'Content-Type': 'application/json' },
      body: JSON.stringify({ applied: session.user.id })
      //body: JSON.stringify({ applied: {user:session.user.id,status:2} })
  };

    const updateJobSeeker = async (e) => {
      e.preventDefault();
  
     const response = await fetch(`/api/jobs/${job._id}`,  requestOptions)
     
    const responseData = await response.json();
  };

   

    useEffect(() => {
        if (quill) {
          quill.clipboard.dangerouslyPasteHTML('<h1> TiTle</h1><ol><li>asdfasdf oreder list</li><li>sadfaf</li><li>asdfas</li></ol><p>asdfjhaslkjdfhajkshdfkjh pargtaph</p><h2> Responcebility</h2><ul><li>unorderlist</li><li>sdfsd</li><li>asdfsa</li></ul><h3> color</h3><p><strong style="background-color: rgb(0, 138, 0);">asdfasfasdfasdfsdfasdfasdfsfadf</strong></p><p><span style="color: rgb(178, 178, 0);">asdfsdfasddaasdfasdfasdfasdfadf</span></p><p><u style="color: rgb(178, 178, 0);">aasdfasdfasfadfsfaasfdfasfasfd</u></p>');
        }
      }, [quill]);
   
    return (
        <div className="m-20 p-5 shadow-sm ">
           <div className='p-3 flex items-center justify-between bg-amber-700'>
              <div className='flex items-center flex-1'>
                 <a onClick={updateJobSeeker } href="#" className='bg-yellow-500 rounded-lg text-white mt-5 p-3'>Apply Now</a>
                 <span className='text-red-600'>Deadline
                 <br/>Jun 23, 2022</span>
              </div>
              <div className='flex justify-around w-2/3'>
                <div className=''>share:</div>
                <div className='p-0.5 border border-solid border-black'>f</div>
                <div className='p-0.5 border border-solid border-black'>t</div>
                <div className='p-0.5 border border-solid border-black'>in</div>
                <div className='p-0.5 border border-solid border-black'>t</div>
              </div>
           </div>
                        
            <div>
                  <h1 className='ml-5'>{job.position} </h1>
                  <span className='mr-10 text-gray-700'>Job by Safaricom Telecommunications Ethiopia PLC </span>
                  <span className=''>Job Id: 
                     <span className='text-gray-700'> 401545 </span >
                  </span>
            </div>
                <hr/>
               <div >
                   <div  className='flex m-0.5 p-1'>
                         <div>Category</div>
                         <div>Engineering, Telecommunications</div>
                    </div>
                    <div>
                         <div>Location:</div>
                         <div>Addis Ababa</div>
                    </div>
                    <div> 
                         <div>category</div>
                         <div >Mid Level (2+ -5 years experience)</div>
                    </div>
                    <div >
                         <div >Salary</div>
                         <div>10000 Birr</div>
                    </div>
                </div>
                <div>
                    <div>
                         <h2> Job Description
                        </h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et nostrum debitis ipsum autem, fugiat ratione labore aliquid, sunt quod inventore harum, accusantium laborum tenetur iusto soluta voluptates veritatis maiores cupiditate?</p>
                        <p>Distinctio, inventore quaerat adipisci natus doloremque accusantium soluta mollitia, quo id architecto sapiente provident impedit ea fugiat optio nam. Totam quaerat ratione sed blanditiis molestiae expedita esse reiciendis voluptatibus aspernatur.</p>
                        <p>Autem praesentium tempora minus, fugiat quos deserunt incidunt harum minima, facilis illum exercitationem nihil porro placeat omnis, odio dolore excepturi repellat voluptatibus nisi maxime natus vero? Eligendi molestias non vel!</p>
                        <p>Aliquid minima doloribus vero. Nostrum a molestiae voluptatibus, cupiditate vitae debitis corrupti possimus dolorem repellat quia nam totam ipsum iste iure aspernatur libero est consectetur dolore perferendis culpa optio perspiciatis.</p>
                        <ul>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa officiis obcaecati ipsum delectus fuga</li>
                            <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum, quisquam!</li>
                            <li>Lorem ipsum dolor sit amet.</li>
                            <li>Lorem ipsum dolor sit amet.</li>
                            <li>Lorem ipsum dolor sit amet.</li>
                        </ul>
                    </div>
                    <div>
                    <h2> job Requirements </h2>
                      <div >
                         <p>Qualifacation</p>
                         <ul>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa </li>
                            <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum</li>
                            <li>Lorem ipsum dolor sit amet.</li>
                            <li>Lorem ipsum dolor sit amet.</li>
                            <li>Lorem ipsum dolor sit amet.</li>
                        </ul>
                      </div>
                    </div>
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam maxime alias praesentium quae dignissimos expedita, tempore ducimus. Aperiam, quibusdam aspernatur?</p>
                         <p>Lorem ipsum dolor sit amet.</p>
                         <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
                
                <div className='p-3 flex items-center justify-between bg-amber-700'>
              <div className='flex items-center flex-1'>
                 <a href="#" className='bg-yellow-500 rounded-lg text-white mt-5 p-3'>Apply Now</a>
                 <span className='text-red-600'>Deadline
                 <br/>Jun 23, 2022</span>
              </div>
              <div className='flex justify-around w-2/3'>
                <div className=''>share:</div>
                <div className='p-0.5 border border-solid border-black'>f</div>
                <div className='p-0.5 border border-solid border-black'>t</div>
                <div className='p-0.5 border border-solid border-black'>in</div>
                <div className='p-0.5 border border-solid border-black'>t</div>
              </div>
           </div>
              
              
              {/* <div style={{ width: 500, height: 300 }}>
               <div ref={quillRef}/>
               </div> */}
           
                
        </div>
      )
}

export const getServerSideProps = async ({ params }) => {
    ;

    const { db } = await connectToDatabase();
   const job = await db
     .collection("jobs").findOne({ _id: new ObjectId(params.id) });
   
     
    //  const res = await axios.get(`http://localhost:3000/api/jobs/${params.id}`
    //   );

    return {
      props: {
        job : 
        {_id: job._id.toString(),
        position: job.position,
        avalablity: job.avalablity,
        status:job.status,
        miniDesc: job.miniDesc,
        discripition: job.descripition,
        posted: job.createdAt
        }
      },
    };
  };


  

export default jobdesc





