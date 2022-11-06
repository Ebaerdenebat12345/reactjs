import "./rightbar.css"
import {Users} from "../../dummyData"

export default function Rightbar(){
    return(
        <div className="rightbar">
            <div className="rightbarWrapper">
                <div className="birthdayContainer"> 
                <img className="birthdayImg" src="ebabaa/gift.png" alt="" />
                <span className="birthdayText"><b>tumruu ba </b>tvvnii naizuudiin uur hurgesen aaaaaaaaaa <b>birthday</b></span>
                </div>
                <img className="rightbarAd" src="ebabaa/images.jpg" alt="" />
                <h4 className="rightbarTitle">online friends</h4>
                <ul className="rightbarFriendList">
                    {Users.map((u) => (
                        <Online key={u.id} user={u} />
                    ))}                    
                </ul>
            </div>

        </div>
    )
}
