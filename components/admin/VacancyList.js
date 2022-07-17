import { motion } from "framer-motion";
import { useRecoilState } from "recoil";
import { modalState, modalTypeState } from "../../atoms/modalAtom";
import { useEffect, useState } from "react";
import { handlePostState, useSSRPostsState } from "../../atoms/postAtom";

import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css'; 
import DOMPurify from "dompurify";

function VacancyList({ jobs }) {
  const { quill, quillRef } = useQuill();
  const [modalOpen, setModalOpen] = useRecoilState(modalState);
  const [modalType, setModalType] = useRecoilState(modalTypeState);
  const [realtimePosts, setRealtimePosts] = useState([]);
  const [handlePost, setHandlePost] = useRecoilState(handlePostState);
  const [useSSRPosts, setUseSSRPosts] = useRecoilState(useSSRPostsState);
 
//   jobs.map((job) =>
//   console.log(root.innerHTML(job.descripition)
// ))
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("/api/jobs", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      const responseData = await response.json();
      setRealtimePosts(responseData);

      if(handlePost === true){
        setUseSSRPosts(false)
      }

      setHandlePost(false);
    };

    fetchPosts();
  }, [handlePost]);

  // useEffect(() => {
  //   if (quill) {
  //     quill.clipboard.dangerouslyPasteHTML('<h1> TiTle</h1><ol><li>asdfasdf oreder list</li><li>sadfaf</li><li>asdfas</li></ol><p>asdfjhaslkjdfhajkshdfkjh pargtaph</p><h2> Responcebility</h2><ul><li>unorderlist</li><li>sdfsd</li><li>asdfsa</li></ul><h3> color</h3><p><strong style="background-color: rgb(0, 138, 0);">asdfasfasdfasdfsdfasdfasdfsfadf</strong></p><p><span style="color: rgb(178, 178, 0);">asdfsdfasddaasdfasdfasdfasdfadf</span></p><p><u style="color: rgb(178, 178, 0);">aasdfasdfasfadfsfaasfdfasfasfd</u></p>');
  //   }
  // }, [quill]);

  const deletePost = async (job) => {
    const response = await fetch(`/api/jobs/${job._id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
    setHandlePost(true);
    //setModalOpen(false);
  };

  //Text='<%# Bind("<h1>tiltl</h1><h4>Content</h4>") %>'

  return (
    <div className='mt-20  '>
           {/* {jobs.map((job) =>
             

            //    <div
            //    style={{ padding: "10px", fontSize: "17px" }}
            //    //dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(job.descripition) }}
            //  ></div>

            <div style={{ width: 500, height: 300 }}>
               <div ref={quillRef} />
            </div>
               
           )} */}

          

        <div>
            <div class="p-5 h-screen w-screen md:w-auto bg-gray-100">
                 <div className='mb-2 w-auto h-auto flex  items-start justify-between'>
                    <div className=' text-2xl font-bold ' >Vacancy List</div>
                    <motion.button
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                        className="p-2 bg-blue-700 rounded-lg"
                        onClick={() => {
                         setModalOpen(true);
                         setModalType("dropIn");
                       }}
                       >
                        + New Vacancy
                    </motion.button>
                </div>
                <div className='mb-2 text-md  w-auto h-auto flex  items-start justify-between'>
                  <div className=' ' >
                     show
                     <span className='ml-2'>
                        <select>
                             <option>10</option>
                             <option>25</option>
                             <option>50</option>
                             <option>100</option>
                        </select>
                     </span>
                     <span className='ml-2'>entries</span>
                  </div>
                  <div className='ml-2 flex items-start'>
                      <div className=''> search:</div>
                      <input className='ml-2 border-none outline-none px-2  '></input>
                 </div>
               </div>
                
                <div class="overflow-auto rounded-lg shadow hidden md:block">
                   <table class="w-full">
                      <thead class="bg-gray-50 border-b-2 border-gray-200">
                      <tr>
                        <th class="w-20 p-3 text-sm font-semibold tracking-wide text-center">#</th>
                        <th class="p-3 text-sm font-semibold tracking-wide text-center">Vacancy Information</th>
                        <th class="w-24 p-3 text-sm font-semibold tracking-wide text-center">Availability</th>
                        <th class="w-24 p-3 text-sm font-semibold tracking-wide text-center">Status</th>
                        <th class="w-32 p-3 text-sm font-semibold tracking-wide text-center">Action</th>
                      </tr>
                      </thead>
                      <tbody class="divide-y divide-gray-100">
                         
                      {!useSSRPosts
                             ?realtimePosts.map((job) =>
                         <tr class="bg-white">
                           <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                             <a href="#" class="font-bold text-blue-500 hover:underline">{job.descripition}</a>
                           </td>
                           <td class="p-3 text-md font-semibold text-gray-700 whitespace-nowrap">
                             Position : {job.position}
                             <p className='text-xs font-normal'>{job.miniDesc}</p>
                           </td>
                           <td class="p-3 text-sm text-gray-700 whitespace-nowrap text-center">{job.avalablity}</td>
                           <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                           {job.status === "Active" ? ( <span
                             class="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50 ">{job.status}
                           </span>):(<span
                             class="p-1.5 text-xs font-medium uppercase tracking-wider text-yellow-800 bg-yellow-200 rounded-lg bg-opacity-50 ">{job.status}
                           </span>)}
                           </td>
                           <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                                <button className='ml-1 p-1.5 text-xs font-medium uppercase tracking-wider text-blue-800 bg-blue-200 rounded-md'>View</button>
                                <button className='ml-1 p-1.5 text-xs font-medium uppercase tracking-wider text-blue-800 bg-blue-200 rounded-md'>Edit</button>
                                <button   onClick={() => deletePost(job)}
                                 className='ml-1 p-1.5 text-xs font-medium uppercase tracking-wider text-red-800 bg-red-200 rounded-md'>Delete</button>
                           </td>
                         </tr>)
                         : jobs.map((job) =>
                         <tr class="bg-white">
                           <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                             <a href="#" class="font-bold text-blue-500 hover:underline">{job.descripition}</a>
                           </td>
                           <td class="p-3 text-md font-semibold text-gray-700 whitespace-nowrap">
                             Position : {job.position} 77
                             <p className='text-xs font-normal'>{job.miniDesc}</p>
                           </td>
                           <td class="p-3 text-sm text-gray-700 whitespace-nowrap text-center">{job.avalablity}</td>
                           <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                           {job.status === "Active" ? ( <span
                             class="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50 ">{job.status}
                           </span>):(<span
                             class="p-1.5 text-xs font-medium uppercase tracking-wider text-yellow-800 bg-yellow-200 rounded-lg bg-opacity-50 ">{job.status}
                           </span>)}
                           </td>
                           <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                                <button className='ml-1 p-1.5 text-xs font-medium uppercase tracking-wider text-blue-800 bg-blue-200 rounded-md'>View</button>
                                <button className='ml-1 p-1.5 text-xs font-medium uppercase tracking-wider text-blue-800 bg-blue-200 rounded-md'>Edit</button>
                                <button onClick={() => deletePost(job)}
                                 className='ml-1 p-1.5 text-xs font-medium uppercase tracking-wider text-red-800 bg-red-200 rounded-md'>Delete</button>
                           </td>
                         </tr> )} 

                      </tbody>
                    </table> 
                </div>
                <div className='mt-2 w-auto h-auto flex  items-start justify-between'>
                    <div className='' >Showing 1 to 10 of 11 entries</div>
                    <div className=''>Previous</div>
                </div>
                
         
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden">
                   <div class="bg-white space-y-3 p-4 rounded-lg shadow ">
                     <div class="flex items-center space-x-2 text-sm">
                       <div>
                         <a href="#" class="text-blue-500 font-bold hover:underline">#1000</a>
                       </div>
                       <div class="text-gray-500">10/10/2021</div>
                       <div>
                         <span
                           class="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">Delivered</span>
                       </div>
                     </div>
                     <div class="text-sm text-gray-700">
                       Kring New Fit office chair, mesh + PU, black
                     </div>
                     <div class="text-sm font-medium text-black">
                       $200.00
                     </div>
                   </div>

                   <div class="bg-white space-y-3 p-4 rounded-lg shadow">
                     <div class="flex items-center space-x-2 text-sm">
                       <div>
                         <a href="#" class="text-blue-500 font-bold hover:underline">#1001</a>
                       </div>
                       <div class="text-gray-500">10/10/2021</div>
                       <div>
                         <span
                           class="p-1.5 text-xs font-medium uppercase tracking-wider text-yellow-800 bg-yellow-200 rounded-lg bg-opacity-50">Shipped</span>
                       </div>
                     </div>
                     <div class="text-sm text-gray-700">
                       Kring New Fit office chair, mesh + PU, black
                     </div>
                     <div class="text-sm font-medium text-black">
                       $200.00
                     </div>
                   </div>

                   <div class="bg-white space-y-3 p-4 rounded-lg shadow">
                     <div class="flex items-center space-x-2 text-sm">
                       <div>
                         <a href="#" class="text-blue-500 font-bold hover:underline">#1000</a>
                       </div>
                       <div class="text-gray-500">10/10/2021</div>
                       <div>
                         <span
                           class="p-1.5 text-xs font-medium uppercase tracking-wider text-gray-800 bg-gray-200 rounded-lg bg-opacity-50">Cancelled</span>
                       </div>
                     </div>
                     <div class="text-sm text-gray-700">
                       Kring New Fit office chair, mesh + PU, black
                     </div>
                     <div class="text-sm font-medium text-black">
                       $200.00
                     </div>
                   </div>

                </div>
         </div>
        </div>  
    </div>
  )
}

        {/* <div className='bg-black rounded-lg m-7'>
           <div className='m-7 w-auto h-auto flex  items-start justify-between'>
               <div className='mt-2 text-2xl font-bold ' >Vacancy List</div>
               <div className=' mt-2 p-2 bg-blue-700 rounded-lg'>+ New Vacancy</div>
           </div>
           <div className='mx-7 mt-10 w-auto h-auto flex  items-start justify-between'>
               <div className='text-xl ' >
                   show
                   <span className='ml-2'>
                      <select>
                           <option>10</option>
                           <option>25</option>
                           <option>50</option>
                           <option>100</option>
                      </select>
                   </span>
                   <span className='ml-2'>entries</span>
                </div>
                <div className='ml-2 flex items-start'>
                    <div className='text-xl '> search:</div>
                    <input className='ml-2 -42 h-8'></input>
               </div>
           </div> */}
           
          
           
export default VacancyList