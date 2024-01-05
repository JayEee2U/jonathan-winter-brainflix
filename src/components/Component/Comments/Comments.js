import MohanM from '../../../assets/images/Mohan-muruge.jpg'
import '../Comments/Comments.scss'




function Comments({video}) {



  return (
    <>
      <div className="new-comment__section">
          <div className="avatar-div">
            <h3 className="next-header__intro">JOIN THE CONVERSATION</h3>
            <img className="avatar-mohan" src={MohanM} alt="Mohan Muruge" />
            <input className='new-comment__input' type="text" placeholder="Add a new comment"></input>
          </div>
        <div className="button-comment">
          <button type="button">COMMENT</button>
        </div>
      </div>
      <div className="divider">&nbsp;</div>
      {video.comments.map((c) => (
        <>
        <div className="comment-section">
          <div >
            <div className="empty-avatar"></div>
          </div>
          <div>
            <div className='comment-name__date'>
              <h4>{c.name}</h4>
              <h4 className='comment-timestamp'>{new Date(c.timestamp).toLocaleDateString()}</h4>
            </div>
            <p>{c.comment}</p>
          </div>
        </div>
        <div className="divider">&nbsp;</div>
        </>
      ))}
      
     
    </>
  );
}

export default Comments;