import './DisplayComments'
import likes from '../../../assets/images/likes.svg'
import views from '../../../assets/images/views.svg'
import videoDetails from '../../../data/video-details.json';
import videosData from '../../../data/videos.json'

function DisplayComments ({videoDetails}) {
    return (
        <>
            <main className='container-commenter'>
                <div className='commentator-div'>
                    <h4 className='commentator-name'>By {videoDetails.channel}</h4>
                </div>
                <div className='commentator-div commentator-img'>
                    <img className='commentator-views' src={views} alt='views' />
                    <h4 className='commentator-font'>{videoDetails.views}</h4>
                </div>
                <div className='commentator-div'>
                    <h4 className='commentator-font '>{videoDetails.date}</h4>
                </div>
                
                <div className='commentator-div commentator-img'>
                    <img className='commmentator-likes' src={likes} alt='likes'  />
                    <h4 className='commentator-font'>{videoDetails.likes}</h4>    
                </div>
            </main>
        </>
    );
}

export default DisplayComments;