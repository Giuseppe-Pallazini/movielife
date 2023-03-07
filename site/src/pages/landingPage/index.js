import './index.scss';
import '../../assets/common/common.scss';
import Carousel from '../../components/carousel';
import Header from '../../components/Header';

import Evite from '../../assets/image/eviteFilas.svg';
import EviteDark from '../../assets/image/eviteFilasDark.svg';

import calendario from '../../assets/image/iconCalendario.svg';
import calendarioDark from '../../assets/image/iconCalendarioDark.svg';

import sale from '../../assets/image/iconSale.svg'
import saleDark from '../../assets/image/iconSaleDark.svg'

import ShazamVertical from '../../assets/image/shazamVertical.png';
import MarioVertical from '../../assets/image/marioBrosVertical.png';
import johnWickVertical from '../../assets/image/johnWickVertical.png';
import Creed3Vertical from '../../assets/image/creed3Vertical.jpg';
import QuantumaniaVertical from '../../assets/image/quantumaniaVertical.png'

import { useEffect, useState } from 'react';
import storage from 'local-storage';
import { Link } from 'react-router-dom';

export default function Index() {
    const [corBackgroundBody, setCorBackgroundBody] = useState('rgb(17 24 39)');
    const [corContrariaBackground, setCorContrariaBackground] = useState('#ebebf0');
    const [mudarIconFilas, setMudarIconFIlas] = useState(Evite);
    const [mudarIconCalendario, setMudarIconCalendario] = useState(calendario);
    const [mudarIconSale, setMudarIconSale] = useState(sale);

    const [count, setCount] = useState(0)

    const images = [ShazamVertical, MarioVertical, johnWickVertical, Creed3Vertical, QuantumaniaVertical, johnWickVertical, johnWickVertical, johnWickVertical]

    const links = ['/filmes/shazam', '/filmes/mario', '/filmes/johnWick', '/filmes/johnWick', '/filmes/johnWick', '/filmes/johnWick', '/filmes/johnWick', '/filmes/johnWick',]

    setTimeout(() => {
        setCount(count + 1);

        if (count === 2) {
            setCount(0)
        }
    }, 100);

    useEffect(() => {
        if (storage('mode') === 'dark') {
            setCorBackgroundBody('rgb(17 24 39)');
            setCorContrariaBackground('#ebebf0')
            setMudarIconFIlas(Evite);
            setMudarIconCalendario(calendario);
            setMudarIconSale(sale)
        } else if (storage('mode') === 'light') {
            setCorBackgroundBody('#ebebf0');
            setCorContrariaBackground('rgb(17 24 39)')
            setMudarIconFIlas(EviteDark);
            setMudarIconCalendario(calendarioDark);
            setMudarIconSale(saleDark)
        }
    }, [count])


    return (
        <main className='main-LandingPage' style={{ backgroundColor: corBackgroundBody }} >

            <Header />

            <Carousel />

            <section className='faixa-prop'>

                <div className='images-prop'>

                    <div className='images-prop-div'>

                        <img src={mudarIconFilas} alt='' />
                        <p style={{ color: corContrariaBackground, transition: '.2s' }}> Evite dor de cabeça. Evite filas.</p>

                    </div>

                    <div className='images-prop-div'>

                        <img src={mudarIconCalendario} alt='' />
                        <p style={{ color: corContrariaBackground, transition: '.2s' }}> Compre quando e onde quiser. </p>

                    </div>

                    <div className='images-prop-div'>

                        <img src={mudarIconSale} alt='' />
                        <p style={{ color: corContrariaBackground, transition: '.2s' }}> Tenha acesso a promoções exclusivas.</p>


                    </div>


                </div>

            </section>

            <section className='section2'>
                <div className='section2-div1'>
                    <span className='span-filme' style={{ color: corContrariaBackground, fontFamily: 'coolvetica' }}> Filmes em cartaz </span>
                    <span className='span-linha' />
                </div>
                <div className='section2-div2'>
                    <div className='div-filmes'>
                        {images.map((item, i) =>
                            <div key={item}>
                                <Link to={links[i]}> <img className='img-filmes' src={images[i]} alt='' /> </Link>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </main>
    );
}






