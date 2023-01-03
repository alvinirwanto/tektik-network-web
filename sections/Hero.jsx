import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { slideIn, showText, staggerAnimation, staggerItems } from '../utils/motion'

import { HiArrowLongDown } from 'react-icons/hi2'

import HeroImg from '../public/dummy.jpeg'

const Hero = () => {
    return (
        <section name='home' className='w-full h-full py-8 px-4 xl:px-[5rem]'>
            <div className="grid grid-cols-1 xl:grid-cols-[1fr_2fr] gap-9 h-full mt-[11rem]">
                <div className='flex justify-start'>
                    <motion.div
                        variants={staggerAnimation()}
                        initial='hidden'
                        whileInView='show'
                        className='flex flex-col items-end gap-4 mt-1.5'>
                        <div className='flex gap-4'>
                            <motion.div
                                variants={staggerItems('right')} className='h-5 aspect-square bg-network-color hover:opacity-50' />
                            <motion.div
                                variants={staggerItems('right')} className='h-5 aspect-square bg-network-color  hover:opacity-50' />
                            <motion.div
                                variants={staggerItems('right')} className='h-5 aspect-square bg-network-color hover:opacity-50' />
                        </div>

                        <div className='flex gap-4'>
                            <motion.div
                                variants={staggerItems('right')} className='h-5 aspect-square bg-network-color hover:opacity-50' />
                            <motion.div
                                variants={staggerItems('right')} className='h-5 aspect-square bg-network-color  hover:opacity-50' />
                            <motion.div
                                variants={staggerItems('right')} className='h-5 aspect-square bg-network-color hover:opacity-50' />
                        </div>
                    </motion.div>
                </div>
                <div className='flex justify-start md:justify-end'>
                    <div className='flex flex-col text-[2.5rem] leading-[3rem] xl:gap-5 xl:text-[5.5rem] xl:leading-[4.5rem] font-bold'>
                        <h2>Dukung Jaringan </h2>
                        <h2>Komputer Anda</h2>
                        <h2>Dengan Solusi Kami</h2>
                        <h2>Yang <span className='bg-network-color px-4 text-white -ml-2'>Terdepan</span></h2>
                    </div>
                </div>
            </div>
            <div className='w-full mt-[5rem]'>
                <Image
                    src={HeroImg}
                    className='object-contain w-full h-auto'
                />
            </div>

            <div className='grid grid-cols-12'>
                <div className='col-start-2 col-end-10 grid-rows-1 row-start-1 z-50 flex flex-col gap-[3rem] justify-end h-full'>
                    <div className='flex flex-col gap-2 text-5xl font-semibold'>
                        <p className=''>Kami menyediakan beragam</p>
                        <p>kebutuhan perusahaan dalam hal</p>
                        <p>jaringan komputer</p>
                    </div>
                    <motion.div
                        variants={staggerAnimation()}
                        initial='hidden'
                        whileInView='show'
                        className='flex gap-4'>
                        <motion.div
                            variants={staggerItems('right')}
                            className='h-5 aspect-square bg-network-color hover:opacity-50' />
                        <motion.div
                            variants={staggerItems('right')}
                            className='h-5 aspect-square bg-network-color hover:opacity-50' />
                        <motion.div
                            variants={staggerItems('right')}
                            className='h-5 aspect-square bg-network-color hover:opacity-50' />
                        <motion.div
                            variants={staggerItems('right')}
                            className='h-5 aspect-square bg-network-color hover:opacity-50' />
                        <motion.div
                            variants={staggerItems('right')}
                            className='h-5 aspect-square bg-network-color hover:opacity-50' />
                        <motion.div
                            variants={staggerItems('right')}
                            className='h-5 aspect-square bg-network-color hover:opacity-50' />
                    </motion.div>
                </div>
                <div className='col-start-7 col-end-12 grid-rows-1 row-start-1 relative shadow-custom -mt-[5rem]'>
                    <Image
                        src={HeroImg}
                        className='object-cover h-[35rem]'
                    />
                    <div className='w-full h-full absolute top-0 bg-gradient-to-r from-[#fefefe] to-transparent' />
                </div>
            </div>
        </section>
    )
}

export default Hero