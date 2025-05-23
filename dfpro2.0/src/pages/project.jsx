import '../App.css'
import Navbar from '../component/navbar'
import SC from '../assets/smanisdaCup.png'
import brandIn from '../assets/brandIn.png'
import mondsia from '../assets/mondsia.png'
import community from '../assets/community.png'
import water from '../assets/water.png'
import movie from '../assets/movie.png'
import AnimatedContent from '../animation/AnimatedContent/AnimatedContent'
import FadeContent from '../animation/FadeContent/FadeContent'
import SmartContract from '../component/smartContract'
import { useEffect } from 'react'

export default function Project() {
    useEffect(() => {
        window.scrollTo(0,0);
    }, [])
    
    return(
        <div >
            <Navbar/>

            <div className="mt-10 px-4 md:px-10 lg:px-12 text-white">
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
                            <h1 className="text-center text-2xl font-bold md:text-2xl lg:text-3xl">Web Projects</h1>
                            <p className="text-center mt-3 text-[11px] text-gray-300 md:text-sm lg-text-sm">
                                A collection of web-based projects that demonstrate my front-end<br />
                                skills, design sense, and focus on user experience.
                            </p>
                        </div>
                    </AnimatedContent>
                    <FadeContent
                        blur={true}
                        duration={700}
                        easing="ease-out"
                        initialOpacity={0}
                        >
                        <div className="flex justify-center gap-4 flex-wrap mt-8 mb-10">
                            {[
                                { src: community, title: "Community Website", link: "/Project/HimitCommunity" },
                                { src: mondsia, title: "My Wonderful Indonesia", link: "/Project/Mondsia" },
                                { src: water, title: "Life Below Water", link: "/Project/SDG" },
                                { src: SC, title: "Smanisda Cup", link: "/Project/SC" },
                                { src: brandIn, title: "Brand-in Aja", link: "/Project/BrandIn" },
                                { src: movie, title: "Movie Hunter", link: "/Project/Movie" }
                            ].map((item, index) => (
                                <a
                                    href={item.link}
                                    key={index}
                                    className="relative group w-full sm:w-[48%] lg:w-[30%] xl:w-[28%] aspect-[4/3] rounded-2xl overflow-hidden block shadow-lg hover:shadow-xl transition-shadow duration-300"
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
                <SmartContract/>
            </div>
            <footer className="text-center py-4 text-sm text-gray-400">
            © 2025 dfpro2.0 . All Rights Reserved
            </footer>
        </div>
    )
}