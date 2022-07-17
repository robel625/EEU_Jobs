
import SideNavbar from '../../components/admin/SideNavbar'
import HomeAdmin from '../../components/admin/HomeAdmin'

function index() {
  return (
    <div>
       <div className='flex'>
           <SideNavbar/>
           <HomeAdmin/>
        </div>
    </div>
  )
}

export default index