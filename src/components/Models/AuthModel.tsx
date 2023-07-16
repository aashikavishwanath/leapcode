import React from 'react';
import {BiWindowClose} from "react-icons/bi"
import Login from './Login';

type AuthModelProps = {
    
};

const AuthModel:React.FC<AuthModelProps> = () => {
    
    return (
        <>  {/* creating a full-screen, semi-transparent black background */ }
			<div
				className='absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-60'></div>
			<div className='w-full sm:w-[450px]  absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  flex justify-center items-center'>
				<div className='relative w-full h-full mx-auto flex items-center justify-center'>
					<div className='bg-white rounded-lg shadow relative w-full bg-gradient-to-b from-red-200 to-blue-200 mx-6'>
						<div className='flex justify-end p-2'>
							<button
								type='button'
								className='bg-transparent rounded-lg text-sm p-0.5 ml-auto inline-flex items-center hover:bg-blue-700 hover:text-white text-white text-3xl'>
                                <BiWindowClose />
							</button>
						</div>
                        <Login />
					</div>
				</div>
			</div>
		</>
    );
};
export default AuthModel;