// src/components/AboutSection.tsx

import Image from 'next/image';
import {FaEnvelope, FaGithub, FaInstagram, FaLinkedin} from "react-icons/fa";

const AboutSection = () => {
	return (
		<section id="about" className="min-h-screen flex items-center justify-center p-4">
			<div className="max-w-4xl mx-auto text-center pt-20">
				<h2 className="text-4xl font-semibold mb-4">About Me</h2>
				<p className="mt-4 mb-4 text-justify">
					Hi, I&apos;m Bao Nguyen, a passionate Full-Stack Web and App Developer with a drive for creating innovative
					solutions.
					With a solid background in modern technologies and a knack for problem-solving, I bring creativity and
					technical expertise to every project I undertake.
				</p>
				<p className="mb-4 text-justify">
					Over the years, I have developed a deep understanding of both front-end and back-end technologies.
					From building responsive user interfaces to designing efficient databases, I strive to deliver seamless and
					robust applications.
					My journey has involved working with a variety of frameworks and tools, including React, Next.js, Node.js, and
					more.
				</p>
				<p className="mb-4 text-justify">
					I am constantly exploring new trends in the tech world and learning new skills to stay ahead.
					Whether you&apos;re looking for a dynamic web application or a complex backend system, I am excited to
					collaborate and bring your vision to life.
				</p>
				<p className="mb-4 text-justify">
					Let&apos;s connect and create something amazing together!
				</p>
				<div className="flex justify-center mt-4 space-x-8">
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
				<div className="mt-8 flex items-center justify-center">
					<Image
						src="https://cdn.baoopn.com/data/img/Bao_cover.jpg"
						alt="Bao Nguyen"
						width={600}
						height={600}
						className="rounded-md"
					/>
				</div>
			</div>
		</section>
	)
}

export default AboutSection;