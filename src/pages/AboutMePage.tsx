import React from 'react';

const AboutMePage: React.FC = () => {
	return (
		<div className='w-full min-h-screen bg-gray-800 pt-16'>
			<div className='mx-4 md:mx-36 p-4 md:p-12'>
				<h1 className='text-3xl md:text-5xl font-bold text-white mb-4'>
					About Me
				</h1>
				<p className='text-base md:text-xl text-gray-300'>
					[Your about me content goes here.]
				</p>
			</div>
		</div>
	);
};

export default AboutMePage;
