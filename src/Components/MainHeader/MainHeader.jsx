import { useEffect } from "react";
import { Fade } from "react-awesome-reveal";

import ScrollReveal from 'scrollreveal';

function MainHeader() {
    useEffect(() => {
        const sr = ScrollReveal({
          origin: 'bottom', // Vị trí bắt đầu của hiệu ứng
          distance: '60px', // Khoảng cách di chuyển của phần tử
          duration: 3000, // Thời gian thực hiện hiệu ứng (miliseconds)
          delay: 600, // Độ trễ trước khi bắt đầu hiệu ứng (miliseconds)
        //   reset: false 
        });
    
        sr.reveal('.heroo__test', {
            origin: 'top',
          interval: 200 // Khoảng cách giữa các phần tử được thực hiện hiệu ứng
        });
      }, []);

    return ( 
        <div className="max-w-[1920px] bg-white overflow-hidden mx-auto">
            <div className="xl:bg-grid z-10 xl:bg-center xl:bg-repeat-y fixed top-0 bottom-0 left-0 right-0"></div>

            <section className="h-[640px] xl:h-[840px] bg-center bg-hero lg:bg-cover bg-no-repeat
            bg-fixed xl:rounded-bl-[290px] relative z-20">
                <div className="container mx-auto h-full flex items-center justify-center xl:justify-start">

                    {/* <Fade direction={'down'} delay={600} duration={3000} offset={100}>

                    
                    </Fade> */}
                    <div className="heroo__test w-[567px] flex flex-col items-center justify-center text-center
                        xl:text-left lg:items-start">
                            <h1 className="h1 mb-8">Let Your Home By Unique</h1>
                            <p className="mb-8">There are many variations of the passages of lorem lpsum
                                from available, varitions of the passages
                            </p>
                            <button className="btn btn-primary">
                                Get Free Estimation
                                <i className="ri-arrow-right-line text-accent"></i>    
                            </button>
                    </div>
                </div>
            </section>
        </div>
     );
}

export default MainHeader;