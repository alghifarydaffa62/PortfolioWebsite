import flux from "../../assets/flux.png"
import Navbar from "../../component/navbar";
import FadeContent from '../../animation/FadeContent/FadeContent'
import Back from "../../component/Back";
import { useEffect } from "react"

export default function Flux() {
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
                        <img src={flux} alt="BrandIn project" className="w-full mt-8 rounded-xl" />
                    </div>

                    <div className="w-full lg:w-[50%] max-w-lg">
                        <div className="flex flex-col items-center gap-3 mt-6 mb-4 md:flex-row lg:mt-0">
                            <h1 className="text-3xl font-bold">Flux SDK</h1>
                            <span className="px-3 py-1 text-sm font-semibold text-white rounded-full bg-sky-700">
                            Individual Project
                            </span>
                        </div>

                        <p className="text-justify text-md">
                            This is my first time building SDK, and i built it 
                            for the Mantle Global Hackathon. Flux SDK is an infrasturture layer for
                            tokenizing or wrapping real world asset into liquid, composable ERC 4626 vault then 
                            these assets can be seamlessly integrated into the broader DeFi ecosystem 
                        </p>

                        <h1 className="my-3 text-lg font-bold">Tech stack</h1>
                        <div className="flex flex-wrap gap-3">
                            <p className="px-3 py-1 text-sm rounded-full bg-slate-700">Wagmi</p>
                            <p className="px-3 py-1 text-sm rounded-full bg-slate-700">Rainbow Wallet</p>
                            <p className="px-3 py-1 text-sm rounded-full bg-slate-700">Foundry</p>
                            <p className="px-3 py-1 text-sm rounded-full bg-slate-700">Tailwind CSS</p>
                            <p className="px-3 py-1 text-sm rounded-full bg-slate-700">Typescript</p>
                        </div>

                        <div className="mt-4">
                            <h1 className="mb-2 text-lg font-bold">Project Link:</h1>
                            <a href="https://flux-app-kohl.vercel.app/" target="_blank"className='px-3 py-1 rounded-full bg-slate-700 text-md'>
                                https://flux-app-kohl.vercel.app/
                            </a>
                        </div>
                        <div className="mt-4">
                            <h1 className="mb-2 text-lg font-bold">SDK Documentation Link</h1>
                            <a href="https://flux-sdk.gitbook.io/flux-sdk-docs/" target="_blank"className='px-3 py-1 rounded-full bg-slate-700 text-md'>
                                Flux Gitbook
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