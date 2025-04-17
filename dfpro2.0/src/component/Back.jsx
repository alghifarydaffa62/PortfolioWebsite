import '../App.css'
import { Link } from 'react-router-dom'
import arrow from '../assets/arrow.png'

export default function Back() {
    return(
        <Link to="/Project" className='flex items-center gap-3 w-fit py-2 px-4 bg-slate-700 rounded-full text-md text-white font-medium'>
            <img src={arrow} alt="" className='w-5 h-5 object-contain'/>
            Back to Project
        </Link>
    )
}