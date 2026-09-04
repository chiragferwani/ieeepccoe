import Link from 'next/link'
import { Mail, MapPin } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="font-bold text-foreground mb-2">IEEE CIS Summer School</h3>
            <p className="text-xs font-medium text-primary mb-3">
              hosted by Department of CSE (AI &amp; ML), PCCOE
            </p>
            <p className="text-sm text-muted-foreground mb-4">
              Advancing knowledge and skills in computational intelligence through intensive hands-on learning and mentorship.
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
                  Plenary Presenters
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-muted-foreground hover:text-foreground transition-colors">
                  Our Team
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
                <a href="https://ieee-cis.org" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                  IEEE CIS Society
                </a>
              </li>
              <li>
                <Link href="/admin" className="text-muted-foreground hover:text-foreground transition-colors">
                  Admin Portal
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-start gap-2">
                <Mail size={16} className="mt-0.5 flex-shrink-0 text-primary" />
                <a href="mailto:cissummerschool@pccoepune.org" className="hover:text-foreground transition-colors break-all">
                  cissummerschool@pccoepune.org
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 flex-shrink-0 text-primary" />
                <span>PCCoE, Sector 26, Pradhikaran, Nigdi, Pune – 411044, India</span>
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
