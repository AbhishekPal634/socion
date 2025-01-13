import twitterData from '../../public/twitter.json';
import { GraphCard } from './Graphcard';
import DotPattern from './DotPattern';

const twitter = twitterData.data.map(tweet => ({
	time: new Date(tweet.created_at).toLocaleDateString('en-US', {
		month: '2-digit',
		year: 'numeric',
	}),
	likes: tweet.public_metrics.like_count,
	replies: tweet.public_metrics.reply_count,
	impressions: tweet.public_metrics.impression_count,
	retweets: tweet.public_metrics.retweet_count,
	bookmarks: tweet.public_metrics.bookmark_count,
}));

export function TwitterData() {
	const metrics = [
		{
			title: 'Engagement Metrics',
			metrics: ['Likes', 'Replies'],
			colors: ['#3b82f6', '#f59e0b'],
		},
		{
			title: 'Reach Overview',
			metrics: ['Likes', 'Impressions'],
			colors: ['#3b82f6', '#10b981'],
		},
		{
			title: 'Sharing Activity',
			metrics: ['Likes', 'Retweets'],
			colors: ['#3b82f6', '#6366f1'],
		},
		{
			title: 'Content Saves',
			metrics: ['Likes', 'Bookmarks'],
			colors: ['#3b82f6', '#e11d48'],
		},
		{
			title: 'Interaction Rate',
			metrics: ['Impressions', 'Replies'],
			colors: ['#10b981', '#f59e0b'],
		},
		{
			title: 'Virality Metrics',
			metrics: ['Impressions', 'Retweets'],
			colors: ['#10b981', '#6366f1'],
		},
	];

	return (
		<div className='grid grid-cols-1 gap-4 bg-gray-5'>
			<DotPattern className='bg-background' />
			{metrics.map((item, idx) => (
				<GraphCard
					key={idx}
					title={item.title}
					dataSet={twitter}
					metrics={item.metrics}
					colors={item.colors}
					interval='5'
				/>
			))}
		</div>
	);
}
