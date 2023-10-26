import React from 'react';

export default function useHeroAnimateHook<TData>({ IMAGE_DATA }: { IMAGE_DATA: TData[] }) {
	const [imageIndex, setImageIndex] = React.useState(0);
	const [intervalTime, setIntervalTime] = React.useState(100);
	const [animationState, setAnimationState] = React.useState<'fadein' | 'fadeout' | 'neutral'>(
		'neutral'
	);

	React.useEffect(() => {
		const startAnimation = setInterval(() => {
			if (imageIndex >= IMAGE_DATA.length - 1) {
				setImageIndex(0);
				setIntervalTime(100);
			} else {
				setTimeout(() => {
					setAnimationState('fadein');
				}, 100);

				setImageIndex((prevIndex) => prevIndex + 1);
				setIntervalTime(5000);

				setTimeout(() => {
					setAnimationState('fadeout');
					setTimeout(() => {
						setAnimationState('neutral');
					}, 200);
				}, 4700);
			}
		}, intervalTime);

		return () => {
			clearInterval(startAnimation);
		};
	}, [imageIndex]);

	return { animationState, imageIndex };
}
