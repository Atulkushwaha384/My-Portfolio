import { SITE_NAME } from "../../utils/constants";
const Footer = () => {
  return (
    <div className=" w-full h-16  text-[#ffffff] text-center align-center justify-center bg-[rgba(255,255,255,0.01)] border-2 border-[#101039] rounded-b-lg backdrop-blur-sm">
      <div  className=" w-7xl mx-auto flex items-center align-center justify-between p-4">
        <div>&copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.</div>
        <div>Designed and Developed by Atul Anand</div>
        <div>Version 1.0.0</div>
      </div>
    </div>
  )
}

export default Footer