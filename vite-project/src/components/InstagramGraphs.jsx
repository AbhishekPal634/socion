import { GraphCard } from './Graphcard';
import instagramData from '../../public/instagram.json';
import DotPattern from './DotPattern';

const instagram = instagramData.map(post => ({
	time: new Date(post.timestamp).toLocaleDateString('en-US', {
		month: '2-digit',
		year: 'numeric',
	}),
	likes: post.likes_count,
	views: post.Reel_view_count,
	duration: post.Reel_duration,
	comments: post.commentsCount,
	plays: post.Reel_play_count,
	type: post.type,
	sponsored: post.is_sponsored,
}));

export function InstagramData() {
	const metrics = [
		{
			title: 'Likes & Comments',
			metrics: ['likes', 'comments'],
			colors: ['#3b82f6', '#f59e0b'],
		},
		{
			title: 'Likes & Views',
			metrics: ['likes', 'views'],
			colors: ['#3b82f6', '#10b981'],
		},
		{
			title: 'Likes & Plays',
			metrics: ['likes', 'plays'],
			colors: ['#3b82f6', '#6366f1'],
		},
		{
			title: 'duration & Comments',
			metrics: ['duration', 'comments'],
			colors: ['#3b82f6', '#e11d48'],
		},
		{
			title: 'Views & Comments',
			metrics: ['views', 'comments'],
			colors: ['#10b981', '#f59e0b'],
		},
		{
			title: 'Views & Plays',
			metrics: ['views', 'plays'],
			colors: ['#10b981', '#6366f1'],
		},
	];

	return (
		<div className='grid grid-cols-1 gap-4 bg-gray-50'>
			<DotPattern className='bg-background' />
			{metrics.map((item, idx) => (
				<GraphCard
					key={idx}
					title={item.title}
					dataSet={instagram}
					metrics={item.metrics}
					colors={item.colors}
					interval='2'
				/>
			))}
		</div>
	);
}
