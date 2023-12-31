import Split from "react-split";
import React from "react";
import PreferenceNav from "./PreferenceNav/PreferenceNav";
import CodeMirror from "@uiw/react-codemirror";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";
import { javascript } from "@codemirror/lang-javascript";

type PlaygroundProps = {
	
};

const Playground: React.FC<PlaygroundProps> = () => {

    return (
		<div className='flex flex-col bg-dark-layer-1 relative overflow-x-hidden'>
			<PreferenceNav />

			<Split className='h-[calc(100vh-94px)]' direction='vertical' sizes={[60, 40]} minSize={60}>
				<div className='w-full overflow-auto'>
					<CodeMirror
						value='int a = 1;'
						theme={vscodeDark}
						extensions={[javascript()]}
						style={{ fontSize: 16}}
					/>
				</div>
                <div className='w-full px-5 overflow-auto'>
					{/* testcase heading */}
					<div className='flex h-10 items-center space-x-6'>
						<div className='relative flex h-full flex-col justify-center cursor-pointer'>
							<div className='text-sm font-mono leading-5 text-white'>Testcases</div>
							<hr className='absolute bottom-0 h-0.5 w-full rounded-full border-none bg-white' />
						</div>
					</div>
				<div className='font-mono my-4'>
						<p className='text-sm font-mono mt-4 text-white'>Input:</p>
						<div className='w-full cursor-text rounded-lg border px-3 py-[10px] bg-dark-fill-3 border-transparent text-white mt-2'>
						</div>
						<p className='text-sm font-mono mt-4 text-white'>Output:</p>
						<div className='w-full cursor-text rounded-lg border px-3 py-[10px] bg-dark-fill-3 border-transparent text-white mt-2'>
						</div>
					</div>
					</div>
			</Split>
            <div className='absolute bottom-4 right-4'>
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-mono font-bold py-2 px-4 rounded'>
                    Submit
                </button>
            </div>
		</div>
	);
};
export default Playground;