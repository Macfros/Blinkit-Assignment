import Link from "next/link";
import { WiSunset } from "react-icons/wi";

const NavbarApp = () => {
    return (
        <div className="p-2 flex justify-between align-middle items-center backdrop-blur-sm bg-white/30 w-screen h-17 pl-5 pr-5 overflow-hidden">
         <div className="hover:text-blue-400 text-2xl">
            <Link href="/"> Blinkit </Link>
         </div>
         <div className="   ">
            <WiSunset size={45}/>
         </div>
         <div>
         </div>
        </div>
        )
}

export default NavbarApp;