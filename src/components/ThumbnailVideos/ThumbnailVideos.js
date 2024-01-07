import "./ThumbnailVideos.scss";
import { Link } from "react-router-dom";


function ThumbnailVideo({v}) {
  return (
    <>
    <Link to={`/video/${v.id}`}>
        <div className="video-section" >
      <div className="next-video__div">
        <img className="next-video__image" src={v.image} alt="" />
      </div>
      <div className="next-video__element">
        <h4>{v.title}</h4>
        <h4 className="video-channel">{v.channel}</h4>
      </div>
        </div>
        </Link>
    </>
    
  );
}

export default ThumbnailVideo;
