import videosDetails from '../../data/video-details.json';
import './Body.scss';
import likes from '../../assets/images/likes.svg'
import upload from '../../assets/images/upload.svg'
import MohanM from '../../assets/images/Mohan-muruge.jpg'
import videos from '../../data/videos.json'

const video = videosDetails[0]

function Body() {
    console.log(videosDetails)
    return (
        <>
        <div className='container-image'>
            <img  className='image_Red-Cow' src={video.image} alt=' ' />
        </div>
        <div className='comment'>
            <h1>{video.title}</h1>
            <div className='divider'>&nbsp;</div>
        </div>
        <div className='container-commenter'>
            <div className='commentator'>
                <h3>By {video.channel}</h3>
            </div>
            <div>
                <h3>{video.timestamp}</h3>
            </div>
            <div>
                <img src={upload} alt='' />
            </div>
            <div>
                <img src={likes} alt='' />
                
            </div>
            
         </div>
         <div className='divider'>&nbsp;</div>
        <div className='video-commentary'>
            <p className='video-commentary__paragraph'>{video.description}
            </p>
        </div>

        <div className='newCommentSection'>
            <div>
            <div className='avatar-div'>
                        <img  className="avatar" src={MohanM} alt="Mohan Muruge" />
                    </div>
            </div>
            <div>
                <h3 className='nextHeader'>JOIN THE CONVERSATION</h3>
            </div>
            <div>
                <input type='text' placeholder='Add a new comment'></input>
            </div>
            <div className='button'>
                <button type='button'>COMMENT</button>
            </div>
        </div>
        <div className='divider'>&nbsp;</div>
        {video.comments.map( c => 
                <div className='commentSection'>
                    <div>
                        <h3>{c.name}</h3>
                    </div>
                    <div>
                        <p>{c.comment}</p>
                    </div>
                    <div>
                        <h3>{c.timestamp}</h3>
                    </div>
                    <div className='divider'>&nbsp;</div>
                </div>
            )
        }
            <div>
                <h3 className='nextHeader'>NEXT VIDEOS</h3>
            </div>

        <div>
        {videos.map( v => 
            <div className='videoSection'>
                <div className='nextVideoDiv'>
                 <img className='nextVideoImage' src={v.image} alt=''/>
                </div>
            <div>
                <h3 className='nextVideoElement'>{v.title}</h3>
            </div>
            <div>
                <h3 className='nextVideoElement'>{v.channel}</h3>
            </div>
        </div>
            )
        }


        </div>
            
        </>
        );
    }

export default Body;