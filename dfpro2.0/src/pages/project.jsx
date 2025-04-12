import '../App.css'
import Navbar from '../component/navbar'
import SC from '../assets/smanisdaCup.png'
import brandIn from '../assets/brandIn.png'
import mondsia from '../assets/mondsia.png'
import community from '../assets/community.png'
import water from '../assets/water.png'
import movie from '../assets/movie.png'

export default function Project() {
    return(
        <div >
            <Navbar/>

            <div className='text-white mt-10'>
                <h1 className='text-center text-3xl font-bold'>My Recent Projects</h1>
                <p className='text-center mt-3 text-sm text-gray-300'>Here are some of my latest works, showcasing creativity, functionality, and<br/>attention to detail across various web projects and smart contract.</p>

                <div className='flex justify-center gap-4 flex-wrap mt-8'>
                    <img src={community} alt="" className='w-[28vw] rounded-lg cursor-pointer' />
                    <img src={mondsia} alt="" className='w-[28vw] rounded-lg cursor-pointer' />
                    <img src={water} alt="" className='w-[28vw] rounded-lg cursor-pointer' />
                    <img src={SC} alt="" className='w-[28vw] rounded-lg cursor-pointer' />
                    <img src={brandIn} alt="" className='w-[28vw] rounded-lg cursor-pointer' />
                    <img src={movie} alt="" className='w-[28vw] rounded-lg cursor-pointer' />
                </div>
            </div>
            
        </div>
    )
}