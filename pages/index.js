import Head from 'next/head';
import Navbar from '../components/Navbar.js';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Navbar</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar/>
    </div>
  );
}