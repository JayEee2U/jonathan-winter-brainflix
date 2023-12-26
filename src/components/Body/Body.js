import videosDetails from '../../data/video-details.json';
import './Body.scss';
import likes from '../../assets/images/likes.svg'
import upload from '../../assets/images/upload.svg'
import Comments from '../Comments/Comments';
import NextVideo from '../NextVideo/NextVideo';
import videos from '../../data/videos.json'


const video = videosDetails[0]

function Body() {
    console.log(videosDetails)

    const date = new Date(video.timestamp).toLocaleDateString()

    return (
        <>
        <div className='container-image'>
            <video  className='video__Red-Cow' poster={video.image} controls></video>
            {/* <img  className='image_Red-Cow' src={video.image} alt=' ' /> */}
        </div>
        <div className='comment'>
            <h1>{video.title}</h1>
            <div className='divider'>&nbsp;</div>
        </div>
        <div className='container-commenter'>
            <div className='commentator'>
                <h4 className='commentator-name'>By {video.channel}</h4>
            </div>
            <div>
                <h4 className='commentator-font' className='commentator-date'>{date}</h4>
            </div>
            <div>
                <img className='commentator-views' src={upload} alt='' /><h4>{video.views}</h4>
            </div>
            <div>
                <img className='commmentator-likes' src={likes} alt=''  /><h4>{video.likes}</h4>
                
            </div>
            
         </div>
         <div className='divider'>&nbsp;</div>
        <div className='video-commentary'>
            <p className='video-commentary__paragraph'>{video.description}
            </p>
        </div>
        <Comments video={video} />   
        <NextVideo videos={videos}/>
        </>
        );
    }

export default Body;