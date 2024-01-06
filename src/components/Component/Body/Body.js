import videoDetailsData from '../../../data/video-details.json';
import './Body.scss';
import Comments from '../Comments/Comments';
import NextVideo from '../NextVideo/NextVideo';
import videosData from '../../../data/videos.json'
import { useState } from 'react';
import Header from '../Header/Header';
import DisplayComments from '../DisplayComments/DisplayComments';



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
            <div>
            <Header />
            </div>
                <main>
                    <div className='container-image'>
                        <video  className='video__Red-Cow' controls poster={videoDetails.image}>Your browwser does not support the video tag</video>
                    </div>
                    <hr className='breakpoint-desktop' />
                    {/* <div className='comments-breakpoint'> */}
                        <div className='comment'>
                        <h1>{videoDetails.title}</h1>
                        <div className='divider'>&nbsp;</div>
                    </div>   
                </main>
            <div>
            <DisplayComments />
            </div>    
            <div>
            <Comments
                video={videoDetails}/>
            </div>
            <div>
                <NextVideo videos={filteredVideos}selectVideo={handleSelectVideo}/>
            </div>
        </>

        
    );
}

export default Body;