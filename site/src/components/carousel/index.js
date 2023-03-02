import './index.scss'

import imgCreed1 from '../../assets/image/imgCreed3.png';
import { useEffect } from 'react';
//import imgPanico from '../../assets/image/imgPanicoVI.png';
//import imgQuantumania from '../../assets/image/imgQuantumania.png';


export default function Index() {

    const imagens = document.getElementById('img')
    const img = document.querySelectorAll('#img img')

    let id = 0;

    function carrossel() {
        id++;

        if (id > img.length - 1) {
            id = 0;
        }


        imagens.style.transform = `translateX(${-id * 432}px)`;
    }

    useEffect(() => {
        setInterval(carrossel, 1800);
    })



    return (


        <main className='comp-car'>

            <section className='carrossel'>
                <div className='container' id='img'>

                    <div className='name-film'>
                        <img src={imgCreed1} alt='' />
                    </div>

                    <p> Creed 3 </p>

                    <div>
                        <img src={imgCreed1} alt='' />
                    </div>

                    <div>
                        <img src={imgCreed1} alt='' />
                    </div>
                    
                </div>
            </section>

        </main>


    )

}

