import { useState } from "react";
import Add from "./Add";
import MultiStep from "./MultiStep"


function ApplicationsList() {
    const [close, setClose] = useState(true)

  return (
    
        <div className='mt-20  '>
        <div className='flex items-start justify-center'>
            <div class="p-5 md:w-auto bg-gray-100">
                 <div className='mb-2 w-auto h-auto flex  items-start justify-between'>
                    <div className=' text-2xl font-bold ' >Appication List</div>
                    <div className=' p-2 bg-blue-700 rounded-lg' onClick={() => setClose(false)}>+ New Applicant</div>
                    
                </div>
                {!close && <MultiStep setClose={setClose} />}   
                {/* // pizza 2:22 time */}
                <div className='flex items-center justify-center mb-2'>
                    <div className=' text-xl font-semibold ' >Position :</div>
                    <span className='ml-2 '>
                        <select className='border-none outline-none px-2 '>
                             <option>All</option>
                             <option>web developer</option>
                             <option>50</option>
                             <option>100</option>
                        </select>
                     </span>
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
                      <input className='ml-2 border-none outline-none px-2 '></input>
                 </div>
               </div>
                
                <div class="overflow-auto rounded-lg shadow hidden md:block">
                   <table class="w-full">
                      <thead class="bg-gray-50 border-b-2 border-gray-200">
                      <tr>
                        <th class="w-20 p-3 text-sm font-semibold tracking-wide text-center">#</th>
                        <th class="p-3 text-sm font-semibold tracking-wide text-center">Applicant Information</th>
                        <th class="w-24 p-3 text-sm font-semibold tracking-wide text-center">Status</th>
                        <th class="w-32 p-3 text-sm font-semibold tracking-wide text-center">Action</th>
                      </tr>
                      </thead>
                      <tbody class="divide-y divide-gray-100">
                         <tr class="bg-white">
                           <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                             <a href="#" class="font-bold text-blue-500 hover:underline">1</a>
                           </td>
                           <td class="p-3 text-md font-semibold text-gray-700 whitespace-nowrap">
                             Name : Robel Gulima
                             <p className='text-xs font-normal'> Applied for : web developer</p>
                           </td>
                           <td class="p-3 text-sm text-gray-700 whitespace-nowrap text-center">New</td>
                           <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                                <button className='ml-1 p-1.5 text-xs font-medium uppercase tracking-wider text-blue-800 bg-blue-200 rounded-md'>View</button>
                                <button className='ml-1 p-1.5 text-xs font-medium uppercase tracking-wider text-blue-800 bg-blue-200 rounded-md'>Edit</button>
                                <button className='ml-1 p-1.5 text-xs font-medium uppercase tracking-wider text-red-800 bg-red-200 rounded-md'>Delete</button>
                           </td>
                         </tr>
                         <tr class="bg-gray-50">
                             <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                               <a href="#" class="font-bold text-blue-500 hover:underline">10002</a>
                             </td>
                             <td class="p-3 text-md font-semibold text-gray-700 whitespace-nowrap">
                             Position : Web Developer
                             <p className='text-xs font-normal'>fghklhklfjdg   asfhdkhkjh  sdafhkjh   asdfhkhasdkfj</p>
                           </td>
                             <td class="p-3 text-sm text-gray-700 whitespace-nowrap text-center">New</td>
                             <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                                <button className='ml-1 p-1.5 text-xs font-medium uppercase tracking-wider text-blue-800 bg-blue-200 rounded-md'>View</button>
                                <button className='ml-1 p-1.5 text-xs font-medium uppercase tracking-wider text-blue-800 bg-blue-200 rounded-md'>Edit</button>
                                <button className='ml-1 p-1.5 text-xs font-medium uppercase tracking-wider text-red-800 bg-red-200 rounded-md'>Delete</button>
                             </td>
                        </tr>
                        <tr class="bg-white">
                             <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                               <a href="#" class="font-bold text-blue-500 hover:underline">10002</a>
                             </td>
                             <td class="p-3 text-md font-semibold text-gray-700 whitespace-nowrap">
                             Position : Web Developer
                             <p className='text-xs font-normal'>fghklhklfjdg   asfhdkhkjh  sdafhkjh   asdfhkhasdkfj</p>
                           </td>
                             <td class="p-3 text-sm text-gray-700 whitespace-nowrap text-center">New</td>
                             <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                                <button className='ml-1 p-1.5 text-xs font-medium uppercase tracking-wider text-blue-800 bg-blue-200 rounded-md'>View</button>
                                <button className='ml-1 p-1.5 text-xs font-medium uppercase tracking-wider text-blue-800 bg-blue-200 rounded-md'>Edit</button>
                                <button className='ml-1 p-1.5 text-xs font-medium uppercase tracking-wider text-red-800 bg-red-200 rounded-md'>Delete</button>
                             </td>
                           </tr>
                      </tbody>
                    </table> 
                </div>
                <div className='mt-2 w-auto h-auto flex  items-start justify-between'>
                    <div className='' >Showing 1 to 10 of 11 entries</div>
                    <div className=''>Previous</div>
                </div>
          </div>
          

          <div className='bg-black rounded-lg p-3'>
            <div className='statusbtn'>All</div>
            <div className='statusbtn'>New</div>
            <div className='statusbtn'>For Initial Interview</div>
            <div className='statusbtn'>Passed II</div>
            <div className='statusbtn'>Failed</div>
            <div className='statusbtn'>For Final Interview</div>
            <div className='statusbtn'>Passed FI</div>
            <div className='statusbtn'>Failed FI</div>
            <div className='statusbtn'>For Pooling</div>
            <div className='statusbtn'>Job Offer</div>
            <div className='statusbtn'>Hired</div>
            <div className='statusbtn'>Withdraw Application</div>
          
          </div>


          </div>      
    </div>
  )
}

export default ApplicationsList