// src/components/ui/card.tsx
import React from 'react';

type CardProps = React.HTMLProps<HTMLDivElement>;

export const Card: React.FC<CardProps> = ({ className, children, ...props }) => (
	<div className={`card rounded ${className}`} {...props}>
		{children}
	</div>
);
