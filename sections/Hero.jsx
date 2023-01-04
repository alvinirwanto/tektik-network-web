import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { slideIn, showText, staggerAnimation, staggerItems } from '../utils/motion'

import { HiArrowLongDown } from 'react-icons/hi2'

import HeroImg from '../public/main-foto.jpg'

const Hero = () => {
    return (
        <section name='home' className='w-full h-full py-8 px-3 md:px-8 xl:px-[5rem]'>
            <div className="grid grid-cols-1 md:grid-cols-[1fr_5fr] xl:grid-cols-[1fr_3fr] gap-9 h-full mt-[11rem]">
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
                    <motion.div
                        variants={showText(0.7, 0.7)}
                        initial='hidden'
                        animate='show'
                        className='flex flex-col text-[2.5rem] leading-[3rem] md:text-6xl xl:gap-5 xl:text-[5.5rem] xl:leading-[4.5rem] font-bold'>
                        <h2>Dukung Jaringan</h2>
                        <h2>Komputer Anda</h2>
                        <h2>Dengan Solusi Kami</h2>
                        <h2>Yang <span className='bg-network-color px-4 text-white -ml-2'>Terdepan</span></h2>
                    </motion.div>
                </div>
            </div>
            <div className='w-full mt-[5rem]'>
                <motion.div
                    variants={slideIn('up', 0.7, 1)}
                    initial='hidden'
                    animate='show'
                >
                    <Image
                        src='/main-foto.jpg'
                        width={1000}
                        height={1000}
                        className='object-contain w-full h-auto'
                    />
                </motion.div>
            </div>

            <div className='grid grid-cols-12 my-[5rem] md:my-0 gap-8 md:gap-0'>
                <div className='col-start-1 col-end-13 md:col-start-1 xl:col-start-2 md:col-end-10 md:grid-rows-1 md:row-start-1 z-50 flex flex-col gap-[3rem] justify-end h-full'>
                    <div className='flex flex-col gap-1 md:gap-2 text-2xl md:text-3xl xl:text-5xl font-semibold'>
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

                <div className='col-start-1 col-end-13 md:col-start-7 md:col-end-12 md:grid-rows-1 md:row-start-1 relative md:shadow-custom md:-mt-[5rem]'>
                    <motion.div
                        variants={slideIn('up', 0.5, 0.5)}
                        initial='hidden'
                        whileInView='show'
                        viewport={{ once: true }}
                    >
                        <Image
                            src='/main-foto-2.jpg'
                            width={2000}
                            height={2000}
                            className='object-cover object-right-top h-full md:h-[20rem] xl:h-[35rem]'
                        />
                        <div className='w-full h-full absolute top-0 bg-gradient-to-r from-[#fefefe98] to-transparent' />
                    </motion.div>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-[1.5fr_2fr] gap-8 xl:pt-[20rem] place-items-center'>
                <motion.div
                    variants={slideIn('up', 0.5, 0.5)}
                    initial='hidden'
                    whileInView='show'
                    viewport={{ once: true }}
                    className='order-2 md:order-1'>
                    <Image
                        src='/main-foto-3.jpg'
                        width={2000}
                        height={2000}
                        className='object-cover object-left-top h-[60vh]'
                    />
                </motion.div>
                <motion.div
                    variants={showText(0.5, 0.7)}
                    initial='hidden'
                    whileInView='show'
                    viewport={{ once: true }}
                    className='flex flex-col gap-8 text-2xl order-1 md:order-2 md:text-4xl xl:max-w-[700px] mx-auto font-semibold'>
                    <p>Tektik hadir guna menjawab berbagai macam kebutuhan informasi dan teknologi yang tidak pernah berhenti berkembang.</p>
                    <motion.div
                        variants={staggerAnimation()}
                        initial='hidden'
                        whileInView='show'
                        className='flex gap-4 self-end'>
                        <motion.div
                            variants={staggerItems('left')}
                            className='h-5 aspect-square bg-network-color hover:opacity-50' />
                        <motion.div
                            variants={staggerItems('left')}
                            className='h-5 aspect-square bg-network-color hover:opacity-50' />
                        <motion.div
                            variants={staggerItems('left')}
                            className='h-5 aspect-square bg-network-color hover:opacity-50' />
                        <motion.div
                            variants={staggerItems('left')}
                            className='h-5 aspect-square bg-network-color hover:opacity-50' />
                        <motion.div
                            variants={staggerItems('left')}
                            className='h-5 aspect-square bg-network-color hover:opacity-50' />
                        <motion.div
                            variants={staggerItems('left')}
                            className='h-5 aspect-square bg-network-color hover:opacity-50' />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

export default Hero