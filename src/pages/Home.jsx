import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../assets/hero-home.png'
import Donate from '../assets/donate.png'
import Volunteer from '../assets/volunteer.png'
import Inspiration from '../assets/inspiration.png'
import About from '../assets/divided-image.png'
import { FaArrowLeftLong } from 'react-icons/fa6'
import Img1 from '../assets/home-img1.png'
import Img2 from '../assets/home-img2.png'
import Img3 from '../assets/home-img3.png'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Link } from 'react-router-dom'
import Aos from 'aos'
import 'aos/dist/aos.css'


const TestimonialData = [
  {
    text: "I was struggling to feed my family after losing my job, but YPF's food drive gave us a second chance. Thank you for caring!",
    name: "Joseph Broni",
    position: "Beneficiary"
  },
  {
    text: "Joining YPF has been an incredible experience. Seeing the impact we make in our community is truly fulfilling",
    name: "Abigail A.", 
    position: "Volunteer"
  },
  {
    text: "YPF's passion and dedication inspire me to be a better person. I'm proud to be part of this team!",
    name: "M. Nyarkoh",
    position: "Volunteer"
  },
  {
    text: "The Young Philanthropists Foundation has been a game-changer in my life. Their support helped me access education and healthcare when I thought all hope was lost",
    name: "Rachel D.",
    position: "Beneficiary"
  },
  {
    text: "YPF is more than just a foundation – it's a movement of young people driven by compassion and empathy.",
    name: "Paa Kwesi, President",
    position: "Founder"
  },
  {
    text: "YPF is more than just a foundation – it's a movement of young people driven by compassion and empathy.I was hesitant to try online health coaching but Blugle's platform is so convenient and use friendly.",
    name: "Gabby, YPF Software Developer",
    position: "Member"
  }
] 


const notes = [
    {
        id: 1, 
        title: "Send Donation", 
        text: "Your donation has the power to transform lives. Every contribution helps us provide essential services and resources to underserved communities, making a real difference in the world.", 
        color: "purple", 
        icon: Donate
    },
    {
        id: 2, 
        title: "Become A Volunteer", 
        text: "Volunteering with us means being a part of something bigger. Join our passionate community of changemakers, and together, we can uplift those in need and create positive, lasting change.", 
        color: "orange", 
        icon: Volunteer
    },
    {
        id: 3, 
        title: "Give Inspiration", 
        text: "Your words and actions can spark hope in others. By sharing your story or uplifting those around you, you help inspire lasting change in the lives of those who need it most.", 
        color: "purple", 
        icon: Inspiration
    },
]

const card = [
    {
        id: 1, 
        image: Img1, 
        title: "Youth Empowerment", 
        description: "Empowering the next generation with skills, resources, and opportunities to become leaders and change-makers in their communities."
    },
    {
        id: 2, 
        image: Img2, 
        title: "Community Health Outreach", 
        description: "Providing essential healthcare services and education to underserved communities, ensuring access to basic health needs."
    },
    {
        id: 3, 
        image: Img3, 
        title: "Educational Support", 
        description: "Offering mentorship, and educational resources to underprivileged students, helping them achieve their academic goals."
    },
]

