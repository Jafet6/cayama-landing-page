import React from 'react';
import './homePage.css';
import Head from '../patterns/head';
import Header from '../patterns/header';
import Footer from '../patterns/footer';
import HeadLine from '../components/headline/headline';
import NannyAvailable from '../components/nannyAvailable/nannyAvailable';
import ImageParagraphComponent from '../components/imageParagraphComponent/imageParagraphComponent';
// import StandardSection from '../components/standardSection/standardSection';
import Divider from '../components/divider/divider';
import LeedForm from '../components/leedForm/leedForm';
import VideoLogo from '../components/videoLogo/videoLogo';
import RaiseSellButton from '../components/raiseSellButton/raiseSellButton';
import marketingStructure from '../components/imageParagraphComponent/structures/marketingStructure';
import creditCardStructure from '../components/imageParagraphComponent/structures/creditCardStructure';
import instagramBagStructure from '../components/imageParagraphComponent/structures/instagramBagStructure';
import easyManagentStructure from '../components/imageParagraphComponent/structures/easyManagentStructure';
import supportStructure from '../components/imageParagraphComponent/structures/supportStructure';
import onlineStoreStructure from '../components/imageParagraphComponent/structures/onlineStoreStructure';
import MiddleSection from '../components/middleSection/middleSection';
// import frameWorkStructure from '../components/standardSection/structures/frameWorkStructure';
// import comingSoonStructure from '../components/standardSection/structures/comingSoonStructure';

function HomePage() {
  return (
    <>
      <Head title='Cayama' />
      <div className='home-page-image' />
      <div className='home-page-container'>
        <Header />
        <main>
          <div className='head-line-container'>
            <HeadLine />
          </div>
          <div className='main-after-image'>
            {/* <NannyAvailable /> */}
            <h2 className="why-cayama-heading">Porque a Cayama?</h2>
            <ImageParagraphComponent 
              link={marketingStructure.link}
              paragraph={marketingStructure.paragraph}
              title={marketingStructure.title}
              image={marketingStructure.image}
              reverse={false}
            />
            <ImageParagraphComponent 
              link={onlineStoreStructure.link}
              paragraph={onlineStoreStructure.paragraph}
              title={onlineStoreStructure.title}
              image={onlineStoreStructure.image}
              reverse={true}
            />
            <ImageParagraphComponent 
              link={creditCardStructure.link}
              paragraph={creditCardStructure.paragraph}
              title={creditCardStructure.title}
              image={creditCardStructure.image}
              reverse={false}
            />
            <ImageParagraphComponent 
              link={instagramBagStructure.link}
              paragraph={instagramBagStructure.paragraph}
              title={instagramBagStructure.title}
              image={instagramBagStructure.image}
              reverse={true}
            />
            <ImageParagraphComponent 
              link={easyManagentStructure.link}
              paragraph={easyManagentStructure.paragraph}
              title={easyManagentStructure.title}
              image={easyManagentStructure.image}
              reverse={false}
            />
            <ImageParagraphComponent 
              link={supportStructure.link}
              paragraph={supportStructure.paragraph}
              title={supportStructure.title}
              image={supportStructure.image}
              reverse={true}
            />
            <RaiseSellButton />
            <Divider />
            <MiddleSection />
            {/* <StandardSection 
              link={frameWorkStructure.link}
              paragraph={frameWorkStructure.paragraph}
              title={frameWorkStructure.title}
              image={frameWorkStructure.image}
            />
            <Divider />
            <StandardSection 
              link={false}
              paragraph={comingSoonStructure.paragraph}
              title={comingSoonStructure.title}
              image={comingSoonStructure.image}
              reverse={true}
            /> */}
            <VideoLogo />
            <LeedForm />
            <Footer />
          </div>
        </main>
      </div>
    </>
  );
}

export default HomePage;
