import React from 'react';
import About from './About/about';
import Header from '../components/header/header';
import HeroSection from './heroSection/heroSection';
import ProdServicos from './prodServicos/prodServicos';
import MyVideo from './myVideo/myVideo';
import Compromissos from './myCompromissos/compromissos';

const Home = () => {
    return (
        <>
            <Header/>
            <HeroSection/>
            <About/>
            <ProdServicos/>
            <MyVideo/>
            <Compromissos/>
        </>
    );
}

export default Home;
