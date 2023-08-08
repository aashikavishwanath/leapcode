import { auth } from "@/firebase/firebase";
import Link from "next/link";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import Logout from "../Logout/Logout";
import { useSetRecoilState } from "recoil";
import { authModelState } from "@/atoms/authModelAtom";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { BsList } from "react-icons/bs";
import { useRouter } from "next/router";

type TopbarProps = {
	problemPage?: boolean;
};

const Topbar: React.FC<TopbarProps> = ({ problemPage }) => {
	const [user] = useAuthState(auth);
	const setAuthModelState = useSetRecoilState(authModelState);

	return (
		<nav className='relative flex h-[50px] w-full shrink-0 items-center px-5 bg-transparent shadow-lg text-gray-800 font-mono' style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)' }}>
			<div className={`flex w-full items-center justify-between ${!problemPage ? "max-w-[1200px] mx-auto" : ""}`}>
				<Link href='/' className='h-[22px] flex-1 mt-[-27px]'>
					<Image src='/logofull.png' alt='Logo' height={100} width={100} />
				</Link>

				{problemPage && (
					<div className='flex items-center gap-4 flex-1 justify-center'>
						<div
							className='flex items-center justify-center rounded bg-blue hover:bg-blue h-8 w-8 cursor-pointer'
							//onClick={() => handleProblemChange(false)}
						>
							<FaChevronLeft />
						</div>
						<Link
							href='/'
							className='flex items-center gap-2 font-mono max-w-[170px] text-brand-red cursor-pointer'
						>
							<div>
								<BsList />
							</div>
							<p>Problem List</p>
						</Link>
						<div
							className='flex items-center justify-center rounded bg-dark-fill-3 hover:bg-dark-fill-2 h-8 w-8 cursor-pointer'
							//onClick={() => handleProblemChange(true)}
						>
							<FaChevronRight />
						</div>
					</div>
				)}

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
					{!user && (
						<Link
							href='/auth'
							onClick={() => setAuthModelState((prev) => ({ ...prev, isOpen: true, type: "login" }))}
						>
							<button
									className="bg-brand-red text-white px-1 py-0.5 rounded-md font-mono 
									hover:text-brand-red hover:bg-white hover:border-2 hover:border-brand-red border-2 border-transparent
									transition duration-300 ease-in-out" 
								>Sign In</button>
						</Link>
					)}
					{user && (
						<div className='cursor-pointer group relative'>
						<Image src='/person.png' alt='Avatar' width={30} height={30} className='rounded-full' />
						<div
							className='absolute top-10 left-2/4 -translate-x-2/4  mx-auto bg-brand-red text-brand-orange p-2 rounded shadow-lg 
							z-40 group-hover:scale-100 scale-0 
							transition-all duration-300 ease-in-out'
						>
							<p className='text-sm text-white'>{user.email}</p>
						</div>
					</div>
					)}
					{user && <Logout />}
				</div>
			</div>
		</nav>
	);
};
export default Topbar;