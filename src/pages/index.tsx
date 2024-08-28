// src/pages/index.tsx

import Head from 'next/head';
import HomeSection from '@/components/section/HomeSection'
import AboutSection from '@/components/section/AboutSection'
import ProjectsSection from '@/components/section/ProjectsSection'
import ContactSection from '@/components/section/ContactSection'
import CustomHr from "@/components/component/CustomHr";
import Footer from "@/components/section/Footer";

const Home = () => {
	return (
		<div className="relative min-h-screen flex flex-col font-mono">
			<Head>
				<title>All About Bao!</title>
				<link rel="icon" href="https://cdn.baoopn.com/data/img/favicon.ico" />
			</Head>
			<main className="flex-grow">
				<HomeSection />
				<CustomHr/>
				<AboutSection />
				<CustomHr/>
				<ProjectsSection />
				<CustomHr/>
				<ContactSection />
			</main>
			<Footer />
		</div>
	)
}

export default Home
