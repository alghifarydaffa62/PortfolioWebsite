import '../App.css'
import Navbar from '../component/navbar'
import profile from '../assets/me.jpg'
import AnimatedContent from '../animation/AnimatedContent/AnimatedContent'
import PixelTransition from '../animation/PixelTransition/PixelTransition'
import Expertise from '../component/expertise'
import Service from '../component/service'
import ShinyText from '../animation/ShinyText/ShinyText'
import { useEffect } from 'react'

export default function About() {
    useEffect(() => {
        window.scrollTo(0,0);
    }, [])
    
    return(
        <div>
            <Navbar/>

            <div className="flex justify-center mt-20 gap-24">
                <div className="desc w-[47%]">
                    <AnimatedContent
                        distance={150}
                        direction="horizontal"
                        reverse={false}
                        config={{ tension: 80, friction: 20 }}
                        initialOpacity={0.2}
                        animateOpacity
                        scale={1.1}
                        threshold={0.2}
                        >
                        <div>
                            <div className="name">
                                <h4 className='text-[#6e92d6] font-semibold'>About me</h4>
                                <h4 className='text-white text-xl font-semibold'>Muhammad Daffa Al Ghifary</h4>
                            </div>

                            <div className='text-white flex flex-col gap-2 mt-3'>
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
                                <p>I am always eager to learn new technologies, take on challenges, and collaborate with 
                                    like-minded developers to create impactful digital solutions.</p>
                            </div>
                        </div>
                    </AnimatedContent>
                    <AnimatedContent
                            distance={150}
                            direction="horizontal"
                            delay={50}
                            reverse={false}
                            config={{ tension: 80, friction: 20 }}
                            initialOpacity={0.2}
                            animateOpacity
                            scale={1.1}
                            threshold={0.2}
                            >
                            <div className="expert mt-3">
                                <h1 className='text-[#6e92d6] font-semibold'>My Area of Focus</h1>
                                <div className='flex gap-3 mt-3'>
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

            <footer className="text-center py-4 text-sm text-gray-400">
            © 2025 dfpro2.0 . All Rights Reserved
            </footer>
        </div>
    )
}