import { auth } from "@/firebase/firebase";
import React from "react";
import { useSignOut } from "react-firebase-hooks/auth";
import { FiLogOut } from "react-icons/fi";

// what is logout props? 

const Logout: React.FC = () => {
	const [signOut, loading, error] = useSignOut(auth);

	const handleLogout = () => {
		signOut();
	};
	return (
		<div className='relative group cursor-pointer'>
      <button
        className='bg-brand-red py-1.5 px-3 cursor-pointer rounded text-white'
        onClick={handleLogout}
      >
        <FiLogOut />
      </button>
      <div
        className='absolute top-10 left-2/4 -translate-x-2/4 mx-auto text-brand-red bg-white border-brand-red border-2 p-2 py-1 rounded shadow-lg z-40 group-hover:scale-100 scale-0 transition-all duration-300 ease-in-out'
      >
        <p className='text-sm text-brand-red font-bold'>Logout</p>
      </div>
    </div>
        
	);
};
export default Logout;