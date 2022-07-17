
import SideNavbar from '../../components/admin/SideNavbar'
import StatusForm from '../../components/admin/StatusForm'

function status() {
  return (
    <div>
        <div className='flex'>
           <SideNavbar/>
           <StatusForm/>
        </div>
    </div>
  )
}

export default status