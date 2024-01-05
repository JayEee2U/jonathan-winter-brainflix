import './NextVideo.scss';


function NextVideo({videos, selectVideo}) {
    return (
        <main className='breakpoint-next__videos'>
        <div>
        <h3 className="next-header">NEXT VIDEOS</h3>
      </div>

      <section>
        {videos.map((v) => (
          <div className="video-section" onClick={() => selectVideo(v.id)}>
            <div className="next-video__div">
              <img className="next-video__image" src={v.image} alt="" />
            </div>
            <div className="next-video__element">
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