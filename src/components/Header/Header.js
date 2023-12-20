import Brainflix from '../../assets/images/BrainFlix-logo.svg'
import MohanM from '../../assets/images/Mohan-muruge.jpg'
import './Header.scss'

function Header() {
    return (
        <header>
            <div className='NavBar'>
                <div>
                    <img className='logo-header' src={Brainflix} alt="Brainflix logo" />
                </div>
                <div>
                    <input type="text"  name="name" placeholder='     Search'></input>
                    <img  className="avatar" src={MohanM} alt="Mohan Muruge" />
                </div>
                <button type='button'>UPLOAD</button>
            </div>
          
        </header>
    );
}

export default Header;
