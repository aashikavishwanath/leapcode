import Link from 'next/link';
import React from 'react';

type NavbarProps = {
    
};

const Navbar:React.FC<NavbarProps> = () => {
    
    return <div className="flex items-center justify-between sm:px-12 px-2 md:px-24">
        {/* 'link' is part of Next.js and creates a link to another page in app. in this class, links back to home page. */}
        <Link href="/" className="flex items-center justify-center h-20">
            <img src="/logofull.png" alt="LeapCode" className = "h-full" />
        </Link>
        <div className="flex items-center">
            <button
                className="bg-brand-red text-white px-3 py-2 rounded-md font-mono 
                hover:text-brand-red hover:bg-white hover:border-2 hover:border-brand-red border-2 border-transparent
                transition duration-300 ease-in-out" 
            >Sign In</button>
        </div>
    </div>
}
export default Navbar;