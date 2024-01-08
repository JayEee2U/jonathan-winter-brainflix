import { useState, useEffect } from 'react'
import DisplayComments from '../DisplayComments/DisplayComments';
import CommentDetails from '../CommentDetails/CommentDetails';
import Comments from '../Comments/Comments';
import axios from 'axios'
import './VideoDetails.scss'

// "api_key": a17db974-718e-478d-9ac6-501d706d447b"

function VideoDetails({videoId}) {

    const [videoDetails, setVideoDetails] = useState(null);
// console.log(`https://project-2-api.herokuapp.com/videos/${videoId}?api_key=a17db974-718e-478d-9ac6-501d706d447b`)
    useEffect(() =>{
        console.log(videoId)
        const getVideo = async () => {
            const response = await axios.get(`https://project-2-api.herokuapp.com/videos/${videoId}?api_key=a17db974-718e-478d-9ac6-501d706d447b`);
            setVideoDetails(response.data);
        }
        getVideo();
    },[videoId]);

    if(videoDetails === null){
        return <div>Loading...</div>
    }

  return (
    <>
      <main className='main-margin'>
        <div className="container-image">
          <video
            className="video__Red-Cow"
            controls
            poster={videoDetails.image}
          >
            Your browwser does not support the video tag
          </video>
        </div>
        <div className="breakpoint-desktop" />
        {/* <div className='comments-breakpoint'> */}
        <div className="comment">
          <h1>{videoDetails.title}</h1>
          <div className="divider">&nbsp;</div>
        </div>
      </main>
      <div>
        <DisplayComments videoDetails={videoDetails} />
      </div>
      <div>
        <CommentDetails videoDetails={videoDetails} />
      </div>
      <div>
        <Comments video={videoDetails} />
      </div>
    </>
  );
}

export default VideoDetails;
