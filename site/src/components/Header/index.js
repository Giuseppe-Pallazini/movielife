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

import { useState } from 'react';
import { Link } from 'react-router-dom'

export default function Index() {

    const [mudarPosicaoIcon, setMudarPosicaoIcon] = useState('1.5em');
    const [mudarIcon, setMudarIcon] = useState(IconMoon);
    const [mudarIconUser, setMudarIconUser] = useState(IconUser);
    const [mudarIconBusca, setMudarIconBusca] = useState(IconBusca);
    const [mudarLogo, setMudarLogo] = useState(LogoBranca);
    const [mudarOutline, setMudarOutline] = useState('2px solid #EBEBF0');
    const [corBackgroundBody, setCorBackgroundBody] = useState('rgb(17 24 39)');
    const [corContrariaBackground, setCorContrariaBackground] = useState('white');

    const [abrirMenuUser, setAbrirMenuUser] = useState(0)


    function darkWhiteMode() {
        setMudarPosicaoIcon('-1.2em');
        setMudarIcon(IconSun);
        setCorBackgroundBody('#EBEBF0');
        setCorContrariaBackground('rgb(17 24 39)');
        setMudarIconUser(IconUserDark);
        setMudarIconBusca(IconBuscaDark);
        setMudarLogo(LogoDark);
        setMudarOutline('2px solid rgb(17 24 39)');


        if (mudarPosicaoIcon === '-1.2em') {
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

    function menuUser() {
        setAbrirMenuUser(1)

        if(abrirMenuUser === 1)
            setAbrirMenuUser(0)
    }





    return (
        <main className='main-Header' style={{ backgroundColor: corBackgroundBody }} >

            <header className='cabecalho'>

                <label>
                    <img className='logo' src={mudarLogo} alt='' />

                    <div className='div-search'>
                        <img className='icon-busca' src={mudarIconBusca} alt='' />
                        <input style={{ color: corContrariaBackground, borderBottom: mudarOutline }} />
                    </div>

                </label>

                <div className='cabecalho-div2'>
                    <div className='cabecalho-div-darkMode' style={{ backgroundColor: corContrariaBackground }}>
                        <img style={{ left: mudarPosicaoIcon, backgroundColor: corContrariaBackground }} className='icon-moon' src={mudarIcon} alt='' onClick={darkWhiteMode} />


                    </div>

                    <label>
                        <img className='icon-user' src={mudarIconUser} alt='' onClick={menuUser} />

                        {abrirMenuUser === 1 &&
                            <div className='div-menuUser'>
                                <Link to='/myProfile' className='div-menuUser-Link'> Meu perfil</Link>
                                <p className='div-menuUser-Link'> Histórico de compras </p>
                                <p className='div-menuUser-Link'> Sair </p>
                            </div>
                        }
                    </label>
                </div>

            </header>


        </main>
    )
}