import '../App.css'
import reactJS from '../assets/React.png'
import reactBoostrap from '../assets/React-Bootstrap.png'
import solidity from '../assets/Solidity.png'
import tailwind from '../assets/Tailwind-CSS.png'
import JS from '../assets/JavaScript.png'
import bootstrap from '../assets/Bootstrap.png'
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
        <div className='mt-8 mb-5 text-white'>
            <div className="tech text-center">
                <h1 className="text-3xl font-bold">Tech Stack</h1>
                <p className='mt-3 text-md text-gray-300'>My current tech stack for building website and smart cntract</p>

                <div className="flex justify-center gap-10 mt-4">
                    {techs.map((tech, index) => (
                        <FadeContent
                            key={index}
                            blur={true}
                            duration={1000}
                            easing="ease-out"
                            initialOpacity={0}
                            >
                                <div className="flex items-center justify-center gap-3">
                                    <img
                                        src={tech.img}
                                        alt={tech.name}
                                        className="w-10 h-10 object-contain"
                                    />
                                    <h1 className='text-gray-400'>{tech.name}</h1>
                                </div>    
                        </FadeContent>
                    ))}
                </div>
            </div>
        </div>


    )
}