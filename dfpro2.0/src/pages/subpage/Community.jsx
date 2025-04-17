import '../../App.css'
import Navbar from '../../component/navbar'
import community from '../../assets/community.png'
import Back from '../../component/Back'

export default function Community() {
    return(
        <div>
            <Navbar/>

            <div className='flex justify-center gap-10 my-15 text-white items-center'>
                <div>
                    <Back/>
                    <img src={community} alt="" className='w-[45vw] rounded-xl mt-8'/>
                </div>
                

                <div className='max-w-lg'>
                    <div className='flex items-center gap-3 mb-4'>
                        <h1 className='font-bold text-3xl'>Himit Community</h1>
                        <span className='text-sm font-semibold px-3 py-1 bg-emerald-700 rounded-full text-white'>
                        Team Project
                        </span>
                    </div>
                    
                    <p className='text-md text-justify'>
                    This project is a responsive and informative website built for HIMIT PENS 
                    (Informatics Engineering Student Association at PENS). The website serves as 
                    a centralized platform that showcases detailed information about each community 
                    within the organization. It includes sections for community profiles, activities, 
                    achievements, and how to join. The goal is to make it easier for students to explore 
                    and engage with communities that align with their interests, all in one accessible 
                    platform. 
                    </p>

                    <h1 className='font-bold text-lg my-3'>Tech stack</h1>

                    <div className='flex gap-3'>
                        <p className='py-1 px-3 bg-slate-700 rounded-full text-sm'>React JS + Vite</p>
                        <p className='py-1 px-3 bg-slate-700 rounded-full text-sm'>Tailwind CSS</p>
                    </div>

                    <div>
                        <h1 className='font-bold text-lg my-3'>Project Link:</h1>
                        <a href="http://himitcommunity.vercel.app" target="_blank"className='py-1 px-3 bg-slate-700 rounded-full text-lg'>
                            himitcommunity.vercel.app
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}