import './index.scss'
import '../../assets/common/common.scss'
import LogoBranca from '../../assets/image/logo-branco.png';
import LogoDark from '../../assets/image/logo-dark.png'
import IconBusca from '../../assets/image/busca.svg';
import IconUser from '../../assets/image/iconUser.svg';
import IconUserDark from '../../assets/image/iconUserDark.png'
import IconMoon from '../../assets/image/iconMoon.svg';
import IconSun from '../../assets/image/iconSun.svg';
import IconBuscaDark from '../../assets/image/buscaDark.png';
import Carousel from '../../components/carousel'


import { useState } from 'react'

export default function Index() {
    const [mudarPosicaoIcon, setMudarPosicaoIcon] = useState('1.5em');
    const [mudarIcon, setMudarIcon] = useState(IconMoon);
    const [mudarIconUser, setMudarIconUser] = useState(IconUser);
    const [mudarIconBusca, setMudarIconBusca] = useState(IconBusca);
    const [mudarLogo, setMudarLogo] = useState(LogoBranca);
    const [mudarOutline, setMudarOutline] = useState('2px solid #EBEBF0');
    const [corBackgroundBody, setCorBackgroundBody] = useState('rgb(17 24 39)');
    const [corContrariaBackground, setCorContrariaBackground] = useState('white');


    function darkWhiteMode() {
        setMudarPosicaoIcon('-.4em');
        setMudarIcon(IconSun);
        setCorBackgroundBody('#EBEBF0');
        setCorContrariaBackground('rgb(17 24 39)');
        setMudarIconUser(IconUserDark);
        setMudarIconBusca(IconBuscaDark);
        setMudarLogo(LogoDark);
        setMudarOutline('2px solid rgb(17 24 39)');


        if (mudarPosicaoIcon === '-.4em') {
            setMudarPosicaoIcon('1.5em');
            setMudarIcon(IconMoon);
            setCorBackgroundBody('rgb(17 24 39)');
            setCorContrariaBackground('white');
            setMudarIconUser(IconUser);
            setMudarIconBusca(IconBusca);
            setMudarLogo(LogoBranca);
            setMudarOutline('2px solid #EBEBF0');
        }
    }

    return (
        <main className='main-LandingPage' style={{ backgroundColor: corBackgroundBody }} >

            <header className='cabecalho'>

                <label>
                    <img className='logo' src={mudarLogo} alt='' />

                    <div className='div-search'>
                        <img className='icon-busca' src={mudarIconBusca} alt='' />
                        <input style={{ color: corContrariaBackground, borderBottom:mudarOutline }} />
                    </div>

                </label>

                <div className='cabecalho-div2'>
                    <div className='cabecalho-div-darkMode' style={{ backgroundColor: corContrariaBackground }}>
                        <img style={{ left: mudarPosicaoIcon, backgroundColor: corContrariaBackground }} className='icon-moon' src={mudarIcon} alt='' onClick={darkWhiteMode} />


                    </div>

                    <img className='icon-user' src={mudarIconUser} alt='' />
                </div>

            </header>

            <Carousel />

          

        </main>
    );
}

