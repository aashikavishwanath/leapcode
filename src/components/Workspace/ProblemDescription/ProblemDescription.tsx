import Split from "react-split";
import React from "react";
import { AiFillLike, AiFillDislike, AiOutlineLoading3Quarters, AiFillStar } from "react-icons/ai";
import { BsCheck2Circle } from "react-icons/bs";
import { TiStarOutline } from "react-icons/ti";

type ProblemDescriptionProps = {
	
};

const ProblemDescription: React.FC<ProblemDescriptionProps> = () => {

	return (
		<div className='bg-dark-layer-1'>
			{/* TAB */}
			<div className='flex h-11 w-full items-center pt-2 bg-dark-layer-2 text-white overflow-x-hidden'>
				<div className={"bg-dark-layer-1 rounded-t-[5px] px-5 py-[10px] text-xs cursor-pointer"}>
					Description
				</div>
			</div>

			<div className='flex px-0 py-4 h-[calc(100vh-94px)] overflow-y-auto'>
				<div className='px-5'>
					{/* Problem heading */}
					<div className='w-full'>
						<div className='flex space-x-4'>
							<div className='flex-1 mr-2 text-lg text-white font-medium'>Two Sum</div>
						</div>
							<div className='flex items-center mt-3'>
								<div
									className={`text-olive bg-olive inline-block rounded-[21px] bg-opacity-[.15] px-2.5 py-1 text-xs font-medium capitalize `}
								>
									Easy
								</div>
								
									<div className='rounded p-[3px] ml-4 text-lg transition-colors duration-200 text-green-s text-dark-green-s'>
										<BsCheck2Circle />
									</div>
							
								<div
									className='flex items-center cursor-pointer hover:bg-dark-fill-3 space-x-1 rounded p-[3px]  ml-4 text-lg transition-colors duration-200 text-dark-gray-6'
								>
									{<AiFillLike className='text-dark-blue-s' />}
									{<AiFillLike />}
									{<AiOutlineLoading3Quarters className='animate-spin' />}

									<span className='text-xs'>120</span>
								</div>
								<div
									className='flex items-center cursor-pointer hover:bg-dark-fill-3 space-x-1 rounded p-[3px]  ml-4 text-lg transition-colors duration-200 text-green-s text-dark-gray-6'
								>
									{<AiFillDislike className='text-dark-blue-s' />}
									{<AiFillDislike />}
									{<AiOutlineLoading3Quarters className='animate-spin' />}

									<span className='text-xs'>2</span>
								</div>
								<div
									className='cursor-pointer hover:bg-dark-fill-3  rounded p-[3px]  ml-4 text-xl transition-colors duration-200 text-green-s text-dark-gray-6 '
								>
									{<AiFillStar className='text-dark-yellow' />}
									{<TiStarOutline />}
									{<AiOutlineLoading3Quarters className='animate-spin' />}
								</div>
							</div>
				
						{/* Problem Statement(paragraphs) */}
						<div className='text-white text-sm'>
							insert statement here
						</div>

						

						{/* Constraints */}
						<div className='my-8 pb-4'>
							<div className='text-white text-sm font-medium'>Constraints:</div>
							<ul className='text-white ml-5 list-disc '>
								insert contraints here
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default ProblemDescription;