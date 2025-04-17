import { Link } from 'react-router-dom';
import '../App.css'

export default function Navbar() {
  return (
    <div className="mt-8 px-6 py-3 bg-[#243B55] border-2 border-[#2D4364] rounded-full w-fit mx-auto">
      <ul className="flex flex-wrap gap-6 sm:gap-8 justify-center items-center list-none text-sm sm:text-base">
        {['Home', 'About', 'Project', 'Contact'].map((item) => (
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
  )
}
