// src/components/ContactForm.tsx
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaEnvelope, FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import Link from "next/link";

export default function ContactForm() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [subject, setSubject] = useState("");
	const [message, setMessage] = useState("");
	const [alertMessage, setAlertMessage] = useState("");
	const [alertType, setAlertType] = useState<"success" | "error" | "">("");
	const [errors, setErrors] = useState({ name: "", email: "", message: "" });

	const validateForm = () => {
		const newErrors: any = {};
		let valid = true;

		if (!name.trim()) {
			newErrors.name = "Name is required";
			valid = false;
		}

		if (!email.trim()) {
			newErrors.email = "Email is required";
			valid = false;
		} else if (!/\S+@\S+\.\S+/.test(email)) {
			newErrors.email = "Invalid email address";
			valid = false;
		}

		if (!message.trim()) {
			newErrors.message = "Message is required";
			valid = false;
		}

		setErrors(newErrors);
		return valid;
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		if (!validateForm()) {
			setAlertMessage("Please fix the errors above.");
			setAlertType("error");
			return;
		}

		const data = {
			name,
			email,
			subject: subject || "(No Subject)",
			message,
		};

		try {
			const response = await fetch("https://message.nbphuc.io.vn/msg/telegram", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			});

			if (response.ok) {
				setAlertMessage("Message sent successfully!");
				setAlertType("success");
				setName("");
				setEmail("");
				setSubject("");
				setMessage("");
				setErrors({ name: "", email: "", message: "" });
			} else {
				setAlertMessage("Failed to send the message. Please try again later.");
				setAlertType("error");
			}
		} catch (error) {
			console.error("Error sending message:", error);
			setAlertMessage("An error occurred. Please try again later.");
			setAlertType("error");
		}
	};

	return (
		<Card className="w-full max-w-4xl mx-auto overflow-hidden">
			<div className="grid grid-cols-1 md:grid-cols-2">
				<div className="p-6">
					<h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Leave a Message</h2>
					<form onSubmit={handleSubmit} className="space-y-4">
						<div>
							<label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 text-left">
								Name
							</label>
							<Input
								id="name"
								className={`bg-white dark:bg-gray-800 border ${errors.name ? "border-red-500" : "border-gray-300 dark:border-gray-700"} text-gray-900 dark:text-white placeholder-gray-400`}
								placeholder="Name"
								value={name}
								onChange={(e) => setName(e.target.value)}
							/>
							{errors.name && <span className="text-red-500 text-xs">{errors.name}</span>}
						</div>
						<div>
							<label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 text-left">
								Email
							</label>
							<Input
								id="email"
								className={`bg-white dark:bg-gray-800 border ${errors.email ? "border-red-500" : "border-gray-300 dark:border-gray-700"} text-gray-900 dark:text-white placeholder-gray-400`}
								type="email"
								placeholder="Email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
							{errors.email && <span className="text-red-500 text-xs">{errors.email}</span>}
						</div>
						<div>
							<label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 text-left">
								Subject
							</label>
							<Input
								id="subject"
								className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white placeholder-gray-400"
								placeholder="Subject"
								value={subject}
								onChange={(e) => setSubject(e.target.value)}
							/>
						</div>
						<div>
							<label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 text-left">
								Message
							</label>
							<Textarea
								id="message"
								className={`bg-white dark:bg-gray-800 border ${errors.message ? "border-red-500" : "border-gray-300 dark:border-gray-700"} text-gray-900 dark:text-white placeholder-gray-400 resize-none overflow-y-auto`}
								placeholder="Message"
								rows={5}
								value={message}
								onChange={(e) => setMessage(e.target.value)}
							/>
							{errors.message && <span className="text-red-500 text-xs">{errors.message}</span>}
						</div>
						{alertMessage && (
							<div className={`text-${alertType === "success" ? "green" : "red"}-500 text-sm`}>
								{alertMessage}
							</div>
						)}
						<Button type="submit" className="bg-[var(--primary-pink)] hover:bg-[var(--less-dark-pink)] text-white">
							Send Message
						</Button>
					</form>
				</div>
				<div className="p-6 border-t md:border-l md:border-t-0 border-gray-300 dark:border-gray-700 flex flex-col items-center">
					<h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Contact information</h2>
					<p className="text-gray-600 dark:text-gray-400 mb-6">
						I&apos;m open for any suggestion or just to have a chat
					</p>
					<div className="space-y-4">
						<div className="flex items-center space-x-3">
							<FaEnvelope className="text-gray-600 dark:text-gray-400" />
							<span>Email:&nbsp;
								<Link href="mailto:me@baoopn.com" className="underline text-gray-800 dark:text-white">me@baoopn.com</Link>
							</span>
						</div>
						<div className="flex items-center space-x-3">
							<FaLinkedin className="text-gray-600 dark:text-gray-400" />
							<span>LinkedIn:&nbsp;
								<Link href="https://www.linkedin.com/in/baoopn/" className="underline text-gray-800 dark:text-white">@baoopn</Link>
							</span>
						</div>
						<div className="flex items-center space-x-3">
							<FaInstagram className="text-gray-600 dark:text-gray-400" />
							<span>Instagram:&nbsp;
								<Link href="https://www.instagram.com/baoongisoo/" className="underline text-gray-800 dark:text-white">@baoongisoo</Link>
							</span>
						</div>
						<div className="flex items-center space-x-3">
							<FaGithub className="text-gray-600 dark:text-gray-400" />
							<span>GitHub:&nbsp;
								<Link href="https://github.com/baoopn/" className="underline text-gray-800 dark:text-white">@baoopn</Link>
							</span>
						</div>
					</div>
				</div>
			</div>
		</Card>
	);
}
