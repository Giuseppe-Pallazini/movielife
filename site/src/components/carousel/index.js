import './index.scss'

import imgCreed from '../../assets/image/imgCreed3.png';
import imgPanico from '../../assets/image/imgPanicoVI.png';
import imgQuantumania from '../../assets/image/imgQuantumania.png';


export default function Index() {

    const imagens = document.getElementById('img')
    const img = document.querySelectorAll('#img img')

    let id = 0;

    function carrossel(){
        id++;


        if(id > img.length - 1){
            id = 0;
        }


        imagens.style.transform = `translateX(${-id * 500}px)`;
    }
    //setInterval(carrossel, 1800);


    return (
        <section className='carrossel'>

            <div className='container' id='img'>

                <img src={imgCreed} alt='' />
                <img src={imgQuantumania} alt='' />
                <img src={imgPanico} alt='' />

            </div>

        </section>

    )

}

