import React from 'react';
import Navbar from '../components/Navbar.jsx';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
	HeroHighlight,
	Highlight,
} from '../components/hero-highlight.jsx';
import { TextAnimate } from '../components/text-animate';
import WordRotate from '../components/word-rotate';
import {
	CardBody,
	CardContainer,
	CardItem,
} from '../components/3d-card.jsx';
import { IconBrandX, IconBrandInstagram } from '@tabler/icons-react';
import InteractiveHoverButton from '../components/interactive-hover-button';

const HomePage = () => {
	return (
		<div className='min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-black dark:to-gray-800 relative overflow-hidden'>
			{/* Grid Background */}
			<div className='absolute inset-0 bg-[linear-gradient(to_right,#e5e5e52e_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e52e_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]' />

			{/* Fixed Navbar */}
			<div className='absolute top-0 left-0 right-0 z-50'>
				<Navbar />
			</div>

			{/* Main Content */}
			<div className='relative z-10 pt-10'>
				<HeroHighlight>
					<motion.h1
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: [20, -5, 0] }}
						transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
						className='text-2xl pt-32 px-2 md:text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white max-w-full leading-relaxed lg:leading-snug text-center mx-auto'>
						Welcome to{' '}
						<Highlight className='text-white'>Socion</Highlight>
					</motion.h1>
				</HeroHighlight>
			</div>
			<div className='flex justify-center items-center mt-8'>
				<TextAnimate
					animation='blurInUp'
					by='character'
					className='text-lg md:text-xl lg:text-lg text-gray-800 dark:text-white text-center max-w-96'>
					Analyze Data From
				</TextAnimate>
				{'   '}
				<WordRotate
					className='text-2xl font-bold text-gray-900 dark:text-white px-4'
					words={['Instagram', 'X (Twitter)']}
				/>
			</div>
			<div className='flex flex-col md:flex-row justify-center items-center gap-8 mt-8 px-4 md:px-12 mx-auto'>
				<CardContainer className='inter-var w-full'>
					<CardBody
						className='
                        bg-white/80 dark:bg-white/10
                        backdrop-blur-2xl backdrop-filter
                        border border-gray-200 dark:border-white/10
                        shadow-lg hover:shadow-xl
                        transition-all duration-300
                        hover:shadow-blue-500/[0.1] dark:hover:shadow-emerald-500/[0.15]
                        w-full sm:w-[30rem] h-auto
                        rounded-xl p-6
                        hover:bg-white/90 dark:hover:bg-black/15
                        before:absolute before:inset-0 before:bg-gradient-to-b before:from-blue-50/5 dark:before:from-white/5 before:to-transparent before:rounded-xl
                        relative overflow-hidden'>
						<CardItem
							translateZ='50'
							className='flex text-xl font-bold text-gray-900 dark:text-white'>
							<IconBrandInstagram />
							Instagram
						</CardItem>
						<CardItem
							as='p'
							translateZ='60'
							className='text-gray-700 dark:text-neutral-300 text-sm max-w-sm mt-2'>
							Uncover key statistics from Instagram posts. Analyze
							engagement, reach, and audience demographics to optimize
							your social media strategy
						</CardItem>
						<div className='flex justify-between items-center mt-10'>
							<CardItem
								translateZ={20}
								className='px-4 py-2 rounded-xl text-xs font-normal'>
								<div className='relative justify-center'>
									<Link to='/instagramstats'>
										<InteractiveHoverButton text='Try now →' />
									</Link>
								</div>
							</CardItem>
						</div>
					</CardBody>
				</CardContainer>

				{/* Similar updates for the Twitter card... */}
				<CardContainer className='inter-var w-full'>
					<CardBody
						className='
                        bg-white/80 dark:bg-white/10
                        backdrop-blur-2xl backdrop-filter
                        border border-gray-200 dark:border-white/10
                        shadow-lg hover:shadow-xl
                        transition-all duration-300
                        hover:shadow-blue-500/[0.1] dark:hover:shadow-emerald-500/[0.15]
                        w-auto sm:w-[30rem] h-auto
                        rounded-xl p-6
                        hover:bg-white/90 dark:hover:bg-black/15
                        before:absolute before:inset-0 before:bg-gradient-to-b before:from-blue-50/5 dark:before:from-white/5 before:to-transparent before:rounded-xl
                        relative overflow-hidden'>
						<CardItem
							translateZ='50'
							className='flex text-xl font-bold text-gray-900 dark:text-white'>
							<IconBrandX />
							(Twitter)
						</CardItem>
						<CardItem
							as='p'
							translateZ='60'
							className='text-gray-700 dark:text-neutral-300 text-sm max-w-sm mt-2'>
							Gain valuable insights through statistical analysis of X
							posts. Track key metrics like impressions, engagement
							rates, and sentiment to inform your social media
							decisions
						</CardItem>
						<div className='flex justify-between items-center mt-5'>
							<CardItem
								translateZ={20}
								className='px-4 py-2 rounded-xl text-xs font-normal'>
								<div className='relative justify-center'>
									<Link to='/twitterstats'>
										<InteractiveHoverButton text='Try now →' />
									</Link>
								</div>
							</CardItem>
						</div>
					</CardBody>
				</CardContainer>
			</div>
		</div>
	);
};

export default HomePage;

