import './CommentDetails.scss'


function CommentDetails ({videoDetails}) {
    return (
        <>
            <main>
                <div className='divider'>&nbsp;</div>
                <div className='video-commentary'>
                    <p className='video-commentary__paragraph'>{videoDetails.description}</p>
                </div>
                <div>
                    <h4 className='comments-number'>{videoDetails.comments.length} comments</h4> 
                </div>
            </main>
            
        </>
    )
}

export default CommentDetails;