import './index.scss'
import '../../assets/common/common.scss'
import LogoBranca from '../../assets/image/logo-branco.png';
import IconBusca from '../../assets/image/busca.svg';
import IconUser from '../../assets/image/iconUser.svg';
import IconMoon from '../../assets/image/iconMoon.svg'

export default function Index() {
    return (
        <main className='main-LandingPage' >

            <header className='cabecalho'>

                <label>
                    <img src={LogoBranca} alt='' />
                    <img src={IconBusca} alt='' />
                </label>

                <div className='cabecalho-div2'>
                    <div className='cabecalho-div-darkMode'> 
                        <img src={IconMoon} alt='' />
                        

                    </div>

                    <img src={IconUser} alt='' />
                </div>

            </header>

        </main>
    );
}
