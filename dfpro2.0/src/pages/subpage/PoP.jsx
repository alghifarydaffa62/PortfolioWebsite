import '../../App.css'
import Navbar from '../../component/navbar'
import Back from '../../component/Back'
import pop from "../../assets/pop.png"
import { useEffect } from 'react'
import FadeContent from '../../animation/FadeContent/FadeContent'

export default function PoP() {
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
                        <img src={pop} alt="pop project" className="w-full mt-8 rounded-xl" />
                    </div>

                    <div className="w-full lg:w-[50%] max-w-lg">
                        <div className="flex items-center gap-3 mt-6 mb-4 lg:mt-0">
                            <h1 className="text-3xl font-bold">Proof of Project</h1>
                            <span className='px-3 py-1 text-sm font-semibold text-white rounded-full bg-emerald-700'>
                            Individual Project
                            </span>
                        </div>

                        <p className="text-justify text-md">
                            Proof of Project (PoP) is a RWA-powered escrow platform built 
                            on the Mantle Network that leverages smart contracts to secure 
                            digital agreements. By integrating $USDY for stable payments 
                            and IPFS for immutable documentation, PoP guarantees that every 
                            transaction is backed by real value and tamper-proof evidence.
                        </p>

                        <h1 className="my-3 text-lg font-bold">Tech stack</h1>
                        <div className="flex flex-wrap gap-3">
                            <p className="px-3 py-1 text-sm rounded-full bg-slate-700">Wagmi</p>
                            <p className="px-3 py-1 text-sm rounded-full bg-slate-700">RainbowKit</p>
                            <p className="px-3 py-1 text-sm rounded-full bg-slate-700">Tailwindcss</p>
                            <p className="px-3 py-1 text-sm rounded-full bg-slate-700">Solidity</p>
                            <p className="px-3 py-1 text-sm rounded-full bg-slate-700">IPFS Pinata</p>
                        </div>

                        <div className="mt-4">
                            <h1 className="mb-2 text-lg font-bold">Project Link:</h1>
                            <a href="https://proof-of-project.vercel.app/" target="_blank"className='px-3 py-1 rounded-full bg-slate-700 text-md'>
                                Live Deploy
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