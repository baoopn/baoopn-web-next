// src/components/ui/button.tsx
import React from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<ButtonProps> = ({ className, ...props }) => (
	<button
		className={`py-2 px-4 rounded font-semibold focus:outline-none focus:ring-2 focus:ring-orange-400 ${className}`}
		{...props}
	/>
);
