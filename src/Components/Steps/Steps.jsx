import { useEffect } from "react";

import ScrollReveal from 'scrollreveal';
function Steps() {

    useEffect(() => {
        const sr = ScrollReveal({
          origin: 'bottom', // Vị trí bắt đầu của hiệu ứng
          distance: '60px', // Khoảng cách di chuyển của phần tử
          duration: 3000, // Thời gian thực hiện hiệu ứng (miliseconds)
          delay: 600, // Độ trễ trước khi bắt đầu hiệu ứng (miliseconds)
        //   reset: false 
        });
    
        sr.reveal('.steps__step', {
            distance: '100px',
            interval: 100
        });
      }, []);

    return ( 
        <section className="mt-[80px] xl:mt-[200px] xl:text-white relative z-20">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 gap-12 xl:grid-cols-3">
                    <div className="steps__step text-center">
                        <div className="mb-4">
                            <i className="ri-compasses-2-line text-5xl text-accent"></i>
                        </div>

                        <h3 className="h3 mb-5">Project Planning</h3>

                        <p className="mb-5 max-w-md mx-auto">
                            There are many variations of the passages of lorem Ipsum from
                            available, majority
                        </p>

                        <a href="#" className="font-medium flex items-center justify-center gap-2">
                            Read more
                            <i className="ri-arrow-right-line text-accent"></i>    
                        </a>
                    </div>

                    <div className="steps__step text-center">
                        <div className="mb-4">
                            <i className="ri-magic-line text-5xl text-accent"></i>
                        </div>

                        <h3 className="h3 mb-5">Gaining Materials</h3>

                        <p className="mb-5 max-w-md mx-auto">
                            There are many variations of the passages of lorem Ipsum from
                            available, majority
                        </p>

                        <a href="#" className="font-medium flex items-center justify-center gap-2">
                            Read more
                            <i className="ri-arrow-right-line text-accent"></i>    
                        </a>
                    </div>

                    <div className="steps__step text-center">
                        <div className="mb-4">
                            <i className="ri-tools-line text-5xl text-accent"></i>
                        </div>

                        <h3 className="h3 mb-5">Project Execution</h3>

                        <p className="mb-5 max-w-md mx-auto">
                            There are many variations of the passages of lorem Ipsum from
                            available, majority
                        </p>

                        <a href="#" className="font-medium flex items-center justify-center gap-2">
                            Read more
                            <i className="ri-arrow-right-line text-accent"></i>    
                        </a>
                    </div>
                </div>
            </div>
        </section>
     );
}

export default Steps;