'use client'

import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { RegistrationForm } from '@/components/sections/RegistrationForm'

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-10 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-muted/60 to-background border-b border-border">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm font-semibold text-primary mb-3 tracking-wide uppercase">IEEE CIS Summer School 2026</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Registration Application
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Complete the form below to apply for the 6-day intensive program on Fine-Tuning LLMs &amp; Inference Optimization. June 22–27, 2026 at PCCoE, Pune.
          </p>
        </div>
      </section>

      {/* Registration Form — inline on the page */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-3xl mx-auto">
          <RegistrationForm />
        </div>
      </section>

      {/* Help Banner */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 bg-muted/50 border-t border-border">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-lg font-bold text-foreground mb-2">Need Help?</h2>
          <p className="text-muted-foreground mb-4 text-sm">
            Contact the registration team if you have any questions.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
            <a href="mailto:pallavi.dhade@pccoepune.org" className="text-primary hover:underline font-medium">
              pallavi.dhade@pccoepune.org
            </a>
            <span className="hidden sm:inline text-border">|</span>
            <a href="tel:+917620343611" className="text-primary hover:underline font-medium">
              +91 76203 43611
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
