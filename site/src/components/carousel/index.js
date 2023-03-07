import './index.scss'
import { motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'

import imgCreed1 from '../../assets/image/imgCreed3.png';
import imgShazam from '../../assets/image/shazam2.png';
import imgPanico from '../../assets/image/imgPanicoVI.png';
import imgQuantumania from '../../assets/image/imgQuantumania.png';
import imgMario from '../../assets/image/SuperMarioMovie.jpg';
import Avatar2 from '../../assets/image/Avatar2.jpg';
import TopGun from '../../assets/image/topGun.png';

const images = [imgCreed1, Avatar2, imgPanico, imgQuantumania, TopGun, imgShazam, imgMario]

export default function Index() {

    const carousel = useRef();
    const [width, setWidth] = useState(0)


    useEffect(() => {
        console.log(carousel.current?.scrollWidth, carousel.current?.offsetWidth)
        setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)

    }, [])



    return (

        <main className='comp-car'>

            <motion.div ref={carousel} className='carousel' whileTap={{ cursor: 'grabbing' }}>
                <motion.div className='inner'
                    drag="x"
                    dragConstraints={{ right: 0, left: -width }}
                    initial={{ x: 100 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.8 }}>

                    {images.map(item =>
                        <motion.div className='item' key={item}>
                             <img src={item} alt='' />
                        </motion.div>
                    )}

                </motion.div>
            </motion.div>

        </main>


    )

}
