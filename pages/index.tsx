import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header';
import Script from 'next/script';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Ogi Darma Tena | Web</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script src="https://kit.fontawesome.com/c8e4d183c2.js" async></script>
        <script src="https://min30327.github.io/luxy.js/dist/js/luxy.js"></script>
        <link rel="icon" href="/logo.ico" />
        <link rel="stylesheet" type="text/css" href="/public/css/demo.css"></link>
      </Head>
      <div id="luxy">
        <Header />
      </div>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js" async></script>
      <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12" async></script>
      <Script id="my-script" async>{`
      // luxy.init();
      $(document).ready(function() {
        $(".logo").click(function() {
          $( "ul li" ).slideToggle( "slow");
          
        });
          });

      var typed = new Typed(".autoinput",{
        strings: ["I'm <span id='ogi'>Ogi</span> Darma Tena"],
        typeSpeed: 140,      
      //  backSpeed: 140,
      //  loop:true
      });
      `}</Script>
    </div>
  );
};

export default Home;
