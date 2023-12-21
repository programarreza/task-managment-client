import { Link } from "react-router-dom";
import { BsClipboardPlusFill } from "react-icons/bs";

const Dashboard = () => {
	return (
		<div className="px-24 pt-16">
		<div className="flex justify-end">
			<Link to="/create_task">
			<button className="flex  items-center gap-1 border px-1.5 py-1 rounded-md bg-[#61adff] hover:bg-[#006ce1] text-white font-semibold"><BsClipboardPlusFill />Create Task</button>
			</Link>
			</div>		
		</div>
	);
};

export default Dashboard;