// import React, { useState } from 'react';
// import Navbar from '../components/Navbar.jsx';
// import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import {
// 	HeroHighlight,
// 	Highlight,
// } from '../components/hero-highlight.jsx';
// import { TextAnimate } from '../components/text-animate';
// import WordRotate from '../components/word-rotate';
// import {
// 	CardBody,
// 	CardContainer,
// 	CardItem,
// } from '../components/3d-card.jsx';
// import { IconBrandX, IconBrandInstagram } from '@tabler/icons-react';
// import InteractiveHoverButton from '../components/interactive-hover-button';

// const HomePage = () => {
// 	return (
// 		<div className='min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 relative overflow-hidden'>
// 			{/* Grid Background */}
// 			<div className='absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]' />

// 			{/* Fixed Navbar */}
// 			<div className='fixed top-0 left-0 right-0 z-50'>
// 				<Navbar />
// 			</div>

// 			{/* Main Content */}
// 			<div className='relative z-10 pt-10'>
// 				<HeroHighlight>
// 					<motion.h1
// 						initial={{ opacity: 0, y: 20 }}
// 						animate={{ opacity: 1, y: [20, -5, 0] }}
// 						transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
// 						className='text-2xl pt-32 px-2 md:text-4xl lg:text-6xl font-bold text-white max-w-full leading-relaxed lg:leading-snug text-center mx-auto'>
// 						Welcome to{' '}
// 						<Highlight className='text-white'>Socion</Highlight>
// 					</motion.h1>
// 				</HeroHighlight>
// 			</div>
// 			<div className='flex justify-center items-center mt-8'>
// 				<TextAnimate
// 					animation='blurInUp'
// 					by='character'
// 					className='text-lg md:text-xl lg:text-lg text-white text-center max-w-96'>
// 					Analyze Data From
// 				</TextAnimate>
// 				{'   '}
// 				<WordRotate
// 					className='text-2xl font-bold text-white dark:text-white px-4'
// 					words={['Instagram', 'X (Twitter)']}
// 				/>
// 			</div>
// 			<div className='flex flex-col md:flex-row justify-center items-center gap-8 mt-8 px-4 md:px-12 mx-auto'>
// 				<CardContainer className='inter-var w-full'>
// 					<CardBody
// 						className='
//                         bg-white/10 dark:bg-black/10
//                         backdrop-blur-2xl backdrop-filter
//                         border border-white/10 dark:border-white/10
//                         shadow-xl hover:shadow-2xl
//                         transition-all duration-300
//                         dark:hover:shadow-emerald-500/[0.15]
//                         w-full sm:w-[30rem] h-auto
//                         rounded-xl p-6
//                         hover:bg-white/15 dark:hover:bg-black/15
//                         before:absolute before:inset-0 before:bg-gradient-to-b before:from-white/5 before:to-transparent before:rounded-xl
//                         relative overflow-hidden'>
// 						<CardItem
// 							translateZ='50'
// 							className='flex text-xl font-bold text-white'>
// 							<IconBrandInstagram />
// 							Instagram
// 						</CardItem>
// 						<CardItem
// 							as='p'
// 							translateZ='60'
// 							className='text-white text-sm max-w-sm mt-2 dark:text-neutral-300'>
// 							Uncover key statistics from Instagram posts. Analyze
// 							engagement, reach, and audience demographics to optimize
// 							your social media strategy
// 						</CardItem>
// 						<div className='flex justify-between items-center mt-10'>
// 							<CardItem
// 								translateZ={20}
// 								href='#'
// 								target='__blank'
// 								className='px-4 py-2 rounded-xl text-xs font-normal text-white'>
// 								<div className='relative justify-center'>
// 									<Link to='/instagramstats'>
// 										<InteractiveHoverButton text='Try now →' />
// 									</Link>
// 								</div>
// 							</CardItem>
// 						</div>
// 					</CardBody>
// 				</CardContainer>
// 				<CardContainer className='inter-var w-full'>
// 					<CardBody
// 						className='
//                         bg-white/10 dark:bg-black/10
//                         backdrop-blur-2xl backdrop-filter
//                         border border-white/10 dark:border-white/10
//                         shadow-xl hover:shadow-2xl
//                         transition-all duration-300
//                         dark:hover:shadow-emerald-500/[0.15]
//                         w-auto sm:w-[30rem] h-auto
//                         rounded-xl p-6
//                         hover:bg-white/15 dark:hover:bg-black/15
//                         before:absolute before:inset-0 before:bg-gradient-to-b before:from-white/5 before:to-transparent before:rounded-xl
//                         relative overflow-hidden'>
// 						<CardItem
// 							translateZ='50'
// 							className='flex text-xl font-bold text-white'>
// 							<IconBrandX /> (Twitter)
// 						</CardItem>
// 						<CardItem
// 							as='p'
// 							translateZ='60'
// 							className='text-white text-sm max-w-sm mt-2 dark:text-neutral-300'>
// 							Gain valuable insights through statistical analysis of X
// 							posts. Track key metrics like impressions, engagement
// 							rates, and sentiment to inform your social media
// 							decisions
// 						</CardItem>
// 						<div className='flex justify-between items-center mt-5'>
// 							<CardItem
// 								translateZ={20}
// 								href='#'
// 								target='__blank'
// 								className='px-4 py-2 rounded-xl text-xs font-normal text-white'>
// 								<div className='relative justify-center'>
// 									<Link to='/twitterstats'>
// 										<InteractiveHoverButton text='Try now →' />
// 									</Link>
// 								</div>
// 							</CardItem>
// 						</div>
// 					</CardBody>
// 				</CardContainer>
// 			</div>
// 		</div>
// 	);
// };

// export default HomePage;
