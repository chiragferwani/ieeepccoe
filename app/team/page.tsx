import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Card } from '@/components/ui/card'
import { Mail, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Our Team — IEEE CIS Summer School hosted by Department of CSE (AI & ML), PCCOE',
  description:
    'Meet the dedicated faculty, student coordinators, and developer team organizing the IEEE CIS Summer School hosted by Department of CSE (AI & ML), PCCOE.',
  alternates: { canonical: 'https://ieeecissummerschool2026.vercel.app/team' },
  openGraph: {
    title: 'Our Team — IEEE CIS Summer School hosted by Department of CSE (AI & ML), PCCOE',
    description: 'Faculty leaders, coordinators, and engineering team behind the IEEE CIS Summer School 2026.',
    url: 'https://ieeecissummerschool2026.vercel.app/team',
  },
}

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.8v8.37h2.8v-4.87c0-.26.05-.52.12-.7a1.16 1.16 0 0 1 1.07-.78c.76 0 1.33.58 1.33 1.62v4.73zm-11-8.37H4.7v8.37h2.8zm-1.4-2.8a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z" />
  </svg>
)

export default function TeamPage() {
  const organizingFaculty = [
    {
      name: 'Prof. Pallavi Nikumbh',
      role: 'Lead Organizer & Chapter Advisor',
      department: 'Dept. of CSE (AI & ML), PCCoE',
      affiliation: 'IEEE CIS PCCOE SBC Advisor',
      email: 'cissummerschool@pccoepune.org',
      image: null,
    },
    {
      name: 'Dr. Anuradha Thakare',
      role: 'Program Chair & Co-Organizer',
      department: 'Head, Dept. of CSE (AI & ML)',
      affiliation: 'PCCoE Pune',
      email: 'cissummerschool@pccoepune.org',
      image: '/speakers/anuradhathakare.jpeg',
    },
    {
      name: 'Prof. Shailaja Pede',
      role: 'Co-Organizer',
      department: 'Dept. of CSE (AI & ML), PCCoE',
      affiliation: 'Academic Program Liaison',
      email: 'cissummerschool@pccoepune.org',
      image: null,
    },
    {
      name: 'Prof. Santwana Gudadhe',
      role: 'Co-Organizer',
      department: 'Dept. of CSE (AI & ML), PCCoE',
      affiliation: 'Academic Coordination',
      email: 'cissummerschool@pccoepune.org',
      image: null,
    },
    {
      name: 'Mr. Rakshit Jain',
      role: 'Collaborator & Program Advisor',
      department: 'Chair, IEEE YP Pune Section',
      affiliation: 'AI Systems Engineer, PTC',
      email: 'rakshit.jain@ieee.org',
      image: '/speakers/rakshitjain.jpeg',
    },
    {
      name: 'Dr. Amar Buchade',
      role: 'Collaborator & Section Chair',
      department: 'Chair, IEEE Pune Section',
      affiliation: 'IEEE Pune Section',
      email: null,
      image: null,
    },
  ]

  const studentCoordinators = [
    {
      name: 'Kshitij Jadhav',
      role: 'Student Coordinator',
      area: 'Technical Operations & Logistics',
      image: '/kshitij.png',
      link: 'https://www.linkedin.com/in/kshitij-jadhav/',
    },
    {
      name: 'Ruturaj Pandharkar',
      role: 'Student Coordinator',
      area: 'Participant Relations & Logistics',
      image: '/ruturaj.jpeg',
      link: 'https://www.linkedin.com/in/ruturaj-pandharkar/',
    },
    {
      name: 'Piyush Daspute',
      role: 'Student Coordinator',
      area: 'Registration & Operations',
      image: null,
      link: null,
    },
    {
      name: 'Trupti Sukale',
      role: 'Student Coordinator',
      area: 'Event Coordination & Outreach',
      image: null,
      link: null,
    },
  ]

  const devTeam = [
    { name: 'Vrushabh Hirap', role: 'Full-Stack Developer', link: 'https://www.linkedin.com/in/vrushabh-hirap/', image: '/vrushabh.jpeg' },
    { name: 'Chirag Ferwani', role: 'Full-Stack Developer', link: 'https://www.linkedin.com/in/chiragferwani', image: '/chiragferwani.png' },
    { name: 'Kshitij Jadhav', role: 'Frontend Developer', link: 'https://www.linkedin.com/in/kshitij-jadhav/', image: '/kshitij.png' },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6 border border-primary/20">
            People Behind the School
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Our Organizing Team
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Faculty leads, student coordinators, and platform engineers working together to deliver an exceptional summer school experience.
          </p>
        </div>
      </section>

      {/* Organizing Committee (Faculty Leads) */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/40 border-y border-border">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
              Organizing Committee &amp; Faculty Leads
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
              Guiding the academic rigor, curriculum development, speaker engagements, and administrative operations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {organizingFaculty.map((member, idx) => (
              <Card
                key={idx}
                className="p-6 border border-border bg-background hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xl flex-shrink-0 overflow-hidden border border-primary/20">
                      {member.image ? (
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          sizes="64px"
                          className="object-cover"
                        />
                      ) : (
                        member.name.split(' ').map((n) => n[0]).join('')
                      )}
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground text-base leading-tight">
                        {member.name}
                      </h3>
                      <p className="text-xs font-semibold text-primary mt-1">
                        {member.role}
                      </p>
                    </div>
                  </div>
                  <div className="space-y-1 text-xs text-muted-foreground pt-2 border-t border-border/50">
                    <p className="font-medium text-foreground">{member.department}</p>
                    <p>{member.affiliation}</p>
                  </div>
                </div>

                {member.email && (
                  <div className="pt-4 mt-4 border-t border-border/40 flex items-center gap-2 text-xs text-muted-foreground">
                    <Mail size={14} className="text-primary flex-shrink-0" />
                    <a
                      href={`mailto:${member.email}`}
                      className="hover:text-primary transition-colors truncate"
                    >
                      {member.email}
                    </a>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Student Coordinators */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
              Student Coordinators
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
              Dedicated student leads driving participant onboarding, technical setup, and day-to-day coordination.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {studentCoordinators.map((coordinator, idx) => (
              <Card
                key={idx}
                className="p-5 border border-border text-center flex flex-col items-center justify-between hover:shadow-md transition-all hover:-translate-y-0.5"
              >
                <div className="flex flex-col items-center">
                  <div className="relative w-24 h-24 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-2xl mb-4 overflow-hidden border border-border">
                    {coordinator.image ? (
                      <Image
                        src={coordinator.image}
                        alt={coordinator.name}
                        fill
                        sizes="96px"
                        className="object-cover"
                      />
                    ) : (
                      coordinator.name.split(' ').map((n) => n[0]).join('')
                    )}
                  </div>
                  <h3 className="font-bold text-foreground text-sm mb-1">{coordinator.name}</h3>
                  <p className="text-xs font-semibold text-primary mb-1">{coordinator.role}</p>
                  <p className="text-[11px] text-muted-foreground">{coordinator.area}</p>
                </div>

                {coordinator.link && (
                  <a
                    href={coordinator.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 text-muted-foreground hover:text-primary transition-colors p-1"
                    aria-label={`${coordinator.name} LinkedIn`}
                  >
                    <LinkedinIcon className="w-5 h-5" />
                  </a>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Platform & Development Team */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted border-t border-border">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest bg-primary/10 text-primary px-3 py-1 rounded-full border border-primary/20">
              Web &amp; Platform Engineering
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mt-3 mb-3">
              Platform Development Team
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
              The talented student developers at Pimpri Chinchwad College of Engineering who engineered and designed this platform.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {devTeam.map((member, idx) => (
              <Card
                key={idx}
                className="p-5 border border-border flex flex-col items-center justify-between text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-background"
              >
                <div className="flex flex-col items-center w-full">
                  <div className="relative w-28 h-28 bg-primary/10 text-primary rounded-full flex items-center justify-center font-bold text-3xl mb-4 flex-shrink-0 overflow-hidden border border-border/70">
                    {member.image ? (
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        sizes="112px"
                        className="object-cover"
                      />
                    ) : (
                      member.name.split(' ').map((n) => n[0]).join('')
                    )}
                  </div>
                  <h3 className="font-bold text-foreground text-base mb-1">{member.name}</h3>
                  <p className="text-xs font-semibold text-primary mb-3">{member.role}</p>
                </div>
                <a
                  href={member.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-muted rounded-full"
                  aria-label={`${member.name} LinkedIn`}
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background border-t border-border">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Want to Connect with the Organizers?</h2>
          <p className="text-muted-foreground mb-8 text-base">
            Reach out with any questions regarding registration, sponsorships, or accommodations.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-primary/90 transition-colors shadow-sm"
            >
              Contact Organizing Team <ArrowRight size={16} />
            </Link>
            <Link
              href="/register"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-muted text-foreground font-semibold rounded-md hover:bg-muted/80 transition-colors border border-border"
            >
              Register for School
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
