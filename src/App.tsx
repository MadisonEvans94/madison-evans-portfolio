import React from 'react';
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from './components/ui/drawer';
import { Button } from './components/ui/button';

// InfoPage Component
const InfoPage: React.FC = () => {
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
						className='w-64 h-64 md:w-96 md:h-96 bg-green-400'
						src=''
						alt='Profile'
					/>
				</div>
			</div>
		</div>
	);
};

// App Component
const App: React.FC = () => {
	return (
		<div className='bg-slate-700 min-h-screen w-screen overscroll-y-auto'>
			<Menu />
			<InfoPage />
		</div>
	);
};

export default App;

// Updated Menu Component
const Menu: React.FC = () => {
	return (
		<header className='fixed top-0 z-10 w-full bg-transparent border-b border-blue-500'>
			<div className='flex items-center justify-between h-16 px-4'>
				<span className='text-xl font-bold text-white'>My Website</span>
				{/* Mobile and Tablet Menu (Drawer) */}
				<Drawer>
					<DrawerTrigger asChild>
						<Button
							variant='ghost'
							className='text-white md:hidden'
						>
							Menu
						</Button>
					</DrawerTrigger>
					<DrawerContent className='bg-white'>
						<DrawerHeader>
							<DrawerTitle>Navigation</DrawerTitle>
						</DrawerHeader>
						<div className='flex flex-col space-y-2 p-4'>
							<Button
								variant='ghost'
								className='justify-start w-full text-left'
							>
								Home
							</Button>
							<Button
								variant='ghost'
								className='justify-start w-full text-left'
							>
								About Me
							</Button>
							<Button
								variant='ghost'
								className='justify-start w-full text-left'
							>
								Experience
							</Button>
							<Button
								variant='ghost'
								className='justify-start w-full text-left'
							>
								Contact
							</Button>
						</div>
						<DrawerFooter>
							<DrawerClose asChild>
								<Button variant='outline' className='w-full'>
									Close
								</Button>
							</DrawerClose>
						</DrawerFooter>
					</DrawerContent>
				</Drawer>
				{/* Desktop and Laptop Menu */}
				<nav className='hidden md:flex space-x-4'>
					<Button variant='ghost' className='text-white'>
						Home
					</Button>
					<Button variant='ghost' className='text-white'>
						About Me
					</Button>
					<Button variant='ghost' className='text-white'>
						Experience
					</Button>
					<Button variant='ghost' className='text-white'>
						Contact
					</Button>
				</nav>
			</div>
		</header>
	);
};
