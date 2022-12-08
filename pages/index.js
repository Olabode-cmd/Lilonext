import Head from 'next/head'
import Header from './components/Header';
import Sectionhero from './components/Sectionhero';
import Sectionclients from './components/Sectionclients';
import Sectionabout from './components/Sectionabout';
import Sectionservices from './components/Sectionservices';
import Sectionpartners from './components/Sectionpartners';
import Sectionteam from './components/Sectionteam';
import Sectionblockquote from './components/Sectionblockquote';
import Sectionsupport from './components/Sectionsupport';
import Sectioncontact from './components/Sectioncontact';
import Footer from './components/Footer';

// import Lilostyle from '../styles/Lilo.module.css';
import NY from '../public/images/clients/NY.svg';
import User from '../public/images/sarah-bishop.png';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      {/* <h1>Lilo Next JS</h1> */}
      <main>
        <Sectionhero />

        <Sectionclients />

        <Sectionabout />

        <Sectionservices />

        <Sectionpartners />

        <Sectionteam />

        <Sectionblockquote
          title="We can expect the same high standard and excellent quality of work from anyone on the team."
          subtitle="We truly rely on them to be our voice to our fan base. They’ve become a fantastic extension of our internal team and a
          trusted partner in our daily work, which alleviates a lot of stress for our internal team."
          profileimg={User.src}
          name="Sarah Bishop"
          position="VP of Marketing, NYC FC"
          company={NY.src} />

        <Sectionsupport />

        <Sectioncontact />

        <Footer />
      </main>
    </div>
  )
}
