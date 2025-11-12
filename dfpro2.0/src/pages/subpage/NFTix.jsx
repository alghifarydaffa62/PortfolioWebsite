import '../../App.css'
import Navbar from '../../component/navbar'
import Back from '../../component/Back'
import nftix from '../../assets/nftix.png'
import { useEffect } from 'react'
import FadeContent from '../../animation/FadeContent/FadeContent'

export default function NFTix() {
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
                        <img src={nftix} alt="BrandIn project" className="w-full mt-8 rounded-xl" />
                    </div>

                    <div className="w-full lg:w-[50%] max-w-lg">
                        <div className="flex items-center gap-3 mt-6 mb-4 lg:mt-0">
                            <h1 className="text-3xl font-bold">NFTix</h1>
                            <span className="px-3 py-1 text-sm font-semibold text-white rounded-full bg-emerald-700">
                            Team Project
                            </span>
                        </div>

                        <p className="text-justify text-md">
                            NFTix is a NFT Based Ticketing system that leverages blockchain technology to provide secure,
                            transparent, and tamper-proof ticketing solutions for events. By utilizing NFTs as digital tickets,
                            NFTix ensures authenticity and eliminates the risk of counterfeit tickets. Each NFT ticket is unique
                            and can be easily scanned and verified on the blockchain, providing event organizers and buyers with peace of mind.
                        </p>

                        <h1 className="my-3 text-lg font-bold">Tech stack</h1>
                        <div className="flex flex-wrap gap-3">
                            <p className="px-3 py-1 text-sm rounded-full bg-slate-700">React JS</p>
                            <p className="px-3 py-1 text-sm rounded-full bg-slate-700">AppKit</p>
                            <p className="px-3 py-1 text-sm rounded-full bg-slate-700">HardHat</p>
                            <p className="px-3 py-1 text-sm rounded-full bg-slate-700">Ethers.js</p>
                            <p className="px-3 py-1 text-sm rounded-full bg-slate-700">Solidity</p>
                            <p className="px-3 py-1 text-sm rounded-full bg-slate-700">Html5QrCode</p>
                        </div>

                        <div className="mt-4">
                            <h1 className="mb-2 text-lg font-bold">Project Link:</h1>
                            <a href="https://nftix-rho.vercel.app/" target="_blank"className='px-3 py-1 rounded-full bg-slate-700 text-md'>
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