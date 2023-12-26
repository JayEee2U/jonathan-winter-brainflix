import './NextVideo.scss';


function NextVideo({videos}) {
    return (
        <>
        <div>
        <h3 className="nextHeader">NEXT VIDEOS</h3>
      </div>

      <div>
        {videos.map((v) => (
          <div className="videoSection">
            <div className="nextVideoDiv">
              <img className="nextVideoImage" src={v.image} alt="" />
            </div>
            <div>
              <h3 className="nextVideoElement">{v.title}</h3>
            </div>
            <div>
              <h3 className="nextVideoElement">{v.channel}</h3>
            </div>
          </div>
        ))}
      </div>
        </>


    )
}

export default NextVideo;