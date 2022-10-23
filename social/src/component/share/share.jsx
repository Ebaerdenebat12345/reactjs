import "./share.css"
import {PermMedia} from "@mui/icons-material"

export default function Share() {
  return (
    <div className="share">
        <div className="shareWrapper">
            <div className="shareTop">
            <img className="shareProfileImg" src="/ebabaa/person/team.webp" alt="" />
                <input
                 placeholder="what is in your mind safak?"
                  className="shareInput"
                 />
            </div>
            <hr className="shareHr"/>
            <div className="sharebottom">
                <div className="shareOptions">
                    <div className="shareOption">
                        <PermMedia className="shreIcon"/>
                        <span className="shareOptionText"> photo or video</span>
                    </div>
                </div>
            </div>


        </div>
        
    </div>
  )
}
