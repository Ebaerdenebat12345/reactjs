import "./share.css"

export default function Share() {
  return (
    <div className="share">
        <div className="shareWrapper">
            <div className="shareTop">
                <img className="shareProfileImg" src="/ebabaa/person/gift.png" alt="" />
                <input
                 placeholder="what is in your mind safak?"
                  className="shareInput"
                 />
            </div>
            <hr className="shareHr"/>
            <div className="sharebottom">
                <div className="shareOptions">
                    <div className="shareOption">
                        <span className="shareOptionText"> photo or video</span>
                    </div>
                </div>
            </div>


        </div>
        
    </div>
  )
}
