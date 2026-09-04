import Link from 'next/link'
import Image from 'next/image'
import { CalendarDays, MapPin, Users2 } from 'lucide-react'
import { Arrow } from '@/components/ui/arrow'

export function HeroSection() {
  return (
    <section className="pt-16 pb-20 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      {/* Decorative background blur shapes for glassmorphism highlights */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-violet-200/20 dark:bg-violet-900/10 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-72 h-72 bg-sky-200/20 dark:bg-sky-900/10 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted border border-border mb-6 animate-fadeInDown">
          <span className="text-sm font-medium text-foreground">June 22-27, 2026</span>
          <span className="inline-block w-1 h-1 bg-primary rounded-full animate-pulse-subtle"></span>
          <span className="text-sm text-muted-foreground">Pune, India</span>
        </div>

        {/* Organizer Eyebrow */}
        <div className="mb-4 animate-fadeInUp" style={{ animationDelay: '0.05s' }}>
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest bg-primary/10 text-primary px-3.5 py-1.5 rounded-full border border-primary/20">
            PCCoE
          </span>
          <span className="block text-sm sm:text-base font-semibold uppercase tracking-wider text-muted-foreground mt-3">
            IEEE CIS Summer School hosted by Department of CSE (AI &amp; ML), PCCOE
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
          Master Fine-Tuning LLMs &amp; Inference Optimization
        </h1>

        {/* Subheading */}
        <p className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
          An intensive 6-day residential summer school hosted by Department of CSE (AI &amp; ML), PCCOE. Learn from leading researchers and industry experts how to build, optimize, and deploy large language models for real-world applications.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12 animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
          <Link
            href="/register"
            className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
          >
            Register Now <Arrow size={18} />
          </Link>
          <Link
            href="/program"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-muted text-foreground font-semibold rounded-md hover:bg-muted/80 transition-all duration-300 border border-border hover:shadow-lg hover:-translate-y-0.5"
          >
            View Program
          </Link>
        </div>

        {/* Partner Logos */}
        <div className="mb-12 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">
            Organized &amp; Supported By
          </p>
          <div className="flex flex-row flex-nowrap items-center justify-start lg:justify-center gap-6 md:gap-10 bg-white/50 dark:bg-white/5 backdrop-blur-md border border-white/30 dark:border-white/5 py-6 px-8 rounded-xl shadow-md max-w-4xl mx-auto overflow-x-auto no-scrollbar">
            {/* 1. IEEE CIS */}
            <div className="relative h-20 w-56 flex-shrink-0">
              <Image
                src="/ieeecis.png"
                alt="IEEE CIS Logo"
                fill
                sizes="(max-width: 768px) 224px, 224px"
                className="object-contain"
              />
            </div>
            {/* 2. ARC */}
            <div className="relative h-20 w-44 flex-shrink-0">
              <Image
                src="/arc-logo.svg"
                alt="ARC Logo"
                fill
                sizes="(max-width: 768px) 176px, 176px"
                className="object-contain"
              />
            </div>
            {/* 3. IEEE Pune Section */}
            <div className="relative h-20 w-36 flex-shrink-0">
              <Image
                src="/ieeepune.png"
                alt="IEEE Pune Section Logo"
                fill
                sizes="(max-width: 768px) 144px, 144px"
                className="object-contain"
              />
            </div>
            {/* 4. PCCoE */}
            <div className="relative h-20 w-36 flex-shrink-0">
              <Image
                src="/pccoe.jpeg"
                alt="PCCoE Logo"
                fill
                sizes="(max-width: 768px) 144px, 144px"
                className="object-contain rounded-md"
              />
            </div>
          </div>
        </div>

        {/* Info Cards with enlarged, styled icons */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-border">
          <div className="group flex flex-col items-center gap-2 py-4 px-3 rounded-xl hover:bg-muted/40 transition-colors">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-1 border border-primary/20 shadow-sm transition-transform duration-300 group-hover:scale-110">
              <CalendarDays className="w-8 h-8" />
            </div>
            <div className="font-bold text-foreground text-base">June 22-27, 2026</div>
            <div className="text-sm text-muted-foreground">6 Days Intensive Program</div>
          </div>

          <div className="group flex flex-col items-center gap-2 py-4 px-3 rounded-xl hover:bg-muted/40 transition-colors">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-1 border border-primary/20 shadow-sm transition-transform duration-300 group-hover:scale-110">
              <MapPin className="w-8 h-8" />
            </div>
            <div className="font-bold text-foreground text-base">PCCoE Pune</div>
            <div className="text-sm text-muted-foreground">Pune, India</div>
          </div>

          <div className="group flex flex-col items-center gap-2 py-4 px-3 rounded-xl hover:bg-muted/40 transition-colors">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-1 border border-primary/20 shadow-sm transition-transform duration-300 group-hover:scale-110">
              <Users2 className="w-8 h-8" />
            </div>
            <div className="font-bold text-foreground text-base">Plenary Presenters</div>
            <div className="text-sm text-muted-foreground">Industry &amp; Academia Leaders</div>
          </div>
        </div>
      </div>
    </section>
  )
}
