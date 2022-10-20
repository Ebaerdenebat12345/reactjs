import "./topbar.css"
import { Search} from "@mui/icons-material"

export default function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft"> 
      <span className="logo">Lamasocial</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
        <Search/>
        <input placeholder="search for friend, post or video " className="searchinput" />

        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks"></div>

      </div>
      
    </div>
  )
}
