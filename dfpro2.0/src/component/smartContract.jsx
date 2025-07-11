import '../App.css'
import AnimatedContent from '../animation/AnimatedContent/AnimatedContent'
import FadeContent from '../animation/FadeContent/FadeContent'
import wallet from '../assets/wallet.png'
import charity from '../assets/charity.png'
import crowdfunding from '../assets/crowdfunding.png'
import escrow from '../assets/escrow.png'
import payroll from '../assets/payroll.png'
import voting from '../assets/voting.png'
import SpotlightCard from '../animation/SpotlightCard/SpotlightCard'

export default function SmartContract() {
    return(
        <section>
            <AnimatedContent
                distance={90}
                direction="vertical"
                reverse={false}
                config={{ tension: 80, friction: 20 }}
                initialOpacity={0.2}
                animateOpacity
                scale={1}
                threshold={0.2}
            >
                <div>
                    <h1 className="text-3xl font-bold text-center">Smart Contract Projects</h1>
                    <p className="text-center mt-3 text-[11px] lg:text-sm text-gray-300">
                        These smart contract projects reflect my ability to build secure,<br />
                        efficient, and decentralized solutions on the blockchain.
                    </p>
                </div>
            </AnimatedContent>

            <FadeContent
                blur={true}
                duration={700}
                easing="ease-out"
                initialOpacity={0}
            >
                <div className="grid grid-cols-1 gap-6 px-4 mt-8 mb-10 sm:grid-cols-2 lg:grid-cols-3">
                    {[
                        { 
                            img: wallet, 
                            title: "Secure Wallet", 
                            desc: "A blockchain-powered wallet ensuring safe and private transactions.",
                            link: "https://github.com/alghifarydaffa62/Smart-Contract/tree/main/Secure-Wallet" 
                        },
                        { 
                            img: charity, 
                            title: "Charity", 
                            desc: "A transparent and safe smart contract for charity purpose",
                            link: "https://github.com/alghifarydaffa62/Smart-Contract/tree/main/Charity"
                        },
                        { 
                            img: escrow, 
                            title: "Escrow", 
                            desc: "A smart contract for secure buyer-seller transactions.",
                            link: "https://github.com/alghifarydaffa62/Smart-Contract/tree/main/Escrow"
                        },
                        { 
                            img: voting, 
                            title: "Voting", 
                            desc: "Decentralized voting system ensuring fair and tamper-proof results.",
                            link: "https://github.com/alghifarydaffa62/Smart-Contract/tree/main/Voting" 
                        },
                        { 
                            img: crowdfunding, 
                            title: "CrowdFunding", 
                            desc: "Smart contract for funding a public campaign",
                            link: "https://github.com/alghifarydaffa62/Smart-Contract/tree/main/CrowdFunding" 
                        },
                        { 
                            img: payroll, 
                            title: "Payroll", 
                            desc: "Automates salary payments using smart contracts for reliability.",
                            link: "https://github.com/alghifarydaffa62/Smart-Contract/tree/main/Payroll"
                        }
                    ].map((project, index) => (
                        <SpotlightCard
                            key={index}
                            className="w-full p-5 transition custom-spotlight-card rounded-xl bg-neutral-900 hover:shadow-lg sm:w-auto"
                            spotlightColor="rgba(0, 229, 255, 0.2)"
                        >
                            <div className="">
                                <img 
                                    src={project.img} 
                                    alt={project.title} 
                                    className="object-contain w-12 h-12 mb-3"
                                />
                                <h1 className="text-lg font-semibold">{project.title}</h1>
                                <p className="mt-2 mb-4 text-sm text-gray-300 break-words">{project.desc}</p>
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-4 py-2 text-sm transition rounded-lg bg-neutral-800 hover:bg-neutral-700"
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