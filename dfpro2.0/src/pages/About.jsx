import '../App.css'
import Navbar from '../component/navbar'
import profile from '../assets/me.jpg'
import AnimatedContent from '../animation/AnimatedContent/AnimatedContent'
import PixelTransition from '../animation/PixelTransition/PixelTransition'
import Expertise from '../component/expertise'
import Service from '../component/service'
import ShinyText from '../animation/ShinyText/ShinyText'
import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'

export default function About() {
    useEffect(() => {
        window.scrollTo(0,0);
    }, [])
    
    return(
        <div className='overflow-x-hidden'>
            <Helmet>
                <title>About | Daffa Al Ghifary</title>
                <meta name="description" content="Hi, my name is Muhammad Daffa Al Ghifary — passionate Front-End Web Developer (React, Tailwind, Web3)." />
                <meta name="keywords" content="About Daffa Al Ghifary, Daffa Al Ghifary Web3, frontend developer" />
                <link rel="canonical" href="https://dfpro20.vercel.app/About" />
                <script type="application/ld+json">{`
                  {
                    "@context": "https://schema.org",
                    "@type": "Person",
                    "name": "Muhammad Daffa Al Ghifary",
                    "url": "https://dfpro20.vercel.app/About",
                    "sameAs": [
                      "https://www.instagram.com/df_webdev",
                      "https://github.com/alghifarydaffa62",
                      "https://www.linkedin.com/in/mdaffaalghifary"
                    ],
                    "image": "https://dfpro20.vercel.app/src/assets/me.jpg",
                    "jobTitle": "Frontend Developer",
                    "description": "Front-End Web Developer focusing on React, UI/UX, and Web3."
                  }
                `}</script>
            </Helmet>
            <Navbar/>

            <div className="flex flex-col-reverse justify-center gap-16 px-4 mt-10 lg:flex-row lg:gap-24">
                <div className="desc lg:w-[47%]">
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
                        <div>
                            <div className="name">
                                <h4 className='text-[#6e92d6] font-semibold'>About me</h4>
                                <h4 className='text-xl font-semibold text-white'>Muhammad Daffa Al Ghifary</h4>
                            </div>

                            <div className='flex flex-col gap-2 mt-3 text-justify text-white'>
                                <p>Hi, my name is <strong>Muhammad Daffa Al Ghifary</strong>, but most people call me <strong>Daffa</strong>. 
                                    I am a passionate Front-End Web Developer with expertise in modern web technologies, 
                                    particularly React.js, Tailwind CSS, and Bootstrap. I enjoy crafting clean, 
                                    responsive, and user-friendly web interfaces that provide a seamless user experience.
                                </p>
                                <p>Currently, I am expanding my knowledge into <strong>Web3 development</strong>, as I believe blockchain 
                                    technology is the future. While I am still in the learning phase, I have gained a solid 
                                    understanding of Solidity and blockchain concepts. I am continuously improving my skills 
                                    to build decentralized applications (DApps) and contribute to the evolution of the web.
                                </p>   
                            </div>
                        </div>
                    </AnimatedContent>
                    <AnimatedContent
                            distance={80}
                            direction="vertical"
                            delay={50}
                            reverse={false}
                            config={{ tension: 80, friction: 20 }}
                            initialOpacity={0.2}
                            animateOpacity
                            scale={1}
                            threshold={0.2}
                            >
                            <div className="mt-3 expert">
                                <h1 className='text-[#6e92d6] font-semibold'>My Area of Focus</h1>
                                <div className='flex flex-wrap gap-3 mt-3'>
                                    <ShinyText text="Front End Web Development" disabled={false} speed={3} className='custom-class' />                
                                    <ShinyText text="Web3 Enthusiast" disabled={false} speed={3} className='custom-class' />                                
                                </div>
                            </div>            
                    </AnimatedContent>
                    
                </div>
                
                <PixelTransition
                    firstContent={
                        <img
                        src={profile}
                        alt="default pixel transition content, a cat!"
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        />
                    }
                    secondContent={
                        <div
                        style={{
                            width: "100%",
                            height: "100%",
                            display: "grid",
                            placeItems: "center",
                            backgroundColor: "#111"
                        }}
                        >
                        <p style={{ fontWeight: 900, fontSize: "3rem", color: "#ffffff" }}>Hello!</p>
                        </div>
                    }
                    gridSize={12}
                    pixelColor='#ffffff'
                    animationStepDuration={0.4}
                    className="custom-pixel-card"
                />
            </div>
            <Expertise/>
            <Service/>

            <footer className="py-4 text-sm text-center text-gray-400">
            © 2025 dfpro2.0 . All Rights Reserved
            </footer>
        </div>
    )
}