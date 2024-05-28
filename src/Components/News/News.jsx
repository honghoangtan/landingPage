import cocktail1 from '../../assets/coktail1.jpg'
import cocktail2 from '../../assets/cocktail2.jpg'
import cocktail3 from '../../assets/cocktail3.jpg'

import { useEffect } from "react";

import ScrollReveal from 'scrollreveal';

function News() {

    useEffect(() => {
        const sr = ScrollReveal({
          origin: 'bottom', // Vị trí bắt đầu của hiệu ứng
          distance: '60px', // Khoảng cách di chuyển của phần tử
          duration: 3000, // Thời gian thực hiện hiệu ứng (miliseconds)
          delay: 600, // Độ trễ trước khi bắt đầu hiệu ứng (miliseconds)
        //   reset: false 
        });
    
        sr.reveal('.new__title');

        sr.reveal('.new__subtitle', {
            delay: 800
        })

        sr.reveal('.items__item', {
            distance: '100px',
            delay: 1000,
            interval: 100
        })
      }, []);

    return ( 
        <section className="mt-[80px] xl:mt-[200px] relative z-20 ">
            <div className="container mx-auto xl:text-white">
                <div className='max-w-[810px] text-center mx-auto mb-[52px]'>
                    <h2 className='new__title h2 xl:text-white'>Articles & News</h2>
                    <p className='new__subtitle'>It is a long estalished fact that a reader will be distracted by the of readable content of page lookings at its layouts points.</p>
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-3 gap-[27px] xl:text-primary">
                    <div className="items__item w-full max-w-[382px] h-[520px] xl:bg-white border border-primary/20 rounded-[62px]
                        p-[20px] hover:bg-accent-secondary transition-all group cursor-pointer mx-auto xl:mx-0">
                        
                        <img src={cocktail3} className='mb-5 rounded-tr-[40px] rounded-tl-[40px]' />

                        <div className='flex flex-col gap-[30px]'>
                            <h3 className='h3'>
                                Let's Get Solution For Building Construction Work
                            </h3>

                            <div className='flex items-center justify-between'>
                                <p className='text-base'>22 June, 2024</p>

                                <button className='bg-accent-secondary w-[52px] h-[52px] rounded-full hover:bg-white
                                    flex items-center justify-center'>
                                    <i className="ri-arrow-right-line text-primary text-3xl pl-1"></i>    

                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="items__item w-full max-w-[382px] h-[520px] xl:bg-white border border-primary/20 rounded-[62px]
                        p-[20px] hover:bg-accent-secondary transition-all group cursor-pointer mx-auto xl:mx-0">
                        
                        <img src={cocktail1} className='mb-5 rounded-tr-[40px] rounded-tl-[40px] w-full h-[253.96px]' />

                        <div className='flex flex-col gap-[30px]'>
                            <h3 className='h3'>
                                Let's Get Solution For Building Construction Work
                            </h3>

                            <div className='flex items-center justify-between'>
                                <p className='text-base'>22 June, 2024</p>

                                <button className='bg-accent-secondary w-[52px] h-[52px] rounded-full hover:bg-white
                                    flex items-center justify-center'>
                                    <i className="ri-arrow-right-line text-primary text-3xl pl-1"></i>    

                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="items__item w-full max-w-[382px] h-[520px] xl:bg-white border border-primary/20 rounded-[62px]
                        p-[20px] hover:bg-accent-secondary transition-all group cursor-pointer mx-auto xl:mx-0">
                        
                        <img src={cocktail2} className='mb-5 rounded-tr-[40px] rounded-tl-[40px] h-[253.96px]' />

                        <div className='flex flex-col gap-[30px]'>
                            <h3 className='h3'>
                                Let's Get Solution For Building Construction Work
                            </h3>

                            <div className='flex items-center justify-between'>
                                <p className='text-base'>22 June, 2024</p>

                                <button className='bg-accent-secondary w-[52px] h-[52px] rounded-full hover:bg-white
                                    flex items-center justify-center'>
                                    <i className="ri-arrow-right-line text-primary text-3xl pl-1"></i>    

                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
     );
}

export default News;