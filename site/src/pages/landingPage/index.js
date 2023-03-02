import './index.scss';
import '../../assets/common/common.scss';
import Carousel from '../../components/carousel';
import Header from '../../components/Header';
import Evite from '../../assets/image/eviteFilas.svg'

export default function Index() {

    return (
        <main className='main-LandingPage' >

            <Header />

            <Carousel />

            <section className='faixa-prop'>

                <div className='images-prop'>

                    <div>

                        <img src={Evite} alt='' />

                    </div>

                    <div>

                        <img src={Evite} alt='' />

                    </div>


                    <div>

                        <img src={Evite} alt='' />

                    </div>



                </div>

            </section>

        </main>
    );
}






