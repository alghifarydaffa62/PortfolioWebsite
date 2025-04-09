import '../App.css'
import ShinyText from '../animation/ShinyText/ShinyText'
import reactJS from '../assets/React.png'
import reactBoostrap from '../assets/React-Bootstrap.png'
import solidity from '../assets/Solidity.png'
import tailwind from '../assets/Tailwind-CSS.png'
import JS from '../assets/JavaScript.png'
import bootstrap from '../assets/Bootstrap.png'
import AnimatedContent from '../animation/AnimatedContent/AnimatedContent'

export default function Expertise() {
    const techs = [
        { name: "React", img: reactJS },
        { name: "React Bootstrap", img: reactBoostrap },
        { name: "Solidity", img: solidity },
        { name: "Tailwind", img: tailwind },
        { name: "JavaScript", img: JS },
        { name: "Bootstrap", img: bootstrap },
      ];

    return(
        <div className='mt-3'>
            <div className="expert">
                <h1 className='text-[#6e92d6] font-semibold'>My Area of Focus</h1>

                <div className='flex gap-3 mt-3'>
                    <ShinyText text="Front End Web Development" disabled={false} speed={3} className='custom-class' />                
                    <ShinyText text="Web3 Enthusiast" disabled={false} speed={3} className='custom-class' />                                
                </div>
            </div>

            <div className="tech mt-4">
                <h1 className='text-[#6e92d6] font-semibold'>Tech Stack</h1>

                <div className="mt-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 place-items-center">
                    {techs.map((tech, index) => (
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
                            <div key={index} className="group flex flex-col items-center">
                                <div className="w-16 h-16 bg-[#111827] rounded-md flex items-center justify-center transition duration-300 hover:shadow-[0_0_15px_2px_rgba(255,255,255,0.3)]">
                                    <img src={tech.img} alt={tech.name} className="w-10 h-10" />
                                </div>
                                <div className="wrap-break-word mt-2 px-2 py-1 text-xs rounded text-white bg-white/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap">
                                    {tech.name}
                                </div>
                            </div>
                        </AnimatedContent>
                    
                    ))}
                </div>
            </div>
            
        </div>
    )
}