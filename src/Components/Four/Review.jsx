import { useState } from "react";


function Review() {
    // eslint-disable-next-line react/prop-types

    const [star, setStar] = useState(0)

    const getAnimalsContent = () => {
        let content = [];
        for (let i = 0; i < 5; i++) {
            content.push(
                <span 
                    className={`inline-flex justify-center items-center h-12 w-12 cursor-pointer rounded-sm border-2 border-[#EEF2FF] ${i <= star ? 'text-yellow-400' : 'text-gray-400'} `}
                    onClick={() => setStar(i)}    
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                    </svg>
                </span>
            )
        }
        return content
    };

    return ( 
        <div className="space-x-1 mb-1">
            { getAnimalsContent()}
        </div>
     );
  }
  
  export default Review;