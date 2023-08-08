import Split from "react-split";
import React from "react";
import { AiFillLike, AiFillDislike, AiOutlineLoading3Quarters, AiFillStar } from "react-icons/ai";
import { BsCheck2Circle } from "react-icons/bs";
import { TiStarOutline } from "react-icons/ti";

type ProblemDescriptionProps = {
	
};

const ProblemDescription: React.FC<ProblemDescriptionProps> = () => {

	return (
		<div className='bg-blue-100'>
			{/* TAB */}
			<div className='flex h-11 w-full items-center pt-2 bg-blue-200 text-white overflow-x-hidden'>
				<div className={"bg-blue-100 text-gray-900 font-mono rounded-t-[5px] px-5 py-[10px] text-xs cursor-pointer"}>
					Description
				</div>
			</div>

			<div className='flex px-0 py-4 h-[calc(100vh-94px)] overflow-y-auto'>
				<div className='px-5'>
					{/* Problem heading */}
					<div className='w-full'>
						<div className='flex space-x-4'>
							<div className='flex-1 mr-2 text-lg font-bold text-gray-900 font-mono'>Two Sum</div>
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


									<span className='text-xs'>120</span>
								</div>
								<div
									className='flex items-center cursor-pointer hover:bg-dark-fill-3 space-x-1 rounded p-[3px]  ml-4 text-lg transition-colors duration-200 text-green-s text-dark-gray-6'
								>
									{<AiFillDislike />}

									<span className='text-xs'>2</span>
								</div>
								<div
									className='cursor-pointer hover:bg-dark-fill-3  rounded p-[3px]  ml-4 text-xl transition-colors duration-200 text-green-s text-dark-gray-6 '
								>
									{<AiFillStar className='text-dark-yellow' />}
								</div>
							</div>
				

{/* Problem Statement (paragraphs) */}
<div className='text-gray-900 font-mono text-sm mt-5'>
<h2><strong>Problem Statement:</strong></h2>
  <p>
    Given an array of integers <code style={{ color: 'black' }}>nums</code> and an integer <code style={{ color: 'black' }}>target</code>, return the indices of the two numbers such that they add up to <code style={{ color: 'black' }}>target</code>.
  </p>
  <p>
    You may assume that each input would have exactly one solution, and you may not use the same element twice.
  </p>
</div>

{/* Examples */}
<div className='my-5'>
  <h2 className='text-gray-900 text-sm font-bold font-mono'>Examples:</h2>
  <div className='text-gray-900 font-mono  text-sm'>
    <h3>Example 1:</h3>
    <p>Input: <code style={{ color: 'black' }}>nums = [2,7,11,15], target = 9</code></p>
    <p>Output: <code style={{ color: 'black' }}>[0,1]</code></p>
    <p>Explanation: nums[0] + nums[1] == 9, so return [0, 1].</p>
  </div>
  <div className='text-gray-900  font-mono text-sm mt-3'>
    <h3>Example 2:</h3>
    <p>Input: <code style={{ color: 'black' }}>nums = [3,2,4], target = 6</code></p>
    <p>Output: <code style={{ color: 'black' }}>[1,2]</code></p>
    <p>Explanation: nums[1] + nums[2] == 6, so return [1, 2].</p>
  </div>
</div>

{/* Constraints */}
<div className='my-8 font-bold pb-4'>
  <div className='text-gray-900 text-sm font-mono'>Constraints:</div>
  <ul className='text-gray-900 ml-5 font-mono list-disc'>
    <li><code style={{ color: 'black' }}>2 &le; nums.length &le; 10^4</code></li>
    <li><code style={{ color: 'black' }}>-10^9 &le; nums[i] &le; 10^9</code></li>
    <li><code style={{ color: 'black' }}>-10^9 &le; target &le; 10^9</code></li>
    <li>Only one valid answer exists.</li>
  </ul>
</div>

          </div>
        </div>
      </div>
    </div>
  );
};
export default ProblemDescription;