import Brainflix from '../../../assets/images/BrainFlix-logo.svg'
import MohanM from '../../../assets/images/Mohan-muruge.jpg'
import Upload from '../../../pages/Upload/Upload';
import './Header.scss'
import { Link } from 'react-router-dom'

function Header() {
    // const upload = () => {

    
    
    return (
        <header>
            <main className='NavBar'>
                <div className='logo-div'>
                    <Link to="/">
                        <img className='logo-header'
                        src={Brainflix} 
                        alt="Brainflix logo" />
                    </Link>
                </div>
                <div  className='search-bar'>
                    <input type="text"  
                        name="name" 
                        placeholder='Search'>
                    </input>    
                </div>
                <div className='avatar-div'>
                    <img  className="avatar" 
                    src={MohanM} 
                    alt="Mohan Muruge" />
                </div>
                <div className='upload-bar'>
                    <Link to="/Upload">
                    <button type='button'>
                    UPLOAD</button>
                    </Link>
                </div>
            </main>
        </header>
    );
}

export default Header;
