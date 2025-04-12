import '../App.css'
import Navbar from '../component/navbar'
import SC from '../assets/smanisdaCup.png'
import brandIn from '../assets/brandIn.png'
import mondsia from '../assets/mondsia.png'
import community from '../assets/community.png'
import water from '../assets/water.png'
import movie from '../assets/movie.png'
import wallet from '../assets/wallet.png'
import charity from '../assets/charity.png'
import auction from '../assets/auction.png'
import escrow from '../assets/escrow.png'
import payroll from '../assets/payroll.png'
import voting from '../assets/voting.png'

export default function Project() {
    return(
        <div >
            <Navbar/>

            <div className='text-white mt-10'>
                <h1 className='text-center text-3xl font-bold'>Web Projects</h1>
                <p className='text-center mt-3 text-sm text-gray-300'>A collection of web-based projects that demonstrate my front-end<br/>skills, design sense, and focus on user experience.</p>

                <div className='flex justify-center gap-4 flex-wrap mt-8 mb-10'>
                    <img src={community} alt="" className='w-[28vw] rounded-lg cursor-pointer' />
                    <img src={mondsia} alt="" className='w-[28vw] rounded-lg cursor-pointer' />
                    <img src={water} alt="" className='w-[28vw] rounded-lg cursor-pointer' />
                    <img src={SC} alt="" className='w-[28vw] rounded-lg cursor-pointer' />
                    <img src={brandIn} alt="" className='w-[28vw] rounded-lg cursor-pointer' />
                    <img src={movie} alt="" className='w-[28vw] rounded-lg cursor-pointer' />
                </div>

                <h1 className='text-center text-3xl font-bold'>Smart Contract Projects</h1>
                <p className='text-center mt-3 text-sm text-gray-300'>These smart contract projects reflect my ability to build secure,<br/>efficient, and decentralized solutions on the blockchain.</p>

                <div className='flex justify-center gap-4 flex-wrap mt-8 mb-10'>
                    <div className='w-[28vw] h-[38vh] bg-[#202d4b] rounded-lg cursor-pointer flex flex-col items-center justify-center'>
                        <img src={wallet} alt="" />
                        <h1 className='text-xl font-semibold mt-3'>Secure Wallet</h1>
                    </div>
                    <div className='w-[28vw] h-[38vh] bg-[#202d4b] rounded-lg cursor-pointer flex flex-col items-center justify-center'>
                        <img src={charity} alt="" />
                        <h1 className='text-xl font-semibold mt-3'>Charity</h1>
                    </div>
                    <div className='w-[28vw] h-[38vh] bg-[#202d4b] rounded-lg cursor-pointer flex flex-col items-center justify-center'>
                        <img src={escrow} alt="" />
                        <h1 className='text-xl font-semibold mt-3'>Escrow</h1>
                    </div>
                    <div className='w-[28vw] h-[38vh] bg-[#202d4b] rounded-lg cursor-pointer flex flex-col items-center justify-center'>
                        <img src={voting} alt="" />
                        <h1 className='text-xl font-semibold mt-3'>Voting</h1>
                    </div>
                    <div className='w-[28vw] h-[38vh] bg-[#202d4b] rounded-lg cursor-pointer flex flex-col items-center justify-center'>
                        <img src={auction} alt="" />
                        <h1 className='text-xl font-semibold mt-3'>Auction</h1>
                    </div>
                    <div className='w-[28vw] h-[38vh] bg-[#202d4b] rounded-lg cursor-pointer flex flex-col items-center justify-center'>
                        <img src={payroll} alt="" />
                        <h1 className='text-xl font-semibold mt-3'>Payroll</h1>
                    </div>
                </div>

            </div>
            
        </div>
    )
}