import '../App.css'
import Navbar from '../component/navbar'
import ContactForm from '../component/formContact'

export default function Contact() {
    return(
        <div>
            <Navbar/>

            <div className='flex justify-center gap-[5rem] text-white mt-10 items-center'>
                <div>
                    <h1 className='text-5xl font-bold'>Text me.<br/>Tell me about your<br/>project</h1>
                    <h1 className='mt-4'>Let's work together✨</h1>
                </div>
                
                <div>
                    <ContactForm/>
                </div>
            </div>
        </div>
    )
}