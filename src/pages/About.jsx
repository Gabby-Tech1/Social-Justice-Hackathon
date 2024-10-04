import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../assets/about-hero.png'
import Intro from '../assets/video.mp4'
import We from '../assets/we.png'
import PKay from '../assets/pkay.jpg'
import Rahina from '../assets/rahina.png'
import Gad from '../assets/gad.png'
import Inspire from '../assets/inspire.png'
import Barnabas from '../assets/barnabs.jpg'
import Juliana from '../assets/julie.jpg'
import Abigail from '../assets/abigail.jpg'
import Irene from '../assets/irene.jpg'
import Erica from '../assets/erica.jpg'
import Gabby from '../assets/gabby.jpg'
import Stanley from '../assets/stanley.jpg'
import Footer from '../components/Footer'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Aos from 'aos'
import 'aos/dist/aos.css'

const executives = [
    {image: PKay, name: "Justice Paa Kwesi Abban Junior", position: "President, YPF", school: "University of Education, Winneba"},
    {image: Rahina, name: "Rahina Korkor Mensah", position: "Vice President, YPF", school: "University of Ghana, Legon"},
    {image: Barnabas, name: "Barnabas Nutifafa Dzikunu", position: "Welfare Committee", school: "Librarian, Manstech"},
    {image: Juliana, name: "Juliana Awuah", position: "Treasurer", school: "St. Karol School of Nursing"},
    {image: Erica, name: "Erica Asiamah", position: "Financial Head", school: "Presbyterian University"},
    {image: Irene, name: "Irene Ama Duodo", position: "General Secretary", school: "KNUST"},
    {image: Stanley, name: "Stanley Akwa Darko", position: "Donation Cordinator", school: "N/A"},
    {image: Abigail, name: "Abigail Afia Frimpong", position: "Institutional Head", school: "UniMAC IJ"},
    {image: Gad, name: "Gad Odoi Alert", position: "Graphic Designer", school: "University of Mines and Technology"},
    {image: Gabby, name: "Gabriel K.A Quainoo", position: "Software Engineer", school: "University of Ghana, Legon"},
]
const About = () => {
    useEffect(() => {
        Aos.init({
            once: false,
        })
    }, [])
    
  return (
    <div>
        <Navbar />
        <div className='w-[100vw] shadow-lg h-[40vh] lg:h-[60vh] flex items-center'>
            <div className='absolute z-10 w-full text-white px-6 md:px-20 flex flex-col gap-2 md:gap-5'>
                <h1 data-aos="fade-down" data-aos-duration="1500" className='text-4xl md:text-6xl font-semibold text-orange pb-3'>Our Story</h1>
                <div data-aos="zoom-out" className='w-full h-0.5 bg-orange mx-2' />
                <p data-aos="fade-down" data-aos-duration="800" className='md:text-3xl font-semibold'>Changing Lives With Kindness</p>
            </div>
            <img src={Hero} alt="" className='h-full w-full bg-cover'/>
        </div>
        <div className='flex-col flex bg-white py-12 my-2'>
            <div className='flex flex-col lg:flex-row items-center gap-4 mx-4 md:mx-10'>
                <div className='flex flex-col gap-4'>
                    <h3 data-aos="fade-right" data-aos-duration="1000" className='text-3xl md:text-4xl text-orange'>Introduction</h3>
                    <p data-aos="fade-right" data-aos-duration="1500" className='md:text-xl leading-[1.2]'>The foundation was established on October 23, 2023, by a group of friends who shared the idea of helping the needy. Justice Paa Kwesi Abban Junior, the CEO, is recognized as the lead founder. The initial members joined through engagement and interactions on social media and through friends. YPF believes that true success comes from giving back to society, regardless of age or recognition, and aims to create smiles with even the smallest contributions.</p>
                </div>
                {/* <video src={Intro} loop={true} /> */}
                <video data-aos="zoom-in" data-aos-duration="1000" loop autoPlay muted className='lg:w-[45vw]'>
                    <source src={Intro} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className='flex flex-col-reverse lg:flex-row items-center gap-4 mx-4 md:mx-10 mt-10'>
                <img data-aos="zoom-in" data-aos-duration="1000" src={We} alt="" className='lg:w-[45vw]'/>
                <div className='flex flex-col gap-4'>
                    <h3 data-aos="fade-left" data-aos-duration="1000" className='text-2xl md:text-4xl text-orange'>Who We Are</h3>
                    <div data-aos="fade-left" data-aos-duration="1500" className='md:text-xl leading-[1.2] flex flex-col gap-2'>
                        <p>The acronym YPF  stands for Young Philanthropists Foundation. It is a platform for young people dedicated to helping the needy and less privilagesd in our society. The name embodies three key elements: </p>
                        <ul className=' list-disc ml-10'>
                            <li><span className='font-bold'>Young:</span> Highlighting the age category of members who take responsibility even when they don’t have much.</li>
                            <li><span className='font-bold'>Philanthropists:</span> Signifying that every member is a future model of hope,inspiration and benevolence,</li>
                            <li><span className='font-bold'>Foundation:</span> Representing a platform that networks people with common societal values.</li>
                        </ul>
                        <p>Our commitment to helping the needy in society stems from a deep sense of responsibility and empathy towards those who face daily struggles due to poverty, lack of education, or limited access to basic necessities.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='bg-white flex flex-col lg:flex-row lg:gap-20 py-12 px-4 md:px-12 lg:px-20 items-center md:w-full'>
            <div className='flex flex-col gap-6 lg:w-[110vw]'>
                <h3 data-aos="fade-right" data-aos-duration="1000" className='text-2xl md:text-4xl text-orange'>Our Mission</h3>
                <p data-aos="fade-right" data-aos-duration="2000" className='md:text-xl leading[1.3]'>Our purpose is to empower the underprivileged by providing them with the tools, resources, and support they need to improve their lives. We focus on creating sustainable solutions that not only address immediate needs but also foster long-term change. Through education, community development, and direct aid, we strive to uplift communities and create a future where everyone has the opportunity to thrive.</p>
            </div>
            <div className='flex items-center gap-12 '>
                <div className='flex flex-col items-center gap-16 max-md:mt-10'>
                    <div data-aos="zoom-in" data-aos-duration="1000" className='drop-shadow-2xl shadow-custom-orange p-3 relative py-12'>
                        <div className='w-12 h-12 text-2xl font-semibold rounded-full flex items-center justify-center bg-orange text-white absolute -top-8 left-8 bg-opacity-70'>01</div>
                        <p className='text-sm'>To create a platform for young people to donate and help the  needy, including orphans and street beggars with basic needs like food, clothes, shoes and funds</p>
                    </div>
                    <div data-aos="zoom-in" data-aos-duration="2000" className='drop-shadow-2xl shadow-custom-orange p-3 relative py-12'>
                        <div className='w-12 h-12 text-2xl font-semibold rounded-full flex items-center justify-center bg-orange text-white absolute -top-8 left-8 bg-opacity-70'>03</div>
                        <p className='text-sm'>To ensure good child care in society by providing education on oral hygiene, personal hygiene, goal settings, teenage pregnancy and sociial values.</p>
                    </div>
                </div>
                <div className='flex flex-col items-center gap-16 mt-28'>
                    <div data-aos="zoom-in" data-aos-duration="3000" className='drop-shadow-2xl shadow-custom-orange p-3 relative py-12'>
                        <div className='w-12 h-12 text-2xl font-semibold rounded-full flex items-center justify-center bg-orange text-white absolute -top-8 left-8 bg-opacity-70'>02</div>
                        <p className='text-sm'>To build good personalities and networks among foundation members, fostering them into becoming societal role models and effective communication.</p>
                    </div>
                    <div data-aos="zoom-in" data-aos-duration="4000" className='drop-shadow-2xl shadow-custom-orange p-3 relative py-12'>
                        <div className='w-12 h-12 text-2xl font-semibold rounded-full flex items-center justify-center bg-orange text-white absolute -top-8 left-8 bg-opacity-70'>04</div>
                        <p className='text-sm'>To create a family where everyone feels loved and cherished.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='bg-white flex flex-col lg:flex-row-reverse lg:gap-20 py-12 px-4 md:px-12 lg:px-20 items-center w-full'>
            <div className='flex flex-col gap-3 lg:gap-6 lg:w-[110vw]'>
                <h3 data-aos="fade-left" data-aos-duration="1000" className='text-3xl md:text-4xl text-orange'>Our Vision</h3>
                <p data-aos="fade-left" data-aos-duration="2000" className='text-lg md:text-xl leading[1.3]'> At YPF,we aim to bring positive, lasting change to the lives of those who need it most."
                    <br /><br />
                "Our vision is to create a world where every person has the opportunity to succeed, free from the constraints of poverty and inequality."</p>
            </div>
            <div className='flex items-center gap-12 '>
                <div className='flex flex-col items-center gap-16'>
                    <div data-aos="zoom-in" data-aos-duration="1000" className='drop-shadow-2xl shadow-custom-orange p-3 relative py-12'>
                        <div className='w-12 h-12 text-2xl font-semibold rounded-full flex items-center justify-center bg-orange text-white absolute -top-8 left-8 bg-opacity-70'>01</div>
                        <p className='text-sm'>To establish YPF as a legally recognised non-profit and non-governmental organisation  dedicated to helping the needy and less privileged.</p>
                    </div>
                    <div data-aos="zoom-in" data-aos-duration="2000" className='drop-shadow-2xl shadow-custom-orange p-3 relative py-12'>
                        <div className='w-12 h-12 text-2xl font-semibold rounded-full flex items-center justify-center bg-orange text-white absolute -top-8 left-8 bg-opacity-70'>03</div>
                        <p className='text-sm'>To foster acceptance and support for the needy and less privileged in the society.</p>
                    </div>
                </div>
                <div className='flex flex-col items-center gap-16 mt-28'>
                    <div data-aos="zoom-in" data-aos-duration="3000" className='drop-shadow-2xl shadow-custom-orange p-3 relative py-12'>
                        <div className='w-12 h-12 text-2xl font-semibold rounded-full flex items-center justify-center bg-orange text-white absolute -top-8 left-8 bg-opacity-70'>02</div>
                        <p className='text-sm'>To conduct annual visits to streets, orphange homes and village homesteads depending on avaiable funds.</p>
                    </div>
                    <div data-aos="zoom-in" data-aos-duration="4000" className='drop-shadow-2xl shadow-custom-orange p-3 relative py-12'>
                        <div className='w-12 h-12 text-2xl font-semibold rounded-full flex items-center justify-center bg-orange text-white absolute -top-8 left-8 bg-opacity-70'>04</div>
                        <p className='text-sm'>To create a world where every individual has the resources and opportunities to thrive, fostering sustainable change and brighter futures for all.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='bg-white py-10 my-4'>
            <h1 data-aos="fade-down" data-aos-duration="1000" className='text-2xl md:text-4xl text-center font-semibold text-purple '>Meet Our Team Executives</h1>
            <div className='my-4 py-4 md:px-4'>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={30}
                slidesPerView={3}
                navigation={true}
                autoplay={{ delay: 2000, disableOnInteraction: false }}
                loop={true}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                className='md:mx-10 mx-5'
                breakpoints={{
                    240: {
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
                    executives.map((item, id) => {
                    return (
                        <SwiperSlide className="bg-white shadow-xl border-2 border-orange rounded-2xl" key={id}>
                            <figure>
                                <img
                                src={item.image}
                                alt={item.name} className='rounded-t-xl h-80 w-full'/>
                            </figure>
                            <div className="py-2 px-4 flex flex-col gap-0">
                                <h2 className="card-title text-purple">{item.name}</h2>
                                <p className='text-sm text-gray-600'>{item.position}</p>
                                <p>{item.school}</p>
                            </div>
                        </SwiperSlide>
                    )
                    })
                }
                </Swiper>
                </div>
        </div>
        <img src={Inspire} alt="" className='mb-6  max-sm:hidden'/>
        <Footer />
    </div>
  )
}

export default About