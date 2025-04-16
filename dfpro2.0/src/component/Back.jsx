import '../App.css'
import { Link } from 'react-router-dom'

export default function Back() {
    return(
        <Link to="/Project" className='py-2 px-4 bg-slate-700 rounded-full text-md text-white font-medium'>
            Back to Project
        </Link>
    )
}