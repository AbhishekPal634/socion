import React from 'react';
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from 'react-router-dom';
import Navbar from './components/Navbar';
import TwitterPage from './pages/TwitterPage';
import InstagramPage from './pages/InstagramPage';
import HomePage from './pages/HomePage';
import { ThemeProvider } from './components/Theme';

const App = () => {
	return (
		<ThemeProvider>
			<Router>
				<div className='flex-col min-h-screen w-full'>
					<Navbar />
					<Routes>
						<Route
							path='/'
							element={
								<div className='min-h-screen bg-gray-50 w-full'>
									<HomePage />
								</div>
							}
						/>
						<Route
							path='/twitterstats'
							element={
								<div className='flex min-h-screen bg-gray-50 w-full mt-16'>
									<TwitterPage />
								</div>
							}
						/>
						<Route
							path='/instagramstats'
							element={
								<div className='flex min-h-screen bg-gray-50 w-full mt-16'>
									<InstagramPage />
								</div>
							}
						/>
					</Routes>
				</div>
			</Router>
		</ThemeProvider>
	);
};

export default App;
