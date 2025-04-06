import '../App.css'
import Navbar from '../component/navbar'

export default function Home() {
    return(
        <div className='min-h-screen bg-gradient-to-r from-[#141e30] to-[#243b55] font-inter'>
            <Navbar/>
            <h1 className='bg-gradient-blue text-white font-sans text-center text-5xl font-bold'>Welcome To My<br/>Portfolio Website</h1>
        </div>
    )
}