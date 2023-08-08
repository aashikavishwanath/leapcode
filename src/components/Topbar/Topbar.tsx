import { auth } from "@/firebase/firebase";
import Link from "next/link";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useSetRecoilState } from "recoil";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { BsList } from "react-icons/bs";
import { useRouter } from "next/router";
import Logout from "../Logout/Logout";
import { authModelState } from "@/atoms/authModelAtom";

type TopbarProps = {
	problemPage?: boolean;
};

const Topbar: React.FC<TopbarProps> = ({ problemPage }) => {
	const [user] = useAuthState(auth);
	return (
		<nav className='relative flex h-[50px] w-full shrink-0 items-center px-5 bg-transparent shadow-lg text-gray-800 font-mono' style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)' }}>
			<div className={`flex w-full items-center justify-between ${!problemPage ? "max-w-[1200px] mx-auto" : ""}`}>
				<Link href='/' className='h-[22px] flex-1 mt-[-27px]'>
					<Image src='/logofull.png' alt='Logo' height={100} width={100} />
				</Link>

				<div className='flex items-center space-x-4 flex-1 justify-end'>
					<div>
						<a
							href='https://www.linkedin.com/in/aashikavishwanath/'
							target='_blank'
							rel='noreferrer'
							className="bg-brand-red text-white px-1 py-1 rounded-md font-mono 
                            hover:text-brand-red hover:bg-white hover:border-2 hover:border-brand-red border-2 border-transparent
                            transition duration-300 ease-in-out" 
						>
							Premium
						</a>
					</div>
							<Link
								href='/auth'
							>
								<button
									className="bg-brand-red text-white px-1 py-0.5 rounded-md font-mono 
									hover:text-brand-red hover:bg-white hover:border-2 hover:border-brand-red border-2 border-transparent
									transition duration-300 ease-in-out" 
								>Sign In</button>
							</Link>
				</div>
			</div>
		</nav>
	);
};
export default Topbar;