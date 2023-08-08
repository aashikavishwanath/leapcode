import { useState } from "react";
import Split from "react-split";
import ProblemDescription from "./ProblemDescription/ProblemDescription";
import Playground from "./Playground/Playground";


type WorkspaceProps = {
	
};

const Workspace: React.FC<WorkspaceProps> = () => {
	//const { width, height } = useWindowSize();
	//const [success, setSuccess] = useState(false);
	//const [solved, setSolved] = useState(false);

    return (
		<Split className='split' minSize={0}>
			<ProblemDescription />
			<Playground />
		</Split>
	);
};
export default Workspace;