import React from 'react'
import images from '../images/image54.svg'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className="mx-16 pt-32 items-center space-y-5">
            <img src={images} className=" max-w-full " />
            <div className="about-page-content space-y-5">
                <h1 className='text-2xl'>Don’t squeeze in a sedan when you could relax in a van.</h1>
                <p className='w-1/2'>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch. (Hitch costs extra 😉)</p>
                <p >Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
            </div>
            <div className="about-page-cta h-48 bg-[#ffcc8d] w-1/2 flex flex-col justify-center items-center space-y-3">
                <h2>Your destination is waiting.<br />Your van is ready.</h2>
                <Link className='bg-black p-4 text-white' to='/vans'>Explore your vans</Link>
            </div>
            
        </div>
  )
}

export default About
