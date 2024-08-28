// src/components/Footer.tsx

import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from 'react-icons/fa'

const Footer = () => {
	return (
		<footer className="bg-[var(--dark-pink)] text-white py-4 mt-8">
			<div className="container mx-auto text-center">
				<p className="text-sm">&copy; {new Date().getFullYear()} Bao Nguyen. All rights reserved.</p>
				<div className="flex justify-center mt-2 space-x-4">
					<a href="https://github.com/baoopn" target="_blank" rel="noopener noreferrer"
						 className="hover:text-gray-400">
						<FaGithub className="h-6 w-6"/>
						<span className="sr-only">GitHub</span>
					</a>
					<a href="https://www.linkedin.com/in/baoopn" target="_blank" rel="noopener noreferrer"
						 className="hover:text-gray-400">
						<FaLinkedin className="h-6 w-6"/>
						<span className="sr-only">LinkedIn</span>
					</a>
					<a href="https://www.instagram.com/baoongisoo" target="_blank" rel="noopener noreferrer"
						 className="hover:text-gray-400">
						<FaInstagram className="h-6 w-6"/>
						<span className="sr-only">Instagram</span>
					</a>
					<a href="mailto:me@baoopn.com" className="hover:text-gray-400">
						<FaEnvelope className="h-6 w-6"/>
						<span className="sr-only">Email</span>
					</a>
				</div>
			</div>
		</footer>
	)
}

export default Footer
