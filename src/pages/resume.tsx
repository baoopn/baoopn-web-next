// src/pages/resume.tsx

import React from 'react';
import Head from "next/head";

const Resume: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-4 pt-20 font-sans">
      <Head>
        <title>Bao Nguyen | Resume</title>
        <link rel="icon" href="https://cdn.baoopn.com/data/img/favicon.ico"/>
      </Head>
      <header className="text-center mb-8">
      <h1 className="text-4xl font-bold">BAO PHUC NGUYEN</h1>
        <p className="text-xl">Web Developer</p>
        <p>Edmonton, AB, Canada • me@baoopn.com • +1 (825) 439-7092</p>
      </header>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-2">SUMMARY</h2>
        <p className="leading-relaxed">
          Motivated, detail-oriented Computer Science graduate with a passion for web development and user experience design. Hands-on experience in creating custom websites and applications through freelance work and academic projects. Skilled in HTML, CSS, JavaScript, and RESTful web services, with a strong focus on building user-friendly solutions. Experienced in user research, prototyping, and design evaluation for practical improvements. Bilingual in Vietnamese and English, eager to apply skills in a professional setting.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-2">EXPERIENCE</h2>

        <div className="mb-6">
          <h3 className="text-xl font-semibold">FREELANCE</h3>
          <p className="italic">Ho Chi Minh City, Vietnam</p>
          <p className="font-semibold">Full-Stack Web Developer • Apr 2024 - Present</p>
          <ul className="list-disc list-inside ml-4 leading-relaxed">
            <li>Developed bespoke websites tailored to individual client needs, enhancing user engagement and satisfaction.</li>
            <li>Authored and maintained clean, well-documented code, ensuring seamless handovers and ease of future updates.</li>
            <li>Utilized advanced skills in HTML, CSS, and JavaScript to create responsive, cross-browser compatible websites that exceeded client expectations across various industries.</li>
            <li>Designed and implemented RESTful web services using JSON and XML for efficient and reliable communication between client-server applications, optimizing data flow and system performance.</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold">STEWARDS OF ALBERTA&apos;S PROTECTED AREAS ASSOCIATION</h3>
          <p className="italic">Edmonton, AB, Canada</p>
          <p className="font-semibold">Application Developer • Jan 2024 - Apr 2024</p>
          <ul className="list-disc list-inside ml-4 leading-relaxed">
            <li>Crafted innovative prototypes aligned with detailed specifications, laying the groundwork for user-centered design and functionality.</li>
            <li>Collaborated closely with UI/UX designers to ensure the seamless integration of front-end and back-end components, resulting in a cohesive and intuitive user experience.</li>
            <li>Engaged in the full software development life cycle (SDLC), from meticulous requirements gathering to the successful implementation of robust systems, ensuring project milestones were met on time.</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold">UNIVERSITY OF ALBERTA</h3>
          <p className="italic">Edmonton, AB, Canada</p>
          <p className="font-semibold">User Experience Analyst • Jan 2024 - Apr 2024</p>
          <ul className="list-disc list-inside ml-4 leading-relaxed">
            <li>Conducted in-depth research and analysis of user experiences across diverse systems, leading to actionable insights that informed design improvements.</li>
            <li>Employed low to high fidelity prototyping to evaluate and refine designs, ensuring alignment with user needs and project goals.</li>
            <li>Performed discount evaluations and comprehensive user testing, identifying key areas for enhancement and optimizing overall usability.</li>
            <li>Compiled and delivered detailed reports at the conclusion of each project, effectively communicating findings and recommendations to clients, facilitating informed decision-making.</li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-2">EDUCATION</h2>
        <div>
          <h3 className="text-xl font-semibold">UNIVERSITY OF ALBERTA</h3>
          <p className="italic">Edmonton, AB, Canada</p>
          <p className="font-semibold">Bachelor of Science in Computer Science Candidate • 2020 – Present</p>
          <p>Expected graduation December 2024</p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-2">ADDITIONAL INFORMATION</h2>
        <ul className="list-disc list-inside ml-4 leading-relaxed">
          <li>Technical Skills: Database Development, Full-Stack Development, Data Structure & Algorithms, Git, Agile Development Methodologies, Docker, REST API</li>
          <li>Programming Languages: Python, JavaScript, Django, ExpressJS, ReactJS, SQL</li>
          <li>Design Skills: User Experience Design, Graphics Design</li>
          <li>Soft Skills: Professional Demeanor, Analytical Thinking, Presentation</li>
          <li>Languages: English – Fluent, Vietnamese - Native</li>
        </ul>
      </section>
    </div>
  );
};

export default Resume;