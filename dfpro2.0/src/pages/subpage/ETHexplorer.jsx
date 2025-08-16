import explorer from "../../assets/explorer.png"
import Navbar from "../../component/navbar";
import FadeContent from '../../animation/FadeContent/FadeContent'
import Back from "../../component/Back";
import { useEffect } from "react"

export default function ETHexplorer() {
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
                        <img src={explorer} alt="BrandIn project" className="w-full mt-8 rounded-xl" />
                    </div>

                    <div className="w-full lg:w-[50%] max-w-lg">
                        <div className="flex flex-col items-center gap-3 mt-6 mb-4 md:flex-row lg:mt-0">
                            <h1 className="text-3xl font-bold">Ethereum Block Explorer</h1>
                            <span className="px-3 py-1 text-sm font-semibold text-white rounded-full bg-sky-700">
                            Individual Project
                            </span>
                        </div>

                        <p className="text-justify text-md">
                            This is my first project in the field of blockchain. 
                            It functions as a simple Ethereum block explorer that 
                            provides the latest updates on Ethereum blocks, including 
                            account details and transaction information.
                        </p>

                        <h1 className="my-3 text-lg font-bold">Tech stack</h1>
                        <div className="flex flex-wrap gap-3">
                            <p className="px-3 py-1 text-sm rounded-full bg-slate-700">React + Vite</p>
                            <p className="px-3 py-1 text-sm rounded-full bg-slate-700">Ethers.js</p>
                            <p className="px-3 py-1 text-sm rounded-full bg-slate-700">Alchemy-sdk</p>
                            <p className="px-3 py-1 text-sm rounded-full bg-slate-700">Zustand</p>
                        </div>

                        <div className="mt-4">
                            <h1 className="mb-2 text-lg font-bold">Project Link:</h1>
                            <a href="https://eth-block-explorer-rho.vercel.app/" target="_blank"className='px-3 py-1 rounded-full bg-slate-700 text-md'>
                                eth-block-explorer-rho.vercel.app
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