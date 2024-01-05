import './NextVideo.scss';


function NextVideo({videos, selectVideo}) {
    return (
        <main className='breakpoint-Next__Videos'>
        <div>
        <h3 className="nextHeader">NEXT VIDEOS</h3>
      </div>

      <section>
        {videos.map((v) => (
          <div className="videoSection" onClick={() => selectVideo(v.id)}>
            <div className="nextVideoDiv">
              <img className="nextVideoImage" src={v.image} alt="" />
            </div>
            <div className="nextVideoElement">
              <h4 >{v.title}</h4>
              <h4 className='video-channel'>{v.channel}</h4>
            </div>
          </div>
        ))}
      </section>
        </main>


    )
}

export default NextVideo;