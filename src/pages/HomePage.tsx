import React from 'react';

const HomePage: React.FC = () => {
	return (
		<div className='w-full min-h-screen bg-gray-800'>
			<div className='min-h-screen mx-4 md:mx-36 border border-blue-500 p-4 md:p-12 flex flex-col md:flex-row items-center pt-16'>
				{/* Left Side */}
				<div className='w-full md:w-1/2 mb-8 md:mb-0'>
					<h1 className='text-3xl md:text-5xl font-bold text-white mb-4'>
						Hi, I'm Madison
					</h1>
					<p className='text-base md:text-xl text-gray-300'>
						I'm a software engineer with a love of problem solving
						and a passion for building AI products.
					</p>
				</div>
				{/* Right Side */}
				<div className='w-full md:w-1/2 flex justify-center items-center'>
					<img
						className='w-64 h-64 md:w-96 md:h-96'
						src=''
						alt='Profile'
					/>
				</div>
			</div>
		</div>
	);
};

export default HomePage;
