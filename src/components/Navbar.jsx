import { SiHomeadvisor } from "react-icons/si";
import { FaBandcamp } from "react-icons/fa6";
import { RiContactsBook2Fill } from "react-icons/ri";
import { Link } from "react-router";
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';

function NavBar()
{
    return <div className="head">
       <img className="logo" src="logo.jpeg"></img>
       <div>FOOD ZONE</div>
     <div className="menu">
        <Link to="/"><SiHomeadvisor />Home</Link>
        <Link to="/About"><FaBandcamp />About</Link>
        <Link to="/Contact"><RiContactsBook2Fill />Contact</Link>
        <SignedOut>
         <SignInButton />
         </SignedOut>
         <SignedIn>
         <UserButton />
         </SignedIn>
     </div>
       
    </div>
}

export default NavBar;