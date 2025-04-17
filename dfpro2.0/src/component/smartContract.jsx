import '../App.css'
import AnimatedContent from '../animation/AnimatedContent/AnimatedContent'
import FadeContent from '../animation/FadeContent/FadeContent'
import wallet from '../assets/wallet.png'
import charity from '../assets/charity.png'
import auction from '../assets/auction.png'
import escrow from '../assets/escrow.png'
import payroll from '../assets/payroll.png'
import voting from '../assets/voting.png'
import SpotlightCard from '../animation/SpotlightCard/SpotlightCard'
import { Link } from 'react-router-dom'

export default function SmartContract() {
    return(
        <section>
            <AnimatedContent
                distance={120}
                direction="vertical"
                reverse={false}
                config={{ tension: 80, friction: 20 }}
                initialOpacity={0.2}
                animateOpacity
                scale={1}
                threshold={0.2}
                >
                <div>
                    <h1 className="text-center text-3xl font-bold">Smart Contract Projects</h1>
                    <p className="text-center mt-3 text-sm text-gray-300">
                    These smart contract projects reflect my ability to build secure,<br />
                    efficient, and decentralized solutions on the blockchain.
                    </p>
                </div>
            </AnimatedContent>
            <FadeContent
                blur={true}
                duration={1000}
                easing="ease-out"
                initialOpacity={0}
                >
                <div className="flex justify-center gap-4 flex-wrap mt-8 mb-10">
                    {[
                        { 
                            img: wallet, 
                            title: "Secure Wallet", 
                            desc: "A blockchain-powered wallet ensuring safe and private transactions.",
                            link: "https://github.com/alghifarydaffa62/Web3/tree/main/Project/Securewallet" 
                        },

                        { 
                            img: charity, 
                            title: "Charity", 
                            desc: "A transparent and safe smart contract for charity purpose",
                            link: "https://github.com/alghifarydaffa62/Web3/tree/main/Project/Charity"
                        },

                        { 
                            img: escrow, 
                            title: "Escrow", 
                            desc: "A smart contract for secure buyer-seller transactions.",
                            link: "https://github.com/alghifarydaffa62/Web3/tree/main/Project/Escrow"
                        },

                        { 
                            img: voting, 
                            title: "Voting", 
                            desc: "Decentralized voting system ensuring fair and tamper-proof results.",
                            link: "https://github.com/alghifarydaffa62/Web3/tree/main/Project/Voting" 
                        },

                        { 
                            img: auction, 
                            title: "Auction", 
                            desc: "smart contract for secure bidding and transparent NFT auction",
                            link: "https://github.com/alghifarydaffa62/Web3/tree/main/Project/Auction" 
                        },

                        { 
                            img: payroll, 
                            title: "Payroll", 
                            desc: "Automates salary payments using smart contracts for reliability.",
                            link: "https://github.com/alghifarydaffa62/Web3/tree/main/Project/Payroll"
                        }
                    ].map((project, index) => (
                        <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
                            <div key={index}>
                                <img src={project.img} alt={project.title} className='w-[3vw] h-[6vh] object-fit'/>
                                <h1 className="text-xl font-semibold mt-3">{project.title}</h1>
                                <p className='text-sm text-gray-300 mt-2'>{project.desc}</p>
                                <button className='mt-4 p-2 bg-neutral-800 rounded-lg text-sm'><Link to={project.link} target='_blank'>Know more</Link></button>
                            </div>
                        </SpotlightCard>
                    ))}
                </div>
            </FadeContent>
        </section>
    )
}