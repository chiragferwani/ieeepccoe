'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/about', label: 'About' },
    { href: '/program', label: 'Program' },
    { href: '/speakers', label: 'Speakers' },
    { href: '/team', label: 'Our Team' },
    { href: '/venue', label: 'Venue' },
    { href: '/faq', label: 'FAQ' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo with enlarged prominent PCCoE icon */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 flex-shrink-0 rounded-xl overflow-hidden shadow-md border border-border/60 bg-white p-0.5 transition-transform group-hover:scale-105">
              <Image
                src="/pccoe.jpeg"
                alt="PCCoE Logo"
                fill
                sizes="48px"
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-sm sm:text-base font-bold text-foreground leading-snug group-hover:text-primary transition-colors">
                IEEE CIS Summer School
              </span>
              <span className="text-[11px] font-medium text-muted-foreground hidden sm:inline">
                hosted by Dept. of CSE (AI &amp; ML), PCCOE
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-muted/70 rounded-md transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/admin"
              className="px-3 py-2 text-xs font-semibold text-muted-foreground hover:text-foreground border border-border/80 rounded-md transition-colors ml-1"
            >
              Admin Portal
            </Link>
            <Link
              href="/register"
              className="ml-2 px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm font-medium hover:bg-primary/90 transition-all shadow-sm hover:shadow"
            >
              Register
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="md:hidden p-2 rounded-md text-foreground hover:bg-muted transition-colors"
            aria-label="Toggle Menu"
          >
            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileOpen && (
          <div className="md:hidden bg-background border-b border-border py-4 px-2 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-3 py-2 text-sm font-medium text-foreground hover:bg-muted rounded-md transition-colors"
                onClick={() => setIsMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/admin"
              className="block px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors"
              onClick={() => setIsMobileOpen(false)}
            >
              Admin Portal
            </Link>
            <Link
              href="/register"
              className="block w-full px-3 py-2 bg-primary text-primary-foreground rounded-md text-sm font-medium text-center hover:bg-primary/90 transition-colors mt-2"
              onClick={() => setIsMobileOpen(false)}
            >
              Register Now
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
