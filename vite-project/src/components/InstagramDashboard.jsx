import { InstagramData } from './InstagramGraphs.jsx';

// Main Dashboard Layout
const InstagramDashboard = () => {
	return (
		<div className=' relative min-h-screen border-white overflow-hidden'>
			<div className='p-6 overflow-y-auto'>
				<InstagramData />
			</div>
		</div>
	);
};

export default InstagramDashboard;
