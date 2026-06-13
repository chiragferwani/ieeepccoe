import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Calendar, MapPin } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted border border-border mb-6 animate-fadeInDown">
          <span className="text-sm font-medium text-foreground">June 22-27, 2026</span>
          <span className="inline-block w-1 h-1 bg-primary rounded-full animate-pulse-subtle"></span>
          <span className="text-sm text-muted-foreground">Pune, India</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
          Master Fine-Tuning LLMs & Inference Optimization
        </h1>

        {/* Subheading */}
        <p className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
          An intensive 6-day residential summer school hosted by Pimpri Chinchwad College of Engineering. Learn from leading researchers and industry experts how to build, optimize, and deploy large language models for real-world applications.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12 animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
          <Link
            href="/register"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
          >
            Register Now <ArrowRight size={18} />
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
            Organized & Supported By
          </p>
          <div className="flex flex-row flex-nowrap items-center justify-start lg:justify-center gap-6 md:gap-10 bg-muted/40 py-6 px-8 rounded-xl border border-border/60 max-w-4xl mx-auto overflow-x-auto no-scrollbar">
            <div className="relative h-20 w-56 flex-shrink-0">
              <Image
                src="/ieeecis.png"
                alt="IEEE CIS Logo"
                fill
                sizes="(max-width: 768px) 224px, 224px"
                className="object-contain"
              />
            </div>
            <div className="relative h-20 w-36 flex-shrink-0">
              <Image
                src="/ieeecs.jpg"
                alt="IEEE CS Logo"
                fill
                sizes="(max-width: 768px) 144px, 144px"
                className="object-contain rounded-sm"
              />
            </div>
            <div className="relative h-20 w-36 flex-shrink-0">
              <Image
                src="/ieeepune.png"
                alt="IEEE Pune Section Logo"
                fill
                sizes="(max-width: 768px) 144px, 144px"
                className="object-contain"
              />
            </div>
            <div className="relative h-20 w-36 flex-shrink-0">
              <Image
                src="/pccoe.jpeg"
                alt="PCCoE Pune Logo"
                fill
                sizes="(max-width: 768px) 144px, 144px"
                className="object-contain rounded-md"
              />
            </div>
          </div>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-border">
          <div className="flex flex-col items-center gap-2 py-4">
            <Calendar className="w-6 h-6 text-primary" />
            <div className="font-semibold text-foreground">June 22-27, 2026</div>
            <div className="text-sm text-muted-foreground">6 Days Intensive Program</div>
          </div>
          <div className="flex flex-col items-center gap-2 py-4">
            <MapPin className="w-6 h-6 text-primary" />
            <div className="font-semibold text-foreground">PCCoE Pune</div>
            <div className="text-sm text-muted-foreground">Pune, India</div>
          </div>
          <div className="flex flex-col items-center gap-2 py-4">
            <div className="w-6 h-6 text-primary">🎓</div>
            <div className="font-semibold text-foreground">15+ Expert Speakers</div>
            <div className="text-sm text-muted-foreground">Industry & Academia Leaders</div>
          </div>
        </div>
      </div>
    </section>
  )
}
