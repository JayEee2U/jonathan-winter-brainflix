import MohanM from '../../assets/images/Mohan-muruge.jpg'
import videos from '../../data/videos.json'



function Comments({video}) {



  return (
    <>
      <div className="newCommentSection">
        <div>
          <div className="avatar-div">
            <img className="avatar" src={MohanM} alt="Mohan Muruge" />
          </div>
        </div>
        <div>
          <h3 className="nextHeader">JOIN THE CONVERSATION</h3>
        </div>
        <div className="input">
          <input type="text" placeholder="Add a new comment"></input>
        </div>
        <div className="button">
          <button type="button">COMMENT</button>
        </div>
      </div>
      <div className="divider">&nbsp;</div>
      {video.comments.map((c) => (
        <div className="commentSection">
          <div>
            <h3>{c.name}</h3>
          </div>
          <div>
            <p>{c.comment}</p>
          </div>
          <div>
            <h3>{new Date(c.timestamp).toLocaleDateString()}</h3>
          </div>
          <div className="divider">&nbsp;</div>
        </div>
      ))}
      <div>
        <h3 className="nextHeader">NEXT VIDEOS</h3>
      </div>

      <div>
        {videos.map((v) => (
          <div className="videoSection">
            <div className="nextVideoDiv">
              <img className="nextVideoImage" src={v.image} alt="" />
            </div>
            <div>
              <h3 className="nextVideoElement">{v.title}</h3>
            </div>
            <div>
              <h3 className="nextVideoElement">{v.channel}</h3>
            </div>
          </div>
        ))}
      </div>
     
    </>
  );
}

export default Comments;