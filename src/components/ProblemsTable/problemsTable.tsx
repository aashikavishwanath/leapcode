import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BsCheckCircle } from "react-icons/bs";
import { AiFillYoutube } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import { collection, doc, getDoc, getDocs, orderBy, query } from "firebase/firestore";
import { auth, firestore } from "@/firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import {problems} from "@/tempProblem/tempProblems"

type ProblemsTableProps = {
	
};

const ProblemsTable: React.FC<ProblemsTableProps> = ({ }) => {

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
									/>
                            </td>
                            <td className={"px-6 py-4"}>
									<AiFillYoutube
										fontSize={"28"}
										className='cursor-pointer text-gray-600 hover:text-red-600 ' 
									/>
                            </td>
						</tr>
					);
				})}
			</tbody>
			
		</>
	);
};
export default ProblemsTable;
