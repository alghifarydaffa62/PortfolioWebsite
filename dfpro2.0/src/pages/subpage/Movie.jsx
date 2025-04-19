import '../../App.css'
import Navbar from '../../component/navbar'
import movie from '../../assets/movie.png'
import Back from '../../component/Back'
import { useEffect } from 'react'
import FadeContent from '../../animation/FadeContent/FadeContent'

export default function Movie() {
    useEffect(() => {
        window.scrollTo(0,0);
    }, [])
    
    return(
        <div>
            <Navbar/>
            
            <FadeContent
                blur={true}
                duration={1000}
                easing="ease-out"
                initialOpacity={0}
            >
                <div className='flex flex-col lg:flex-row justify-center gap-10 my-10 text-white items-center px-4'>
                    <div className="w-full lg:w-[50%]">
                        <Back/>
                        <img src={movie} alt="" className='w-full rounded-xl mt-8'/>
                    </div>
                                
                
                    <div className="w-full lg:w-[50%] max-w-lg">
                        <div className="flex items-center gap-3 mb-4 mt-6 lg:mt-0">
                            <h1 className='font-bold text-3xl'>Movie Hunter</h1>
                            <span className='text-sm font-semibold px-3 py-1 bg-emerald-700 rounded-full text-white'>
                            Individual Project
                            </span>
                        </div>
                                    
                        <p className='text-md text-justify'>
                        This project is a UI/UX design concept for 
                        a movie streaming website, aimed at delivering 
                        an intuitive and engaging experience for film 
                        enthusiasts. The design focuses on creating a clean, 
                        modern interface that allows users to effortlessly 
                        browse, search, and watch movies from various genres. It includes 
                        well-structured sections such as featured movies, trending now, 
                        user reviews, and personalized recommendations.
                        </p>
                
                        <h1 className='font-bold text-lg my-3'>Tech stack</h1>
                
                        <div className='flex gap-3'>
                            <p className='py-1 px-3 bg-slate-700 rounded-full text-sm'>Figma</p>
                        </div>
                
                        <div>
                            <h1 className='font-bold text-lg my-3'>Project Link:</h1>
                            <a href="" className='py-1 px-3 bg-red-700 rounded-full text-md'>
                                Under Maintenance
                            </a>
                        </div>
                    </div>
                </div>
            </FadeContent>                        
            
            <footer className="text-center py-4 text-sm text-gray-400">
            © 2025 dfpro2.0 . All Rights Reserved
            </footer>
        </div>
    )
}