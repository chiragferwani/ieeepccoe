'use client'

import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Card } from '@/components/ui/card'
import Image from 'next/image'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import { FormEvent, useState } from 'react'

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.8v8.37h2.8v-4.87c0-.26.05-.52.12-.7a1.16 1.16 0 0 1 1.07-.78c.76 0 1.33.58 1.33 1.62v4.73zm-11-8.37H4.7v8.37h2.8zm-1.4-2.8a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z" />
  </svg>
)

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    // In a real application, this would send to a backend
    console.log('Form submitted:', formState)
    setIsSubmitted(true)
    setTimeout(() => {
      setFormState({ name: '', email: '', subject: '', message: '' })
      setIsSubmitted(false)
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Get in Touch</h1>
          <p className="text-xl text-muted-foreground">
            Have questions? We&apos;d love to hear from you. Reach out to our team.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {/* Contact Cards */}
            <Card className="p-6 border border-border">
              <div className="flex items-center gap-3 mb-4">
                <Mail className="w-6 h-6 text-primary" />
                <h3 className="text-lg font-bold text-foreground">Email</h3>
              </div>
              <p className="text-muted-foreground mb-4">General inquiries and registration support</p>
              <a href="mailto:pallavi.dhade@pccoepune.org" className="text-primary font-semibold hover:underline">
                pallavi.dhade@pccoepune.org
              </a>
            </Card>

            <Card className="p-6 border border-border">
              <div className="flex items-center gap-3 mb-4">
                <Phone className="w-6 h-6 text-primary" />
                <h3 className="text-lg font-bold text-foreground">Phone</h3>
              </div>
              <p className="text-muted-foreground mb-4">Pune office (IST timezone)</p>
              <a href="tel:+917620343611" className="text-primary font-semibold hover:underline">
                +917620343611
              </a>
            </Card>

            <Card className="p-6 border border-border">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-6 h-6 text-primary" />
                <h3 className="text-lg font-bold text-foreground">Location</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                Pimpri Chinchwad College of Engineering (PCCoE)<br />
                Sector 26, Pradhikaran, Nigdi<br />
                Pune - 411044, Maharashtra, India
              </p>
            </Card>
          </div>

          {/* Contact Form & Hours */}
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-md bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-md bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-md bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-border rounded-md bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    placeholder="Your message..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-primary/90 transition-colors"
                >
                  Send Message
                </button>

                {isSubmitted && (
                  <div className="p-4 bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-700 rounded-md text-green-700 dark:text-green-300 text-sm">
                    Thank you for your message! We&apos;ll get back to you shortly.
                  </div>
                )}
              </form>
            </div>

            {/* Contact Info & Hours */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Contact Information</h2>

              <Card className="p-6 border border-border mb-6">
                <div className="flex items-start gap-3 mb-6">
                  <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-foreground mb-3">Office Hours</h3>
                    <div className="space-y-2 text-muted-foreground text-sm">
                      <p>
                        <strong className="text-foreground">Monday - Friday</strong>
                        <br />
                        9:00 AM - 6:00 PM (IST)
                      </p>
                      <p>
                        <strong className="text-foreground">Saturday & Sunday</strong>
                        <br />
                        Closed (email us anytime)
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border border-border">
                <h3 className="font-bold text-foreground mb-4">Rapid Response</h3>
                <ul className="space-y-3 text-muted-foreground text-sm">
                  <li className="flex gap-2">
                    <span className="text-primary">✓</span>
                    <span>Email responses within 24 hours</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">✓</span>
                    <span>Phone support during office hours</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">✓</span>
                    <span>Visa assistance available</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">✓</span>
                    <span>Travel coordination support</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-6 border border-border mt-6 bg-muted">
                <h3 className="font-bold text-foreground mb-2">Special Requests?</h3>
                <p className="text-muted-foreground text-sm">
                  Have specific needs or questions? Use the contact form to let us know and we&apos;ll reach out to discuss how
                  we can help.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Development Team */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted border-y border-border">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-4 text-center">Development Team</h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            The talented student developers at Pimpri Chinchwad College of Engineering who built and designed this platform.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Ruturaj Pandharkar', link: 'https://www.linkedin.com/in/ruturaj-pandharkar/', image: '/ruturaj.jpeg' },
              { name: 'Chirag Ferwani', link: 'https://www.linkedin.com/in/chiragferwani', image: '/chiragferwani.png' },
              { name: 'Kshitij Jadhav', link: 'https://www.linkedin.com/in/kshitij-jadhav/', image: '/kshitij.png' },
              { name: 'Debottam Debnath', link: 'https://www.linkedin.com/in/debottam-debnath/', image: '/debottam.png' },
              { name: 'Anushka Shinde', link: 'https://www.linkedin.com/in/anushka-shinde/', image: '/anushka.png' },
              { name: 'Vrushabh Hirap', link: 'https://www.linkedin.com/in/vrushabh-hirap/', image: '/vrushabh.jpeg' },
            ].map((member, idx) => (
              <Card key={idx} className="p-5 border border-border flex flex-col items-center justify-between text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 max-w-sm mx-auto w-full">
                <div className="flex flex-col items-center w-full">
                  <div className="relative w-32 h-32 bg-primary/10 text-primary rounded-full flex items-center justify-center font-bold text-4xl mb-4 flex-shrink-0 overflow-hidden border border-border/50">
                    {member.image ? (
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        sizes="128px"
                        className="object-cover"
                      />
                    ) : (
                      member.name.split(' ').map(n => n[0]).join('')
                    )}
                  </div>
                  <h3 className="font-bold text-foreground text-base mb-3">{member.name}</h3>
                </div>
                <a
                  href={member.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-muted rounded-full"
                  aria-label={`${member.name} LinkedIn`}
                >
                  <LinkedinIcon className="w-6 h-6" />
                </a>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
