import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { FaBookOpen } from "react-icons/fa";

const HomePage = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const headings = ['Python', 'JavaScript', 'C++'];
    const [currentHeading, setCurrentHeading] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [speed, setSpeed] = useState(150);

    const { register, handleSubmit, formState: { errors } } = useForm();

    useEffect(() => {
        const handleType = () => {
            const currentFullHeading = `${headings[currentIndex]}`;
            setCurrentHeading(prev => isDeleting ? currentFullHeading.substring(0, prev.length - 1) : currentFullHeading.substring(0, prev.length + 1));

            if (!isDeleting && currentHeading === currentFullHeading) {
                setTimeout(() => setIsDeleting(true), 2000);
            } else if (isDeleting && currentHeading === '') {
                setIsDeleting(false);
                setCurrentIndex((currentIndex + 1) % headings.length);
            }
            setSpeed(isDeleting ? 30 : 150);
        };

        const typingTimer = setTimeout(handleType, speed);

        return () => clearTimeout(typingTimer);
    }, [currentHeading, isDeleting, headings, currentIndex, speed]);

    const onSubmit = async (data) => {
        try {
            const response = await axios.post('/api/register', data);
            alert('Registration successful');
        } catch (error) {
            console.error('Error submitting the form', error);
            alert('There was an error submitting the form');
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center pt-20 md:pt-32 md:mx-32">

            <main className="p-4 w-full gap-8">
                <section id="webinar" className="mb-8 flex flex-col md:flex-row bg-white md:p-10 p-5 shadow-sm rounded-sm">
                    <div className="md:w-1/2">
                        <img src="img.png" alt="Webinar Image" className="h-auto rounded-md mb-4" />
                    </div>
                    <div className='md:w-1/2'>

                        <h2 className="text-4xl mb-4">
                            Workshop For <span className='text-sky-800 font-semibold'>{currentHeading}</span>
                            <span className="blinking-cursor">|</span> Projects
                        </h2>
                        <p className="text-lg">Learn important programming concepts such as Data Operations, File Operations, and OOPs concepts. And hands-on training in developing, debugging, and optimizing software using these languages, enhancing practical coding skills and collaborative development.</p>
                        <button className="bg-sky-800 text-white py-2 px-4 my-10 rounded-md mr-4">Free Masterclass</button>
                        <button className="border-2 border-sky-800 py-2 px-4 my-10 rounded-md">Save My Seat</button>
                    </div>
                </section>
                <section id="register" className="mb-8 flex flex-col bg-white shadow-lg rounded-sm">
                    <div className="top shadow-md py-5 md:py-0 px-5">
                        <div className='flex flex-col md:flex-row justify-between items-center'>
                            <h2 className="text-2xl font-semibold">
                                Machine Learning with Scikit Learn Decoded
                            </h2>
                            <button className="border-2 border-sky-800 py-2 px-20 my-10 rounded-md mr-4">Register Now</button>
                        </div>
                    </div>

                    <div className="main flex md:flex-row flex-col p-10">
                        <div className='md:w-2/3 md:pr-32 py-10'>
                            <h2 className="text-2xl mb-4">
                                DESCRIPTION
                            </h2>
                            <p className="text-md mb-4">This iLearnings Webinar on 'Python Fundamentals' will help you understand the various concepts you must learn in Python with examples.</p>
                            <h2 className="text-2xl mb-4">
                                AGENDA
                            </h2>
                            <ul className="text-md list-disc px-10">
                                <li className='py-2'>Introduction to Python</li>
                                <li className='py-2'>What is Python?</li>
                                <li className='py-2'>Features of Python</li>
                                <li className='py-2'>Who uses Python?</li>
                                <li className='py-2'>Starting off with Python Basics</li>
                                <li className='py-2'>Data Types</li>
                                <li className='py-2'>Operators</li>
                                <li className='py-2'>Flow Control</li>
                                <li className='py-2'>Functions</li>
                                <li className='py-2'>File Handling</li>
                                <li className='py-2'>Hands-On</li>
                            </ul>
                        </div>

                        <div className='md:w-1/3'>
                            <h2 className="md:text-3xl text-xl mb-4 flex"><FaBookOpen size={40} className='md:px-0 px-1'/><span className='px-3'> Reserve Your Spot Now!</span></h2>
                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 bg-gray-100 p-6 rounded-md shadow-md">
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email *</label>
                                    <input id="email" type="email" {...register('email', { required: true })} className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm" />
                                    {errors.email && <p className="text-red-500 text-sm">Email is required</p>}
                                </div>
                                <div>
                                    <label htmlFor="experience" className="block text-sm font-medium text-gray-700">Years of Experience *</label>
                                    <select id="experience" {...register('experience', { required: true })} className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm">
                                        <option value="" disabled selected hidden>Select</option>
                                        <option value="student">Student</option>
                                        <option value="0-2 years">0-2 years</option>
                                        <option value="2-5 years">2-5 years</option>
                                        <option value="5-10 years">5-10 years</option>
                                        <option value="10+ years">10+ years</option>
                                    </select>
                                    {errors.experience && <p className="text-red-500 text-sm">Experience is required</p>}
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number *</label>
                                    <input id="phone" type="text" {...register('phone', { required: true })} className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm" />
                                    {errors.phone && <p className="text-red-500 text-sm">Phone number is required</p>}
                                </div>
                                <div>
                                    <label htmlFor="updates" className="flex items-center">
                                        <input id="updates" type="checkbox" {...register('updates')} className="mr-2" />
                                        Check here to receive further updates
                                    </label>
                                </div> 
                                <button type="submit" className="w-full bg-sky-800 text-white p-2 rounded-md">Submit</button>
                            </form>
                        </div>
                    </div>

                    <div className="bottom md:px-20 px-5 py-5 flex flex-col md:flex-row items-center bg-blue-50">
                        <div className='md:py-10 md:w-2/3'>
                            <h2 className="text-2xl font-semibold text-sky-800 my-4">
                                JOIN OUR MEETUP COMMUNITY
                            </h2>
                            <ul className="text-md md:px-14 px-8 list-disc">
                                <li>Get updated about latest technology webinars i.e AI , DevOps, Cloud, Blockchain etc.</li>
                                <li>Exclusive access to curated and personalized content from iLearnings.</li>
                                <li>Win huge and exclusive discounts on all iLearnings! courses</li>
                            </ul>
                        </div>
                        <div className='py-10 md:w-1/3 flex justify-end'>
                            <button className="bg-blue-500 text-white md:px-10 md:py-4 py-2 px-20 rounded-md mr-4">Join Now</button>
                        </div>
                    </div>

                </section>
            </main>
        </div>
    );
};

export default HomePage;
