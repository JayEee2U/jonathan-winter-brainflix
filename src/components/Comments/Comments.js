import MohanM from '../../assets/images/Mohan-muruge.jpg'




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
      
     
    </>
  );
}

export default Comments;