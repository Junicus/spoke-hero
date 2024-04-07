import {useState} from 'react';

interface SpokeHeroData {
	title: string;
	description: string;
}

interface SpokeHeroProps {
	wheelRadius: number,
	spokeRadius: number,
	padding: number,
	data: SpokeHeroData[]
}

function calculatePos(radius: number, angle: number) {
	angle = (angle - 90) * Math.PI / 180;
	return {
		x: Math.round(radius * Math.cos(angle)),
		y: Math.round(radius * Math.sin(angle))
	}
}

function SpokeHero({wheelRadius, spokeRadius, padding = 20, data}: SpokeHeroProps) {
	const [spokeOver, setSpokeOver] = useState(0);
	const heroSize = (wheelRadius + spokeRadius + padding) * 2
	const sliceDistanceAngle = data.length == 0 ? 0 : 360 / data.length
	return (
		<div style={{width: heroSize, height: heroSize}} className="relative bg-amber-200">
			{data.map((entry, i) => {
				const spokePosition = calculatePos(wheelRadius, sliceDistanceAngle * i);
				return <div
					key={i}
					style={{
						left: spokePosition.x + wheelRadius + padding,
						top: spokePosition.y + wheelRadius + padding,
						width: spokeRadius * 2,
						height: spokeRadius * 2
					}}
					className="rounded-full flex flex-col items-center justify-center bg-blue-400 absolute"
					onMouseEnter={() => setSpokeOver(i)}>{entry.title}</div>
			})}
			<div>
				{data.map((entry, i) => {
					return <div key={i}
								className="bg-green-400 absolute flex justify-center items-center rounded-md transition-all ease-in-out duration-300 opacity-0"
								style={{
									left: wheelRadius + padding + spokeRadius - 150 / 2,
									top: wheelRadius + padding + spokeRadius - 150 / 2,
									width: 150,
									height: 150,
									opacity: spokeOver === i ? 1 : 0
								}}>{entry.description}</div>
				})}
			</div>
		</div>
	)
}

export default SpokeHero