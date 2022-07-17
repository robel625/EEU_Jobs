
import SideNavbar from '../../components/admin/SideNavbar'
import TextEditor from '../../components/admin/TextEditor'
import UsersList from '../../components/admin/UsersList'

function users() {
  return (
    <div>
        <div className='flex'>
           <SideNavbar/>
           <UsersList/>
           <TextEditor/>
        </div>
    </div>
  )
}

export default users