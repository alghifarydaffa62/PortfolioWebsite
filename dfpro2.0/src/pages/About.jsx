import '../App.css'
import Navbar from '../component/navbar'
import profile from '../assets/me.jpg'
import AnimatedContent from '../animation/AnimatedContent/AnimatedContent'
import PixelTransition from '../animation/PixelTransition/PixelTransition'

export default function About() {
    return(
        <div>
            <Navbar/>

            <div className="flex justify-center mt-5 gap-24">
                <div className="desc w-1/2">
                    <div className="name">
                        <h4 className='text-[#6e92d6] font-semibold'>About</h4>
                        <h4 className='text-white'>Muhammad Daffa Al Ghifary</h4>
                    </div>

                    <div className='text-white'>
                        <p>Hi, my name is <strong>Muhammad Daffa Al Ghifary</strong>, but most people call me <strong>Daffa</strong>. 
                            I am a passionate Front-End Web Developer with expertise in modern web technologies, 
                            particularly React.js, Tailwind CSS, and Bootstrap. I enjoy crafting clean, 
                            responsive, and user-friendly web interfaces that provide a seamless user experience.
                        </p><br/>
                        <p>Currently, I am expanding my knowledge into <strong>Web3 development</strong>, as I believe blockchain 
                            technology is the future. While I am still in the learning phase, I have gained a solid 
                            understanding of Solidity and blockchain concepts. I am continuously improving my skills 
                            to build decentralized applications (DApps) and contribute to the evolution of the web.
                        </p><br/>   
                        <p>I am always eager to learn new technologies, take on challenges, and collaborate with 
                            like-minded developers to create impactful digital solutions.</p>
                    </div>
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
        </div>
    )
}