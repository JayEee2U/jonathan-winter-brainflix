import Header from "../../components/Component/Header/Header";
import VideoPreview from "../../assets/images/Upload-video-preview.jpg";
import './Upload.scss';
import { Link } from "react-router-dom";
import { useState } from 'react'




function Upload() {

    const [uploadSuccessful, setUploadSuccessful] = useState(false)

    const handleUpload = (e) => {

        setUploadSuccessful(true)
    }

    return (
        <>
        <Header />
        <div className='divider-header__breakpoint'>&nbsp;</div>
        <main className="upload-section">
                <h1>Upload Video</h1> 
                <div className='divider-mobile__breakpoint'>&nbsp;</div>
            <section className="video-upload__1">
                <div className="upload-breakpoint__desktop">
                <div className="video-image__div">
                    <h5>VIDEO THUMBNAIL</h5>
                    <img className="video-thumbnail" src={VideoPreview} alt="Upload Video Preview" />
                </div>
                <section className="video-details__input">
                    <div  className='video-title'>
                        <h5>TITLE YOUR VIDEO</h5>
                        <input className="video-title__input" type="text"  name="name" placeholder='Add a title to your video'>
                        </input>    
                    </div>
                    <div  className='video-description'>
                        <h5>ADD A VIDEO DESCRIPTION</h5>
                        <textarea className="text-description" type="text"  name="name" placeholder='Add a description to your video'>
                        </textarea>    
                    </div>
                </section>
                </div>
                
                <div className='divider-mobile__breakpoint'>&nbsp;</div>
                {
                  uploadSuccessful? (
                <div className='success-button'>
                    {/* <div>UPLOAD SUCCESSFUL</div> */}
                    <Link to={'/'}>
                        <button type='button'>UPLOAD SUCCESSFUL! - CLICK TO RETURN TO MAIN PAGE</button>
                    </Link>
                </div>
                  )  : (
                    <section className="button-breakpoint__div">
                        <div className='publish-button'>
                            <button onClick={handleUpload} type='button'>
                            PUBLISH</button>
                        </div>
                        <div className='cancel-button'>
                            <Link to={'/'}>
                                <button type='button'>CANCEL</button>
                            </Link>
                        </div>
                    </section>
                 )
                }
            </section>
        </main>
        </>
    )
}

export default Upload;