import Topbar from "../../component/Topbar/Topbar";
import Sidebar from "../../component/sidebar/Sidebar";
import Feed from "../../component/feed/feed";
import Rightbar from "../../component/rightbar/Rightbar"
import "./home.css"


export default function Home() {
  return (
    <>
    <Topbar/>
    <div className="homeContainer">
    <Sidebar/>
    <Feed/>
    <Rightbar/>

    </div>
   
    </>
  );
}
