import { useTheme } from '../../hooks/useTheme'
import {MoonStar , Sun }from "lucide-react";
const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div>
      <button onClick={toggleTheme} className='bg-[#1a1a3e] hover:bg-[#11115a] transition-colors duration-600 text-white p-2 border-2 border-[#3f3f75] rounded-xl'>
        {theme === 'light' ? <MoonStar /> : <Sun />}
      </button>
    </div>
  )
}

export default ThemeToggle;