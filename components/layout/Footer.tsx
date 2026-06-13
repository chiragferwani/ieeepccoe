import Link from 'next/link'
import { Mail, MapPin, Phone } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="font-bold text-foreground mb-4">PCCOE Summer School</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Advancing knowledge and skills in computational intelligence through intensive learning and mentorship.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/program" className="text-muted-foreground hover:text-foreground transition-colors">
                  Program
                </Link>
              </li>
              <li>
                <Link href="/speakers" className="text-muted-foreground hover:text-foreground transition-colors">
                  Speakers
                </Link>
              </li>
              <li>
                <Link href="/register" className="text-muted-foreground hover:text-foreground transition-colors">
                  Register
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-foreground transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/venue" className="text-muted-foreground hover:text-foreground transition-colors">
                  Venue & Travel
                </Link>
              </li>
              <li>
                <a href="https://ieee-cis.org" className="text-muted-foreground hover:text-foreground transition-colors">
                  IEEE CIS Society
                </a>
              </li>
              <li>
                <a href="https://cis.ieee.org/events" className="text-muted-foreground hover:text-foreground transition-colors">
                  Other Events
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-start gap-2">
                <Mail size={16} className="mt-0.5 flex-shrink-0" />
                <a href="mailto:pallavi.dhade@pccoepune.org" className="hover:text-foreground transition-colors">
                  pallavi.dhade@pccoepune.org
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                <span>Pimpri Chinchwad College of Engineering, Pune, India</span>
              </div>
              <div className="flex items-start gap-2">
                <Phone size={16} className="mt-0.5 flex-shrink-0" />
                <a href="tel:+917620343611" className="hover:text-foreground transition-colors">
                  +917620343611
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>&copy; {currentYear} IEEE Computational Intelligence Society. All rights reserved.</p>
            <div className="flex gap-4">
              <Link href="/privacy" className="hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-foreground transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
