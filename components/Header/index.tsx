import Image from 'next/image';

export default function Header() {
  return (
    <div>
      <section id="main">
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
          <a href="#" className="lang">
            ID
          </a>
        </nav>
      </section>

      <div className="name">
        <p>Hello</p>
        <h1 className="autoinput"></h1>
        <p className="details">In this Video I am gonna show you how to create a personal website with all pages.After Watching this tutorial you will be able to craete website like this</p>
        <a
          href="https://doc-0c-88-docs.googleusercontent.com/docs/securesc/0e69jbs2g0vnmme8esbkmva5oat57mks/inhmkk8ivndn8r9f9n4prjn3tnqng1uo/1660034625000/14457739025455370513/14457739025455370513/1FbZq9Ovr8L2hvG5vQ3c9wjNnUZ2Thr9i?e=download&ax=AI9vYm4zqdUJ5sbqbhyVXtWvdA5hCtWPI8xJWV9JorYCU5GjespPwvodzkW8ioh4yEMGAXDM9hf60IHuDZYaWyEm9uRRW7tG0fouExablb8aSxqG7v5wueJr-oZBBa_MMlG07wJI_3JQcaj5eN6Jq4Y1VIBfn1gOpUMlpA2lGSnJq2U4aL6ZjZi6KNeHsumhvFPJ27Zoc7Pl8qzUgtFuvHRppvh6F-Xk6pRA2ugC9Serlr_6gHdWgrQPSKs6ITvHDfwX0fQFAaxX3rHPYkxKesWQxG6-yjfhs267YI-Q60RmB7jRmXr4sNUPkcyWOcX-2pc_qYpi6Amm2K73Fq5eKK_N6KBrAUlbHAUs5NubX-Yf_LfgfBaEjhq5lGbO6YITEGBs5VS9VXszgAuSo22-tJQPlCbQ5HUeO8zhRmVZSK-NM2y9h7Nmv58lj-Jg5yg-fFaKm0t3SwMvCr2aECg9YfnPcZLMfaJkLjXF1y3IBT_cbi5yf-X0JpBsP8Ff3tk5QJYr3dovKVOJZlVCDNBHAFCBztpecBP7Z53_nAg9FRcT37rwbhT70Gh-QfNBBmwNGpxeugWUI0DNO1prUP5CmLA18YZ1DSbGmmGW2Q9mGBCVOgKKSGeZxcHNzT1I-NcCmoiPSl38J_aLMo9aLqADkq4ZZjsrY36S2_jC1nc7BTzttYINbV3TBdEI69q2h7_H4EJNFTeYFTx1QRmoK94wgzaxXD1apCw-WQKU948dI1CTW1dduZTzCRPyu4k&uuid=232bd988-9594-4d2a-b04f-4e5aa804029a&authuser=0&nonce=80senh3lcob9u&user=14457739025455370513&hash=of87ontcu2bd5tco5j55a3g7v9o4628r"
          download
          className="cv-btn"
        >
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
              <h1>SDN 2 Tegal Maja</h1>
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
        <button>Contact Me</button>
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
    </div>
  );
}
