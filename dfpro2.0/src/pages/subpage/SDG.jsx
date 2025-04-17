import '../../App.css'
import Navbar from '../../component/navbar'
import sdg from '../../assets/water.png'
import Back from '../../component/Back'

export default function SDG() {
    return(
        <div>
            <Navbar/>
                        
            <div className='flex justify-center gap-10 my-15 text-white items-center'>
                <div>
                    <Back/>
                    <img src={sdg} alt="" className='w-[45vw] rounded-xl mt-8'/>
                </div>
                            
            
                <div className='max-w-lg'>
                    <div className='flex items-center gap-3 mb-4'>
                        <h1 className='font-bold text-3xl'>Life Below Water</h1>
                        <span className='text-sm font-semibold px-3 py-1 bg-sky-700 rounded-full text-white'>
                            Individual Project
                        </span>
                    </div>
                                
                    <p className='text-md text-justify'>
                    This project is a digital platform that highlights the core aspects of
                    Sustainable Development Goal 14: Life Below Water, focusing on the 
                    importance of conserving and sustainably using the oceans, seas, and 
                    marine resources. The website presents key insights into the challenges, 
                    barriers, opportunities, and threats related to marine ecosystems.
                    </p>
            
                    <h1 className='font-bold text-lg my-3'>Tech stack</h1>
            
                    <div className='flex gap-3'>
                        <p className='py-1 px-3 bg-slate-700 rounded-full text-sm'>HTML</p>
                        <p className='py-1 px-3 bg-slate-700 rounded-full text-sm'>Bootstrap</p>
                        <p className='py-1 px-3 bg-slate-700 rounded-full text-sm'>Javascript</p>
                    </div>
            
                    <div>
                        <h1 className='font-bold text-lg my-3'>Project Link:</h1>
                        <a href="http://alghifarydaffa62.github.io/SEFEST" target="_blank"className='py-1 px-3 bg-slate-700 rounded-full text-md'>
                            alghifarydaffa62.github.io/SEFEST
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