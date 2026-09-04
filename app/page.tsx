import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { HeroSection } from '@/components/sections/HeroSection'
import { StatsSection } from '@/components/sections/StatsSection'
import { HighlightGrid } from '@/components/sections/HighlightGrid'
import { ScheduleSwitcher } from '@/components/sections/ScheduleSwitcher'
import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { CheckCircle2 } from 'lucide-react'
import { Arrow } from '@/components/ui/arrow'
import Image from 'next/image'
import { SpotlightTicker } from '@/components/sections/SpotlightTicker'
import { ImageSlider } from '@/components/sections/ImageSlider'
import { LoaderScreen } from '@/components/sections/LoaderScreen'

export default function Home() {
  const outcomes = [
    'Fine-tune open-source LLMs (LLaMA, Mistral, Phi) using LoRA/QLoRA',
    'Apply quantization (GPTQ, AWQ) to reduce model size and latency',
    'Set up and benchmark LLM serving with vLLM and TGI',
    'Build end-to-end fine-tuning and deployment pipelines',
    'Develop production-grade capstone projects with real applications',
    'Network with industry leaders and earn IEEE CIS certificate',
  ]

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <LoaderScreen />
      <Navbar />
      <SpotlightTicker />
      <ImageSlider />

      {/* Hero Section */}
      <HeroSection />

      {/* Stats Section */}
      <StatsSection />

      {/* Why Attend Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
        {/* Decorative background blur shapes for glassmorphism highlights */}
        <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-violet-200/20 dark:bg-violet-900/10 rounded-full blur-3xl -z-10 pointer-events-none" />
        <div className="absolute bottom-10 right-1/4 w-72 h-72 bg-sky-200/20 dark:bg-sky-900/10 rounded-full blur-3xl -z-10 pointer-events-none" />
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-4">Why Attend?</h2>
          <p className="text-center text-lg text-muted-foreground mb-12">
            A 6-day intensive residential and hybrid program hosted by Department of CSE (AI &amp; ML), PCCOE. Learn from world-class researchers and industry experts in fine-tuning LLMs and inference optimization.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {outcomes.map((outcome, idx) => (
              <div key={idx} className="flex gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground">{outcome}</span>
              </div>
            ))}
          </div>

          <div className="bg-muted/40 dark:bg-muted/10 backdrop-blur-md border border-white/20 dark:border-white/5 rounded-2xl p-8 shadow-lg text-center">
            <p className="text-lg text-foreground mb-4 font-semibold">
              June 22-27, 2026 | Pune, India
            </p>
            <p className="text-muted-foreground mb-6">
              Limited to 80 participants. Supported by IEEE CIS and hosted at PCCoE with state-of-the-art GPU-enabled facilities.
            </p>
            <Link
              href="/register"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-primary/90 transition-colors"
            >
              Register Now <Arrow size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Highlights Grid */}
      <HighlightGrid />

      {/* Schedule Section */}
      <ScheduleSwitcher />

      {/* Plenary Presenters Preview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted border-y border-border">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <span className="text-xs font-bold uppercase tracking-widest bg-primary/10 text-primary px-3 py-1.5 rounded-full border border-primary/20">
              Distinguished Faculty &amp; Experts
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-4 mb-4">Plenary Presenters</h2>
            <p className="text-xl font-medium text-foreground max-w-2xl mx-auto mb-4">
              Renowned professors and industry experts will be presenting.
            </p>
            <p className="text-muted-foreground max-w-2xl mx-auto text-base leading-relaxed">
              Our comprehensive six-day curriculum features talks, tutorials, and hands-on clinics led by preeminent researchers and practitioners from top academic institutes and global tech pioneers.
            </p>
          </div>

          {/* Featured Institutions Chips Grid */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-10 max-w-3xl mx-auto">
            {[
              'IIT Bombay',
              'ISI Kolkata',
              'IISER Pune',
              'VNIT Nagpur',
              'NVIDIA (California)',
              'UBS (Switzerland)',
              'TCS Research',
              'Dassault Systèmes',
              'Neilsoft',
              'Microsoft Research Collaborations',
            ].map((institution, idx) => (
              <span
                key={idx}
                className="px-4 py-2 bg-background border border-border/80 rounded-lg text-sm font-semibold text-foreground shadow-sm hover:border-primary/50 transition-colors"
              >
                {institution}
              </span>
            ))}
          </div>

          <div>
            <Link
              href="/speakers"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-primary/90 transition-all shadow-sm"
            >
              Learn More About Plenary Sessions <Arrow size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-violet-100 via-blue-100 to-cyan-100 dark:from-violet-950 dark:via-blue-950 dark:to-cyan-950 border-y border-border">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Ready to Transform Your Skills?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join 500+ participants who have advanced their careers through the PCCOE Summer School.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/register"
              className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-primary/90 transition-colors"
            >
              Register Now <Arrow size={18} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-background text-foreground font-semibold rounded-md hover:bg-muted transition-colors border border-border"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
