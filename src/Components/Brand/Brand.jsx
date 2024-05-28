import brand1 from '../../assets/brand1.png'
import brand2 from '../../assets/brand2.png'
import brand3 from '../../assets/brand3.jpg'
import brand4 from '../../assets/brand4.png'
import brand5 from '../../assets/brand5.jpg'


import { useEffect } from "react";

import ScrollReveal from 'scrollreveal';

function Brand() {

    useEffect(() => {
        const sr = ScrollReveal({
          origin: 'bottom', // Vị trí bắt đầu của hiệu ứng
          distance: '60px', // Khoảng cách di chuyển của phần tử
          duration: 3000, // Thời gian thực hiện hiệu ứng (miliseconds)
          delay: 600, // Độ trễ trước khi bắt đầu hiệu ứng (miliseconds)
        //   reset: false 
        });
    
        sr.reveal('.brands__img', {
            delay: 600,
            distance: '100px',
            interval: 100
        });

      }, []);

    return ( 
        <section className="mt-[80px] xl:mt-[200px] xl:text-white relative z-20">
            <div className="container mx-auto">
                <div className='flex flex-col xl:flex-row justify-between items-center gap-12'>
                    <img className='brands__img w-[200px] h-[200px]'  src={brand1} />
                    <img className='brands__img w-[200px] h-[200px]' src={brand2} />
                    <img className='brands__img w-[200px] h-[200px]' src={brand3} />
                    <img className='brands__img w-[200px] h-[200px]' src={brand4} />
                    <img className='brands__img w-[200px] h-[200px]' src={brand5} />
                    </div>
            </div>
        </section>
     );
}

export default Brand;