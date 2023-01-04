import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { motion } from 'framer-motion'

import { slideIn, showText, staggerAnimation, staggerItems } from '../utils/motion'

import LongArrow from '../public/long-arrow.svg'
import TektikLogo from '../public/horizontal/tektik-white.png'

import { FaFacebookF, FaTiktok, FaLinkedin, FaYoutube } from 'react-icons/fa'
import { RiInstagramFill } from 'react-icons/ri'


const Footer = () => {
    return (
        <footer name='footer' className='bg-black text-white pt-[7rem] pb-8 px-3 md:px-8 xl:px-[7rem] relative overflow-hidden'>

            <motion.hr
                variants={slideIn('right', 0.5, 0.8)}
                initial='hidden'
                whileInView='show'
                viewport={{ once: true }}
                className='bg-white border-none outline-none opacity-30 w-[60rem] h-[.5px] absolute right-[40%] top-[50%]' />

            <motion.hr
                variants={slideIn('up', 0.5, 0.8)}
                initial='hidden'
                whileInView='show'
                viewport={{ once: true }}
                className='bg-[#ffffff4b] md:bg-white md:opacity-30 h-[30rem] w-[1px] absolute left-[20%] xl:left-[40%] top-[15%]' />


            <div className='grid grid-cols-1 px-3 md:grid-cols-[1fr_2fr] xl:grid-cols-[1fr_1.5fr] justify-end'>
                <div></div>
                <div className='flex flex-col gap-4 items-end'>
                    <div className='flex flex-col gap-6'>
                        <div className="overflow-hidden">
                            <motion.h2
                                variants={showText(0.3, 0.5)}
                                initial='hidden'
                                whileInView='show'
                                viewport={{ once: true }}
                                className='text-2xl font-semibold'>Contact Us</motion.h2>
                        </div>

                        <div className="overflow-hidden">
                            <motion.p
                                variants={showText(0.5, 0.5)}
                                initial='hidden'
                                whileInView='show'
                                viewport={{ once: true }}
                                className='text-9xl font-bold'>Let's Talk</motion.p>
                        </div>
                    </div>

                    <div className='grid grid-cols-[3fr_1fr] xl:grid-cols-[1.5fr_1fr] gap-8 items-center'>
                        <motion.hr
                            variants={slideIn('left', 0.6, 0.5)}
                            initial='hidden'
                            whileInView='show'
                            viewport={{ once: true }}
                            className='bg-white w-[10rem] h-1 hidden xl:block justify-self-end' />

                        <motion.p
                            variants={slideIn('down', 0.6, 0.5)}
                            initial='hidden'
                            whileInView='show'
                            viewport={{ once: true }}
                            className='text-xl'>We are looking forward to start a great project with you.</motion.p>
                    </div>

                    <motion.div
                        variants={slideIn('down', 0.6, 0.5)}
                        initial='hidden'
                        whileInView='show'
                        viewport={{ once: true }}
                    >
                        <Image
                            src={LongArrow}
                            className='h-[10rem] w-auto object-contain mt-8'
                        />
                    </motion.div>
                </div>

                <div className='flex flex-col gap-2 mt-[5rem]'>
                    <Image
                        src={TektikLogo}
                        className='object-contain h-[5rem] w-auto self-start'
                    />
                    <motion.p
                        variants={slideIn('left', 0.5, 0.8)}
                        initial='hidden'
                        whileInView='show'
                        viewport={{ once: true }}
                        className='text-2xl mt-8 font-bold'>
                        Our Office
                    </motion.p>

                    <motion.p
                        variants={slideIn('left', 0.5, 0.8)}
                        initial='hidden'
                        whileInView='show'
                        viewport={{ once: true }}
                        className='xl:max-w-[400px]'>Gedung Teja Buana, 2nd Floor, JL. Menteng Raya, No. 29, RT.15/RW.10, Kebon Sirih, Menteng, Jakarta Pusat, 10340</motion.p>

                    <motion.div
                        variants={staggerAnimation()}
                        initial='hidden'
                        whileInView='show'
                        viewport={{ once: true }}
                        className='flex justify-between md:justify-start items-center gap-4 text-white mt-[3rem] xl:mt-4'>
                        <motion.div
                            variants={staggerItems('left')}
                        >
                            <Link
                                href='https://www.google.com'
                                className='p-2 duration-200 hover:opacity-60'
                            >
                                <FaFacebookF className='text-3xl xl:text-xl' />
                            </Link>
                        </motion.div>


                        <motion.div
                            variants={staggerItems('left')}
                        >
                            <Link
                                href='https://www.google.com'
                                className='p-2 duration-200 hover:opacity-60'
                            >
                                <RiInstagramFill className='text-3xl xl:text-2xl' />
                            </Link>
                        </motion.div>

                        <motion.div
                            variants={staggerItems('left')}
                        >
                            <Link
                                href='https://www.google.com'
                                className='p-2 duration-200 hover:opacity-60'
                            >
                                <FaLinkedin className='text-3xl xl:text-2xl' />
                            </Link>
                        </motion.div>

                        <motion.div
                            variants={staggerItems('left')}
                        >
                            <Link
                                href='https://www.google.com'
                                className='p-2 duration-200 hover:opacity-60'
                            >
                                <FaTiktok className='text-3xl xl:text-xl' />
                            </Link>
                        </motion.div>

                        <motion.div
                            variants={staggerItems('left')}
                        >
                            <Link
                                href='https://www.google.com'
                                className='p-2 duration-200 hover:opacity-60'
                            >
                                <FaYoutube className='text-3xl xl:text-2xl' />
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>

                <div></div>
            </div>

            <p className='text-center text-white mt-[5rem]'>© Copyright {new Date().getFullYear()} Tektik  |  All Rights Reserved</p>
        </footer>
    )
}

export default Footer