
import './App.css';
import Logo from './logo.png';
import Token from './token.svg';
import Ido from './ido.svg';
import Art from './art.svg';
import Doc from './doc.svg';
import Twitt from './twitte.svg';
import Tele from './tele.svg';




function App() {
  
  return (

    <div className="container">
      <div class="leftcontainer">
        <div class="box">
          <div class='logo1'><img src={Logo} alt="logo" /></div>
          <button class="button1" onClick={()=> {
            const name = 'wallet';
            alert('connected, ', name);
          }} >Connect Wallet</button>
          <div className='token'>
            <img src={Token} alt="icon" />
            <a href='#' class="text-sm">Token management</a>
          </div>
          <div className='Ido1'>
            <img src={Ido} alt="icon" />
            <a href='#' class="text-sm">Apply for IDO</a>
          </div>
          <div className='Ido1'>
            <img src={Art} alt="icon" />
            <a href='#' class="text-sm">NFT</a>
          </div>
          <div className='Ido1'>
            <img src={Doc} alt="icon" />
            <a href='#'class="text-sm">Documentation</a>
          </div>

        </div>
        <div className='bottom'>
          <h6>connect with us</h6>
          <div class="footer">
            <img class="twitt1" src={Twitt} alt="twitter" />
            <img class="tele1" src={Tele} alt="twitter" />
          </div>
        </div>
      </div>
      <div class="rightcontainer">

        <div class="wallet">Please connect your wallet.</div>
      </div>

    </div>
    

  );
}

export default App;
