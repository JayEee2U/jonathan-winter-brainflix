import MohanM from '../../../assets/images/Mohan-muruge.jpg'
import CommentSection from '../../CommentSection/CommentSection';
import CommentDetails from '../CommentDetails/CommentDetails';
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
      {video.comments.map((comment) => (<CommentSection 
        key={comment.id}
        comment={comment}
      />))}
      
    </>
  );
}

export default Comments;