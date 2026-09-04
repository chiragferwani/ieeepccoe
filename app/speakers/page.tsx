import type { Metadata } from 'next'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Arrow } from '@/components/ui/arrow'
import Link from 'next/link'
import { BookOpen, Cpu, Award, Building2, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Plenary Presenters — IEEE CIS Summer School hosted by Department of CSE (AI & ML), PCCOE',
  description:
    'Renowned professors and industry experts will be presenting at the IEEE CIS Summer School hosted by Department of CSE (AI & ML), PCCOE. June 22–27, 2026.',
  alternates: { canonical: 'https://ieeecissummerschool2026.vercel.app/speakers' },
  openGraph: {
    title: 'Plenary Presenters — IEEE CIS Summer School hosted by Department of CSE (AI & ML), PCCOE',
    description:
      'Renowned professors and industry experts from premier institutions and industry leaders will be presenting at the IEEE CIS Summer School on LLM Fine-Tuning & Inference Optimization.',
    url: 'https://ieeecissummerschool2026.vercel.app/speakers',
  },
}

export default function SpeakersPage() {
  const institutions = [
    { name: 'IIT Bombay', type: 'Premier Institute', focus: 'CS & Geospatial AI' },
    { name: 'ISI Kolkata', type: 'Research Institute', focus: 'Computational Intelligence' },
    { name: 'IISER Pune', type: 'National Institute', focus: 'Data Science & Alignment' },
    { name: 'VNIT Nagpur', type: 'National Institute', focus: 'Vision & Architectures' },
    { name: 'NVIDIA (California)', type: 'Global Tech Leader', focus: 'AI Infrastructure & Pipelines' },
    { name: 'UBS (Switzerland)', type: 'Global Enterprise', focus: 'Enterprise Privacy & Security' },
    { name: 'TCS Research', type: 'Industrial Research', focus: 'Foundational NLP & Models' },
    { name: 'Dassault Systèmes', type: 'Enterprise Software', focus: 'Quantization & Production' },
    { name: 'Neilsoft', type: 'Engineering Solutions', focus: 'Industrial AI at Scale' },
    { name: 'Microsoft Research Collab.', type: 'Research & Innovation', focus: 'Systems & Inference' },
    { name: 'Hewlett Packard Enterprise', type: 'Cloud & Infrastructure', focus: 'Inference Infrastructure' },
    { name: 'Symbiosis CMIA', type: 'Medical AI Institute', focus: 'Clinical Decision Systems' },
  ]

  const sessionFormats = [
    {
      title: 'Plenary Keynotes',
      description: 'Visionary talks covering foundational landscapes, state-of-the-art architectures, and open challenges in generative AI.',
      icon: Award,
    },
    {
      title: 'Technical Lectures',
      description: 'In-depth mathematical and algorithmic deep dives into PEFT, quantization, RLHF/DPO, and high-throughput serving systems.',
      icon: BookOpen,
    },
    {
      title: 'Hands-on Clinics',
      description: 'Interactive small-group debugging and practical coding sessions guided directly by experienced educators and researchers.',
      icon: Cpu,
    },
    {
      title: 'Industry Panels & Capstone',
      description: 'Expert evaluation of participant capstone projects and interactive forums on deploying AI models in enterprise settings.',
      icon: Building2,
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10 pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6 border border-primary/20">
            Distinguished Faculty &amp; Experts
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 leading-tight">
            Plenary Presenters
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Renowned professors and industry experts will be presenting throughout the six-day intensive curriculum.
          </p>
        </div>
      </section>

      {/* Unified Plenary Presenters Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/40 border-y border-border">
        <div className="max-w-5xl mx-auto">
          {/* Main Statement Banner */}
          <div className="bg-background rounded-2xl p-8 sm:p-12 border border-border/80 shadow-md mb-16 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              World-Class Faculty &amp; Industry Practitioners
            </h2>
            <p className="text-lg text-foreground font-medium mb-6 max-w-3xl mx-auto">
              Renowned professors and industry experts will be presenting.
            </p>
            <p className="text-muted-foreground text-base max-w-3xl mx-auto leading-relaxed mb-8">
              The IEEE CIS Summer School features sessions led by IEEE Fellows, senior corporate directors, department heads, and pioneering researchers from leading universities and multinational enterprises. Participants will benefit from both rigorous theoretical foundations and direct production insights for fine-tuning and inference optimization.
            </p>

            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-border/60 text-left">
              <div className="flex items-center gap-2.5">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm font-semibold text-foreground">20+ Distinguished Presenters</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm font-semibold text-foreground">Top-Tier IITs &amp; Universities</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm font-semibold text-foreground">Global Tech Enterprises</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm font-semibold text-foreground">1-on-1 Mentor Clinics</span>
              </div>
            </div>
          </div>

          {/* Participating Institutions & Organizations */}
          <div className="mb-16">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
                Represented Institutions &amp; Industry Leaders
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Presenters bring perspectives from premier research laboratories, leading academic institutions, and global technology organizations.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {institutions.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-background p-5 rounded-xl border border-border/70 hover:border-primary/40 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-2.5 py-1 rounded">
                      {item.type}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-1">{item.name}</h3>
                  <p className="text-xs text-muted-foreground">{item.focus}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Session Formats */}
          <div>
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
                How Presenters Engage with Participants
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                The six-day program is designed for active, direct interaction rather than passive listening.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {sessionFormats.map((format, idx) => {
                const Icon = format.icon
                return (
                  <div key={idx} className="bg-background p-6 rounded-xl border border-border/70 flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 border border-primary/20">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground text-base mb-1">{format.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{format.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Join the Summer School Cohort</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Limited to 60 in-person participants and 100+ online attendees. Secure your seat today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/register"
              className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-primary/90 transition-colors shadow-sm"
            >
              Register Now <Arrow size={18} />
            </Link>
            <Link
              href="/program"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-muted text-foreground font-semibold rounded-md hover:bg-muted/80 transition-colors border border-border"
            >
              View Full Schedule
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
