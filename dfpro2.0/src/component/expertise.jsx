import '../App.css';
import reactJS from '../assets/React.png';
import reactBoostrap from '../assets/React-Bootstrap.png';
import solidity from '../assets/Solidity.png';
import tailwind from '../assets/Tailwind-CSS.png';
import JS from '../assets/JavaScript.png';
import bootstrap from '../assets/Bootstrap.png';
import alchemy from "../assets/alchemy.jpeg";
import zustand from "../assets/zustand.svg";
import hardhat from "../assets/Hardhat.png";
import foundry from "../assets/foundry.png";
import ethers from "../assets/ethers.png";
import FadeContent from '../animation/FadeContent/FadeContent';

export default function Expertise() {
  const techs = [
    { name: "React", img: reactJS },
    { name: "React Bootstrap", img: reactBoostrap },
    { name: "Tailwind", img: tailwind },
    { name: "JavaScript", img: JS },
    { name: "Bootstrap", img: bootstrap },
    { name: "Zustand", img: zustand },
    { name: "Solidity", img: solidity },
    { name: "Hardhat", img: hardhat },
    { name: "Foundry", img: foundry },
    { name: "ethers.js", img: ethers },
    { name: "Alchemy", img: alchemy },
  ];

  return (
    <div className="px-6 mt-16 mb-10 text-white">
      <div className="max-w-6xl mx-auto text-center tech">
        <h1 className="text-3xl font-bold">Tech Stack</h1>
        <p className="mt-3 text-gray-300 text-md">
          My current tech stack for building websites and smart contracts
        </p>

        <div className="flex flex-wrap justify-center w-full mt-10 gap-x-10 gap-y-9">
          {techs.map((tech, index) => (
            <FadeContent
              key={index}
              blur={true}
              duration={700}
              easing="ease-out"
              initialOpacity={0}
            >
              <div className="flex flex-col items-center transition duration-300 hover:scale-105 w-28">
                <img
                  src={tech.img}
                  alt={tech.name}
                  className="object-contain w-12 h-12 mb-2"
                />
                <p className="text-sm text-gray-400">{tech.name}</p>
              </div>
            </FadeContent>
          ))}
        </div>

      </div>
    </div>
  );
}