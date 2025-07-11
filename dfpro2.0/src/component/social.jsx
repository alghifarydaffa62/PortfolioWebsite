import '../App.css'
import github from '../assets/github.png'
import fiverr from '../assets/fiverr.png'
import instagram from '../assets/instagram.png'
import linkedIn from '../assets/linkedin.png'

export default function Social() {
    return(
        <div className="flex flex-wrap justify-center gap-6 px-4 py-6">
            {[
                {
                name: 'Instagram',
                icon: instagram,
                url: 'https://www.instagram.com/df_webdev',
                },

                {
                name: 'Fiverr',
                icon: fiverr,
                url: 'https://www.fiverr.com/s/qD3rYLX',
                },

                {
                name: 'GitHub',
                icon: github,
                url: 'https://github.com/alghifarydaffa62',
                },

                {
                name: 'LinkedIn',
                icon: linkedIn,
                url: 'https://www.linkedin.com/in/mdaffaalghifary',
                },
                
            ].map((item, idx) => (
                <a
                key={idx}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-[45%] sm:w-[40%] md:w-[18%] min-w-[130px] max-w-[180px] h-[130px] md:h-[150px] rounded-2xl border border-white bg-slate-800 flex flex-col items-center justify-center hover:scale-105 transition duration-300"
                >
                    <img src={item.icon} alt={item.name} className="w-8 h-8 mb-2" />
                    <p className="text-white font-mono text-sm">{item.name}</p>
                </a>
            ))}
        </div>

    )
}