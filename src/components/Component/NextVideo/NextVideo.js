import ThumbnailVideos from "../../ThumbnailVideos/ThumbnailVideos";
import "./NextVideo.scss";

function NextVideo({ videos, selectVideo }) {
  return (
    <main className="breakpoint-next__videos">
      <div>
        <h3 className="next-header">NEXT VIDEOS</h3>
      </div>

      <section>
        {videos.map((video) => (<ThumbnailVideos
          key={video.id}
          v={video}
          selectVideo={selectVideo}
        />
          
        ))}
      </section>
    </main>
  );
}

export default NextVideo;
