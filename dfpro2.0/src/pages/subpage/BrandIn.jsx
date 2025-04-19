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
                <div className="flex flex-col lg:flex-row justify-center gap-10 my-10 text-white items-center px-4">
                    <div className="w-full lg:w-[50%]">
                        <Back />
                        <img src={brandIn} alt="BrandIn project" className="w-full rounded-xl mt-8" />
                    </div>

                    <div className="w-full lg:w-[50%] max-w-lg">
                        <div className="flex items-center gap-3 mb-4 mt-6 lg:mt-0">
                            <h1 className="font-bold text-3xl">BrandIn Aja</h1>
                            <span className="text-sm font-semibold px-3 py-1 bg-emerald-700 rounded-full text-white">
                            Team Project
                            </span>
                        </div>

                        <p className="text-md text-justify">
                            BrandIn aja is a promotional platform that helps local tourism spots gain more exposure.
                            It’s designed specifically for lesser-known destinations that deserve more attention from
                            travelers. Through this platform, local owners can easily showcase their tourist spots
                            including descriptions, photos, facilities, and contact details. The goal is to support local tourism by connecting hidden gems with a wider audience,
                            helping communities grow economically and culturally through increased visitor engagement.
                        </p>

                        <h1 className="font-bold text-lg my-3">Tech stack</h1>
                        <div className="flex flex-wrap gap-3">
                            <p className="py-1 px-3 bg-slate-700 rounded-full text-sm">Figma</p>
                        </div>

                        <div className="mt-4">
                            <h1 className="font-bold text-lg mb-2">Project Link:</h1>
                            <a href="" className='py-1 px-3 bg-red-700 rounded-full text-md'>
                                Under Maintenance
                            </a>
                        </div>
                    </div>
                </div>
            </FadeContent>

            <footer className="text-center py-4 text-sm text-gray-400">
            © 2025 dfpro2.0 . All Rights Reserved
            </footer>
        </div>
    )
}