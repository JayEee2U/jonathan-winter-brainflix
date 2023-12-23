import videos from '../../data/video-details.json';
import './Body.scss';

const video = videos[0]

function Body() {
    console.log(videos)
    return (
        <>
        <div className='container-image'>
            <img  className='image_Red-Cow' src={video.image} alt=' ' />
        </div>
        <div className='h1_div'>
            <h1>Text</h1>
        </div>
        <div>
            <div>
                <h2>Text</h2>
            </div>
            <div>
                <h3>Text</h3>
            </div>
            <div>
                <img src='' alt='' />
            </div>
            <div>
                <img src='' alt='' />
            </div>
         </div>

        </>
        );
    }

export default Body;