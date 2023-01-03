import { useRef } from 'react'
import { BiX } from 'react-icons/bi'


const ModalVideo = ({ showVideo, setShowVideo, videoLink }) => {

    const vidRef = useRef(null)

    function stopVideo() {
        vidRef.current.pause();
        vidRef.current.currentTime = 0;
    }

    return (
        <div className="flex items-start gap-4 w-[80%] md:w-[80%] xl:w-[70%]">
            <video ref={vidRef} controls className="w-full aspect-video">
                <source src={videoLink} type="video/mp4" />
            </video>
            <div
                onClick={() => { setShowVideo(false); stopVideo() }}
                className="text-white cursor-pointer p-0">
                <BiX className="text-4xl" />
            </div>
        </div>
    )
}

export default ModalVideo