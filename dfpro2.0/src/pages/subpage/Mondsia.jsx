import '../../App.css'
import Navbar from '../../component/navbar'
import mondsia from '../../assets/mondsia.png'
import Back from '../../component/Back'

export default function Mondsia() {
    return(
        <div>
            <Navbar/>
            
            <div className='flex justify-center gap-10 my-15 text-white items-center'>
                <div>
                    <Back/>
                    <img src={mondsia} alt="" className='w-[45vw] rounded-xl mt-8'/>
                </div>
                            
            
                <div className='max-w-lg'>
                    <div className='flex items-center gap-3 mb-4'>
                        <h1 className='font-bold text-3xl'>Mondsia</h1>
                        <span className='text-sm font-semibold px-3 py-1 bg-sky-700 rounded-full text-white'>
                            Individual Project
                        </span>
                    </div>
                                
                    <p className='text-md text-justify'>
                        My Wonderful Indonesia or <b>Mondsia</b> is a cultural website that showcases the rich diversity of Indonesian heritage 
                        across the six major islands: Sumatra, Java, Kalimantan, Sulawesi, Bali, and Papua. Each island 
                        section highlights traditional dances, unique traditional houses, and local customs or rituals 
                        that have been passed down through generations. The goal is to provide an engaging and educational platform that allows users to explore 
                        Indonesia’s cultural identity in a modern and interactive way.
                    </p>
            
                    <h1 className='font-bold text-lg my-3'>Tech stack</h1>
            
                    <div className='flex gap-3'>
                        <p className='py-1 px-3 bg-slate-700 rounded-full text-sm'>HTML</p>
                        <p className='py-1 px-3 bg-slate-700 rounded-full text-sm'>Bootstrap</p>
                        <p className='py-1 px-3 bg-slate-700 rounded-full text-sm'>Javascript</p>
                    </div>
            
                    <div>
                        <h1 className='font-bold text-lg my-3'>Project Link:</h1>
                        <a href="" className='py-1 px-3 bg-red-700 rounded-full text-md'>
                            Under Maintenance
                        </a>
                    </div>
                </div>
            </div>
            <footer className="text-center py-4 text-sm text-gray-400">
            © 2025 dfpro2.0 . All Rights Reserved
            </footer>
        </div>
    )
}