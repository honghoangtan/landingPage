
import { useEffect } from "react";

import ScrollReveal from 'scrollreveal';

function Footer() {

    useEffect(() => {
        const sr = ScrollReveal({
          origin: 'bottom', // Vị trí bắt đầu của hiệu ứng
          distance: '60px', // Khoảng cách di chuyển của phần tử
          duration: 3000, // Thời gian thực hiện hiệu ứng (miliseconds)
          delay: 600, // Độ trễ trước khi bắt đầu hiệu ứng (miliseconds)
        //   reset: false 
        });
    
        sr.reveal('.footer__item', {
            distance: '100px',
            interval: 100,
            delay: 1000
        });
        
        sr.reveal('.footer__copyright');

      }, []);

    return ( 
        <footer className="mt-[80px] xl:mt-[200px] relative z-20 ">
            <div className="container mx-auto xl:text-white px-0">
                <div className="flex flex-col xl:flex-row xl:gap-[100px] xl:mb-[150px]">
                    <div className="footer__item w-full max-w-[400px] mx-auto mb-8
                        text-center xl:text-left">
                        <a href="#" className="flex justify-center xl:justify-start mb-8">
                            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="40" fill="none" viewBox="0 0 100 40"><path fill="#1D2633" d="M4.77 4.235C5.03 3.001 6.26 2 7.513 2h6.812L8.66 28.823H1.848c-1.254 0-2.06-1-1.799-2.235L4.77 4.235ZM27.477 4.235C27.738 3.001 28.967 2 30.22 2h6.812l-5.665 26.823h-6.812c-1.254 0-2.06-1-1.799-2.235l4.721-22.353ZM72.892 4.235C73.152 3.001 74.38 2 75.635 2h6.812l-5.665 26.823h-6.813c-1.254 0-2.059-1-1.798-2.235l4.72-22.353ZM39.303 2h6.812c1.254 0 2.06 1 1.799 2.235l-4.721 22.353c-.26 1.235-1.489 2.235-2.743 2.235h-6.812L39.303 2ZM84.718 2h6.812c1.254 0 2.06 1 1.799 2.235l-4.722 22.353c-.26 1.235-1.488 2.235-2.742 2.235h-6.813L84.718 2ZM50.185 4.235C50.445 3.001 51.673 2 52.927 2h6.813l-5.666 26.823h-6.812c-1.254 0-2.06-1-1.798-2.235l4.72-22.353ZM62.01 2h6.813c1.254 0 2.059 1 1.798 2.235l-7.081 33.53C63.278 38.999 62.05 40 60.796 40h-6.813L62.01 2ZM12.819 19.882h9.083l-1.416 6.706c-.261 1.235-1.49 2.235-2.743 2.235H10.93l1.888-8.94ZM44.52 31.059h9.082L51.714 40h-6.812c-1.255 0-2.06-1-1.799-2.235l1.416-6.706ZM69.174 33.138l-1.15 5.446c-.05.234-.128.298-.366.298h-.523c-.238 0-.29-.064-.24-.298l1.15-5.446c.05-.233.128-.298.366-.298h.523c.238 0 .29.065.24.298ZM70.686 36.812h-.107c-.114 0-.154.032-.177.145l-.344 1.627c-.05.234-.129.298-.366.298h-.524c-.237 0-.289-.064-.24-.298l1.15-5.446c.05-.233.13-.298.367-.298h1.08c1.244 0 1.715.443 1.485 1.53l-.192.911c-.23 1.088-.888 1.53-2.132 1.53Zm.316-2.699-.3 1.426c-.025.113.001.145.116.145h.172c.4 0 .615-.161.702-.572l.12-.572c.087-.41-.059-.572-.46-.572h-.172c-.114 0-.154.032-.178.145ZM74.74 34.991l.85.935c.446.483.508.773.394 1.313l-.03.145c-.215 1.015-.727 1.579-1.914 1.579-1.186 0-1.479-.475-1.205-1.773l.034-.16c.05-.234.129-.299.366-.299h.556c.238 0 .29.065.24.298l-.075.355c-.068.322.036.451.322.451.287 0 .443-.12.505-.41l.032-.154c.048-.226.022-.338-.224-.604l-.8-.862c-.448-.475-.505-.75-.391-1.29l.037-.176c.215-1.015.727-1.58 1.913-1.58 1.187 0 1.48.476 1.206 1.773l-.034.161c-.05.234-.129.298-.366.298h-.557c-.237 0-.289-.064-.24-.298l.075-.354c.068-.323-.035-.451-.322-.451-.286 0-.443.12-.504.41l-.029.137c-.05.234-.024.347.161.556ZM79.532 33.138c.05-.233.128-.298.366-.298h.523c.238 0 .29.065.24.298l-.856 4.053c-.274 1.297-.767 1.772-1.954 1.772-1.186 0-1.479-.475-1.205-1.773l.856-4.052c.05-.233.129-.298.366-.298h.524c.237 0 .289.065.24.298l-.897 4.246c-.068.322.044.451.355.451.302 0 .477-.129.545-.451l.897-4.246ZM82.938 36.417c.003.065.024.08.065.08.04 0 .069-.015.099-.08l1.414-3.367c.069-.17.151-.21.356-.21h.794c.237 0 .289.065.24.298l-1.15 5.446c-.05.234-.13.298-.367.298h-.376c-.237 0-.29-.064-.24-.298l.552-2.61c.015-.072.002-.089-.047-.089-.033 0-.07.017-.09.073l-1.142 2.659c-.082.193-.187.265-.424.265H82.4c-.246 0-.32-.072-.32-.265l-.028-2.66c-.005-.056-.018-.072-.059-.072-.049 0-.069.017-.084.089l-.551 2.61c-.05.234-.128.298-.366.298h-.376c-.238 0-.29-.064-.24-.298l1.15-5.446c.05-.233.129-.298.366-.298h.68c.286 0 .378.065.376.347l-.011 3.23ZM100 2c0 1.105-.89 2-1.987 2a1.993 1.993 0 0 1-1.987-2c0-1.105.89-2 1.987-2S100 .895 100 2Z"></path></svg>
                        </a>
                        <p className="mb-8 text-xl">
                            It is a long estalished fact that a reader will be distracted lookings.
                        </p>        

                        <ul className="text-primary flex justify-center gap-[54px] xl:justify-start">
                            <li>
                                <a><i className="ri-facebook-fill"></i></a>
                            </li>

                            <li>
                                <a><i className="ri-twitter-fill"></i></a>
                            </li>

                            <li>
                                <a><i className="ri-linkedin-fill"></i></a>
                            </li>

                            <li>
                                <a><i className="ri-instagram-fill"></i></a>
                            </li>
                        </ul>
                    </div>

                    <div className="flex-1 flex flex-col xl:flex-row text-center
                        xl:text-left gap-12 xl:gap-[100px] xl:justify-end">
                        
                        <div className="footer__item">
                            <h3 className="h3">Pages</h3>

                            <ul className="flex flex-col gap-4">
                                <li><a>About Us</a></li>
                                <li><a>Testimoni</a></li>
                                <li><a>Our Work</a></li>
                                <li><a>News</a></li>
                                <li><a>Contact</a></li>
                            </ul>
                        </div>

                        <div className="footer__item">
                            <h3 className="h3">Services</h3>

                            <ul className="flex flex-col gap-4">
                                <li><a>Kitchen</a></li>
                                <li><a>Living Area</a></li>
                                <li><a>Bathroom</a></li>
                                <li><a>Bedroom</a></li>
                            </ul>
                        </div>

                        <div className="footer__item">
                            <h3 className="h3">Contact</h3>

                            <div className="flex flex-col gap-6 text-[20px]">
                                <p>55 East Birchwood Ave. Brooklyn, New York 11201.</p>
                                <p>contact@interno.com</p>
                                <p>(123) 456 - 7890</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <p className="footer__copyright text-center text-lg py-10 bg-white xl:border-t">Cpyright &copy; Interno 2024. All rights reserved.</p>
        </footer>
     );
}

export default Footer;