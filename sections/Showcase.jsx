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
        <section className='w-full px-3 md:px-8 xl:px-[5rem] py-[10rem]'>
            <div className='grid grid-cols-1 md:grid-cols-[1.1fr_1fr]'>
                <div className='flex flex-col text-6xl md:text-7xl xl:text-8xl font-bold'>
                    <div className="overflow-hidden">
                        <motion.h2
                            variants={slideIn('up', 0.3, 0.5)}
                            initial='hidden'
                            whileInView='show'
                            viewport={{ once: true }}
                        >Produk</motion.h2>
                    </div>
                    <div className="overflow-hidden">
                        <motion.h2
                            variants={slideIn('up', 0.3, 0.5)}
                            initial='hidden'
                            whileInView='show'
                            viewport={{ once: true }}
                        >Showcase</motion.h2>
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
                <SwiperSlide>
                    <SlideItem
                        image='/nutanix.png'
                        title2='Kami membantu Anda menyederhanakan kompleksitas cloud dengan platform multicloud hybrid yang ditentukan perangkat lunak, sehingga Anda dapat berfokus pada hasil bisnis dan inovasi baru.'
                        showVideo={showVideo}
                        setShowVideo={setShowVideo}
                        state='1'
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <SlideItem
                        image='/h3c.png'
                        title2='H3C CR16000-F sebagai router kelas atas, berfokus pada Carriers Backbone/MAN dan Jaringan Inti Industri Skala Besar, memberikan kinerja penerusan yang tinggi, port dengan kepadatan tinggi, dan jenis port yang kaya.'
                        showVideo={showVideo}
                        setShowVideo={setShowVideo}
                        state='2'
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <SlideItem
                        image='/sangfor.png'
                        title2='Cyber ​​Command dapat dipercaya untuk meningkatkan keseluruhan keamanan TI perusahaan Anda sekaligus menghilangkan potensi risiko keamanan siber.'
                        showVideo={showVideo}
                        setShowVideo={setShowVideo}
                        state='3'
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <SlideItem
                        image='/sangfor.png'
                        title2='Guna meningkatkan produktivitas, pengguna jarak jauh kantor cabang dapat menghubungkan aplikasi bisnis ke pusat data atau SaaS Anda, tanpa mengalihkan semua lalu lintas melalui kantor pusat, menurunkan biaya bandwidth, dan meningkatkan pengalaman pengguna.'
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