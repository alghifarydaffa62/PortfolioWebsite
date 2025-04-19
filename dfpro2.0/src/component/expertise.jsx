import '../App.css';
import reactJS from '../assets/React.png';
import reactBoostrap from '../assets/React-Bootstrap.png';
import solidity from '../assets/Solidity.png';
import tailwind from '../assets/Tailwind-CSS.png';
import JS from '../assets/JavaScript.png';
import bootstrap from '../assets/Bootstrap.png';
import FadeContent from '../animation/FadeContent/FadeContent';

export default function Expertise() {
  const techs = [
    { name: "React", img: reactJS },
    { name: "React Bootstrap", img: reactBoostrap },
    { name: "Solidity", img: solidity },
    { name: "Tailwind", img: tailwind },
    { name: "JavaScript", img: JS },
    { name: "Bootstrap", img: bootstrap },
  ];

  return (
    <div className="mt-16 mb-10 text-white px-6">
      <div className="tech text-center max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold">Tech Stack</h1>
        <p className="mt-3 text-md text-gray-300">
          My current tech stack for building websites and smart contracts
        </p>

        <div className="mt-10 grid grid-cols-2 justify-center gap-12 lg:flex">
          {techs.map((tech, index) => (
            <FadeContent
              key={index}
              blur={true}
              duration={1000}
              easing="ease-out"
              initialOpacity={0}
            >
              <div className="flex flex-col items-center w-[40vw] sm:w-[20vw] lg:w-auto hover:scale-105 transition duration-300">
                <img
                  src={tech.img}
                  alt={tech.name}
                  className="w-12 h-12 object-contain mb-2"
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

