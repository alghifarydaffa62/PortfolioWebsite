import '../App.css'
import Navbar from '../component/navbar'
import ethereum from '../assets/coins.png'
import code from '../assets/code.png'
import uiux from '../assets/programmer.png'
import AnimatedContent from '../animation/AnimatedContent/AnimatedContent' 
import { Link } from 'react-router-dom'
import Helmet from "react-helmet-async"

export default function Home() {
    return(
        <div>
            <Helmet>
                <title>Daffa Al Ghifary</title>
                <meta name="description" content="Welcome to my portfolio website! I'm Daffa Ghifary, a frontend developer passionate about React, Web3, and blockchain" />
                <meta name="keywords" content="Daffa Al Ghifary, M Daffa Al Ghifary, Frontend Developer, React, Web3, Ethereum, UI/UX, Portfolio" />
                <meta property="og:title" content="Daffa Al Ghifary | Portfolio Website" />
                <meta
                property="og:description"
                content="Explore my portfolio showcasing projects in React, Web3 (Ethereum), and UI/UX design."
                />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://dfpro20.vercel.app/" />
            </Helmet>
            <Navbar/>
            
            <div className="min-h-[75vh] flex flex-col items-center justify-center text-white text-center px-4 overflow-y-hidden">
                <AnimatedContent
                    distance={80}
                    direction="vertical"
                    reverse={false}
                    config={{ tension: 80, friction: 20 }}
                    initialOpacity={0.2}
                    animateOpacity
                    scale={1.1}
                    threshold={0.2}
                    >
                    <div className="flex justify-center gap-4 mb-4 cursor-pointer icon">
                        {[code, ethereum, uiux].map((icon, index) => (
                            <img
                                key={index}
                                src={icon}
                                alt="icon"
                                className="w-12 h-12 p-2 bg-[#141e30] rounded-full transition-transform hover:scale-110"
                            />
                        ))}
                    </div>
                </AnimatedContent>
                
                <AnimatedContent
                    distance={80}
                    direction="vertical"
                    reverse={false}
                    config={{ tension: 80, friction: 20 }}
                    initialOpacity={0.2}
                    animateOpacity
                    scale={1}
                    threshold={0.2}
                    >
                    <div className="w-full max-w-3xl">
                        <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl'>Hi, I'm Daffa👋🏻</h1>
                        <h1 className="mt-2 font-sans text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
                            Welcome To My<br />
                            <span className="bg-gradient-to-r from-[#1c92d2] to-[#f2fcfe] bg-clip-text text-transparent">
                            Portfolio Website
                            </span>
                        </h1>

                        <div className="mt-6">
                            <Link to='/About' className="px-6 py-3 text-white text-base font-medium bg-gradient-to-r from-[#1f2c4c] to-[#2d3f66] rounded-full shadow-md hover:from-[#2a3b59] hover:to-[#3a4e7a] transition-all duration-300">
                            Know More About Me
                            </Link>
                        </div>
                    </div>
                </AnimatedContent>
            </div>
        </div>
    )
}