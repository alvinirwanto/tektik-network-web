import { useState } from 'react'

import { motion } from 'framer-motion'
import { slideIn, showText, staggerAnimation, staggerItems } from '../utils/motion'

import { IoMdClose } from 'react-icons/io'

const Produk = () => {
    const [showDesc, setShowDesc] = useState(0)

    return (
        <section name='produk' className='w-full px-3 md:px-8 xl:px-[5rem] py-[5rem]'>
            <div className='grid grid-cols-1 md:grid-cols-[1.1fr_1fr]'>
                <div></div>
                <div className='flex flex-col text-6xl md:text-8xl xl:text-9xl font-bold'>
                    <div className="overflow-hidden">
                        <motion.h2
                            variants={showText(0.5, 0.5)}
                            initial='hidden'
                            whileInView='show'
                            viewport={{ once: true }}
                        >
                            Produk
                        </motion.h2>
                    </div>
                    <div className='flex justify-start items-center gap-6 overflow-hidden'>
                        <motion.h2
                            variants={showText(0.5, 0.5)}
                            initial='hidden'
                            whileInView='show'
                            viewport={{ once: true }}
                        >
                            Kami
                        </motion.h2>
                        <motion.hr
                            variants={showText(0.5, 0.5)}
                            initial='hidden'
                            whileInView='show'
                            viewport={{ once: true }}
                            className='bg-black w-[5rem] md:w-[10rem] h-2' />
                    </div>
                    <motion.div
                        variants={staggerAnimation()}
                        initial='hidden'
                        whileInView='show'
                        className='flex gap-4 ml-2 mt-8'>
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
            </div>

            <div
                className='grid grid-cols-6 gap-[3rem] mt-[5rem] relative'>

                {/* Exit button */}
                <div
                    onClick={() => setShowDesc(0)}
                    className={showDesc === 0 ? 'hidden' : 'hidden md:flex justify-end items-start absolute top-3 right-3 md:top-2 md:right-2 xl:top-10 xl:right-10 text-black hover:text-white hover:bg-black cursor-pointer z-[100]'}>
                    <IoMdClose className='text-xl m-1' />
                </div>


                <motion.div
                    variants={slideIn('up', 0.2, 0.5)}
                    initial='hidden'
                    whileInView='show'
                    viewport={{ once: true }}
                    className={showDesc === 1 ? 'active card' :
                        showDesc === 0 ? 'card' :
                            'in-active card'}

                    onClick={() => setShowDesc(1)}>

                    <h3>Hyperconverged Enterprise Cloud</h3>
                    <div
                        className='flex flex-col gap-4 items-center'>
                        <motion.p
                            variants={slideIn('up', 0.2, 0.5)}
                            initial='hidden'
                            whileInView='show'
                            className='border-2 border-black p-3 w-full xl:w-[30rem]'>Nutanix Cloud Infrastructure</motion.p>
                        <motion.p
                            variants={slideIn('up', 0.4, 0.5)}
                            initial='hidden'
                            whileInView='show'
                            className='border-2 border-black p-3 w-full xl:w-[30rem]'>Nutanix Unified Storage</motion.p>
                        <motion.p
                            variants={slideIn('up', 0.6, 0.5)}
                            initial='hidden'
                            whileInView='show'
                            className='border-2 border-black p-3 w-full xl:w-[30rem]'>End User Computing</motion.p>
                        <motion.p
                            variants={slideIn('up', 0.8, 0.5)}
                            initial='hidden'
                            whileInView='show'
                            className='border-2 border-black p-3 w-full xl:w-[30rem]'>Nutanix Cloud Manager</motion.p>
                    </div>
                </motion.div>


                <motion.div
                    variants={slideIn('up', 0.4, 0.5)}
                    initial='hidden'
                    whileInView='show'
                    className={showDesc === 2 ? 'active card' :
                        showDesc === 0 ? 'card' :
                            'in-active card'}

                    onClick={() => setShowDesc(2)}>
                    <h3>Enterprise Network Technologies</h3>
                    <div className='flex flex-col gap-4 items-center'>
                        <motion.p
                            variants={slideIn('up', 0.2, 0.5)}
                            initial='hidden'
                            whileInView='show'
                            className='border-2 border-black p-3 w-full xl:w-[30rem]'>H3C CR19000 Cluster Routers Series</motion.p>
                        <motion.p
                            variants={slideIn('up', 0.4, 0.5)}
                            initial='hidden'
                            whileInView='show'
                            className='border-2 border-black p-3 w-full xl:w-[30rem]'>H3C CR16000 Series Router</motion.p>
                        <motion.p
                            variants={slideIn('up', 0.6, 0.5)}
                            initial='hidden'
                            whileInView='show'
                            className='border-2 border-black p-3 w-full xl:w-[30rem]'>H3C SR6600 Router Series</motion.p>
                        <motion.p
                            variants={slideIn('up', 0.8, 0.5)}
                            initial='hidden'
                            whileInView='show'
                            className='border-2 border-black p-3 w-full xl:w-[30rem]'>Multiple-Service Router Series</motion.p>
                    </div>
                </motion.div>


                <motion.div
                    variants={slideIn('up', 0.6, 0.5)}
                    initial='hidden'
                    whileInView='show'
                    className={showDesc === 3 ? 'active card' :
                        showDesc === 0 ? 'card' :
                            'in-active card'}

                    onClick={() => setShowDesc(3)}>

                    <h3>Enterprise Network Security</h3>
                    <div className='flex flex-col gap-4 items-center'>
                        <motion.p
                            variants={slideIn('up', 0.2, 0.5)}
                            initial='hidden'
                            whileInView='show'
                            className='border-2 border-black p-3 w-full xl:w-[30rem]'>Internet Access Gateway - Secure Web Gateway & Web Filtering Solution</motion.p>
                        <motion.p
                            variants={slideIn('up', 0.4, 0.5)}
                            initial='hidden'
                            whileInView='show'
                            className='border-2 border-black p-3 w-full xl:w-[30rem]'>NGAF - Next Generation Firewall (NGFW)</motion.p>
                        <motion.p
                            variants={slideIn('up', 0.6, 0.5)}
                            initial='hidden'
                            whileInView='show'
                            className='border-2 border-black p-3 w-full xl:w-[30rem]'>Cyber Command - NDR Platform</motion.p>
                        <motion.p
                            variants={slideIn('up', 0.8, 0.5)}
                            initial='hidden'
                            whileInView='show'
                            className='border-2 border-black p-3 w-full xl:w-[30rem]'>SASE Sangfor Access</motion.p>
                    </div>
                </motion.div>


                <motion.div
                    variants={slideIn('up', 0.8, 0.5)}
                    initial='hidden'
                    whileInView='show'
                    className={showDesc === 4 ? 'active card' :
                        showDesc === 0 ? 'card' :
                            'in-active card'}

                    onClick={() => setShowDesc(4)}>
                    <h3>Enterprise Service Solutions</h3>
                    <div className='flex flex-col gap-4 items-center'>
                        <motion.p
                            variants={slideIn('up', 0.2, 0.5)}
                            initial='hidden'
                            whileInView='show'
                            className='border-2 border-black p-3 w-full xl:w-[30rem]'>H3C CR19000 Cluster Routers Series</motion.p>
                        <motion.p
                            variants={slideIn('up', 0.4, 0.5)}
                            initial='hidden'
                            whileInView='show'
                            className='border-2 border-black p-3 w-full xl:w-[30rem]'>H3C CR16000 Series Router</motion.p>
                        <motion.p
                            variants={slideIn('up', 0.6, 0.5)}
                            initial='hidden'
                            whileInView='show'
                            className='border-2 border-black p-3 w-full xl:w-[30rem]'>H3C SR6600 Router Series</motion.p>
                        <motion.p
                            variants={slideIn('up', 0.8, 0.5)}
                            initial='hidden'
                            whileInView='show'
                            className='border-2 border-black p-3 w-full xl:w-[30rem]'>Multiple-Service Router Series</motion.p>
                    </div>
                </motion.div>
            </div>
        </section >
    )
}

export default Produk