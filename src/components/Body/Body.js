import videoDetailsData from '../../data/video-details.json';
import './Body.scss';
import likes from '../../assets/images/likes.svg'
import upload from '../../assets/images/upload.svg'
import Comments from '../Comments/Comments';
import NextVideo from '../NextVideo/NextVideo';
import videosData from '../../data/videos.json'
import { useState } from 'react';



function Body() {

    const [videos, setVideos] = useState(videosData);
    const [videoDetails, setVideoDetails] = useState(videoDetailsData[0]);

    const filteredVideos = videos.filter((video) => video.id !== videoDetails.id)


    const date = new Date(videoDetails.timestamp).toLocaleDateString()

    function handleSelectVideo(videoId) {
        console.log('handleSelectVideo',videoId)
        const foundVideo = videoDetailsData.find((video) => video.id === videoId)
        setVideoDetails(foundVideo);

    }


    return (
        <>
        <div className='container-image'>
            <video  className='video__Red-Cow' poster={videoDetails.image}></video>
        </div>
        <div className='comment'>
            <h1>{videoDetails.title}</h1>
            <div className='divider'>&nbsp;</div>
        </div>
        <div className='container-commenter'>
            <div className='commentator-div'>
                <h4 className='commentator-name'>By {videoDetails.channel}</h4>
            </div>
            <div className='commentator-div'>
                <h4 className='commentator-font' id='commentator-date'>{date}</h4>
            </div>
            <div className='commentator-div'>
                <h4 className='commentator-font'>
                <img className='commentator-views' src={upload} alt='' />{videoDetails.views}</h4>
            </div>
            <div className='commentator-div'>
                <h4 className='commentator-font'>
                <img className='commmentator-likes' src={likes} alt=''  />{videoDetails.likes}</h4>
                
            </div>
            
         </div>
         <div className='divider'>&nbsp;</div>
        <div className='video-commentary'>
            <p className='video-commentary__paragraph'>{videoDetails.description}
            </p>
        </div>
        <Comments
         video={videoDetails}
         />   
        <NextVideo 
        videos={filteredVideos}
        selectVideo={handleSelectVideo}
        />
        </>
        );
    }

export default Body;