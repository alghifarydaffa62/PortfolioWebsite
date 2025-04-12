import '../App.css'
import reactJS from '../assets/React.png'
import reactBoostrap from '../assets/React-Bootstrap.png'
import solidity from '../assets/Solidity.png'
import tailwind from '../assets/Tailwind-CSS.png'
import JS from '../assets/JavaScript.png'
import bootstrap from '../assets/Bootstrap.png'
import AnimatedContent from '../animation/AnimatedContent/AnimatedContent'
import FadeContent from '../animation/FadeContent/FadeContent'

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
        <div className='mt-8 mb-8'>
            <div className="tech text-center">
                <h1 className="text-3xl font-bold text-white">Tech Stack</h1>
                <p className='mt-3 text-md text-gray-300'>My current tech stack for building website and smart cntract</p>

                <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto mt-4">
                    {techs.map((tech, index) => (
                        <FadeContent
                        key={index}
                        blur={true}
                        duration={1000}
                        easing="ease-out"
                        initialOpacity={0}
                        >
                        <div className="group flex flex-col items-center">
                            <div className="w-16 h-16 p-2 bg-[#111827] rounded-md flex items-center justify-center transition duration-300 hover:shadow-[0_0_15px_2px_rgba(255,255,255,0.3)]">
                                <img
                                    src={tech.img}
                                    alt={tech.name}
                                    className="w-10 h-10 object-contain"
                                />
                                </div>
                            <div className="mt-2 px-2 py-1 text-xs rounded text-white bg-white/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap">
                                {tech.name}
                            </div>
                        </div>
                        </FadeContent>
                    ))}
                </div>
            </div>
        </div>


    )
}