import Topbar from "../../component/Topbar/Topbar";
import Sidebar from "../../component/sidebar/Sidebar";
import Feed from "../../component/feed/feed";
import Rightbar from "../../component/rightbar/Rightbar";
import {sendRequest,urlLookup} from "../../settings/settings";
import { useState,useEffect } from "react";
import "./home.css";
import { Button, notification } from 'antd';

const openNotification = (title, desc) => {
  notification.open({
    message: title,
    description:
    desc,
    onClick: () => {
      console.log(desc + ' Clicked!');
    },
  });
};

export default function Home() {
  const [datas, setDatas] = useState();
 useEffect(() => {
  const bodyChiglel = {
    action: "chiglel",
  };
  sendRequest(urlLookup, bodyChiglel).then((data) => setDatas(data));
 },[]); 

 const DisplayData=datas && datas.data.map((gazar)=>{
  return (
   <div key={gazar.chiglelnum}>
     <h5>
     {/* <Button >Primary Button</Button> */}
      <Button type="primary"  onClick={()=>openNotification(gazar.chiglelnum, gazar.chiglelname)}>
     {gazar.chiglelname}</Button></h5>
     <br/>
   </div>
  )
});

  return (
    <>
    {DisplayData}
    <p>{datas && JSON.stringify(datas.data)}</p>
      <Topbar />
      <div className="homeContainer">
        <Sidebar />
        <Feed />
        <Rightbar />
      </div>
    </>
  );
}
