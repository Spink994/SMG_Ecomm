import { forwardRef, HTMLAttributes } from 'react';
import { cn } from '@/utils/tailwindMerge';

interface DisplayCardProps extends HTMLAttributes<HTMLDivElement> {
	imageSrc?: string;
	altLabel?: string;
	buttonLabel?: string;
	productDescription?: string;
	productPrice?: string;
	noButton?: boolean;
	disableSelection?: boolean;
}

export default forwardRef<HTMLDivElement, DisplayCardProps>(function DisplayCard(
	{
		imageSrc,
		altLabel,
		productDescription,
		productPrice,
		noButton,
		buttonLabel,
		className,
		children,
		disableSelection,
		...props
	},
	ref
) {
	return (
		<div
			{...props} // this is for any other property or properties that isn't destructured above
			className={cn('relative flex flex-col justify-between', className)}
			ref={ref}
		>
			{/* The image section of the product card - only shows
        when you pass in the imageSrc to the DisplayCard */}
			{imageSrc && (
				<div className='mb-2 w-full max-w-full overflow-hidden rounded-[16px] border border-[#F1F4F4] bg-gradOne px-1 sm:!h-[180px] [@media(min-width:_360px)]:h-[100px]'>
					<img
						className='h-full w-full object-contain mix-blend-multiply'
						src={imageSrc}
						alt={altLabel ?? 'product-picture'}
					/>
				</div>
			)}

			{/* children - to show your own custom component, will o
        verride the in house product information component if supplied */}
			{children ?? (
				// In house display card product information component -
				// only shows when there is no children supplied to the DisplayCard
				<div className='flex w-full flex-col gap-1'>
					<p className='text-gray-6 my-1 mr-3 line-clamp-2 w-full !text-xs font-light leading-4 sm:!text-sm [@media(min-width:_354px)]:!text-xs'>
						{productDescription ?? 'Self Made Zip Through Hoodie - Green'}
					</p>
					<div className='flex flex-wrap items-center gap-1 gap-y-2'>
						<span className='text-gray-6 text-sm font-light leading-4 sm:!text-sm [@media(min-width:_354px)]:text-xs'>
							₦ {productPrice ?? '100,000'}
						</span>
					</div>
				</div>
			)}

			{/* Overlay */}
			{disableSelection ? (
				<div className='absolute inset-0 flex items-center justify-center rounded bg-black/30 backdrop-blur-sm'>
					<p className='text-center text-xl font-bold text-white'>In cart!</p>
				</div>
			) : null}
		</div>
	);
});
