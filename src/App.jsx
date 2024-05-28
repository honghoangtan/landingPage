// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import './App.css'
import About from './Components/About/About'
import Brand from './Components/Brand/Brand'
import Contact from './Components/Contact/Contact'
// import ReviewForm from './Components/Four/ReviewForm'
// import Collection from './Components/Three/Collection'
// import UserProfile from './Components/One/UserProfile'
// import JobList from './Components/Two/JobList'

// import UserList from './Components/Five/UserList'

// import Notification from './Components/Six/Notification'

// import Buy from './Components/Seven/Buy'

import JobCards from './Components/Eight/JobCards'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'

import MainHeader from './Components/MainHeader/MainHeader'
import News from './Components/News/News'
import Stats from './Components/Stats/Stats'
import Steps from './Components/Steps/Steps'
import Testimonial from './Components/Testimonial/Testimonial'
import Work from './Components/Work/Work'



function App() {

  return (
    <>
    <div className='bg-gray-100'>
        <Header />
        <MainHeader />
        <Steps />
        <About />

        <Testimonial />

        <Brand />

        <Work />

        <Stats />

        <News />

        <Contact />

        <Footer />

        <div className='h-[300px]'></div>

      {/* <UserProfile /> */}
      {/* <JobList /> */}

      {/* <Collection /> */}

      {/* <ReviewForm /> */}

      {/* <UserList /> */}

      {/* <Notification /> */}

      {/* <Buy /> */}

      {/* <JobCards /> */}
    </div>
    </>
  )
}

export default App
