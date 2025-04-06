import { Link } from 'react-router-dom';
import '../App.css'

export default function Navbar() {
  return (
    <div className="px-8 py-3 bg-[#243B55] border-[2px] border-[#2D4364] rounded-full w-fit mx-auto">
      <ul className="flex gap-8 justify-center list-none">
        {['Home', 'About', 'Skill', 'Project', 'Contact'].map((item) => (
          <li key={item}>
            <Link
              to={`/${item === 'Home' ? '' : item}`}
              className="relative pb-1 text-white hover:after:w-full after:transition-all after:duration-300 after:ease-in-out after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-white"
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
