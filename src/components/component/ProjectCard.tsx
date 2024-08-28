// src/components/ProjectCard.tsx

import { FaGithub, FaLink } from 'react-icons/fa'
import Image from "next/image";

interface ProjectCardProps {
  title: string
  date: string
  description: string
  backend?: { repo: string; description: string }
  frontend?: { repo: string; description: string }
  additionalLinks?: { title: string; url: string }[]
  demo?: { link: string }
  image?: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({
                                                   title,
                                                   date,
                                                   description,
                                                   backend,
                                                   frontend,
                                                   demo,
                                                   additionalLinks,
                                                   image
}) => {
  return (
    <div className="shadow-lg rounded-lg overflow-hidden p-4 mb-6 text-justify border-2 border-gray-300">
      <h4 className="text-xl font-semibold mt-2">{title}</h4>
      <h5 className="text-gray-400">{date}</h5>
      <p className="mt-2">{description}</p>
      {backend && (
        <div className="mt-4">
          <h5 className="font-semibold">Backend:</h5>
          <p>{backend.description}</p>
          <a href={backend.repo} target="_blank" rel="noopener noreferrer" className="flex items-center mt-2 text-blue-500 hover:underline">
            <FaGithub className="mr-2" /> Repository
          </a>
        </div>
      )}
      {frontend && (
        <div className="mt-4">
          <h5 className="font-semibold">Frontend:</h5>
          <p>{frontend.description}</p>
          <a href={frontend.repo} target="_blank" rel="noopener noreferrer" className="flex items-center mt-2 text-blue-500 hover:underline">
            <FaGithub className="mr-2" /> Repository
          </a>
        </div>
      )}
      {demo && (
        <div className="mt-4">
          <a href={demo.link} target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-500 hover:underline">
            <FaLink className="mr-2" /> Demo
          </a>
        </div>
      )}
      {additionalLinks && additionalLinks.length > 0 && (
        <div className="mt-4">
          {additionalLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-blue-500 hover:underline mt-2"
            >
              <FaLink className="mr-2" /> {link.title}
            </a>
          ))}
        </div>
      )}
      {image &&
        <Image
          src={image}
          alt={title}
          className="mt-4 object-cover rounded mx-auto"
          style={{ maxHeight: '60vh' }}
          width={1000}
          height={1000}
        />
      }
    </div>
  )
}

export default ProjectCard