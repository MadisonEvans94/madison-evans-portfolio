import React from 'react';
import { Link } from 'react-router-dom';
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from './drawer';
import { Button } from './button';

const Menu: React.FC = () => {
	return (
		<header className='fixed top-0 z-10 w-full bg-transparent border-b border-blue-500'>
			<div className='flex items-center justify-between h-16 px-4'>
				<Link to='/' className='text-xl font-bold text-white'>
					My Website
				</Link>
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
							<DrawerClose asChild>
								<Link
									to='/'
									className='justify-start w-full text-left text-black'
								>
									Home
								</Link>
							</DrawerClose>
							<DrawerClose asChild>
								<Link
									to='/about'
									className='justify-start w-full text-left text-black'
								>
									About Me
								</Link>
							</DrawerClose>
							<DrawerClose asChild>
								<Link
									to='/experience'
									className='justify-start w-full text-left text-black'
								>
									Experience
								</Link>
							</DrawerClose>
							<DrawerClose asChild>
								<Link
									to='/contact'
									className='justify-start w-full text-left text-black'
								>
									Contact
								</Link>
							</DrawerClose>
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
					<Link to='/' className='text-white hover:underline'>
						Home
					</Link>
					<Link to='/about' className='text-white hover:underline'>
						About Me
					</Link>
					<Link
						to='/experience'
						className='text-white hover:underline'
					>
						Experience
					</Link>
					<Link to='/contact' className='text-white hover:underline'>
						Contact
					</Link>
				</nav>
			</div>
		</header>
	);
};

export default Menu;
