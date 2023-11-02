import { InputHTMLAttributes, ReactNode, useState } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	className?: string;
	prefixIcon?: ReactNode;
	suffixIcon?: ReactNode;
}

export default function Input({
	className = '',
	prefixIcon,
	suffixIcon,
	type,
	...rest
}: InputProps) {
	const [togglePassword, setTogglePassword] = useState('password');
	return (
		<div className='group flex items-stretch'>
			<input
				type={type === 'password' ? togglePassword : type}
				className={`${className} bg-gray-1 focus:border-primary-6 group-hover:border-primary-6 peer w-full focus:outline-none ${
					prefixIcon ? 'rounded-r-lg border-l-0' : 'rounded-l-lg'
				} ${suffixIcon ? 'rounded-r-none border-r-0' : 'rounded-r-lg'}`}
				{...rest}
			/>
			{prefixIcon && (
				<div className='bg-gray-1 group-hover:border-primary-6 peer-focus:border-primary-6 order-first inline-flex items-center rounded-xl rounded-r-none border border-r-0 p-[14px]'>
					{prefixIcon}
				</div>
			)}
			{suffixIcon && (
				<button
					type='button'
					onClick={() => {
						setTogglePassword(togglePassword === 'text' ? 'password' : 'text');
					}}
					className='bg-gray-1  group-hover:border-primary-6 peer-focus:border-primary-6 inline-flex items-center rounded-xl rounded-l-none border border-l-0 border-r p-[14px]'
				>
					{suffixIcon}
				</button>
			)}
		</div>
	);
}
