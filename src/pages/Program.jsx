import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../assets/program-hero.png'
import Img1 from '../assets/program-img1.png'
import Img2 from '../assets/program-img2.png'
import Img3 from '../assets/program-img3.png'
import Img4 from '../assets/program-img4.png'
import Img5 from '../assets/program-img5.png'
import Img6 from '../assets/program-img6.png'
import Hot from '../assets/hot.jpg'
import Donate from '../assets/donation.jpg'
import Footer from '../components/Footer'
import Aos from 'aos'
import 'aos/dist/aos.css'


const activities = [
  {image: Img1, title: "Mental Health Awareness and Menstral Hygiene", subtitle: "YPF shared free sanitary pads to the students of Ekumfi Etsibeedu JHS during our first donation."},
  {image: Img2, title: "Education For All", subtitle: "Donation of free teaching and learning materials to students and teachers who made to make learning easier"},
  {image: Img3, title: "Community Health Awareness", subtitle: " Providing essential healthcare services and education to underserved communities, ensuring access to basic health needs."},
  {image: Img4, title: "Youth Empowerment", subtitle: "Empowering the next generation with skills, resources, and opportunities to become leaders and change-makers in their communities."},
  {image: Img5, title: "Women Empowerment", subtitle: "Supporting women and girls through education, vocational training, and advocacy to promote gender equality and economic independence."},
]

const Program = () => {

  useEffect(() => {
    Aos.init({
        once: false,
    })
  }, [])

  return (
    <div className=''>
      <Navbar />
      <div className='flex items-center w-full h-[40vh] md:h-[30vh] lg:h-[70vh] bg-white'>
        <div className='flex flex-col gap-6 px-8 md:pl-12 -pt-20'>
          <h1 data-aos="fade-right" data-aos-duration="1000" className='text-orange text-3xl md:text-4xl font-semibold'>Our <span className='text-purple'>Programs</span></h1>
          <div className='lg:w-[450px] md:w-[400px] h-0.5 bg-orange'/>
          <p data-aos="fade-right" data-aos-duration="2000" className='max-md:text-sm'>Our programs save and transform the lives of the poor and needy in the society.</p>
        </div>
        <img data-aos="fade-left" data-aos-duration="800" src={Hero} alt="program-hero" className=' max-md:hidden w-full h-full'/>
      </div>
      <div className='bg-white my-5'>
        <p data-aos="fade-out" data-aos-duration="1000" data-aos-delay="500" className='md:p-12 p-8 md:w-[60vw] lg:w-[50vw]'>"Our programs are designed to address the most pressing needs in our communities, from education and health to sustainable livelihoods. Each initiative is crafted with care to create lasting impact and drive positive change."</p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-8 lg:mx-20 pt-8'>
          {activities.map((item, id) => {
              return(
                  <div data-aos="zoom-in" data-aos-duration="1500" className="bg-white shadow-xl border-2 border-orange rounded-2xl" key={id}>
                      <figure>
                          <img
                          src={item.image}
                          alt="Executives" className='rounded-t-xl'/>
                      </figure>
                      <div className="py-2 px-4 flex flex-col gap-1">
                          <h2 className="card-title text-purple">{item.title}</h2>
                          <p className='text-sm'>{item.subtitle}</p>
                      </div>
                  </div>
              )
          })}
        </div>
        <div className='pt-32 w-full'>
          <div className='flex flex-col items-center text-3xl md:text-4xl font-semibold'>
            <h1 data-aos="fade-down" data-aos-duration="2000" className='text-purple'>Join Our Upcoming</h1>
            <h1 data-aos="fade-down" data-aos-duration="1000" className='text-orange'>Events</h1>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-5 py-10 mx-8 md:mx-16 lg:mx-44 place-items-center'>
            <img data-aos="flip-right" data-aos-duration="1500" src={Donate} alt="" className='w-[400px] border-2 border-orange rounded-lg'/>
            <img data-aos="flip-left" data-aos-duration="1500" src={Hot} alt="" className='w-[400px] border-2 border-orange rounded-lg'/>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Program