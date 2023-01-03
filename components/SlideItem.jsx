import React from 'react'

import Image from 'next/image'

import { BsPlayCircleFill } from 'react-icons/bs'


const SlideItem = ({title1, image, title2, showVideo, setShowVideo, state}) => {
    return (
        <div className='w-full py-[5rem] px-[5rem] grid grid-cols-2 place-items-center'>
            <div className='flex flex-col gap-6 max-w-[500px] items-start mx-auto'>
                <p className='text-6xl font-bold'>{title1}</p>
                <Image
                    src={image}
                    width={1000}
                    height={1000}
                    className='object-contain w-auto h-[3rem]'
                />
                <p className='text-6xl font-bold'>{title2}</p>
            </div>

            <div className='w-full aspect-video bg-black flex justify-center items-center'>
                <div
                    onClick={() => { setShowVideo(state) }}
                    className="flex flex-col items-center justify-center gap-4 my-[5rem] xl:my-0 text-black relative cursor-pointer order-1 xl:order-2"
                >
                    <BsPlayCircleFill className="text-5xl absolute top-0 w-full h-full text-network-color" />
                    <div className="bg-network-color h-[3rem] aspect-square rounded-full flex justify-center items-center animate-ping">
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SlideItem