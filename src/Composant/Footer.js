import logo from '../images/logoMini.png';
import '../css/style.css';

function Footer() {
    return (
      <div className="global">
        <footer>
            <img src={logo} alt="Logo" />
            <p>2020 Kasa. All rights reserved</p>
        </footer>
      </div>
    );
  }
  
  export default Footer;