// src/components/ui/textarea.tsx
import React from 'react';

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export const Textarea: React.FC<TextareaProps> = ({ className, ...props }) => (
	<textarea
		className={`w-full py-2 px-4 rounded border placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 ${className}`}
		{...props}
	/>
);
