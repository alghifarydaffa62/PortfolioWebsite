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
import SpotlightCard from '../animation/SpotlightCard/SpotlightCard'
import { Link } from 'react-router-dom'
import AnimatedContent from '../animation/AnimatedContent/AnimatedContent'
import FadeContent from '../animation/FadeContent/FadeContent'

export default function Project() {
    return(
        <div >
            <Navbar/>

            <div className="text-white mt-10">
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
                            <h1 className="text-center text-3xl font-bold">Web Projects</h1>
                            <p className="text-center mt-3 text-sm text-gray-300">
                                A collection of web-based projects that demonstrate my front-end<br />
                                skills, design sense, and focus on user experience.
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
                                { src: community, title: "Community Website", link: "https://himitcommunity.vercel.app" },
                                { src: mondsia, title: "My Wonderful Indonesia", link: "/projects/mondsia" },
                                { src: water, title: "Life Below Water", link: "/projects/LifeBelowWater" },
                                { src: SC, title: "Smanisda Cup", link: "/projects/SmanisdaCup" },
                                { src: brandIn, title: "Brand-in Aja", link: "/projects/brandinAja" },
                                { src: movie, title: "Movie Hunter", link: "/projects/movie" }
                            ].map((item, index) => (
                                <a
                                    href={item.link}
                                    key={index}
                                    className="relative group w-[28vw] rounded-[1.2rem] overflow-hidden cursor-pointer block"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        src={item.src}
                                        alt={`web-project-${index}`}
                                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <span className="text-white text-xl font-semibold">
                                            {item.title}
                                        </span>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </FadeContent>
                </section>

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
                                { img: wallet, title: "Secure Wallet", desc: "A blockchain-powered wallet ensuring safe and private transactions." },
                                { img: charity, title: "Charity", desc: "A transparent and safe smart contract for charity purpose" },
                                { img: escrow, title: "Escrow", desc: "A smart contract for secure buyer-seller transactions."},
                                { img: voting, title: "Voting", desc: "Decentralized voting system ensuring fair and tamper-proof results." },
                                { img: auction, title: "Auction", desc: "smart contract for secure bidding and transparent NFT auction" },
                                { img: payroll, title: "Payroll", desc: "Automates salary payments using smart contracts for reliability."}
                            ].map((project, index) => (
                                <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
                                    <div key={index}>
                                        <img src={project.img} alt={project.title} className='w-[3vw] h-[6vh] object-fit'/>
                                        <h1 className="text-xl font-semibold mt-3">{project.title}</h1>
                                        <p className='text-sm text-gray-300 mt-2'>{project.desc}</p>
                                        <button className='mt-4 p-2 bg-neutral-800 rounded-lg text-sm'><Link to='/'>Know more</Link></button>
                                    </div>
                                </SpotlightCard>
                            ))}
                        </div>
                    </FadeContent>
                </section>
            </div>
        </div>
    )
}