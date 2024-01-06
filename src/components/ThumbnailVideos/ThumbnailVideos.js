import "./ThumbnailVideos.scss";


function ThumbnailVideo({v}) {
  return (
    <>
    <a href={`/video/${v.id}`}>
        <div className="video-section" >
      <div className="next-video__div">
        <img className="next-video__image" src={v.image} alt="" />
      </div>
      <div className="next-video__element">
        <h4>{v.title}</h4>
        <h4 className="video-channel">{v.channel}</h4>
      </div>
        </div>
        </a>
    </>
    
  );
}

export default ThumbnailVideo;
