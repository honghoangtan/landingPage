import reactLogo from '../../assets/solo-leveling-anime-trailer.jpg'

function UserProfile() {
    return ( 
        <div className="w-[36rem] bg-white p-12 flex gap-x-4">
            <img 
                src={reactLogo} 
                className='w-32 h-32 rounded-full border-[11px] border-[#E6EFFA]' 
            />

            <div className='space-y-7 text-[#1c2862]'>
                <div>
                    <h1 className='text-3xl font-bold'>David Grand</h1>
                    <h2 className='mt-1'>3D Artist</h2>
                </div>

                <div className='space-y-3'>
                    <p className='flex items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline-block mr-1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                        </svg>
                        4.7 Rating
                    </p>

                    <p className='flex items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline-block mr-1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
                    </svg>

                        4.447 Reviews
                    </p>

                    <p className='flex items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline-block mr-1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                    </svg>

                        478 Students
                    </p>
                </div>

                <div>
                    <p className='text-lg'>
                        David Grant has been making video
                        games for a living for more than 14
                        years as a Designer, Producer, 
                        Creative Director, and Executive
                        console, mobile, PC and Facebook
                    </p>
                </div>

                <div>
                    <button className='p-2 border-2 border-[#c4cadf] rounded-md'>Show more</button>
                </div>
            </div>
        </div>
     );
}

export default UserProfile;