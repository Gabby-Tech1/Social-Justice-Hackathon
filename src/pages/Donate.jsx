import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../assets/donate-image.png'
import Coin from '../assets/coin.png'
import Secure from '../assets/secure.png'
import Footer from '../components/Footer'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { PaystackButton } from 'react-paystack'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Donate = () => {
    const publicKey = "pk_live_b9549e570089edc6aa6946c09f4e4344d6120e59";
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [amount, setAmount] = useState("")
    const [reason, setReason] = useState("")
    const [showModal, setShowModal] = useState(false)
    const currency = "GHS"

    const componentProps = {
        email,
        amount: parseFloat(amount) * 100,
        currency,
        metadata: {
            custom_fields: [
                {
                    display_name: "Name",
                    variable_name: "name",
                    value: name
                },
                {
                    display_name: "Phone Number",
                    variable_name: "phone",
                    value: phone
                },
                {
                    display_name: "Reason",
                    variable_name: "reason",
                    value: reason
                },
            ]
        },
        publicKey,
        text: "Pay Now",
        onSuccess: (reference) => {
            toast.success("Thanks for donating to YPF. God bless you 🙏 Reference: " + reference.reference);
            setShowModal(false);
            // Reset form fields after successful payment
            setName("");
            setEmail("");
            setPhone("");
            setAmount("");
            setReason("");
        },
        onClose: () => {
            toast.error("Transaction was not completed, window closed.");
        },
    }
    

    useEffect(() => {
        Aos.init({
            once: false,
        })
    }, [])

    const toggleModal = () => {
        setShowModal(!showModal)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className="relative">
            <Navbar />
            <div data-aos="fade-down" data-aos-duration="1000" className='text-3xl text-center py-8 font-semibold text-purple'>Support Our Cause</div>
            <div className='flex flex-col md:flex-row px-4 lg:mx-32 h-full lg:h-[95vh] mb-20 w-full'>
            <div className='lg:w-[40vw] md:w-[90vw] w-full flex items-center shadow-xl'>
                    <img src={Hero} alt="" className='w-full h-full '/>
                    <div data-aos="zoomi-in" data-aos-duration="2000" className='bg-[#F0EAEA] py-1 absolute w-[80%] md:px-3 mx-5 z-10 max-lg:mt-52 lg:w-[34vw] md:w-[40vw] lg:mx-10 '>
                        <div className='flex gap-2 items-center justify-center sm:py-3'>
                            <img src={Coin} alt="" className='w-8'/>
                            <div className='flex items-center flex-col justify-center'>
                                <h1 className='max-sm:text-sm'>Ready to make a difference</h1>
                                <p className='text-purple text-lg md:text-2xl font-semibold'>Join Us Make <span className='text-orange'>Donation</span></p>
                            </div>
                        </div>
                        <p className='md:py-4 px-4 text-sm md:pb-8'>"Your contribution helps us provide vital services to those in need and those less priviledged in our society, from education to healthcare. Together, we can create a brighter future for all."</p>
                    </div>
                </div>
                {/* Right side with donation info */}
                <div className='bg-white p-4 w-full lg:w-[40vw] shadow-xl'>
                    <div data-aos="fade-left" data-aos-duration="1500" className='flex gap-3 items-center justify-center py-5'>
                        <img src={Secure} alt="" className='w-6'/>
                        <h1 className='text-xl text-purple'>Secure Donation</h1>
                    </div>
                    <div className='md:mx-10 flex flex-col gap-6'>
                        {/* Donation information */}
                        <div className="flex flex-col gap-2">
                            <h1 data-aos='fade-left' data-aos-duration='2000' className='text-xl md:text-2xl font-semibold text-purple'>DONATIONS</h1>
                            <ul data-aos='fade-left' data-aos-duration='2500'>
                                <li><span className='font-semibold'>Name:</span> Justice Paa Kwesi Abban Junior</li>
                                <li><span className='font-semibold'>Momo Number:</span> 0597608013</li>
                                <li><span className='font-semibold'>Network:</span> MTN</li>
                                <li><span className='font-semibold'>Reference:</span> YPF Donation</li>
                            </ul>
                        </div>
                        {/* Dues information */}
                        <div className="flex flex-col gap-2">
                            <h1 data-aos='fade-left' data-aos-duration='2000' className='text-xl md:text-2xl font-semibold text-purple'>DUES</h1>
                            <ul data-aos='fade-left' data-aos-duration='2500'>
                                <li><span className='font-semibold'>Name:</span> Juliana Awuah</li>
                                <li><span className='font-semibold'>Momo Number:</span> 0534461061</li>
                                <li><span className='font-semibold'>Network:</span> MTN</li>
                                <li><span className='font-semibold'>Reference:</span> YPF</li>
                            </ul>
                        </div>
                        {/* Additional information */}
                        <div data-aos="zoom-in-down" data-aos-duration='1500' className="flex flex-col italic items-center mt-5 text-purple">
                            <p className=''>"Be a blessing to a needy through YPF.</p>
                            <p>Don't forget to say a prayer anytime you donate."</p>
                        </div>
                        <button 
                            onClick={toggleModal} 
                            className='mt-4 py-2 px-6 bg-orange text-white rounded-md hover:scale-110 duration-300 ease-linear'
                        >
                        Make Donation
                        </button>
                    </div>
                </div>
            </div>
            <Footer/>

            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded-lg w-full max-w-md">
                        <h2 className="text-2xl font-bold mb-4 text-purple">Make a Donation</h2>
                        <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                                <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} className='mt-1 block w-full rounded-md border-gray-300 p-1 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50' required />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className='mt-1 block w-full rounded-md p-1 border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50' required />
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                                <input type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} className='mt-1 block w-full rounded-md p-1 border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50' required />
                            </div>
                            <div>
                                <label htmlFor="amount" className="block text-sm font-medium text-gray-700">Amount (GHS)</label>
                                <input type="number" id="amount" value={amount} onChange={(e) => setAmount(e.target.value)} className='mt-1 block w-full rounded-md p-1 border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50' required />
                            </div>
                            <div>
                                <label htmlFor="reason" className="block text-sm font-medium text-gray-700">Reason</label>
                                <textarea id="reason" value={reason} onChange={(e) => setReason(e.target.value)} className='mt-1 block w-full rounded-md p-1 border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50' rows="3" required></textarea>
                            </div>
                            <div className="flex justify-between mt-4">
                                <button type="button" onClick={toggleModal} className='py-2 px-4 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300'>Cancel</button>
                                <PaystackButton {...componentProps} className='py-2 px-6 bg-orange text-white rounded-md hover:bg-orange-600' />
                            </div>
                        </form>
                    </div>
                </div>
            )}
            <ToastContainer />

        </div>
    )
}

export default Donate
