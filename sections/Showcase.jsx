import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { BiX } from 'react-icons/bi'


import { motion } from 'framer-motion'
import { slideIn, showText, staggerAnimation, staggerItems } from '../utils/motion'

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";
import SlideItem from '../components/SlideItem'
import ModalVideo from '../components/ModalVideo'


const Showcase = () => {

    const [showVideo, setShowVideo] = useState(0)

    const vidRef = useRef(null)

    function stopVideo() {
        vidRef.current.pause();
        vidRef.current.currentTime = 0;
    }


    return (
        <section className='w-full px-[5rem] py-[10rem]'>
            <div className='grid grid-cols-[1.3fr_1fr]'>
                <div className='flex flex-col text-9xl font-bold'>
                    <h2>Produk</h2>
                    <h2>Showcase</h2>
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
                <div>

                </div>
            </div>
            <Swiper
                pagination={{
                    type: "fraction",
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="h-[70vh] w-full my-[5rem]"
            >
                <SwiperSlide className='flex justify-center items-center px-[5rem]'>
                    <SlideItem
                        title1='How'
                        image='/nutanix.png'
                        title2='Works?'
                        showVideo={showVideo}
                        setShowVideo={setShowVideo}
                        state='1'
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <SlideItem
                        image='/h3c.png'
                        title2='High End Router CR16K'
                        showVideo={showVideo}
                        setShowVideo={setShowVideo}
                        state='2'
                    />
                </SwiperSlide>
                <SwiperSlide>
                <SlideItem
                        image='/sangfor.png'
                        title2='Cyber Command'
                        showVideo={showVideo}
                        setShowVideo={setShowVideo}
                        state='3'
                    />
                </SwiperSlide>
                <SwiperSlide>
                <SlideItem
                        image='/sangfor.png'
                        title2='SASE & Sangfor Access'
                        showVideo={showVideo}
                        setShowVideo={setShowVideo}
                        state='4'
                    />
                </SwiperSlide>
            </Swiper>


            {/* lIST OF MODALS */}
            <div className={showVideo === '1'
                ? "show-modal"
                : "hidden"}>
                <ModalVideo
                    showVideo={showVideo}
                    setShowVideo={setShowVideo}
                    videoLink="/Nutanix.mp4"
                />
            </div>

            <div className={showVideo === '2'
                ? "show-modal"
                : "hidden"}>
                <ModalVideo
                    showVideo={showVideo}
                    setShowVideo={setShowVideo}
                    videoLink="/H3C.mp4"
                />
            </div>

            <div className={showVideo === '3'
                ? "show-modal"
                : "hidden"}>
                <ModalVideo
                    showVideo={showVideo}
                    setShowVideo={setShowVideo}
                    videoLink="/Sangfor.mp4"
                />
            </div>

            <div className={showVideo === '4'
                ? "show-modal"
                : "hidden"}>
                <ModalVideo
                    showVideo={showVideo}
                    setShowVideo={setShowVideo}
                    videoLink="/SASE & Sangfor.mp4"
                />
            </div>
        </section>
    )
}

export default Showcase