import "./CommentSection.scss";

function CommentSection({comment}) {
  return (
    <>
      <div className="comment-section">
        <div>
          <div className="empty-avatar"></div>
        </div>
        <div>
          <div className="comment-name__date">
            <h4>{comment.name}</h4>
            <h4 className="comment-timestamp">
              {new Date(comment.timestamp).toLocaleDateString()}
            </h4>
          </div>
          <p>{comment.comment}</p>
        </div>
      </div>
      <div className="divider">&nbsp;</div>
    </>
  );
}

export default CommentSection;
