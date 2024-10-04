import React, { useEffect, useState } from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom';
import { CgMenu } from "react-icons/cg";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [selectedLink, setSelectedLink] = useState('');
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const handleLinkClick = (link) => {
    setSelectedLink(link);
  };


    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen)
    }

  return (
    <nav className="sticky top-0 z-50 w-full bg-purple">
        <div className="mx-4 md:mx-10 relative">
            <div className="flex justify-between items-center">
              <Link to='/'>
                <div className="flex items-center py-3 flex-shrink-0">
                    <img src={logo} alt="Logo" className='w-24' />
                </div>
              </Link>
                <ul className=" hidden lg:flex gap-8 font-normal text-xl text-white items-center">
                  <Link to='/' onClick={() => handleLinkClick('Home')}>
                    <li className="">Home</li>
                  </Link>
                  <Link to='/about' onClick={() => handleLinkClick('About')}>
                    <li className="">About Us</li>
                  </Link>
                  <Link to='/program' onClick={() => handleLinkClick('Company')}>
                    <li className="">Programs</li>
                  </Link>
                  <Link to='/contact'>
                    <li onClick={() => handleLinkClick('Services')} className="">Contact</li>
                  </Link>
                  <Link to='/donate'>
                    <button className='bg-white border-2 border-orange text-orange rounded-3xl py-2 px-4 hover:bg-orange hover:text-white duration-300 ease-linear hover:scale-90'>Donate Now</button>
                  </Link>
                </ul>
                <div className="lg:hidden md:flex md:flex-col justify-end">
                    <button onClick={toggleNavbar}>
                        {mobileDrawerOpen ? <AiOutlineClose className='text-5xl font-bold text-white' /> : <CgMenu className='text-5xl font-bold text-white' />}

                    </button>
                </div>
            </div>
            {mobileDrawerOpen && (
                <div className="fixed transform -translate-x-[5%] transition-all duration-500 ease-in-out top-20 left-0 z-20 w-3/4 h-[100vh] p-12 flex flex-col items-center lg:hidden py-32 bg-purple">
                    <ul className='font-semibold text-lg text-white text-center flex flex-col gap-3'>
                        <li className='' onClick={toggleNavbar}><Link to="/">Home</Link></li>
                        <li className='' onClick={toggleNavbar}><Link to="/about">About Us</Link></li>
                        <li className='' onClick={toggleNavbar}><Link to="/program">Programs</Link></li>
                        <li className='' onClick={toggleNavbar}><Link to="/contact">Contact Us</Link></li>
                        <button className='bg-white border-2 border-orange text-orange rounded-3xl py-1 px-3'><Link to='/donate'>Donate Now</Link></button>
                    </ul>
                </div>
            )}
        </div>
    </nav>
  )
}

export default Navbar