import Header from "../../components/Component/Header/Header";
import VideoPreview from "../../assets/images/Upload-video-preview.jpg";
import './Upload.scss';

function Upload() {
    return (
        <>
        <Header />
        <div className='divider'>&nbsp;</div>
        <main>
            <section>
                <h1>Upload Video</h1> 
                <div>
                    <h4>VIDEO THUMBNAIL</h4>
                    <img className="video-thumbnail" 
                    src={VideoPreview} 
                    alt="Upload Video Preview" />
                </div>
                <div  className='video-title'>
                    <h4>TITLE YOUR VIDEO</h4>
                    <input type="text"  
                    name="name" 
                    placeholder='Add a title to your video'>
                    </input>    
                </div>
                <div  className='video-description'>
                    <h4>ADD A VIDEO DESCRIPTION</h4>
                    <textarea type="text"  
                    name="name" 
                    placeholder='Add a description to your video'>
                    </textarea>    
                </div>
                <div className='publish-button'>
                    <button type='button'>
                    PUBLISH</button>
                </div>
                <div className='cancel-button'>
                    <button type='button'>
                    CANCEL</button>
                </div>
            </section>
        </main>
        </>
    )
}

export default Upload;