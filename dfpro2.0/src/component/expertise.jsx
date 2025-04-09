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
    const techStack = [
        reactBoostrap, 
        reactJS, 
        solidity, 
        tailwind, 
        JS, 
        bootstrap
    ]

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

                <div className="flex gap-4 mt-3">
                    {techStack.map((tech) => (
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
                            <div className='bg-[#141e30] rounded-lg p-3'>
                                <img src={tech} alt="" className='w-[4vw] h-[8vh]'/>
                            </div>
                        </AnimatedContent>
                    ))}
                </div>
            </div>
            
        </div>
    )
}