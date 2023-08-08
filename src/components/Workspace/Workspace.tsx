import { useState } from "react";
import Split from "react-split";
import ProblemDescription from "./ProblemDescription/ProblemDescription";


type WorkspaceProps = {
	
};

const Workspace: React.FC<WorkspaceProps> = () => {
	//const { width, height } = useWindowSize();
	//const [success, setSuccess] = useState(false);
	//const [solved, setSolved] = useState(false);

    return (
		<Split className='split' minSize={0}>
			<ProblemDescription />
			<div className='bg-dark-fill-2'>
				code editor will go here
			</div>
		</Split>
	);
};
export default Workspace;