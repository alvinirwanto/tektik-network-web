import { useState } from 'react'

import { motion } from 'framer-motion'
import { slideIn, showText, staggerAnimation, staggerItems } from '../utils/motion'

import { IoMdClose } from 'react-icons/io'

const Produk = () => {
    const [showDesc, setShowDesc] = useState(0)

    return (
        <section name='produk' className='w-full px-[5rem] py-[5rem]'>
            <div className='grid grid-cols-[1.1fr_1fr]'>
                <div></div>
                <div className='flex flex-col text-9xl font-bold'>
                    <h2>Produk</h2>
                    <div className='flex justify-start items-center gap-6'>
                        <h2>Kami</h2>
                        <hr className='bg-black w-[10rem] h-2' />
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

            <div className='grid grid-cols-6 gap-[3rem] mt-[5rem] relative'>

                {/* Exit button */}
                <div
                    onClick={() => setShowDesc(0)}
                    className={showDesc === 0 ? 'hidden' : 'flex justify-end items-start absolute top-10 right-10 text-black hover:text-white hover:bg-black cursor-pointer '}>
                    <IoMdClose className='text-xl m-1' />
                </div>


                <div className={showDesc === 1 ? 'active card' :
                    showDesc === 0 ? 'card' :
                        'in-active card'}

                    onClick={() => setShowDesc(1)}>

                    <h3>Hyperconverged Enterprise Cloud</h3>
                    <div className='flex flex-col gap-4 items-center'>
                        <p className='border-2 border-black p-3 w-[30rem]'>Nutanix Cloud Infrastructure</p>
                        <p className='border-2 border-black p-3 w-[30rem]'>Nutanix Unified Storage</p>
                        <p className='border-2 border-black p-3 w-[30rem]'>End User Computing</p>
                        <p className='border-2 border-black p-3 w-[30rem]'>Nutanix Cloud Manager</p>
                    </div>
                </div>
                <div className={showDesc === 2 ? 'active card' :
                    showDesc === 0 ? 'card' :
                        'in-active card'}

                    onClick={() => setShowDesc(2)}>
                    <h3>Enterprise Network Technologies</h3>
                    <div className='flex flex-col gap-4 items-center'>
                        <p className='border-2 border-black p-3 w-[30rem]'>H3C CR19000 Cluster Routers Series</p>
                        <p className='border-2 border-black p-3 w-[30rem]'>H3C CR16000 Series Router</p>
                        <p className='border-2 border-black p-3 w-[30rem]'>H3C SR6600 Router Series</p>
                        <p className='border-2 border-black p-3 w-[30rem]'>Multiple-Service Router Series</p>
                    </div>
                </div>
                <div className={showDesc === 3 ? 'active card' :
                    showDesc === 0 ? 'card' :
                        'in-active card'}

                    onClick={() => setShowDesc(3)}>

                    <h3>Enterprise Network Security</h3>
                    <div className='flex flex-col gap-4 items-center'>
                        <p className='border-2 border-black p-3 w-[30rem]'>Internet Access Gateway - Secure Web Gateway & Web Filtering Solution</p>
                        <p className='border-2 border-black p-3 w-[30rem]'>NGAF - Next Generation Firewall (NGFW)</p>
                        <p className='border-2 border-black p-3 w-[30rem]'>Cyber Command - NDR Platform</p>
                        <p className='border-2 border-black p-3 w-[30rem]'>SASE Sangfor Access</p>
                    </div>
                </div>
                <div className={showDesc === 4 ? 'active card' :
                    showDesc === 0 ? 'card' :
                        'in-active card'}

                    onClick={() => setShowDesc(4)}>
                    <h3>Enterprise Service Solutions</h3>
                    <div className='flex flex-col gap-4 items-center'>
                        <p className='border-2 border-black p-3 w-[30rem]'>H3C CR19000 Cluster Routers Series</p>
                        <p className='border-2 border-black p-3 w-[30rem]'>H3C CR16000 Series Router</p>
                        <p className='border-2 border-black p-3 w-[30rem]'>H3C SR6600 Router Series</p>
                        <p className='border-2 border-black p-3 w-[30rem]'>Multiple-Service Router Series</p>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Produk