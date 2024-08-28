// src/components/ProjectsSection.tsx

import ProjectCard from '@/components/component/ProjectCard'

const ProjectsSection = () => {
	return (
		<section id="projects" className="min-h-screen pb-8 px-4">
			<div className="max-w-4xl mx-auto text-center pt-20">
				<h2 className="text-4xl font-semibold mb-4">Projects</h2>
				<p className="text-lg mb-8">Projects that I have been worked on</p>
				<div className="space-y-6">
					<ProjectCard
						title="Spotify Now Playing Integration"
						date="August 2024"
						description="This project demonstrates the integration between a backend Express.js API and a frontend Create React App (CRA) to display real-time Spotify track information. The backend API handles the retrieval of the currently playing track and recent tracks from the Spotify API, while the frontend provides an interactive user interface to showcase this data."
						backend={{ repo: "https://github.com/baoopn/spotify-api", description: "Express.js API" }}
						frontend={{ repo: "https://github.com/baoopn/spotify-now-playing-react", description: "Create React App" }}
						demo={{ link: "https://listening.baoopn.com/" }}
						image="https://cdn.baoopn.com/data/img/listening-web.png"
					/>
					<ProjectCard
						title="Minh Lee Fish House Website"
						date="June 2024 - August 2024"
						description="A website showcasing ornamental fish species with a public and administrative page."
						additionalLinks={[
							{ title: "Website", url: "https://nhacaminhlee.com/" }
						]}
						image="https://cdn.baoopn.com/data/img/minhlee_web.png"
					/>
					<ProjectCard
						title="PUNGJ Portfolio Website"
						date="May 2024 - June 2024"
						description="A portfolio website for a talented photographer based in Ho Chi Minh City."
						additionalLinks={[
							{ title: "Website", url: "https://pungj.id.vn/" }
						]}
						image="https://cdn.baoopn.com/data/img/pungj_web.png"
					/>
					<ProjectCard
						title="ACS Check-in Project - SAPAA Inspection App"
						date="January 2024 - April 2024"
						description="Provides an Occupational Health and Safety compliant check-in service for data collection in Alberta’s parks."
						additionalLinks={[
							{ title: "Project Info", url: "https://ualberta-cmput401.github.io/w24project-acs_checkin/" },
							{ title: "Screencast", url: "https://youtu.be/gSAiCBeYeuo/" },
							{ title: "SAPAA Website", url: "https://sapaastewards.com/" },
							{ title: "Article", url: "https://myorgbio.org/2024/03/07/dragons-and-protected-areas-april-4-12-13h/" }
						]}
						image="https://cdn.baoopn.com/data/img/sapaa.jpg"
					/>
					<ProjectCard
						title="CMPUT301F23 Project - Neety App"
						date="September 2024 - December 2024"
						description="A project (in the Fall 2023 CMPUT 301 course) where my team and I built an Android app for inventory management using Java and Android Studio.
													The app allows users to record various items, categorize them with tags, capture images using the camera, and perform barcode lookups.
													We integrated Firebase Storage and Firebase Database for storing item information and images.
													Additionally, we used the Barcode Lookup API to retrieve product details using barcodes, enhancing the app’s efficiency in managing inventory."
						additionalLinks={[
							{ title: "GitHub Repository", url: "https://github.com/CMPUT301F23T25/Neety" },
							{ title: "Storyboard & Mock-Ups", url: "https://github.com/CMPUT301F23T25/Neety/wiki/StoryBoard-Mockups" }
						]}
						image="https://cdn.baoopn.com/data/img/Neety2.png"
					/>
					<ProjectCard
						title="Willow - 2D Game"
						date="January 2023 - April 2023"
						description="A topdown game developed for UAlberta's CMPUT 250 course."
						demo={{ link: "https://highimpactstudios.github.io/GoldRelease/index.html" }}
						additionalLinks={[
							{ title: "Project Info", url: "https://highimpactstudios.github.io/" }
						]}
						image="https://cdn.baoopn.com/data/img/banner2.png"
					/>
				</div>
			</div>
		</section>
	)
}

export default ProjectsSection
