import { cn } from '@/utils/tailwindMerge';

type ContentWrapperProps = {
	children: React.ReactNode;
	className?: string;
};

export default function ContentWrapper({ children, className }: ContentWrapperProps) {
	return (
		<section className={cn('mx-auto w-full h-full max-w-[1920px] px-[4%]', className)}>
			{children}
		</section>
	);
}
