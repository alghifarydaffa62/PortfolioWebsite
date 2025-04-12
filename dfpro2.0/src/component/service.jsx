import '../App.css'
import web from '../assets/fep.png'
import contract from '../assets/sc.png'
import { Link } from 'react-router-dom'
import AnimatedContent from '../animation/AnimatedContent/AnimatedContent'

export default function Service() {
    return(
        <div className="text-center text-white py-6 px-4 mb-5">
            <h1 className="text-3xl font-bold">Things I Can Do for You</h1>
            <p className='mt-3 text-sm text-gray-300'>Passionate about technology and design, I provide services that help<br/>your brand stand out and grow in the digital world.</p>
            
            <div className="flex flex-col md:flex-row justify-center gap-6 max-w-6xl mx-auto mt-10">
                <div className="flex flex-col items-center text-center bg-[#243b55] rounded-2xl p-6 w-full md:w-1/3 shadow-lg">
                    <img src={web} alt="Web Development Icon" className="w-12 h-12 mb-4" />
                    <h2 className="text-xl font-semibold mb-2">Front End Web Development</h2>
                    <p className="text-sm leading-relaxed text-gray-300">
                        I specialize in crafting modern, responsive, and high-performing websites.
                        With strong expertise in front-end technologies, I'm fully capable of bringing
                        your vision to life.
                    </p>
                </div>

                <div className="flex flex-col items-center text-center bg-[#243b55] rounded-2xl p-6 w-full md:w-1/3 shadow-lg">
                    <img src={contract} alt="Smart Contract Icon" className="w-12 h-12 mb-4" />
                    <h2 className="text-xl font-semibold mb-2">Smart Contract Development</h2>
                    <p className="text-sm leading-relaxed text-gray-300">
                        Empowered with blockchain knowledge, I create secure and efficient smart contracts
                        to bring trust and automation to your projects.
                    </p>
                </div>
            </div>

            <div className="mt-8">
                <Link to='/Project' className="px-6 py-3 text-white text-base font-medium bg-gradient-to-r from-[#1f2c4c] to-[#2d3f66] rounded-full shadow-md hover:from-[#2a3b59] hover:to-[#3a4e7a] transition-all duration-300">
                    See My Recent Project
                </Link>
            </div>

        </div>

    )
}