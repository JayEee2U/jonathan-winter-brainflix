import Brainflix from '../../assets/images/BrainFlix-logo.svg'
import MohanM from '../../assets/images/Mohan-muruge.jpg'
import './Header.scss'

function Header() {
    return (
        <header>
            <div className='NavBar'>
                <div className='logo-div'>
                    <img className='logo-header' src={Brainflix} alt="Brainflix logo" />
                </div>
                <div  className='search-bar'>
                    <input type="text"  name="name" placeholder='Search'></input>    
                </div>
                <div className='avatar-div'>
                    <img  className="avatar" src={MohanM} alt="Mohan Muruge" />
                </div>
                <div className='upload-bar'>
                <button type='button'>UPLOAD</button>
                </div>
            </div>
        </header>
    );
}

export default Header;
