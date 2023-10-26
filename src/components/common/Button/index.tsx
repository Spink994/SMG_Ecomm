import { ButtonHTMLAttributes, FC, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
	className?: string;
	variant?: string;
	size?: string;
}

const Button: FC<ButtonProps> = ({
	children,
	className = "",
	variant = "primary",
	size = "md",
	...rest
}) => {
	const variants: Record<string, string> = {
		primary: "bg-primary-#003C3B text-primary-#EBFAFA",
		light: "bg-gray-#F6FAFD text-primary-#001514",
	};

	const sizes: Record<string, string> = {
		lg: "py-4 px-5 text-base rounded-xl",
		md: "py-3 px-3 text-sm rounded-lg",
	};

	return (
		<button
			className={`${className} ${variants[variant]} ${sizes[size]}`}
			{...rest}
		>
			{children}
		</button>
	);
};

export default Button;
