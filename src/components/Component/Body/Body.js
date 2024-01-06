import videoDetailsData from "../../../data/video-details.json";
import "./Body.scss";
import Comments from "../Comments/Comments";
import NextVideo from "../NextVideo/NextVideo";
import videosData from "../../../data/videos.json";
import { useState } from "react";
import Header from "../Header/Header";
import DisplayComments from "../DisplayComments/DisplayComments";
import CommentDetails from "../CommentDetails/CommentDetails";
import { useParams } from "react-router-dom";
import VideoDetails from "../VideoDetails/VideoDetails";

// "api_key": "da04b08a-6430-435f-8c66-a8d95bdeaaa2"

function Body() {
  const [videos, setVideos] = useState(videosData);
  
  const { videoId } = useParams();

  const defaultVideoId = videos[0]?.id;

  const videoIdToDisplay = videoId ?? defaultVideoId;

  const filteredVideos = videos.filter((video) => video.id !== videoIdToDisplay);

//   function handleSelectVideo(videoId) {
//     console.log("handleSelectVideo", videoId);
//     const foundVideo = videoDetailsData.find((video) => video.id === videoId);
//     setVideoDetails(foundVideo);
//   }

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
