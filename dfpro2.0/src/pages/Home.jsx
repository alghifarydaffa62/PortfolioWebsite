import '../App.css'
import Navbar from '../component/navbar'

export default function Home() {
    return(
        <div>
            <Navbar/>

            <div className='flex justify-center flex-col gap-3'>
                <h1 className='bg-gradient-blue text-white font-sans text-center text-5xl font-bold'>Welcome To My<br/>Portfolio Website</h1>
            </div>
        </div>
    )
}