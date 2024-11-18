import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutMePage from './pages/AboutMePage';
import ExperiencePage from './pages/ExperiencePage';
import ContactPage from './pages/ContactPage';
import MenuCustom from './components/ui/MenuCustom';

const App: React.FC = () => {
	return (
		<div className='bg-slate-700 min-h-screen w-screen overscroll-y-auto'>
			<MenuCustom />
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/about' element={<AboutMePage />} />
				<Route path='/experience' element={<ExperiencePage />} />
				<Route path='/contact' element={<ContactPage />} />
			</Routes>
		</div>
	);
};

export default App;