import '../../App.css'
import Navbar from '../../component/navbar'
import escrow from "../../assets/descrow.png"
import Back from '../../component/Back'
import { useEffect } from 'react'
import FadeContent from '../../animation/FadeContent/FadeContent'

export default function Descrow() {
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
                <div className='flex flex-col items-center justify-center gap-10 px-4 my-10 text-white lg:flex-row'>
                    <div className="w-full lg:w-[50%]">
                        <Back/>
                        <img src={escrow} alt="" className="w-full mt-8 rounded-xl"/>
                    </div>

                    <div className="w-full lg:w-[50%] max-w-lg">
                        <div className="flex items-center gap-3 mt-6 mb-4 lg:mt-0">
                            <h1 className='text-2xl font-bold lg:text-3xl'>Escrow dApp</h1>
                            <span className='px-3 py-1 text-sm font-semibold text-white rounded-full bg-sky-700'>
                            Individual Project
                            </span>
                        </div>
                        
                        <p className='text-justify text-md'>
                            This project is a decentralized escrow application (DApp) 
                            built on Sepolia Ethereum, designed to provide a secure and trustless 
                            way to manage transactions between two parties. It leverages 
                            a factory smart contract pattern that enables the deployment 
                            of multiple escrow contracts from a single source, ensuring 
                            scalability and maintainability. The application includes 
                            features such as creating new escrow agreements, validating 
                            Ethereum addresses, and tracking transaction states through 
                            an interactive and responsive user interface.
                        </p>

                        <h1 className='my-3 text-lg font-bold'>Tech stack</h1>

                        <div className='flex gap-3'>
                            <p className='px-3 py-1 text-sm rounded-full bg-slate-700'>React JS + Vite</p>
                            <p className='px-3 py-1 text-sm rounded-full bg-slate-700'>Tailwind CSS</p>
                            <p className='px-3 py-1 text-sm rounded-full bg-slate-700'>ethers.js</p>
                            <p className='px-3 py-1 text-sm rounded-full bg-slate-700'>Solidity</p>
                        </div>

                        <div>
                            <h1 className='my-3 text-lg font-bold'>Project Link:</h1>
                            <a href="http://escrow-dapp-delta.vercel.app/" target="_blank"className='px-3 py-1 text-lg rounded-full bg-slate-700'>
                                Testnet Deployment
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