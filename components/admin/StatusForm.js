

function StatusForm() {
  return (
    <div className='mt-20  '>
        <div className='m-5 flex items-start justify-center'>
           <div className='bg-gray-400 p-3 w-72 rounded-md '>
               <div className='mb-3 text-xl font-bold'>
                   Status Form
               </div>
               <div>
                   Status
                   <div>
                   <textarea name="textarea" className='ml-2 border-none outline-none px-2 w-60  rounded-md '></textarea>
                   </div>
               </div>
               <div className='mt-3 text-end'>
                  <button className='ml-1 p-1.5 text-xs font-medium uppercase tracking-wider text-blue-800 bg-blue-200 rounded-md'>Save</button>
                  <button className='ml-1 p-1.5 text-xs font-medium uppercase tracking-wider text-red-800 bg-red-200 rounded-md'>Cancle</button>
               </div>
           </div>

           <div class="ml-6 overflow-auto rounded-lg shadow hidden md:block">
                   <table class="w-full">
                      <thead class="bg-gray-50 border-b-2 border-gray-200">
                      <tr>
                        <th class="w-20 p-3 text-sm font-semibold tracking-wide text-center">#</th>
                        <th class="w-24 p-3 text-sm font-semibold tracking-wide text-center">Status Category</th>
                        <th class="w-32 p-3 text-sm font-semibold tracking-wide text-center">Action</th>
                      </tr>
                      </thead>
                      <tbody class="divide-y divide-gray-100">
                         <tr class="bg-white">
                           <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                             <a href="#" class="font-bold text-blue-500 hover:underline">1</a>
                           </td>
                           <td class="p-3 text-sm text-gray-700 whitespace-nowrap text-center">New</td>
                           <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                                <button className='ml-1 p-1.5 text-xs font-medium uppercase tracking-wider text-blue-800 bg-blue-200 rounded-md'>Edit</button>
                                <button className='ml-1 p-1.5 text-xs font-medium uppercase tracking-wider text-red-800 bg-red-200 rounded-md'>Delete</button>
                           </td>
                         </tr>
                         <tr class="bg-gray-50">
                             <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                               <a href="#" class="font-bold text-blue-500 hover:underline">2</a>
                             </td>
                             <td class="p-3 text-sm text-gray-700 whitespace-nowrap text-center">New</td>
                             <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                                <button className='ml-1 p-1.5 text-xs font-medium uppercase tracking-wider text-blue-800 bg-blue-200 rounded-md'>Edit</button>
                                <button className='ml-1 p-1.5 text-xs font-medium uppercase tracking-wider text-red-800 bg-red-200 rounded-md'>Delete</button>
                             </td>
                        </tr>
                        <tr class="bg-white">
                             <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                               <a href="#" class="font-bold text-blue-500 hover:underline">3</a>
                             </td>
                             <td class="p-3 text-sm text-gray-700 whitespace-nowrap text-center">New</td>
                             <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                                <button className='ml-1 p-1.5 text-xs font-medium uppercase tracking-wider text-blue-800 bg-blue-200 rounded-md'>Edit</button>
                                <button className='ml-1 p-1.5 text-xs font-medium uppercase tracking-wider text-red-800 bg-red-200 rounded-md'>Delete</button>
                             </td>
                           </tr>
                      </tbody>
                    </table> 
                </div>


        </div>
    </div>
  )
}

export default StatusForm