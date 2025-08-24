import '../App.css'
import Navbar from '../component/navbar'
import ContactForm from '../component/formContact'
import mail from '../assets/email.png'
import Social from '../component/social'
import FadeContent from '../animation/FadeContent/FadeContent'
import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'

export default function Contact() {

    useEffect(() => {
        window.scrollTo(0,0);
    }, [])
    
    return(
        <div>
            <Helmet>
                <title>Contact | Daffa Al Ghifary</title>
                <meta name="description" content="Looking for a way to connect with me ?, Hit my email" />
                <meta name="keywords" content="Contact Daffa Al Ghifary, Email Daffa Al Ghifary, Github Daffa Al Ghifary" />
            </Helmet>
            <Navbar/>

            <FadeContent
                blur={true}
                duration={700}
                easing="ease-out"
                initialOpacity={0}
            >
                <div className="flex flex-col items-center justify-center px-6 mt-16 text-white md:flex-row gap-15 md:px-12">
                    <div className="">
                        <h1 className="text-3xl font-bold md:text-5xl">
                            Text me.<br />
                            Tell me about your<br />
                            project
                        </h1>
                        <h2 className="mt-4 text-lg">Let's work together✨</h2>
                        <p className="mt-3 text-gray-400">or you can mail me at:</p>

                        <div className="flex items-center gap-2 px-4 py-2 mt-2 rounded-lg bg-slate-700 w-fit">
                            <img src={mail} alt="mail icon" className="w-6 h-6" />
                            <p className="text-sm">daffa.alghifary@gmail.com</p>
                        </div>
                    </div>

                    <div className="w-full md:w-1/2">
                        <ContactForm />
                    </div>
                </div>
            </FadeContent>
            <FadeContent
                blur={true}
                duration={700}
                easing="ease-out"
                initialOpacity={0}
            >
                <div className="px-6 mt-16">
                    <h1 className="mb-6 text-2xl font-semibold text-center text-white md:text-3xl">
                        Other ways to connect with me
                    </h1>
                    <Social />
                </div>
            </FadeContent>
            <footer className="py-4 text-sm text-center text-gray-400">
            © 2025 dfpro2.0 . All Rights Reserved
            </footer>
        </div>
    )
}