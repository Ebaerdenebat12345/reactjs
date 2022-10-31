import "./post.css"
import {MoreVert} from "@mui/icons-material"

export default function post() {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img 
            className="postProfileImg"
            src="ebabaa/person/teamm.png "
            />
            <span className="postUsername">safak kacaoglu</span>
            <span className="postDate">5 mins ago</span>

          </div>
          <div className="postTopRight">
            <MoreVert/>
          </div>

        </div>
        <div className="postCenter">
          <span className="postText"></span>
          <img className="postImg" src="ebabaa/person/teamm.png" alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src="ebabaa/like.png" alt="" />
            <img className="likeIcon" src="ebabaa/heart.jpg" alt="" />
            <span className="postLikeCounter">32 people like it</span>

          </div>
          <div className="postBottomRight">
            <span className="postCommentText">9comment</span>
          </div>

        </div>

        
         </div>
        
    </div>
  )
}
