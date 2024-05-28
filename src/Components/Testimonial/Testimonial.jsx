// Import Swiper React components
// import SwiperCore, { Pagination } from 'swiper';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import user1 from '../../assets/user1.png'

// SwiperCore.use([Pagination]);

import { useEffect } from "react";

import ScrollReveal from 'scrollreveal';

function Testimonial() {

    useEffect(() => {
        const sr = ScrollReveal({
          origin: 'bottom', // Vị trí bắt đầu của hiệu ứng
          distance: '60px', // Khoảng cách di chuyển của phần tử
          duration: 3000, // Thời gian thực hiện hiệu ứng (miliseconds)
          delay: 600, // Độ trễ trước khi bắt đầu hiệu ứng (miliseconds)
        //   reset: false 
        });
    
        sr.reveal('.testmonial__bg', {
            delay: 800
        });

        sr.reveal('.testimonial__title')

        sr.reveal('.testimonial__slider', {
            delay: 1000
        })
      }, []);

    return ( 
        <section className="mt-[80px] xl:mt-[200px] xl:text-white relative z-20">
            <div className="testmonial__bg container mx-auto bg-accent-secondary rounded-[70px] px-6">

                <div className='flex flex-col items-center justify-center pt-[88px] pb-[110px]'>
                    <h2 className='testimonial__title h2 mb-9 text-center'>What clients say</h2>
                    <div className='w-full'>
                        <div className='testimonial__slider h-[400px]'>
                            <Swiper
                                className='pb-8'
                                modules={[Navigation, Pagination, Scrollbar, A11y]}
                                pagination={{ 
                                    clickable: true 
                                }}

                                spaceBetween={50}
                                slidesPerView={1}
                                Navigation
                                scrollbar={{ draggable: true }}
                                onSwiper={(swiper) => console.log(swiper)}
                                onSlideChange={() => console.log('slide change')}
                                breakpoints={{
                                    320: {
                                    slidesPerView: 1,
                                    spaceBetween: 20,
                                    },
                                    960: {
                                    slidesPerView: 2,
                                    spaceBetween: 40,
                                    },
                                    1200: {
                                    slidesPerView: 3,
                                    spaceBetween: 50,
                                    },
                                }}
                            >
                                <SwiperSlide className=''>
                                    <div className='w-full max-w-[450px] h-[340px] bg-white rounded-[30px]
                                            flex flex-col items-center justify-center p-9 mx-auto text-black'
                                        >
                                            <div className='flex items-center justify-center gap-4 mb-6'>
                                                <img src={user1} className='w-[50px] h-[50px] rounded-full'/>
                                                <div>
                                                    <h3 className='h3'>Nattasha Mith</h3>
                                                    <div>Greenville, USA</div>
                                                </div>
                                            </div>

                                            <p>
                                                Lorem Ipsum is simply dummy text of the typesetting
                                                idustry. Ipsum has been.
                                            </p>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide className=''>
                                    <div className='w-full max-w-[450px] h-[340px] bg-white rounded-[30px]
                                            flex flex-col items-center justify-center p-9 mx-auto text-black'
                                        >
                                            <div className='flex items-center justify-center gap-4 mb-6'>
                                                <img src={user1} className='w-[50px] h-[50px] rounded-full'/>
                                                <div>
                                                    <h3 className='h3'>Jessica White</h3>
                                                    <div>Oak Ridge, USA</div>
                                                </div>
                                            </div>

                                            <p>
                                                Lorem Ipsum is simply dummy text of the typesetting
                                                idustry. Ipsum has been.
                                            </p>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide className=''>
                                    <div className='w-full max-w-[450px] h-[340px] bg-white rounded-[30px]
                                            flex flex-col items-center justify-center p-9 mx-auto text-black'
                                        >
                                            <div className='flex items-center justify-center gap-4 mb-6'>
                                                <img src={user1} className='w-[50px] h-[50px] rounded-full'/>
                                                <div>
                                                    <h3 className='h3'>Mike Davis</h3>
                                                    <div>Berlin, Germany</div>
                                                </div>
                                            </div>

                                            <p>
                                                Lorem Ipsum is simply dummy text of the typesetting
                                                idustry. Ipsum has been.
                                            </p>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </section>
     );
}

export default Testimonial;