import dining from '../../assets/dining.jpg'


import { useEffect } from "react";

import ScrollReveal from 'scrollreveal';

function Work() {

    useEffect(() => {
        const sr = ScrollReveal({
          origin: 'bottom', // Vị trí bắt đầu của hiệu ứng
          distance: '60px', // Khoảng cách di chuyển của phần tử
          duration: 3000, // Thời gian thực hiện hiệu ứng (miliseconds)
          delay: 600, // Độ trễ trước khi bắt đầu hiệu ứng (miliseconds)
        //   reset: false 
        });
    
        sr.reveal('.work__title');
        sr.reveal('.work__subtitle', {
            delay: 800
        });
        sr.reveal('.work__grid', {
            delay: 1000
        });

      }, []);

    return ( 
        <section className="mt-[80px] xl:mt-[200px] xl:text-white relative z-20">
            <div className="container mx-auto xl:px-0">

                <div className='text-center mb-24 text-black xl:text-white'>
                    <h2 className='work__title h2 mb-4 xl:text-white'>
                        Follow Our Projects
                    </h2>
                    
                    <p className='work__subtitle max-w-3xl mx-auto'>It is a long estalished fact that a reader will be distracted by
                        the of readable content of page lookings at its layouts points.
                    </p>
                </div>

                <div className="work__grid grid grid-cols-1 xl:grid-cols-2 gap-x-[104px] gap-y-[56px]">
                    <div className="w-full max-w-[548px] h-full mx-auto">
                        <img className='mb-6 rounded-tr-[80px]' src={dining} />

                        <div className='flex justify-between items-center w-full'>
                            <div className='text-black xl:text-white'>
                                <h3 className='h3 xl:text-white'>Modern Kitchen</h3>
                                <p>Decor/Architecture</p>
                            </div>

                            <button className='bg-accent-secondary hover:bg-accent/20 w-[70px] h-[70px] rounded-full'>
                                <i className="ri-arrow-right-line text-black"></i>    
                            </button>
                        </div>
                    </div>
                    <div className="w-full max-w-[548px] h-full mx-auto">
                        <img className='mb-6 rounded-tl-[80px]' src={dining} />

                        <div className='flex justify-between items-center w-full'>
                            <div className='text-black xl:text-white'>
                                <h3 className='h3 xl:text-white'>Modern Kitchen</h3>
                                <p>Decor/Architecture</p>
                            </div>

                            <button className='bg-accent-secondary hover:bg-accent/20 w-[70px] h-[70px] rounded-full'>
                                <i className="ri-arrow-right-line text-black"></i>    
                            </button>
                        </div>
                    </div>
                    <div className="w-full max-w-[548px] h-full mx-auto">
                        <img className='mb-6 rounded-br-[80px]' src={dining} />

                        <div className='flex justify-between items-center w-full'>
                            <div className='text-black xl:text-white'>
                                <h3 className='h3 xl:text-white'>Modern Kitchen</h3>
                                <p className=''>Decor/Architecture</p>
                            </div>

                            <button className='bg-accent-secondary hover:bg-accent/20 w-[70px] h-[70px] rounded-full'>
                                <i className="ri-arrow-right-line text-black"></i>    
                            </button>
                        </div>
                    </div>
                    <div className="w-full max-w-[548px] h-full mx-auto">
                        <img className='mb-6 rounded-bl-[80px]' src={dining} />

                        <div className='flex justify-between items-center w-full'>
                            <div className='text-black xl:text-white'>
                                <h3 className='h3 xl:text-white'>Modern Kitchen</h3>
                                <p>Decor/Architecture</p>
                            </div>

                            <button className='bg-accent-secondary hover:bg-accent/20 w-[70px] h-[70px] rounded-full'>
                                <i className="ri-arrow-right-line text-black"></i>    
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
     );
}

export default Work;