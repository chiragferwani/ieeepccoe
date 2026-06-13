'use client'

import { useState } from 'react'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { RegistrationCard } from '@/components/cards/RegistrationCard'
import { registrationTiers, registrationBenefits } from '@/data/registration'
import { Card } from '@/components/ui/card'

export default function RegisterPage() {
  const [mode, setMode] = useState<'online' | 'offline'>('offline')
  const [showModal, setShowModal] = useState(false)

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Register Now</h1>
          <p className="text-xl text-muted-foreground">
            Secure your spot at the PCCOE Summer School on Fine-Tuning LLMs & Inference Optimization. June 22-27, 2026 in Pune, India.
          </p>
        </div>
      </section>

      {/* Registration Options */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          {/* Attendance Mode Selector */}
          <div className="flex justify-center mb-12">
            <div className="bg-muted p-1.5 rounded-lg inline-flex items-center gap-1 border border-border">
              <button
                onClick={() => setMode('offline')}
                className={`px-6 py-2.5 rounded-md font-semibold text-sm transition-all ${
                  mode === 'offline'
                    ? 'bg-primary text-primary-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Offline (In-person)
              </button>
              <button
                onClick={() => setMode('online')}
                className={`px-6 py-2.5 rounded-md font-semibold text-sm transition-all ${
                  mode === 'online'
                    ? 'bg-primary text-primary-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Online (Virtual)
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
            {registrationTiers.map((tier) => (
              <RegistrationCard
                key={tier.id}
                tier={tier}
                mode={mode}
                onRegisterClick={() => setShowModal(true)}
              />
            ))}
          </div>

          {/* Group Registration Info */}
          <div className="bg-muted rounded-lg p-8 border border-border">
            <h3 className="text-xl font-bold text-foreground mb-3">Looking for Group Registration?</h3>
            <p className="text-foreground mb-4">
              We offer special pricing for groups of 5 or more participants. Contact us for a customized quote.
            </p>
            <a href="mailto:pallavi.dhade@pccoepune.org" className="inline-block text-primary font-semibold hover:underline">
              Email us for group rates →
            </a>
          </div>
        </div>
      </section>

      {/* Benefits Overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted border-y border-border">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">What You Get</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {registrationBenefits.map((benefit) => (
              <Card key={benefit.id} className="p-6 border border-border hover:shadow-md transition-shadow">
                <div className="text-4xl mb-3">{benefit.icon === 'users' ? '👥' : benefit.icon === 'code' ? '💻' : benefit.icon === 'network' ? '🌐' : benefit.icon === 'award' ? '🏆' : benefit.icon === 'book-open' ? '📚' : '⚡'}</div>
                <h3 className="font-bold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Registration FAQ</h2>

          <div className="space-y-4">
            {[
              {
                q: 'What is the difference between the registration tiers?',
                qId: 'faq-tier-diff',
                a: 'Tiers are designed to offer appropriate pricing based on your professional/academic category, with special discounts for IEEE and IEEE CIS members.',
              },
              {
                q: 'Do I need to register for the entire 6 days?',
                qId: 'faq-duration',
                a: 'Yes, the curriculum is sequential and designed to be experienced as a complete program. Individual day attendance is not available.',
              },
              {
                q: 'What is your cancellation policy?',
                qId: 'faq-cancel',
                a: 'Cancellations before June 15 receive a full refund. Cancellations between June 15-20 receive a 50% refund. Cancellations after June 20 are non-refundable.',
              },
              {
                q: 'When is the early bird discount deadline?',
                qId: 'faq-early-bird',
                a: 'Early bird pricing is available until June 5, 2026. Register early to secure your offline seat and group discounts.',
              },
              {
                q: 'Is there financial assistance available?',
                qId: 'faq-assistance',
                a: 'Limited travel and accommodation grants are available for students travelling from outside Pune. Contact the organizers with your request.',
              },
              {
                q: 'Do I need to pay the full amount upfront?',
                qId: 'faq-payment',
                a: 'Professional and group registrations can arrange invoice-based payments or custom options. Contact us for assistance.',
              },
            ].map((item, idx) => (
              <div key={idx} className="border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
                <h3 className="font-bold text-foreground mb-2" id={item.qId}>{item.q}</h3>
                <p className="text-muted-foreground">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Flow */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted border-y border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">How to Register</h2>

          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4 mb-12 max-w-3xl mx-auto">
            {['Choose Tier & Mode', 'Enter Info', 'Payment', 'Confirmation'].map((step, idx, arr) => (
              <div key={idx} className="flex flex-col md:flex-row items-center flex-1 w-full">
                <div className="flex flex-col items-center flex-1">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg mb-3 shadow-md border border-border">
                    {idx + 1}
                  </div>
                  <p className="font-semibold text-foreground text-center text-sm">{step}</p>
                </div>
                {idx < arr.length - 1 && (
                  <div className="flex items-center justify-center text-primary/60 py-2 md:py-0 md:px-2">
                    {/* Arrow pointing down on mobile, pointing right on desktop */}
                    <svg
                      className="w-5 h-5 hidden md:block animate-bounce-right"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                    <svg
                      className="w-5 h-5 block md:hidden animate-bounce-down"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="bg-background rounded-lg p-8 border border-border text-center">
            <p className="text-foreground mb-6">
              Ready to register? Start by selecting your tier above, then click &quot;Register Now&quot; to complete your registration.
            </p>
            <button
              onClick={() => setShowModal(true)}
              className="inline-block px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-primary/90 transition-colors"
            >
              Start Registration
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Have Questions?</h2>
          <p className="text-lg text-muted-foreground mb-8">Contact our registration team for assistance</p>
          <div className="space-y-2">
            <p className="text-foreground">
              <strong>Email:</strong>{' '}
              <a href="mailto:pallavi.dhade@pccoepune.org" className="text-primary hover:underline">
                pallavi.dhade@pccoepune.org
              </a>
            </p>
            <p className="text-foreground">
              <strong>Phone:</strong>{' '}
              <a href="tel:+917620343611" className="text-primary hover:underline">
                +917620343611
              </a>
            </p>
          </div>
        </div>
      </section>

      <Footer />

      {/* Modal Dialog */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-background border border-border rounded-xl p-8 max-w-md w-full shadow-2xl relative transform transition-all duration-300 scale-100 animate-scale-up">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground text-2xl font-semibold transition-colors leading-none animate-none"
              aria-label="Close modal"
            >
              &times;
            </button>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
                📢
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Registration Starts Soon!</h3>
              <p className="text-muted-foreground mb-6">
                Thank you for your interest in the PCCOE Summer School. Registration portals will open shortly.
              </p>
              <div className="bg-muted p-4 rounded-lg border border-border text-left mb-6 text-sm">
                <p className="text-foreground font-semibold mb-1">Want to secure a seat early?</p>
                <p className="text-muted-foreground mb-2">
                  Send an email to our admissions team to get pre-registered and notified the moment portals open.
                </p>
                <a
                  href="mailto:pallavi.dhade@pccoepune.org"
                  className="text-primary hover:underline font-medium inline-flex items-center gap-1"
                >
                  pallavi.dhade@pccoepune.org &rarr;
                </a>
              </div>
              <button
                onClick={() => setShowModal(false)}
                className="w-full py-3 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-primary/90 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
