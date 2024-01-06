import "./ThumbnailVideos.scss";


function ThumbnailVideo({v,selectVideo}) {
  return (
    <div className="video-section" onClick={() => selectVideo(v.id)}>
      <div className="next-video__div">
        <img className="next-video__image" src={v.image} alt="" />
      </div>
      <div className="next-video__element">
        <h4>{v.title}</h4>
        <h4 className="video-channel">{v.channel}</h4>
      </div>
    </div>
  );
}

export default ThumbnailVideo;
