import "./sidebar.css"
import {RssFeed} from "@mui/icons-material"
import {Group} from "@mui/icons-material"
import {Bookmark} from "@mui/icons-material"
import {HelpOutline} from "@mui/icons-material"
import {WorkOutline} from "@mui/icons-material"
import {Event} from "@mui/icons-material"
import {School} from "@mui/icons-material"
import {Chat} from "@mui/icons-material"

 

export default function sidebar(){
    return(
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <RssFeed className="sidebarIcon"/>
                        <span className="sidebarListItemText">Feed</span>

                    </li>
                    <li className="sidebarListItem">
                        < Chat className="sidebarIcon"/>
                        <span className="sidebarListItemText">Chat</span>

                    </li>
                    <li className="sidebarListItem">
                        <Group className="sidebarIcon"/>
                        <span className="sidebarListItemText">Groups</span>
                    </li>
                    <li className="sidebarListItem">
                        < Bookmark className="sidebarIcon"/>
                        <span className="sidebarListItemText">Bookmarks</span>
                    </li>
                    <li className="sidebarListItem">
                        < HelpOutline className="sidebarIcon"/>
                        <span className="sidebarListItemText"> Questions </span>
                    </li>
                    <li className="sidebarListItem">
                        < WorkOutline className="sidebarIcon"/>
                        <span className="sidebarListItemText"> Jobs </span>
                    </li>
                    <li className="sidebarListItem">
                        < Event className="sidebarIcon"/>
                        <span className="sidebarListItemText"> Events </span>
                    </li>
                    <li className="sidebarListItem">
                        < School className="sidebarIcon"/>
                        <span className="sidebarListItemText"> courses </span>
                    </li>
                    
                </ul>
                <button className="sidebarButton">show more </button>
                <hr className="sidebarHr"/>
                <ul className="sidebarFriendList">
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/ebabaa/person/team.webp" alt="" />
                        <span className="sidebarFriendName"> Jane Doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/ebabaa/person/team.webp" alt="" />
                        <span className="sidebarFriendName"> Jane Doe</span>
                    </li> <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/ebabaa/person/team.webp" alt="" />
                        <span className="sidebarFriendName"> Jane Doe</span>
                    </li> <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/ebabaa/person/team.webp" alt="" />
                        <span className="sidebarFriendName"> Jane Doe</span>
                    </li> <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/ebabaa/person/team.webp" alt="" />
                        <span className="sidebarFriendName"> Jane Doe</span>
                    </li> <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/ebabaa/person/team.webp" alt="" />
                        <span className="sidebarFriendName"> Jane Doe</span>
                    </li> <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/ebabaa/person/team.webp" alt="" />
                        <span className="sidebarFriendName"> Jane Doe</span>
                    </li> <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/ebabaa/person/team.webp" alt="" />
                        <span className="sidebarFriendName"> Jane Doe</span>
                    </li> <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/ebabaa/person/team.webp" alt="" />
                        <span className="sidebarFriendName"> Jane Doe</span>
                    </li> <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/ebabaa/person/team.webp" alt="" />
                        <span className="sidebarFriendName"> Jane Doe</span>
                    </li> <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/ebabaa/person/team.webp" alt="" />
                        <span className="sidebarFriendName"> Jane Doe</span>
                    </li>
                
                </ul>
            </div>
        </div>
    )
}