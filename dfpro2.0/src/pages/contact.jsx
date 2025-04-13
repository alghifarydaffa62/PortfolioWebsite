import '../App.css'
import Navbar from '../component/navbar'
import ContactForm from '../component/formContact'
import mail from '../assets/email.png'
import Social from '../component/social'

export default function Contact() {
    return(
        <div>
            <Navbar/>

            <div className='flex justify-center gap-[5rem] text-white mt-10 items-center'>
                <div>
                    <h1 className='text-5xl font-bold'>Text me.<br/>Tell me about your<br/>project</h1>
                    <h1 className='mt-4 text-lg'>Let's work together✨</h1>
                    <h1 className='mt-3 text-gray-400'>or you can mail me at:</h1>
                    <div className='flex gap-2 items-center px-4 py-2 bg-slate-700 rounded-lg w-fit mt-2'>
                        <img src={mail} alt="" className='w-[2vw] h-[3vh]'/>
                        <h1>daffa.alghifary@gmail.com</h1>
                    </div>
                </div>
                
                <div>
                    <ContactForm/>
                </div>
            </div>
            <div>
                <h1 className='text-white text-3xl text-center font-semibold mt-10'>Other ways to connect with me</h1>\
                
                <Social/>
            </div>
        </div>
    )
}