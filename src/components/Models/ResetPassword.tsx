import React from "react";
type ResetPasswordProps = {};

const ResetPassword: React.FC<ResetPasswordProps> = () => {
	return (
		<form className='space-y-6 px-6 lg:px-8 pb-4 sm:pb-6 xl:pb-8'>
			<h3 className='text-xl font-mono  text-black'>Reset Password</h3>
			<p className='text-sm text-black font-mono'>
				If you forgot your password, enter your email below, and we will send you an email to
				reset it.
			</p>
			<div>
                <label htmlFor='email' className='text-sm font-mono block mb-2 text-gray-600'>
                    Your Email:
                </label>
                <input type='email' name='email' id='email' 
                className='border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-700 focus:border-blue-700 block w-full p-2.5
                bg-gray-200 border-gray-500 placeholder-gray-400 text-gray-800 font-mono'
                placeholder='name@company.com'
            />
            </div>

			<button
				type='submit'
				className='w-full text-white focus:ring-blue-300 font-mono rounded-lg
                text-lg px-5 py-3 text-center bg-red-500 hover:bg-red-700'>
				Reset Password
			</button>
		</form>
	);
};
export default ResetPassword;