import Image from 'next/image';

export default function Header() {
  return (
    //Pop Up
    <div>
      <section id="main">
        <div>
          <div id="closed"></div>
          <div className="popup-wrapper" id="popup">
            <div className="popup-container">
              <div>
                <div className="isi">
                  <h1>Indonesia</h1>
                  <p>+6287763307839</p>
                </div>
                <a className="popup-close" href="#closed">
                  X
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* end Pop Up */}
        <nav>
          <a href="#" className="logo">
            OGI
          </a>
          {/* <div className="toggle"></div> */}
          <ul className="menu">
            <li className="">
              <a href="#main">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Hobi</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            {/* <li>
              <a href="#contact-form">Contact</a>
            </li> */}
          </ul>
          <a href="#popup" className="lang">
            ID
          </a>
        </nav>
      </section>
      {/* Pop Up */}

      <div className="name">
        <p>Hello</p>
        <h1 className="autoinput"></h1>
        <p className="details">In this Video I am gonna show you how to create a personal website with all pages.After Watching this tutorial you will be able to craete website like this</p>
        <a href="https://drive.google.com/file/d/1FbZq9Ovr8L2hvG5vQ3c9wjNnUZ2Thr9i/view" className="cv-btn">
          Download Cv
        </a>
      </div>
      <div className="black-line"></div>
      <div className="social">
        <a href="https://www.facebook.com/ogidarmatena.tena/">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://twitter.com/OgiTena">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://www.instagram.com/ogidarmatena/">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://www.youtube.com/channel/UC4EbvULdSkf6HS7_FlGP_Dg">
          <i className="fab fa-youtube"></i>
        </a>
      </div>
      <section id="about">
        <div className="abouttext">
          <h1>About Me</h1>
          <h2>FreeLancing FrontEnd Developer</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni maiores pariatur voluptatum amet ipsam dolore commodi itaque illo, tempora soluta!</p>
          <button>View More Details</button>
        </div>
        <div className="about-model">
          <img alt="model" src="images/about-model.png" />
        </div>
      </section>
      <section id="pendidikan">
        <h1 className="pendidik-headind">Pendidikan</h1>
        <div className="pendidik-container">
          <div className="pendidik-box">
            <div className="pendidik-overlay-text">
              <h1>SD 2 Tegal Maja</h1>
              <p>Client Project</p>
            </div>
            <img src="images/pendidikan/sd.png" />
          </div>
          <div className="pendidik-box">
            <div className="pendidik-overlay-text">
              <h1>SMPN 4 Tanjung</h1>
              <p>Client Project</p>
            </div>
            <img src="images/pendidikan/smp.png" />
          </div>
          <div className="pendidik-box">
            <div className="pendidik-overlay-text">
              <h1>SMAN 1 Tanjung</h1>
              <p>Client Project</p>
            </div>
            <img src="images/pendidikan/sma.png" />
          </div>
          <div className="pendidik-box">
            <div className="pendidik-overlay-text">
              <h1>UBG Mataram</h1>
              <p>Client Project</p>
            </div>
            <img src="images/pendidikan/ubg.png" />
          </div>
        </div>
      </section>
      <section id="services">
        <div className="s-heading">
          <h1>Services</h1>
          <p>Here Is The Some Servies Which We Provide You.</p>
        </div>
        <div className="b-container">
          <div className="s-box">
            <div className="s-b-img">
              <div className="s-type">Front-End</div>
              <img src="images/s1.png" />
            </div>
            <div className="s-b-text">
              <a href="#">With Divi, every part of your website is customizable. You have complete freedom to create the perfect website for you or your clients. Easily change colors, fonts and text styles. Apply stunning animations.</a>
            </div>
          </div>
          <div className="s-box">
            <div className="s-b-img">
              <div className="s-type">Back-End</div>
              <img src="images/s2.png" />
            </div>
            <div className="s-b-text">
              <a href="#">With Divi, every part of your website is customizable. You have complete freedom to create the perfect website for you or your clients. Easily change colors, fonts and text styles. Apply stunning animations.</a>
            </div>
          </div>
          <div className="s-box">
            <div className="s-b-img">
              <div className="s-type">SEO</div>
              <img src="images/s3.jpg" />
            </div>
            <div className="s-b-text">
              <a href="#">With Divi, every part of your website is customizable. You have complete freedom to create the perfect website for you or your clients. Easily change colors, fonts and text styles. Apply stunning animations.</a>
            </div>
          </div>
        </div>
      </section>
      {/* Portofolio=============================================== */}
      <section id="portfolio">
        <h1 className="p-headind">Portfolio</h1>
        <div className="p-container">
          <div className="p-box">
            <div className="overlay-text">
              <h1>Writting</h1>
              <p>Client Project</p>
            </div>
            <img src="images/w1.jpg" />
          </div>
          <div className="p-box">
            <div className="overlay-text">
              <h1>Ideas</h1>
              <p>Client Project</p>
            </div>
            <img src="images/w2.jpg" />
          </div>
          <div className="p-box">
            <div className="overlay-text">
              <h1>Music</h1>
              <p>Client Project</p>
            </div>
            <img src="images/w3.jpg" />
          </div>
          <div className="p-box">
            <div className="overlay-text">
              <h1>Time</h1>
              <p>Client Project</p>
            </div>
            <img src="images/w4.jpg" />
          </div>
          <div className="p-box">
            <div className="overlay-text">
              <h1>Creative</h1>
              <p>Client Project</p>
            </div>
            <img src="images/w5.jpg" />
          </div>
          <div className="p-box">
            <div className="overlay-text">
              <h1>Books</h1>
              <p>Client Project</p>
            </div>
            <img src="images/w6.jpg" />
          </div>
        </div>
      </section>

      <section id="contact-btn">
        <h1 className="c-b-heading">If You Have Any Project In Your Mind ?</h1>
        <a href="https://api.whatsapp.com/send/?phone=087763307839&text=hay%20Ogi%20darma%20tena%20saya%20butuh%20bantuan&type=phone_number&app_absent=0">Contact Me</a>
      </section>

      <section id="contact-form">
        <form>
          <div className="contact-left">
            <h1 className="c-l-heading">
              <span>Write</span>e us
            </h1>
            <div className="f-name">
              <span>Name</span>
              <input type="text" placeholder="Full Name" />
            </div>
            <div className="f-email">
              <span>Email</span>
              <input type="email" placeholder="Example@gmail.com" />
            </div>
          </div>
          <div className="contact-right">
            <div className="message">
              <span>Message</span>
              <textarea name="message" placeholder="Write Message..."></textarea>
            </div>
            <button>submit</button>
          </div>
        </form>
      </section>

      {/* end Pop Up */}
    </div>
  );
}
