import '../App.css'
import Navbar from '../component/navbar'
import ContactForm from '../component/formContact'
import mail from '../assets/email.png'
import Social from '../component/social'
import FadeContent from '../animation/FadeContent/FadeContent'
import { useEffect } from 'react'

export default function Contact() {

    useEffect(() => {
        window.scrollTo(0,0);
    }, [])
    
    return(
        <div>
            <Navbar/>

            <FadeContent
                blur={true}
                duration={1000}
                easing="ease-out"
                initialOpacity={0}
            >
                <div className="flex flex-col md:flex-row justify-center items-center gap-15 text-white px-6 md:px-12 mt-16">
                    <div className="">
                        <h1 className="text-3xl md:text-5xl font-bold">
                            Text me.<br />
                            Tell me about your<br />
                            project
                        </h1>
                        <h2 className="mt-4 text-lg">Let's work together✨</h2>
                        <p className="mt-3 text-gray-400">or you can mail me at:</p>

                        <div className="flex gap-2 items-center px-4 py-2 bg-slate-700 rounded-lg w-fit mt-2">
                            <img src={mail} alt="mail icon" className="w-6 h-6" />
                            <p className="text-sm">daffa.alghifary@gmail.com</p>
                        </div>
                    </div>

                    <div className="md:w-1/2 w-full">
                        <ContactForm />
                    </div>
                </div>
            </FadeContent>
            <FadeContent
                blur={true}
                duration={1000}
                easing="ease-out"
                initialOpacity={0}
            >
                <div className="mt-16 px-6">
                    <h1 className="text-white text-2xl md:text-3xl text-center font-semibold mb-6">
                        Other ways to connect with me
                    </h1>
                    <Social />
                </div>
            </FadeContent>
            <footer className="text-center py-4 text-sm text-gray-400">
            © 2025 dfpro2.0 . All Rights Reserved
            </footer>
        </div>
    )
}