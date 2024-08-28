// src/components/component/Navbar.tsx

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, ChevronDown, X } from 'lucide-react'
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset'
  }, [isOpen])

  return (
    <nav className="fixed top-0 left-0 w-full bg-[var(--dark-pink)] text-white p-4 z-50 shadow-md font-mono">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-[var(--primary-pink)] rounded-full flex items-center justify-center">
            <Image
              src="https://cdn.baoopn.com/data/img/Baoo.png"
              alt="Bao's Icon"
              width={36}
              height={36}
              className="rounded-full"
            />
          </div>
          <Image
            src="/BaoNguyen.png"
            alt="Bao Nguyen"
            width={110}
            height={36}
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link href="/" className="hover:text-gray-300 animated-underline">Home</Link>
          <Link href="/#about" className="hover:text-gray-300 animated-underline">About</Link>
          <Link href="/#projects" className="hover:text-gray-300 animated-underline">Projects</Link>
          <Link href="/#contact" className="hover:text-gray-300 animated-underline">Contact</Link>
          <div className="relative group">
            <button className="flex items-center hover:text-gray-300" tabIndex={0}>
              More <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            <div className="absolute right-0 mt-2 w-48 bg-[var(--less-dark-pink)] rounded-md shadow-lg py-1 z-10 hidden group-focus-within:block">
              <Link href="/listening" className="block px-4 py-2 text-sm hover:bg-[var(--dark-pink)] ">Now Listening</Link>
              <Link href="/resume" className="block px-4 py-2 text-sm hover:bg-[var(--dark-pink)] ">Resume</Link>
            </div>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(true)}>
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile Slide-in Menu */}
      <div className={`fixed inset-y-0 right-0 w-64 bg-[var(--dark-pink)] shadow-lg transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out z-50 md:hidden`}>
        <div className="flex justify-between items-center p-4 border-b bg-[var(--dark-pink)]">
          <span className="text-xl font-semibold">Menu</span>
          <button onClick={() => setIsOpen(false)}>
            <X className="h-6 w-6" />
          </button>
        </div>
        <div className="py-4">
          <Link href="/#" className="block px-4 py-2 hover:bg-[var(--primary-pink)] ">Home</Link>
          <Link href="/#about" className="block px-4 py-2 hover:bg-[var(--primary-pink)] ">About</Link>
          <Link href="/#projects" className="block px-4 py-2 hover:bg-[var(--primary-pink)] ">Projects</Link>
          <Link href="/#contact" className="block px-4 py-2 hover:bg-[var(--primary-pink)] ">Contact</Link>
          <div>
            <button
              className={`flex items-center justify-between w-full px-4 py-2 ${isSubmenuOpen ? 'bg-[var(--less-dark-pink)]' : 'bg-[var(--dark-pink)]'} hover:bg-[var(--primary-pink)]`}
              onClick={() => setIsSubmenuOpen(!isSubmenuOpen)}
            >
              More <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isSubmenuOpen ? 'rotate-180' : ''}`} />
            </button>
            <div className={`bg-[var(--less-dark-pink)] overflow-hidden transition-all duration-300 ease-in-out ${isSubmenuOpen ? 'max-h-40' : 'max-h-0'}`}>
              <Link href="/listening" className="block px-6 py-2 hover:bg-[var(--primary-pink)] ">Now Listening</Link>
              <Link href="/resume" className="block px-6 py-2 hover:bg-[var(--primary-pink)] ">Resume</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </nav>
  )
}