import "./Body.scss";
import Comments from "../Comments/Comments";
import NextVideo from "../NextVideo/NextVideo";
import { useState, useEffect } from "react";
import Header from "../Header/Header";
import DisplayComments from "../DisplayComments/DisplayComments";
import CommentDetails from "../CommentDetails/CommentDetails";
import { useParams } from "react-router-dom";
import VideoDetails from "../VideoDetails/VideoDetails";
import axios from 'axios'
// "api_key": "da04b08a-6430-435f-8c66-a8d95bdeaaa2"

function Body() {
  const [videos, setVideos] = useState([]);

 
  
  const { videoId } = useParams();

  const defaultVideoId = videos[0]?.id;

  const videoIdToDisplay = videoId ?? defaultVideoId;

  const filteredVideos = videos.filter((video) => video.id !== videoIdToDisplay);

  

    useEffect(()=>{
        const getVideos = async ()=> {
            const response = await axios.get(`https://project-2-api.herokuapp.com/videos/?api_key=a17db974-718e-478d-9ac6-501d706d447b`);
            setVideos(response.data)
        }
        getVideos()
    },[]);

    if(!videoIdToDisplay){
        return <div>Loading...</div>
    }

  return (
    <>
      <div>
        <Header />
      </div>
     <div>
        <VideoDetails videoId={videoIdToDisplay}/>
     </div>
      <div>
        <NextVideo videos={filteredVideos}  />
      </div>
    </>
  );
}

export default Body;
