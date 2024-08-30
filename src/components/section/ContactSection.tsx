// src/components/ContactSection.tsx
import ContactForm from "@/components/component/ContactForm";

const ContactSection = () => {
	return (
		<section id="contact" className="flex flex-col items-center justify-center my-20">
			<h2 className="text-4xl font-semibold">Get In Touch</h2>
			<div className="text-center mt-12">
				<ContactForm/>
			</div>
		</section>
	)
}

export default ContactSection
