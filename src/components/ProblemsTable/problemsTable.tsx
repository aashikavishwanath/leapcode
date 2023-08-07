import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BsCheckCircle } from "react-icons/bs";
import { AiFillYoutube } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import { collection, doc, getDoc, getDocs, orderBy, query } from "firebase/firestore";
import { auth, firestore } from "@/firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import {problems} from "@/tempProblem/tempProblems"
import YouTube from "react-youtube";

type ProblemsTableProps = {
	
};

const ProblemsTable: React.FC<ProblemsTableProps> = ({ }) => {
	const [youtubePlayer, setYoutubePlayer] = useState({
		isOpen: false,
		videoId: "",
	});
	const closeModal = () => {
		setYoutubePlayer({ isOpen: false, videoId: "" });
	};

	useEffect(() => {
		const handleEsc = (e: KeyboardEvent) => {
			if (e.key === "Escape") closeModal();
		};
		window.addEventListener("keydown", handleEsc);

		return () => window.removeEventListener("keydown", handleEsc);
	}, []);
	return (
		<>
			<tbody className='text-white'>
				{problems.map((problem, idx) => {
                const difficultyColor =
                problem.difficulty === "Easy"
                    ? "bg-dark-green-s text-white py-1 px-2 rounded-md font-mono inline-block"
                    : problem.difficulty === "Medium"
                    ? "bg-dark-yellow text-white py-1 px-2 rounded-md font-mono inline-block"
                    : "bg-dark-pink text-white py-1 px-2 rounded-md font-mono inline-block";
					return (
						<tr className={`${idx % 2 == 1 ? "bg-black bg-opacity-10" : ""}`} key={problem.id}>
							<th className='px-2 py-4 font-medium whitespace-nowrap text-green-400'>
								<BsCheckCircle fontSize={"18"} width='18' />
							</th>
                            <td className='px-6 py-4 font-mono font-bold text-gray-900'>
		
									<Link
										className='hover:text-blue-600 cursor-pointer'
										href={`/problems/${problem.id}`}
									>
										{problem.title}
									</Link>
								
							</td>
                            <td className='px-6 py-4 flex items-center'>
	                            <div className={difficultyColor}>{problem.difficulty}</div>
                            </td>							
                            <td className={"px-6 py-4 font-mono font-bold text-gray-900"}>{problem.category}</td>
                            <td className={"px-6 py-4"}>
									<AiFillYoutube
										fontSize={"28"}
										className='cursor-pointer text-gray-600 hover:text-red-600 ' 
										onClick={() =>
											setYoutubePlayer({ isOpen: true, videoId: problem.javaVideoId as string })
										}
									/>
                            </td>
                            <td className={"px-6 py-4"}>
									<AiFillYoutube
										fontSize={"28"}
										className='cursor-pointer text-gray-600 hover:text-red-600 ' 
										onClick={() =>
											setYoutubePlayer({ isOpen: true, videoId: problem.pythonVideoId as string })
										}
									/>
                            </td>
						</tr>
					);
				})}
			</tbody>
			{youtubePlayer.isOpen && (
				<tfoot className='fixed top-0 left-0 h-screen w-screen flex items-center justify-center'>
					<div
						className='bg-black z-10 opacity-70 top-0 left-0 w-screen h-screen absolute'
						onClick={closeModal}
					></div>
					<div className='w-full z-50 h-full px-6 relative max-w-4xl'>
						<div className='w-full h-full flex items-center justify-center relative'>
							<div className='w-full relative'>
								<IoClose
									fontSize={"35"}
									className='cursor-pointer absolute -top-16 right-0'
									onClick={closeModal}
								/>
								<YouTube
									videoId={youtubePlayer.videoId}
									loading='lazy'
									iframeClassName='w-full min-h-[500px]'
								/>
							</div>
						</div>
					</div>
				</tfoot>
			)}
		</>
	);
};
export default ProblemsTable;
