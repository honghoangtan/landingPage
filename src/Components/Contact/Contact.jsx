


import { useEffect } from "react";

import ScrollReveal from 'scrollreveal';

function Contact() {

    useEffect(() => {
        const sr = ScrollReveal({
          origin: 'bottom', // Vị trí bắt đầu của hiệu ứng
          distance: '60px', // Khoảng cách di chuyển của phần tử
          duration: 3000, // Thời gian thực hiện hiệu ứng (miliseconds)
          delay: 600, // Độ trễ trước khi bắt đầu hiệu ứng (miliseconds)
        //   reset: false 
        });
    
        sr.reveal('.contact__container');

        sr.reveal('.contact__text', {
            delay: 800
        })


      }, []);

    return ( 
        <section className="mt-[80px] xl:mt-[200px] relative z-20 ">
            <div className="contact__container container mx-auto xl:text-white bg-primary sm:rounded-[70px] py-[80px]">
                <div className="contact__text text-white max-w-[640px] mx-auto text-center">
                    <h2 className="h2 text-white mb-4">Do you want to join Interno?</h2>
                    <p className="max-w-sm xl:max-w-none mx-auto mb-8">It is a long estalished fact will be distracted.</p>

                    <button className="btn btn-accent mx-auto">Connect with us
                        <i className="ri-arrow-right-line text-primary"></i>    
                    </button>
                </div>
            </div>
        </section>
     );
}

export default Contact;