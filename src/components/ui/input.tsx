// src/components/ui/input.tsx
import React from 'react';

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Input: React.FC<InputProps> = ({ className, ...props }) => (
	<input
		className={`w-full py-2 px-4 rounded border placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 ${className}`}
		{...props}
	/>
);
