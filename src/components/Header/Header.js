import Brainflix from '../../assets/images/BrainFlix-logo.svg'
import MohanM from '../../assets/images/Mohan-muruge.jpg'

function Header() {
    return (
        <header>
            <img src={Brainflix} alt="Brainflix logo" />
            <input type="text"  name="name" placeholder='Search'></input>
            <img src={MohanM} alt="Mohan Muruge" />
            <button type='button'>UPLOAD</button>
          
        </header>
    );
}

export default Header;
