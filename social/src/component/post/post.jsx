import "./post.css"
import {MoreVert} from "@mui/icons-material"

export default function post() {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            
            <span className="postUsername">safak kacaoglu</span>
            <span className="postDate">5 mins ago</span>

          </div>
          <div className="postTopRight">
            <MoreVert/>
          </div>

        </div>
        <div className="postCenter"></div>
        <div className="postBottom"></div>

        
         </div>
        
    </div>
  )
}
