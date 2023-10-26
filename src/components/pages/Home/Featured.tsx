export default function Featured() {
	return (
		<div className='grid [@media(min-width:1170px)]:grid-cols-3'>
			<div className='flex min-h-[650px] flex-col justify-between bg-zinc-900'>
				{/* Title header */}
				<h1 className='py-8 text-center text-4xl font-bold text-white'>Smart TV</h1>

				{/* Product images */}
				<div className='flex w-full flex-col items-center justify-center gap-6 p-6'>
					<div className='flex w-full gap-6'>
						<div className='flex h-full w-full items-center justify-center rounded bg-white/90'>
							<img
								src='https://cdn.sanity.io/images/iamp3nwv/production/03f03939b74c8553504a41404fa4b9ceea2b9fd2-425x425.jpg'
								alt='hp laptop'
								className='max-h-full max-w-full mix-blend-multiply'
							/>
						</div>
					</div>
				</div>
			</div>

			<div className='flex min-h-[650px] flex-col items-center justify-between bg-slate-100'>
				{/* Title header */}
				<h1 className='py-8 text-center text-4xl font-bold text-zinc-900'>Phone</h1>

				{/* Product images */}
				<div className='flex justify-center gap-6 p-6'>
					<div className='flex h-full w-full items-center rounded bg-white/10'>
						<img
							src='https://cdn.sanity.io/images/iamp3nwv/production/86ca1283278d65157a072a79daa0075a97a82278-500x500.jpg'
							alt='samsung phone'
							className='mix-blend-multiply'
						/>
					</div>
				</div>
			</div>

			<div className='flex min-h-[650px] flex-col justify-between bg-zinc-900'>
				{/* Title header */}
				<h1 className='py-8 text-center text-4xl font-bold text-zinc-100'>Electronics</h1>

				{/* Product images */}
				<div className='flex flex-wrap justify-center gap-6 p-6'>
					<div className='flex h-full w-full items-center justify-center rounded bg-white'>
						<img
							src='https://cdn.sanity.io/images/iamp3nwv/production/beedc81be0392f2e1847a82e9c65dee66b7bd17f-448x449.webp'
							alt='Fridge'
							className='mix-blend-multiply'
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
