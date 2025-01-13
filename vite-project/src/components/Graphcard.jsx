import {
	AreaChart,
	Area,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
} from 'recharts';
import { CardBody, CardContainer, CardItem } from './3d-card.jsx';
import BoxReveal from './BoxReveal.jsx';
import Meteors from './Meteors.jsx';

export const GraphCard = ({
	title,
	dataSet,
	metrics,
	colors,
	interval = '1',
}) => {
	const intervalValue = Number(interval);

	return (
		<CardContainer className='inter-var w-full h-full flex'>
			<CardBody
				className='
                bg-white/10 dark:bg-black
                backdrop-blur-2xl backdrop-filter 
                border border-white dark:border-white/100
                shadow-xl hover:shadow-2xl 
                transition-all duration-300 
                dark:hover:shadow-emerald-500/[0.15] 
                w-full h-auto 
                rounded-xl p-6 
                hover:bg-white/15 dark:hover:bg-black/15
                before:absolute before:inset-0 before:bg-gradient-to-b before:from-white/5 before:to-transparent before:rounded-xl
                relative overflow-hidden'>
				<CardItem className='text-xl font-bold text-neutral-white/500 dark:text-white relative z-10'>
					<BoxReveal boxColor={'black'} duration={0.5}>
						{title}
						<div className='flex gap-6'>
							{metrics.map((metric, idx) => (
								<span
									key={metric}
									className='flex items-center text-xs'>
									<div
										className={`w-2 h-2 rounded-full mr-2`}
										style={{ backgroundColor: colors[idx] }}></div>
									<span className='text-gray-600'>{metric}</span>
								</span>
							))}
						</div>
					</BoxReveal>
				</CardItem>
				<ChartCard>
					<AreaChart
						data={dataSet.filter(
							(_, index) => index % intervalValue === 0
						)}>
						<defs>
							{colors.map((color, idx) => (
								<linearGradient
									key={idx}
									id={`gradient${idx}`}
									x1='0'
									y1='0'
									x2='0'
									y2='1'>
									<stop
										offset='5%'
										stopColor={color}
										stopOpacity={0.3}
									/>
									<stop
										offset='95%'
										stopColor={color}
										stopOpacity={0}
									/>
								</linearGradient>
							))}
						</defs>
						<CartesianGrid strokeDasharray='3 3' stroke='#e5e7eb' />
						<XAxis
							dataKey='time'
							stroke='#9ca3af'
							tick={{ fill: '#6b7280', fontSize: 10 }}
							axisLine={{ stroke: '#d1d5db' }}
						/>
						<YAxis
							stroke='#9ca3af'
							tick={{ fill: '#6b7280', fontSize: 10 }}
							axisLine={{ stroke: '#d1d5db' }}
							tickFormatter={val => val.toLocaleString()}
						/>
						<Tooltip />
						{metrics.map((metric, idx) => (
							<Area
								key={metric}
								type='monotone'
								dataKey={metric.toLowerCase()}
								stroke={colors[idx]}
								fillOpacity={1}
								fill={`url(#gradient${idx})`}
							/>
						))}
					</AreaChart>
				</ChartCard>
			</CardBody>
		</CardContainer>
	);
};
// Chart Card Component
export const ChartCard = ({ title, children }) => (
	<div
		className='
        bg-white/500 dark:bg-black/500
        backdrop-blur-2xl backdrop-filter
        border border-white/500 dark:border-white/300
        transition-all duration-300 ease-in-out
        rounded-xl
        hover:bg-white/30 dark:hover:bg-black/500
        ring-1 ring-white/50 dark:ring-white/500
        before:absolute before:inset-0 
        before:bg-gradient-to-br before:from-white/30 before:via-white/10 before:to-transparent
        after:absolute after:inset-0 
        after:bg-gradient-to-tr after:from-transparent after:via-white/10 after:to-white/30
        relative overflow-hidden group
    '>
		<h3 className='text-lg font-semibold mb-4 text-blue dark:text-white/90 relative z-10'>
			{title}
		</h3>
		<div
			className='h-64 bg-white/500 dark:bg-white/500 rounded-lg p-2 shadow-inner relative z-10 
             backdrop-blur-md group-hover:bg-white/500 transition-colors duration-300'>
			<ResponsiveContainer width='100%' height='100%'>
				{children}
			</ResponsiveContainer>
		</div>
	</div>
);
