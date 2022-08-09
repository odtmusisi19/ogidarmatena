import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header';
import Script from 'next/script';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Ogi Darma Tena | Web</title>
        <meta name="description" content="Generated by create next app" />
        <script src="https://kit.fontawesome.com/c8e4d183c2.js"></script>

        <link rel="icon" href="/logo.ico" />
      </Head>
      <Header />
      <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12" async></script>
      <Script id="my-script" async>{`
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
