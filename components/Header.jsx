"use client"
import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="text-2xl font-light text-stone-700">Nerea</div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-stone-600 hover:text-stone-800 transition-colors">About Me</a>
            <a href="#expertise" className="text-stone-600 hover:text-stone-800 transition-colors">Areas of Expertise</a>
            <Link href="/services" className="text-stone-600 hover:text-stone-800 transition-colors">Services</Link>
            <a href="#rates" className="text-stone-600 hover:text-stone-800 transition-colors">Rates</a>
            <Link href="/blog" className="text-stone-600 hover:text-stone-800 transition-colors">Blog</Link>
            
            {/* CTA Buttons */}
            <button className="bg-rose-200 hover:bg-rose-300 text-stone-700 px-6 py-2 rounded-lg transition-colors duration-300">
              Contact
            </button>
            <button className="bg-green-200 hover:bg-green-300 text-stone-700 px-6 py-2 rounded-lg transition-colors duration-300">
              Schedule Appointment
            </button>
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
              <a href="#about" className="block px-3 py-2 text-stone-600 hover:text-stone-800">About Me</a>
              <a href="#expertise" className="block px-3 py-2 text-stone-600 hover:text-stone-800">Areas of Expertise</a>
              <Link href="/services" className="block px-3 py-2 text-stone-600 hover:text-stone-800">Services</Link>
              <a href="#rates" className="block px-3 py-2 text-stone-600 hover:text-stone-800">Rates</a>
              <Link href="/blog" className="block px-3 py-2 text-stone-600 hover:text-stone-800">Blog</Link>
              <div className="pt-4 space-y-2">
                <button className="w-full bg-rose-200 hover:bg-rose-300 text-stone-700 px-6 py-2 rounded-lg">
                  Contact
                </button>
                <button className="w-full bg-green-200 hover:bg-green-300 text-stone-700 px-6 py-2 rounded-lg">
                  Schedule Appointment
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}