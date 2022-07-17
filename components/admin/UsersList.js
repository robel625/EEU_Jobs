import { useSession } from "next-auth/react";



function UsersList() {
  const { data: session } = useSession();

 

  return (
    <div className='mt-20'>
        <div className='m-5 '>
            <div className='flex items-start justify-between'>
               <div className=' text-2xl font-bold ' >Users</div>
               <div className=' mb-5 p-2 bg-blue-700 rounded-lg w-auto '> + New user</div>
           </div>

           <div class=" overflow-auto rounded-lg shadow hidden md:block">
                   <table class="w-full">
                      <thead class="bg-gray-50 border-b-2 border-gray-200">
                      <tr>
                        <th class="w-20 p-3 text-sm font-semibold tracking-wide text-center">#</th>
                        <th class="w-24 p-3 text-sm font-semibold tracking-wide text-center">Name</th>
                        <th class="w-24 p-3 text-sm font-semibold tracking-wide text-center">UserName</th>
                        <th class="w-24 p-3 text-sm font-semibold tracking-wide text-center">User Type</th>
                        <th class="w-32 p-3 text-sm font-semibold tracking-wide text-center">Action</th>
                      </tr>
                      </thead>
                      <tbody class="divide-y divide-gray-100">
                         <tr class="bg-white">
                           <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                             <a href="#" class="font-bold text-blue-500 hover:underline">1</a>
                           </td>
                           <td class="p-3 text-sm text-gray-700 whitespace-nowrap text-center">Administrator</td>
                           <td class="p-3 text-sm text-gray-700 whitespace-nowrap text-center">Admin</td>
                           <td class="p-3 text-sm text-gray-700 whitespace-nowrap text-center">staff</td>
                           <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                                <button className='ml-1 p-1.5 text-xs font-medium uppercase tracking-wider text-blue-800 bg-blue-200 rounded-md'>Edit</button>
                                <button className='ml-1 p-1.5 text-xs font-medium uppercase tracking-wider text-red-800 bg-red-200 rounded-md'>Delete</button>
                           </td>
                         </tr>
                         <tr class="bg-gray-50">
                             <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                               <a href="#" class="font-bold text-blue-500 hover:underline">2</a>
                             </td>
                             <td class="p-3 text-sm text-gray-700 whitespace-nowrap text-center">Administrator</td>
                             <td class="p-3 text-sm text-gray-700 whitespace-nowrap text-center">Admin</td>
                             <td class="p-3 text-sm text-gray-700 whitespace-nowrap text-center">staff</td> 
                             <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                                <button className='ml-1 p-1.5 text-xs font-medium uppercase tracking-wider text-blue-800 bg-blue-200 rounded-md'>Edit</button>
                                <button className='ml-1 p-1.5 text-xs font-medium uppercase tracking-wider text-red-800 bg-red-200 rounded-md'>Delete</button>
                             </td>
                        </tr>
                        <tr class="bg-white">
                             <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                               <a href="#" class="font-bold text-blue-500 hover:underline">3</a>
                             </td>
                             <td class="p-3 text-sm text-gray-700 whitespace-nowrap text-center">Administrator</td>
                             <td class="p-3 text-sm text-gray-700 whitespace-nowrap text-center">Admin</td>
                             <td class="p-3 text-sm text-gray-700 whitespace-nowrap text-center">staff</td>
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

export default UsersList