import '../App.css'
import Navbar from '../component/navbar'
import ethereum from '../assets/coins.png'
import code from '../assets/code.png'
import uiux from '../assets/programmer.png'
import AnimatedContent from '../animation/AnimatedContent/AnimatedContent' 

export default function Home() {
    return(
        <div>
            <Navbar/>

            <div className="min-h-[75vh] flex flex-col items-center justify-center text-white text-center px-4">
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
                    <div className="icon flex justify-center gap-4 mb-4 cursor-pointer">
                        <img src={code} alt="" className="w-14 h-14 p-2 bg-[#141e30] rounded-full transition-transform hover:scale-110" />
                        <img src={ethereum} alt="" className="w-14 h-14 p-2 bg-[#141e30] rounded-full transition-transform hover:scale-110" />
                        <img src={uiux} alt="" className="w-14 h-14 p-2 bg-[#141e30] rounded-full transition-transform hover:scale-110" />
                    </div>
                </AnimatedContent>
                
                <AnimatedContent
                    distance={150}
                    direction="vertical"
                    reverse={false}
                    config={{ tension: 80, friction: 20 }}
                    initialOpacity={0.2}
                    animateOpacity
                    scale={1.1}
                    threshold={0.2}
                    >
                    <div>
                        <h1 className="text-7xl font-bold font-sans">
                            Welcome To My<br />
                            <span className="bg-gradient-to-r from-[#1c92d2] to-[#f2fcfe] bg-clip-text text-transparent">
                            Portfolio Website
                            </span>
                        </h1>

                    <div className="mt-6">
                        <button className="px-6 py-3 text-white text-base font-medium bg-gradient-to-r from-[#1f2c4c] to-[#2d3f66] rounded-full shadow-md hover:from-[#2a3b59] hover:to-[#3a4e7a] transition-all duration-300 hover:scale-105">
                        Know More About Me
                        </button>
                    </div>
                    </div>
                </AnimatedContent>
                

                
            </div>
        </div>
    )
}