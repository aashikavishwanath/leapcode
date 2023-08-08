import React from "react";
import { AiOutlineFullscreen, AiOutlineFullscreenExit, AiOutlineSetting } from "react-icons/ai";


type PreferenceNavProps = {
	
};

const PreferenceNav: React.FC<PreferenceNavProps> = () => {

    return (
        <div className='flex items-center justify-between bg-blue-200 h-11 w-full '>
            <div className='flex items-center text-gray-900'>
                <button className='flex cursor-pointer items-center rounded focus:outline-none bg-dark-fill-3 text-dark-label-2 hover:bg-dark-fill-2  px-2 py-1.5 font-mono'>
                    <div className='flex items-center px-1'>
                        <div className='text-xs text-gray-900 dark:text-dark-label-2'>Javascript</div>
                    </div>
                </button>
               
            </div>
            
            <div className='flex items-center m-2'>
                <button className='preferenceBtn group'>
                    <div className='h-4 w-4 text-dark-gray-6 font-bold text-lg'>
                        <AiOutlineSetting />
                    </div>
                    <div className='preferenceBtn-tooltip'>Settings</div>
                </button>

                <button className='preferenceBtn group'>
                    <div className='h-4 w-4 text-dark-gray-6 font-bold text-lg'>
                        <AiOutlineFullscreen />
                    </div>
                    <div className='preferenceBtn-tooltip'>Full screen</div>
                </button>
            </div>
</div>
	);
};
export default PreferenceNav;