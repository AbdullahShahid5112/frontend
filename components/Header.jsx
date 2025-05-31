"use client"
import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
   <header className="bg-[#ede8e5] shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Left Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-stone-600 hover:text-stone-800 transition-colors uppercase text-sm tracking-wider">
              About
            </a>
            <Link href="/services" className="text-stone-600 hover:text-stone-800 transition-colors uppercase text-sm tracking-wider">
              Services
            </Link>
            <a href="#faqs" className="text-stone-600 hover:text-stone-800 transition-colors uppercase text-sm tracking-wider">
              FAQs
            </a>
          </div>

          {/* Center Logo */}
          <Link href="/" className="flex flex-col items-center">
            <div className="text-2xl font-light text-stone-700 tracking-wider">
              Tess Browne
            </div>
            <div className="text-xs text-stone-500 uppercase tracking-widest mt-1">
              Clinical Psychologist
            </div>
          </Link>

          {/* Right Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#resources" className="text-stone-600 hover:text-stone-800 transition-colors uppercase text-sm tracking-wider">
              Resources
            </a>
            <Link href="/journal" className="text-stone-600 hover:text-stone-800 transition-colors uppercase text-sm tracking-wider">
              Journal
            </Link>
            <a href="#contact" className="text-stone-600 hover:text-stone-800 transition-colors uppercase text-sm tracking-wider">
              Contact
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-stone-600 hover:text-stone-800 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <a href="#about" className="block px-3 py-2 text-stone-600 hover:text-stone-800 uppercase text-sm tracking-wider">
                About
              </a>
              <Link href="/services" className="block px-3 py-2 text-stone-600 hover:text-stone-800 uppercase text-sm tracking-wider">
                Services
              </Link>
              <a href="#faqs" className="block px-3 py-2 text-stone-600 hover:text-stone-800 uppercase text-sm tracking-wider">
                FAQs
              </a>
              <a href="#resources" className="block px-3 py-2 text-stone-600 hover:text-stone-800 uppercase text-sm tracking-wider">
                Resources
              </a>
              <Link href="/journal" className="block px-3 py-2 text-stone-600 hover:text-stone-800 uppercase text-sm tracking-wider">
                Journal
              </Link>
              <a href="#contact" className="block px-3 py-2 text-stone-600 hover:text-stone-800 uppercase text-sm tracking-wider">
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}