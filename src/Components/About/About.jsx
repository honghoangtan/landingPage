import dining from '../../assets/dining.jpg'

import { useEffect } from "react";

import ScrollReveal from 'scrollreveal';

function About() {

    useEffect(() => {
        const sr = ScrollReveal({
          origin: 'bottom', // Vị trí bắt đầu của hiệu ứng
          distance: '60px', // Khoảng cách di chuyển của phần tử
          duration: 3000, // Thời gian thực hiện hiệu ứng (miliseconds)
          delay: 600, // Độ trễ trước khi bắt đầu hiệu ứng (miliseconds)
        //   reset: false 
        });
    
        sr.reveal('.about__text', {
            origin: 'left'
        });

        sr.reveal('.about__img', {
            origin: 'right',
            delay: 800
        })
      }, []);

    return ( 
        <section className="mt-[80px] xl:mt-[200px] xl:text-white relative z-20">
            <div className="container mx-auto xl:px-0">
                <div className="flex flex-col xl:flex-row text-center xl:text-left justify-between items-center
                gap-8 xl:gap-[74px]">
                    <div className="about__text flex-1 order-2 xl:order-none max-w-xl xl:max-w-[410px]
                        flex flex-col items-center xl:items-start gap-8">
                        <h2 className='h2'>
                            We Create The Art Of Stylish Living Stylishly
                        </h2>
                        <p>
                            It is a long estalished fact that a reader will
                            be distracted by the of readable content of
                            a page when lookings at its layouts the
                            points of using that it has a more-or-less normal.
                        </p>

                        <div className='flex items-center justify-center xl:justify-start gap-4'>
                            <div className='bg-accent/15 w-[93px] h-[93px] rounded-full flex items-center justify-center'>
                                <i className="ri-phone-fill text-accent text-4xl"></i>
                            </div>

                            <div className='text-left'>
                                <div className='text-2xl font-bold'>0942 425 85</div>
                                <div>Call Us Anytime</div>
                            </div>    
                        </div>

                        <div>
                            <button className='btn btn-primary'>
                                Get free estimaiton
                                <i className="ri-arrow-right-line text-accent"></i>    

                            </button>
                        </div>
                    </div>

                    <div className="about__img order-1 xl:order-none max-w-[453px]
                        mx-auto xl:max-w-[600px] xl:mx-0">
                        <img className='rounded-tr-[150px] rounded-bl-[70px]' src={dining} alt=""/>
                    </div>
                </div>
            </div>
        </section>
     );
}

export default About;