import Head from 'next/head'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Hero from '../sections/Hero'
import Produk from '../sections/Produk'
import RekanKerja from '../sections/RekanKerja'
import Showcase from '../sections/Showcase'

export default function Home() {
    return (
        <>
            <Head>
                <title>Tektik Network</title>
                <meta name="description" content="tektik it solution network " />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/logo/network-white.png" />
            </Head>
            <main>
                <Navbar />
                <Hero />
                <RekanKerja />
                <Produk />
                <Showcase/>
                <Footer />
            </main>
        </>
    )
}
