import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

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
                <section id="register" className="mb-8 flex flex-col bg-white md:p-10 p-5 shadow-lg rounded-sm">

                    <div className="top">
                    <div className='md:w-2/3 md:pr-32 py-10'>
                            <h2 className="text-4xl mb-4">
                                Hello
                            </h2>
                            <p className="text-lg">Learn important programming concepts such as Data Operations, File Operations, and OOPs concepts. And hands-on training in developing, debugging, and optimizing software using these languages, enhancing practical coding skills and collaborative development.</p>
                        </div>
                    </div>

                    <div className="main flex md:flex-row flex-col">
                        <div className='md:w-2/3 md:pr-32 py-10'>
                            <h2 className="text-4xl mb-4">
                                Hello
                            </h2>
                            <p className="text-lg">Learn important programming concepts such as Data Operations, File Operations, and OOPs concepts. And hands-on training in developing, debugging, and optimizing software using these languages, enhancing practical coding skills and collaborative development.</p>
                        </div>

                        <div className='md:w-1/3'>
                            <h2 className="text-4xl mb-4">Reserve Your Spot Now!</h2>
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
                                <button type="submit" className="w-full bg-sky-800 text-white p-2 rounded-md">Submit</button>
                            </form>
                        </div>
                    </div>

                    <div className="bottom">
                    <div className='md:w-2/3 md:pr-32 py-10'>
                            <h2 className="text-4xl mb-4">
                                Hello
                            </h2>
                            <p className="text-lg">Learn important programming concepts such as Data Operations, File Operations, and OOPs concepts. And hands-on training in developing, debugging, and optimizing software using these languages, enhancing practical coding skills and collaborative development.</p>
                        </div>
                    </div>

                </section>
            </main>
        </div>
    );
};

export default HomePage;
