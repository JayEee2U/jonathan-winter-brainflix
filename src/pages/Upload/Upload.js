import Header from "../../components/Component/Header/Header";
import VideoPreview from "../../assets/images/Upload-video-preview.jpg";
import './Upload.scss';


function Upload() {
    return (
        <>
        <Header />
        <div className='divider'>&nbsp;</div>
        <main className="upload-section">
            <section className="video-upload__1">
                <h1>Upload Video</h1> 
                <div className='divider-mobile__breakpoint'>&nbsp;</div>
                <div className="video-image__div">
                    <h5>VIDEO THUMBNAIL</h5>
                    <img className="video-thumbnail" 
                    src={VideoPreview} 
                    alt="Upload Video Preview" />
                </div>
                <div  className='video-title'>
                    <h5>TITLE YOUR VIDEO</h5>
                    <input className="video-title__input" type="text"  
                    name="name" 
                    placeholder='Add a title to your video'>
                    </input>    
                </div>
                <div  className='video-description'>
                    <h5>ADD A VIDEO DESCRIPTION</h5>
                    <textarea className="text-description" type="text"  
                    name="name" 
                    placeholder='Add a description to your video'>
                    </textarea>    
                </div>
                <div className='divider-mobile__breakpoint'>&nbsp;</div>
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