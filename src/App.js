import './App.css';
import { FaFacebook, FaTwitter, FaInstagram, FaPinterest } from 'react-icons/fa';



function App() {
  return (
    <div className="app">
      <div className='app_cont'>
        <header className='app_head'>
        {/* <img className='img' src='../images/desktop/image-hero.jpg' alt='' /> */}
            <div className='app_headdiv'>
          
              <div className='app_top'>
                <h3>Loopstudios</h3>
                <div className='app_headdivspan'>
                  <span>About</span> 
                  <span>Careers</span>
                  <span>Events</span>
                  <span>Products</span>
                  <span>Support</span>
                </div>
              </div>  
              <div className="app_bottom">
                <span className='size'>
                IMMERSIVE
                </span>
                <span className='size'> 
                EXPERIENCES
                </span>
                <span className='size'>
                THAT DELIVER
                </span>
              </div>
            </div>
            <div>

            </div>

        </header>
        
        <div className='body'>
          <div className='bodyOne'>
            <div className='bodyA'>
            <div className='body_A_new'>
              <div className='one'>
                <div className='bodyB'>
                  <div className='the_two'>
                <h2>THE LEADER IN INTERACTIVE VR </h2>
                                <p> Founded in 2011, Loopstudios has been producing world-class virtual reality 
                  projects for some of the best companies around the globe. Our award-winning 
                  creations have transformed businesses through digital experiences that bind 
                  to their brand.</p>
                  </div>
                </div>
             </div>
            </div>
          </div>
          </div>
          <div className='grid_one'>
            <div className='grid_two'>
              <h2>OUR CREATIONS</h2>
              <h4>SEE ALL</h4>
            </div>
            <div className="grid_three">
              <img src="../images/desktop/image-deep-earth.jpg" alt="img1" />
              <img src="../images/desktop/image-night-arcade.jpg" alt="img2" />
              <img src="../images/desktop/image-soccer-team.jpg" alt="img3" />
              <img src="../images/desktop/image-grid.jpg" alt="img4" />
              <img src="../images/desktop/image-from-above.jpg" alt="img5" />
              <img src="../images/desktop/image-pocket-borealis.jpg" alt="img6" />
              <img src="../images/desktop/image-curiosity.jpg" alt="img7" />
              <img src="../images/desktop/image-fisheye.jpg" alt="img8" />
          </div> 
          </div>
        
        </div>


        <footer className='footerClass'>
          <div className='footerMain'>
          <div className='footerClass_top'>
            <h3>loopstudios</h3>
            <div className='footerClass_right'>
            <FaFacebook className='icon'/>
            <FaTwitter className='icon'/>
            <FaInstagram className='icon'/>
            <FaPinterest  className='icon'/>
            </div>
          </div>
          <div className='footerClass_bottom'>
            <div className='footerClass_left'>
                <span>About</span> 
                <span>Careers</span>
                <span>Events</span>
                <span>Products</span>
                <span>Support</span>
            </div>
            <p className='opac'>© 2021 Loopstudios. All rights reserved</p>
          </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
