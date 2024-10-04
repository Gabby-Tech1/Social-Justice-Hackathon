import React from 'react'
import Logo from '../assets/logo.png'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { AiFillTikTok } from 'react-icons/ai'
import { FaLinkedin } from 'react-icons/fa6'
import { BsTwitterX } from 'react-icons/bs'
import { IoLogoWhatsapp, IoLogoYoutube } from 'react-icons/io'
import { FaInstagramSquare } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='bg-purple w-[100%] px-1 sm:px-8 md:px-12 lg:px-20'>
        <div className='grid grid-cols-2 lg:grid-cols-3  gap-12 py-10'>
            <div className='flex flex-col gap-10 '>
                <div className='flex flex-col gap-1'>
                    <img src={Logo} alt="" className='md:w-32 w-24'/>
                    <p className='uppercase text-white text-lg md:text-2xl font-semibold pl-4'>Young Philanthropists Foundation</p>
                </div>
                <p className='pl-4 text-white'>Creating smiles with a coin</p>
            </div>
            <div>
                <h1 className='text-orange font-semibold text-xl md:text-3xl mt-3'>QUICK LINKS</h1>
                <ul className='pl-4 text-white my-3 flex flex-col gap-1 md:text-lg'>
                    <Link to='/'><li className='flex gap-2 items-center'><MdOutlineKeyboardArrowRight /> Home</li></Link>
                    <Link to='/about'><li className='flex gap-2 items-center'><MdOutlineKeyboardArrowRight /> About Us</li></Link>
                    <Link to='/program'><li className='flex gap-2 items-center'><MdOutlineKeyboardArrowRight /> Programs</li></Link>
                    <Link to='/contact'><li className='flex gap-2 items-center'><MdOutlineKeyboardArrowRight /> Contact Us</li></Link>
                    <Link to='/donate'><li className='flex gap-2 items-center'><MdOutlineKeyboardArrowRight /> Donate</li></Link>
                </ul>
            </div>
            <div className='w-full flex flex-col items-center justify-center gap-4 max-lg:w-[100vw]'>
                <h1 className='text-orange text-xl md:text-3xl font-semibold text-center mt-3'>FOLLOW US ON OUR PLATFORMS</h1>
                <div className='grid grid-cols-6 lg:grid-cols-3 text-5xl gap-4 md:place-items-center mx-auto md:mx-16 text-white text-center'>
                    <a href="https://www.tiktok.com/@our_ypf?_t=8ponWxaObig&_r=1" target="_blank" rel="noopener noreferrer"><AiFillTikTok className='text-4xl'/></a>
                    <a href="https://www.linkedin.com/company/young-philantropists-foundation/?viewAsMember=true" target="_blank" rel="noopener noreferrer"><FaLinkedin className='text-4xl'/></a>
                    <a href="https://x.com/our_ypf?s=11" target="_blank" rel="noopener noreferrer"><BsTwitterX className='text-4xl'/></a>
                    <a href="https://youtube.com/@ourypf?si=WgS_SiiQCW9MZxVI" target="_blank" rel="noopener noreferrer"><IoLogoYoutube className='text-4xl'/></a>
                    <a href="https://chat.whatsapp.com/FPj0wE9G9Zw1LtdRAU1NCU " target="_blank" rel="noopener noreferrer"><IoLogoWhatsapp className='text-4xl'/></a>
                    <a href="https://www.instagram.com/our_ypf?igsh=aTZuN3Y0NHluNmdl&utm_source=qr" target="_blank" rel="noopener noreferrer"><FaInstagramSquare className='text-4xl'/></a>
                </div>
            </div>
        </div>
        <div className='w-full h-0.5 bg-orange'/>
        <p className='text-orange text-center py-2 max-md:text-sm'>Young Philanthropist Foundation @2024.  All Right Reserved</p>
    </div>
  )
}

export default Footer