import '../../App.css'
import Navbar from '../../component/navbar'
import Back from '../../component/Back'
import sc from "../../assets/smanisdaCup.png"
import { useEffect } from 'react'
import FadeContent from '../../animation/FadeContent/FadeContent'

export default function SC() {
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
                <div className='flex justify-center gap-10 my-15 text-white items-center'>
                    <div>
                        <Back/>
                        <img src={sc} alt="" className='w-[45vw] rounded-xl mt-8'/>
                    </div>
                                
                
                    <div className='max-w-lg'>
                        <div className='flex items-center gap-3 mb-4'>
                            <h1 className='font-bold text-3xl'>Smanisda Cup Aetheria</h1>
                            <span className='text-sm font-semibold px-3 py-1 bg-emerald-700 rounded-full text-white'>
                            Team Project
                            </span>
                        </div>
                                    
                        <p className='text-md text-justify'>
                            This project is a collaborative team effort to develop an 
                            official website for Smanisda Cup, a dynamic inter-school 
                            competition event organized by student council of SMAN 1 Sidoarjo. 
                            The website serves as an all-in-one platform to showcase 
                            and manage various competitions such as futsal, science 
                            olympiads, music, and many more exciting student 
                            activities.
                        </p>
                
                        <h1 className='font-bold text-lg my-3'>Tech stack</h1>
                
                        <div className='flex gap-3'>
                            <p className='py-1 px-3 bg-slate-700 rounded-full text-sm'>HTML</p>
                            <p className='py-1 px-3 bg-slate-700 rounded-full text-sm'>Bootstrap</p>
                            <p className='py-1 px-3 bg-slate-700 rounded-full text-sm'>Javascript</p>
                        </div>
                
                        <div>
                            <h1 className='font-bold text-lg my-3'>Project Link:</h1>
                            <a href="http://alghifarydaffa62.github.io/SC-2023" target="_blank"className='py-1 px-3 bg-slate-700 rounded-full text-md'>
                                alghifarydaffa62.github.io/SC-2023
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