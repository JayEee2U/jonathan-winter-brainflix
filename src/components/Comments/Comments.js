import MohanM from '../../assets/images/Mohan-muruge.jpg'
import './Comments.scss'




function Comments({video}) {



  return (
    <>
      <div className="new-comment__section">
          <div className="avatar-div">
            <img className="avatar" src={MohanM} alt="Mohan Muruge" />
          </div>
        <div className='next-header'>
          <h3 className="next-header__intro">JOIN THE CONVERSATION</h3>
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
        <div className="comment-section">
          <div >
            <img className="empty-avatar" placeholder="" alt="" />
          </div>
          <div>
            <h3>{c.name}</h3>
          </div>
          <div>
            <p>{c.comment}</p>
          </div>
          <div>
            <h3 className='comment-timestamp'>{new Date(c.timestamp).toLocaleDateString()}</h3>
          </div>
          <div className="divider">&nbsp;</div>
        </div>
      ))}
      
     
    </>
  );
}

export default Comments;