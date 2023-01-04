import React from 'react'

import Image from 'next/image'

import { motion } from 'framer-motion'
import { slideIn, showText, zoomIn, opacityIn, staggerAnimation, staggerItems } from '../utils/motion'

const RekanKerja = () => {
    return (
        <section name='rekan' className='w-full px-3 md:px-8 py-[15rem] flex flex-col gap-[10rem] justify-center items-center relative overflow-hidden h-[80vh] xl:h-screen'>
            <motion.div
                variants={opacityIn(0.5, 1)}
                initial='hidden'
                whileInView='show'
                className='hidden md:block w-[100px] md:h-[800px] xl:h-[600px] bg-gray-50 -skew-x-[40deg] absolute top-0 right-[80rem] md:right-[15rem] xl:right-[20rem]' />

            {/* Only in Mobile */}
            <motion.div
                variants={opacityIn(0.5, 1)}
                initial='hidden'
                whileInView='show'
                className='block md:hidden w-[100px] h-[500px] bg-gray-100 -skew-x-[40deg] right-0 absolute md:right-[15rem] xl:right-[25rem] top-[10rem]' />

            <motion.div
                variants={opacityIn(1, 1)}
                initial='hidden'
                whileInView='show'
                className='w-[70px] h-[200px] border-[10px] border-gray-100 -skew-x-[40deg] right-0 absolute md:right-[15rem] xl:right-[25rem] top-[10rem]' />

            <div className='absolute right-[15rem] md:right-[30rem] xl:right-[40rem]'>
                <div className='flex items-end gap-[6rem]'>
                    <motion.div
                        variants={opacityIn(1.5, 1)}
                        initial='hidden'
                        whileInView='show'
                        className='w-[20px] h-[70px] border-4 border-gray-50 skew-x-[40deg]' />
                    <motion.div
                        variants={opacityIn(2, 1)}
                        initial='hidden'
                        whileInView='show'
                        className='w-[40px] h-[130px] bg-gray-100 -skew-x-[40deg]' />
                </div>
            </div>

            <div className='flex flex-col items-center'>
                <div className='overflow-hidden'>
                    <motion.h2
                        variants={showText(0.2, 0.5)}
                        initial='hidden'
                        whileInView='show'
                        viewport={{ once: true }}
                        className='text-3xl xl:text-2xl font-semibold text-center'>Rekan Kerja Kami</motion.h2>
                </div>

                <motion.div
                    variants={staggerAnimation()}
                    initial='hidden'
                    whileInView='show'
                    viewport={{ once: true }}
                    className='w-full xl:w-[80vw] grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-[5rem] items-center justify-evenly md:justify-between mt-[7rem] md:mt-[5rem]'>

                    <motion.div
                        variants={staggerItems('up')}
                    >
                        <Image
                            src='/nutanix.png'
                            width={1000}
                            height={1000}
                            className='object-contain w-full grayscale hover:grayscale-0'
                        />
                    </motion.div>
                    <motion.div
                        variants={staggerItems('up')}
                    >
                        <Image
                            src='/h3c.png'
                            width={1000}
                            height={1000}
                            className='object-contain p-5 w-full grayscale hover:grayscale-0'
                        />
                    </motion.div>
                    <motion.div
                        variants={staggerItems('up')}
                    >
                        <Image
                            src='/sangfor.png'
                            width={1000}
                            height={1000}
                            className='object-contain w-full grayscale hover:grayscale-0'
                        />
                    </motion.div>
                    <motion.div
                        variants={staggerItems('up')}
                    >
                        <Image
                            src='/synnex-metrodata.png'
                            width={1000}
                            height={1000}
                            className='object-contain w-full grayscale hover:grayscale-0'
                        />
                    </motion.div>
                    <motion.div
                        variants={staggerItems('up')}
                    >
                        <Image
                            src='/ashento.jpeg'
                            width={1000}
                            height={1000}
                            className='object-contain w-full grayscale hover:grayscale-0'
                        />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

export default RekanKerja