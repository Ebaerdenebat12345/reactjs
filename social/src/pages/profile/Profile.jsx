import "./profile.css"
import Topbar from "../../component/Topbar/Topbar";
import Sidebar from "../../component/sidebar/Sidebar";
import Feed from "../../component/feed/feed";
import Rightbar from "../../component/rightbar/Rightbar"

export default function Profile() {
  return (
    <>
         <Topbar/>
        <div className="profile">
        <Sidebar/>
        <div className="profileRight">
          <div className="profileRightTop">asdad</div>
          <div className="profileRightTopBottom">
             <Feed/>
             <Rightbar/>
          </div>
         </div>
      </div>
   
    </>
  )
}
