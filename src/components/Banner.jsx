import React from 'react'
import Globe from '../assets/globe.png'
import Give from '../assets/give.png'
import Family from '../assets/family.png'

const details = [
    {icon: Globe, title: "99+", subtitle: "Members Nationwide"},
    {icon: Give, title: "1", subtitle: "Donation Made"},
    {icon: Family, title: "1000+", subtitle: "Targetted Lives To Support"},
]


const Banner = () => {
  return (
    <div className='bg-purple w-full flex items-center md:px-16 lg:px-56 px-8'>
        {details.map((item, id) => {
            return (
                <div key={id} className='flex items-center w-full p-2 lg:p-4 flex-col text-white'>
                    <div className='flex md:gap-4 items-center'>
                        <img src={item.icon} alt={item.icon} className='md:h-10 md:w-10 h-8 w-8'/>
                        <h3 className='text-orange md:text-5xl font-bold'>{item.title}</h3>
                    </div>
                    <p className='text-sm md:text-xl font-semibold text-center'>{item.subtitle}</p>
                </div>
            )
        })}
    </div>
  )
}

export default Banner