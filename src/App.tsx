import React from 'react';

// Define the props for InfoPage
interface InfoPageProps {}

// InfoPage component
const InfoPage: React.FC<InfoPageProps> = () => {
	return <div className='bg-gray-800 w-full h-screen pt-16'>home</div>;
};

// Define the props for App (if needed)
interface AppProps {}

const App: React.FC<AppProps> = () => {
	return (
		<div className='bg-slate-700 min-h-screen w-screen overscroll-y-auto'>
			<div className='bg-transparent w-full h-16 fixed top-0 z-10'>
				menu
			</div>
			<InfoPage />
		</div>
	);
};

export default App;
