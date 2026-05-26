import { Link } from 'react-router-dom'
import ThemeToggle from '../ui/ThemeToggle'
import { NAV_LINKS } from '../../utils/constants'
import { SITE_NAME } from '../../utils/constants'

const Navbar = () => {
  return (
     <section className='bg-[rgba(255,255,255,0.01)] text-center justify-between  w-full border-2 border-[#101039] rounded-t-lg fixed top-0 z-50 backdrop-blur-sm'>
      <div className='w-7xl flex mx-auto items-center align-center justify-between p-2'>
        <div className='text-[#00b3ff] text-2xl text-bold'>{SITE_NAME}</div>
        <div>
          {NAV_LINKS.map(link => (
            <Link key={link} to={`#${link.toLowerCase()}`} className='mx-4  hover:text-[#0040ff] transition-colors duration-300 text-white'>
              {link}
            </Link>
          ))}
        </div>
        <ThemeToggle />
      </div>
     </section>
  )
}

export default Navbar