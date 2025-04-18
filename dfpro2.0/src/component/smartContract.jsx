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
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 mt-8 mb-10">
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
                            desc: "Smart contract for secure bidding and transparent NFT auction",
                            link: "https://github.com/alghifarydaffa62/Web3/tree/main/Project/Auction" 
                        },
                        { 
                            img: payroll, 
                            title: "Payroll", 
                            desc: "Automates salary payments using smart contracts for reliability.",
                            link: "https://github.com/alghifarydaffa62/Web3/tree/main/Project/Payroll"
                        }
                    ].map((project, index) => (
                        <SpotlightCard
                            key={index}
                            className="custom-spotlight-card p-5 rounded-xl bg-neutral-900 hover:shadow-lg transition w-full sm:w-auto"
                            spotlightColor="rgba(0, 229, 255, 0.2)"
                        >
                            <div className="">
                                <img 
                                    src={project.img} 
                                    alt={project.title} 
                                    className="w-12 h-12 object-contain mb-3"
                                />
                                <h1 className="text-lg font-semibold">{project.title}</h1>
                                <p className="text-sm text-gray-300 mt-2 mb-4 break-words">{project.desc}</p>
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-4 py-2 bg-neutral-800 rounded-lg text-sm hover:bg-neutral-700 transition"
                                >
                                    Know more
                                </a>
                            </div>
                        </SpotlightCard>
                    ))}
                </div>
            </FadeContent>
        </section>

    )
}