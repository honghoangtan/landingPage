import reactLogo from '../../assets/solo-leveling-anime-trailer.jpg'

import './asd.css'


function Collection() {

    const profile = [
        'Profile', 'New York', 'Relaxing', 'Person', 'Fashion'
    ]

    return ( 
        <div className="w-full p-16 rounded-lg bg-[#eff0f1] shadow-lg">
            <h1 className="text-3xl font-bold">Collection</h1>

            <div className="mt-6">

                {profile.map((item, index) => {
                    return (
                        <a 
                            key={index}
                            className="cursor-pointer px-4 py-3 inline-block bg-white rounded-lg hover:bg-blue-400 mr-2 mt-2"
                        >{item}</a>
                    )
                })}
            </div>

            <div className="mt-8 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
                <div className='bg-white rounded-3xl p-6'>
                    <div>
                        <img 
                            src={reactLogo} 
                            className='w-full aspect-video rounded-2xl' 
                        />
                    </div>

                    <div className='mt-3 grid grid-cols-3 gap-3'>
                        <img 
                            src={reactLogo} 
                            className='w-full aspect-video rounded-xl' 
                        />
                        <img 
                            src={reactLogo} 
                            className='w-full aspect-video rounded-xl' 
                        />
                        <img 
                            src={reactLogo} 
                            className='w-full aspect-video rounded-xl' 
                        />
                        
                    </div>

                    <div className='flex justify-between pt-6'>
                        <h3 className='font-bold'>People</h3>
                        <p>View</p>
                    </div>
                </div>

                <div className='bg-white rounded-3xl p-6'>
                    <div>
                        <img 
                            src={reactLogo} 
                            className='w-full aspect-video rounded-2xl' 
                        />
                    </div>

                    <div className='mt-3 grid grid-cols-3 gap-3'>
                        <img 
                            src={reactLogo} 
                            className='w-full aspect-video rounded-xl' 
                        />
                        <img 
                            src={reactLogo} 
                            className='w-full aspect-video rounded-xl' 
                        />
                        <img 
                            src={reactLogo} 
                            className='w-full aspect-video rounded-xl' 
                        />
                        
                    </div>

                    <div className='flex justify-between pt-6'>
                        <h3 className='font-bold'>Nature</h3>
                        <p>View</p>
                    </div>
                </div>

                <div className='bg-white rounded-3xl p-6'>
                    <div>
                        <img 
                            src={reactLogo} 
                            className='w-full aspect-video rounded-2xl' 
                        />
                    </div>

                    <div className='mt-3 grid grid-cols-3 gap-3'>
                        <img 
                            src={reactLogo} 
                            className='w-full aspect-video rounded-xl' 
                        />
                        <img 
                            src={reactLogo} 
                            className='w-full aspect-video rounded-xl' 
                        />
                        <img 
                            src={reactLogo} 
                            className='w-full aspect-video rounded-xl' 
                        />
                        
                    </div>

                    <div className='flex justify-between pt-6'>
                        <h3 className='font-bold cssh3'>History</h3>
                        <p>View</p>
                    </div>
                </div>
            </div>

        </div>
     );
}

export default Collection;