const Home = () => {

    useEffect(() => {
        Aos.init({
            once: false,
        })
    }, [])

    
  return (
    <div className=''>
        <Navbar/>
        <div data-aos="zoom-in" className='w-[100vw] shadow-lg h-[60vh] md:h-[50vh] lg:h-[84vh] flex items-center'>
            <div className='absolute z-10 lg:w-[45vw] md:w-[60vw] text-center text-white flex gap-3 flex-col md:mx-6 lg:mx-16'>
                <h1 data-aos="fade-right" data-aos-duration="1000" className='text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.2]'>Empowering <span className='text-orange'>Youth</span> to Help the <span className='text-orange'>Needy</span></h1>
                <p data-aos="fade-right" data-aos-duration="3000" className='md:text-2xl text-xl px-10'>Join us in making a great difference in our society today</p>
                <div data-aos="fade-right" data-aos-duration="5000" className='flex items-center gap-4 md:gap-12 justify-center py-3'>
                    <Link to='/donate'>
                        <button className='hover:bg-white border-2 hover:border-orange hover:text-orange duration-300 hover:scale-105 ease-linear border-orange bg-orange text-white rounded-3xl py-1 px-5 md:py-2 md:px-10 md:text-2xl font-normal'>Donate Now</button>
                    </Link>
                    <Link to='/about'>
                        <button className='bg-white border-2 border-orange text-orange rounded-3xl py-1 px-5 md:py-2 md:px-10 md:text-2xl font-normal hover:bg-orange hover:text-white hover:scale-105 duration-300 ease-linear'>Read More</button>
                    </Link>
                </div>
            </div>
            <img src={Hero} alt="" className='filter grayscale h-full w-full bg-cover'/>
        </div>
        <div className='flex flex-col mx-8 my-5 gap-4 md:mx-4 md:flex-row md:gap-5 lg:mx-20 lg:gap-10 md:-mt-16 z-100 relative mb-12 max-m:h-72'>
            {notes.map((item, id) => {
                return(
                    <div data-aos='zoom-in' data-aos-duration="1500" key={item.id}>
                        <div className={`flex flex-col text-white bg-${item.color} py-6 px-4 items-center`}>
                            <div className='flex items-center gap-4 py-3'>
                                <img src={item.icon} alt="" className='h-6 w-6'/>
                                <p className='text-2xl font-semibold'>{item.title}</p>
                            </div>
                            <p className='text-sm'>"{item.text}"</p>
                        </div>
                    </div>
                )
            })}
        </div>
        <div className='w-full bg-white flex flex-col-reverse md:items-center lg:flex-row lg:gap-10 px-8 lg:px-20'>
            <img src={About} data-aos="fade-right"
                data-aos-duration='1000'
                data-aos-easing="ease-in-sine" alt="" className='w-[500px]'/>
            <div data-aos="zoom-out"
                data-aos-offset="300"
                data-aos-duration='1000'
                data-aos-easing="ease-in-sine" className='py-16'>
                <p className='text-2xl md:text-3xl text-center text-orange'>About YPF</p>
                <h1 className='text-3xl md:text-4xl text-center font-semibold pt-2 pb-3 md:py-6'>Get To Know Us More</h1>
                <div className='md:text-xl flex flex-col gap-4 pt-2'>
                    <p>It’s a philantropy foundation that seeks to help the needy and the less privileged in the society.</p>
                    <p>It’s filled with vibrant young people who share good hearts for everyone being a needy within their capacity.</p> 
                    <p>We donate within our range as volunteers and not so huge out of our stipends. YPF today is growing wide and interactive.</p>
                </div>
                <p className='my-6 text-orange italic'>Let’s create smiles with a coin...</p>
                <div className='flex items-center gap-6 md:gap-12'>
                    <Link to='/about'>
                        <button className='md:py-3 md:px-16 py-2 px-2 bg-orange text-white text-xl flex gap-3 items-center hover:scale-75 duration-300 ease-linear'>
                            <FaArrowLeftLong /> 
                            <p>Our Mission</p>
                        </button>
                    </Link>
                    <Link to='/about'>
                        <button className='md:py-3 md:px-16 py-2 px-2 bg-purple text-white text-xl flex gap-3 items-center hover:scale-75 duration-300 ease-linear'>
                            <FaArrowLeftLong /> 
                            <p>Our Vision</p>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
        <div className='bg-white mt-4 pb-16'>
            <h1 data-aos="fade-down" data-aos-duration="1000" className='text-purple text-3xl md:text-4xl font-semibold text-center py-12'>Making A <span className='text-orange'>Difference</span></h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-8 md:mx-20'>
                {card.map((item, id) => {
                    return(
                        <div data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="300" className="bg-white shadow-xl border-2 border-orange rounded-2xl" key={item.id}>
                            <figure>
                                <img
                                src={item.image}
                                alt="Shoes" className='rounded-t-xl'/>
                            </figure>
                            <div className="py-2 px-4 flex flex-col gap-4">
                                <h2 className="card-title text-purple">{item.title}</h2>
                                <p>{item.description}</p>
                                <div className="flex items-center justify-center">
                                    <a href="https://forms.gle/yXgvukFraDap91YUA" target="_blank" rel="noopener noreferrer">
                                        <button className="bg-purple text-orange text-lg py-2 px-4 rounded-xl">Join Community</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
        <div data-aos="zoom-out-down" data-aos-duration="500">
            <Banner />
        </div>
        <div className='bg-[#F0F0F0] py-12'>
            <h1 data-aos="fade-down" data-aos-duration="1000" className='text-center text-2xl m:text-4xl font-semibold text-purple'>What They Say About Us</h1>
        <div className='my-4 py-4 md:px-4'>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={30}
                slidesPerView={3}
                autoplay={{ delay: 2000, disableOnInteraction: false }}
                loop={true}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                className='md:mx-10 mx-5'
                breakpoints={{
                    320: {
                    slidesPerView: 1,
                    spaceBetween: 15,
                    },
                    640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                    },
                    1024: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                    },
                }}
                >
                {
                    TestimonialData.map((item, id) => {
                    return (
                        <SwiperSlide key={id} className='bg-white h-56 p-2 rounded-md'>
                        <div className='flex flex-col gap-3'>
                            <div className='flex items-center'>
                                <img src="" alt="" />
                                <div className='flex flex-col'>
                                    <p className='text-red-400 font-semibold'>{item.name}</p>
                                    <p className='text-gray-400 text-sm'>{item.position}</p>
                                    <p>⭐⭐⭐⭐⭐</p>
                                </div>
                            </div>
                            <div>
                                <p>{item.text}</p>
                            </div>
                        </div>
                        </SwiperSlide>
                    )
                    })
                }
                </Swiper>
                </div>
            </div>
        <Footer />
    </div>
  )
}

export default Home
