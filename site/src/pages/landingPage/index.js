import './index.scss';
import '../../assets/common/common.scss';
import Carousel from '../../components/carousel';
import Header from '../../components/Header'
//import { useState } from 'react'

export default function Index() {

    return (
        <main className='main-LandingPage' >

            <Header />

            <Carousel />

          

        </main>
    );
}

