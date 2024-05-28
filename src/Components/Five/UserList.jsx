import { useEffect, useState } from 'react';
import reactLogo from '../../assets/solo-leveling-anime-trailer.jpg'


function Review() {
    // eslint-disable-next-line react/prop-types

    const [query, setQuery] = useState('')

    const [filterUsers, setFilterUsers] = useState([])

    const filters = [
        'Reputation',
        'New users',
        'Voters',
        'Editors',
        'Moderators'
    ]

    const users = [
        {
            img: reactLogo,
            name: 'Lelah Nichols',
            des: 'Troy, Ml',
            job: ['clothes', 'stem']
        },
        {
            img: reactLogo,
            name: 'Jesus Weiss',
            des: 'Fort Worth, TX',
            job: ['headset', 'gadget', 'speed', 'winter']
        },
        {
            img: reactLogo,
            name: 'Annie Rice',
            des: 'Austin, TX',
            job: ['road', 'moutain', 'trip', 'earth', 'nature']
        },
        {
            img: reactLogo,
            name: 'Robert Browser',
            des: 'Cincinnati, OH',
            job: ['Maintenance', 'gears', 'frames', 'repair']
        },
        {
            img: reactLogo,
            name: 'Amy Campbell',
            des: 'Warrior, AL',
            job: ['music', 'dicks']
        },
        {
            img: reactLogo,
            name: 'Anthony S.Morin',
            des: 'Lyndhurst, NJ',
            job: ['vintage', 'electric']
        }
    ]

    // const filterUsers = query.length > 0
    //     ?
    //     users.filter((item) => {
    //         return item.name.toLocaleLowerCase().includes(query.toLocaleLowerCase())
    //     })
    //     : 
    //     users
    
    useEffect(() => {
        setFilterUsers(
            query.length > 0
            ?
            users.filter((item) => {
                return item.name.toLocaleLowerCase().includes(query.toLocaleLowerCase())
            })
            : 
            users
        )    
    }, [query])

    if (filterUsers.length > 0) {
        console.log(filterUsers)
    }

    return ( 
        <div className="bg-white p-16 rounded-lg shadow">
            <h1 className="font-medium text-3xl">
                Users
            </h1>

            <div className="mt-4 grid grid-cols-1 gap-1 md:grid-cols-2 md:gap-2">
                <div className="relative grow">
                    <input 
                        type="text" 
                        id="first_name" 
                        className="pl-8 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        placeholder="Search users" 
                        required 
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="absolute w-6 h-6 top-2.5 text-gray-300 pl-2 ">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                
                </div>
                
                <div>
                    {filters.map((item, index) => {
                        return (
                            <a className="inline-block cursor-pointer px-4 py-3 hover:bg-[#849fff] hover:text-white rounded-lg" key={index}>{item}</a>
                        )
                    })}
                </div>
                
            </div>

            <div className='mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
                {filterUsers.map((item, index) => {
                    return (
                        <div key={index} className='flex gap-x-4 bg-[#fbfcff] hover:shadow-lg hover:border-[1px] hover:border-[#bfc8e5] rounded-2xl cursor-pointer p-6'>
                            <img src={item.img} className='h-24 w-24 rounded-full' />

                            <div className='flex flex-col'>
                                <h3 className='font-bold'>{item.name}</h3>    
                                <p className='text-sm font-medium'>{item.des}</p>

                                <div className='space-x-2 mt-4'>
                                    {item.job.map((item, index) => {
                                        return (
                                            <span className='inline-block rounded-full text-xs text-[#516FD4] border-[1px] border-slate-500 px-2 text-center' key={index}>{item}</span>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
     );
  }
  
  export default Review;