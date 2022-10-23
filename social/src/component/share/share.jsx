import "./share.css"
import {PermMedia,Room, EmojiEmotions, Label} from "@mui/icons-material"

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
                        <PermMedia htmlColor="tomato" className="shareIcon"/>
                        <span className="shareOptionText"> photo or video</span>
                    </div>
                    <div className="shareOption">
                        <Label htmlColor="blue" className="shareIcon"/>
                        <span className="shareOptionText"> Tag</span>
                    </div>
                    <div className="shareOption">
                        <Room htmlColor="green" className="shareIcon"/>
                        <span className="shareOptionText"> Location</span>
                    </div>
                    <div className="shareOption">
                        <EmojiEmotions htmlColor="goldenrod" className="shareIcon"/>
                        <span className="shareOptionText"> Feelings</span>
                    </div>
                    <button className="shareButton">share</button>
                </div>
            </div>


        </div>
        
    </div>
  )
}
