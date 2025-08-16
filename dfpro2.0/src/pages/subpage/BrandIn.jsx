import '../../App.css'
import Navbar from '../../component/navbar'
import brandIn from '../../assets/brandIn.png'
import Back from '../../component/Back'
import { useEffect } from 'react'
import FadeContent from '../../animation/FadeContent/FadeContent'

export default function BrandIn() {
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
                <div className="flex flex-col items-center justify-center gap-10 px-4 my-10 text-white lg:flex-row">
                    <div className="w-full lg:w-[50%]">
                        <Back />
                        <img src={brandIn} alt="BrandIn project" className="w-full mt-8 rounded-xl" />
                    </div>

                    <div className="w-full lg:w-[50%] max-w-lg">
                        <div className="flex items-center gap-3 mt-6 mb-4 lg:mt-0">
                            <h1 className="text-3xl font-bold">BrandIn Aja</h1>
                            <span className="px-3 py-1 text-sm font-semibold text-white rounded-full bg-emerald-700">
                            Team Project
                            </span>
                        </div>

                        <p className="text-justify text-md">
                            BrandIn aja is a promotional platform that helps local tourism spots gain more exposure.
                            It’s designed specifically for lesser-known destinations that deserve more attention from
                            travelers. Through this platform, local owners can easily showcase their tourist spots
                            including descriptions, photos, facilities, and contact details. The goal is to support local tourism by connecting hidden gems with a wider audience,
                            helping communities grow economically and culturally through increased visitor engagement.
                        </p>

                        <h1 className="my-3 text-lg font-bold">Tech stack</h1>
                        <div className="flex flex-wrap gap-3">
                            <p className="px-3 py-1 text-sm rounded-full bg-slate-700">Figma</p>
                        </div>

                        <div className="mt-4">
                            <h1 className="mb-2 text-lg font-bold">Project Link:</h1>
                            <a href="https://dribbble.com/shots/25920153-Tourist-Attraction-Promotion-App?utm_source=Clipboard_Shot&utm_campaign=dfpro&utm_content=Tourist%20Attraction%20Promotion%20App&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=dfpro&utm_content=Tourist%20Attraction%20Promotion%20App&utm_medium=Social_Share" target="_blank"className='px-3 py-1 rounded-full bg-slate-700 text-md'>
                                Dribble showcase
                            </a>
                        </div>
                    </div>
                </div>
            </FadeContent>

            <footer className="py-4 text-sm text-center text-gray-400">
            © 2025 dfpro2.0 . All Rights Reserved
            </footer>
        </div>
    )
}