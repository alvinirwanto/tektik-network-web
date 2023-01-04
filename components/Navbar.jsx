import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { slideIn } from '../utils/motion'

import Logo from '../public/horizontal/network-navbar.png'

import { HiOutlineMenuAlt3 } from 'react-icons/hi'
import { CgClose } from 'react-icons/cg'

const Navbar = () => {

    // show the navbar when scroll up
    // const [showNav, setShowNav] = useState(false)

    // show the shadow
    const [shadowNav, setShadowNav] = useState(false)

    const addShadowNav = () => {
        window.scrollY >= 80 ? setShadowNav(true) : setShadowNav(false)
    }

    useEffect(() => {
        window.addEventListener('scroll', addShadowNav)
        return () => window.removeEventListener('scroll', addShadowNav);
    })

    // show navbar in the mobile version
    const [showNavbar, setShowNavbar] = useState(false)
    const handleClick = () => setShowNavbar(!showNavbar)

    return (
        <motion.nav
            variants={slideIn('down', 0.2, 0.3)}
            initial='hidden'
            animate='show'
            viewport={{ once: 'false', amount: 0.25 }}
            className={`${shadowNav ? 'shadow duration-300' : 'duration-300 shadow-none'} bg-white w-full primary-padding flex justify-between items-center fixed top-0 z-[300] px-2 md:px-4 xl:px-[5rem] py-4`}
        >

            <Image
                src='/horizontal/network-navbar.png'
                width={1000}
                height={1000}
                alt='logo'
                className={`duration-500 object-contain ${shadowNav ? 'h-[3rem] duration-300' : 'h-[4rem] duration-300'} w-auto`}
            />

            <div className='hidden md:flex justify-center items-center gap-8 xl:gap-[4rem] text-lg font-medium text-primary-blue'>
                <Link
                    to="home"
                    smooth={true}
                    duration={500}
                    activeClass='active-nav'
                    spy={true}
                    className='cursor-pointer opacity-60 h-9'
                >
                    Beranda
                </Link>

                <Link
                    to="rekan"
                    offset={70}
                    smooth={true}
                    duration={500}
                    activeClass='active-nav'
                    spy={true}
                    className='cursor-pointer opacity-60 h-9'
                >
                    Rekan Kerja
                </Link>

                <Link
                    to="produk"
                    smooth={true}
                    duration={500}
                    activeClass='active-nav'
                    spy={true}
                    className='cursor-pointer opacity-60 h-9'
                >
                    Produk
                </Link>

                <Link
                    to="footer"
                    offset={-50}
                    smooth={true}
                    duration={500}
                    className='px-8 py-2 bg-black text-white cursor-pointer hover:opacity-60'>
                    Kontak
                </Link>

            </div>


            {/* Mobile Version */}
            <div className={showNavbar ? 'flex flex-col fixed top-0 left-0 w-full h-screen bg-white justify-center items-start gap-8 text-3xl px-8 font-medium text-primary-blue' : 'hidden'}>
                <Link
                    onClick={handleClick}
                    to="home"
                    smooth={true}
                    duration={500}
                    activeClass='active'
                    spy={true}
                >
                    Beranda
                </Link>

                <Link
                    onClick={handleClick}
                    to="tentang"
                    offset={-150}
                    smooth={true}
                    duration={500}
                    activeClass='active'
                    spy={true}
                    className='cursor-pointer hover:opacity-60'
                >
                    Rekan Kerja
                </Link>

                <Link
                    onClick={handleClick}
                    to="klien"
                    offset={-50}
                    smooth={true}
                    duration={500}
                    activeClass='active'
                    spy={true}
                    className='cursor-pointer hover:opacity-60'
                >
                    Produk
                </Link>

                <Link
                    to="footer"
                    offset={-50}
                    smooth={true}
                    duration={500}
                    className='px-8 py-2 bg-black text-white cursor-pointer hover:opacity-60'>
                    Kontak
                </Link>
            </div>

            {
                showNavbar
                    ? <CgClose
                        className='text-3xl cursor-pointer z-[100]'
                        onClick={() => { setShowNavbar(!showNavbar) }}
                    />

                    : <HiOutlineMenuAlt3
                        className='text-3xl cursor-pointer block md:hidden'
                        onClick={() => { setShowNavbar(!showNavbar) }}
                    />
            }

        </motion.nav>
    )
}

export default Navbar