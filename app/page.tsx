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

export default function Home() {
  const outcomes = [
    'Fine-tune open-source LLMs (LLaMA, Mistral, Phi) using LoRA/QLoRA',
    'Apply quantization (GPTQ, AWQ) to reduce model size and latency',
    'Set up and benchmark LLM serving with vLLM and TGI',
    'Build end-to-end fine-tuning and deployment pipelines',
    'Develop production-grade capstone projects with real applications',
    'Network with industry leaders and earn IEEE CIS certificate',
  ]

  const testimonials = [
    {
      name: 'Dr. Aniruddha Joshi',
      role: 'Founder & CEO',
      company: 'Atreya Innovations',
      quote: 'This program bridges the gap between theory and real-world deployment. Essential for anyone building AI systems.',
    },
    {
      name: 'Dr. Pratap Sanap',
      role: 'Head of Research & Innovation',
      company: 'Neilsoft',
      quote: 'The hands-on clinics and capstone projects provide invaluable experience in productionizing LLMs at scale.',
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Stats Section */}
      <StatsSection />

      {/* Why Attend Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-4">Why Attend?</h2>
          <p className="text-center text-lg text-muted-foreground mb-12">
            A 6-day intensive residential program at Pimpri Chinchwad College of Engineering. Learn from world-class researchers and industry experts in fine-tuning LLMs and inference optimization.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {outcomes.map((outcome, idx) => (
              <div key={idx} className="flex gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground">{outcome}</span>
              </div>
            ))}
          </div>

          <div className="bg-muted rounded-lg p-8 border border-border text-center">
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

      {/* Speakers Preview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted border-y border-border">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Expert Instructors</h2>
            <p className="text-lg text-muted-foreground">
              Learn from leading researchers and industry practitioners in computational intelligence
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              {
                name: 'Dr. Debmalya Biswas',
                role: 'Executive Director, UBS Switzerland',
                topic: 'Privacy & Security in LLM Systems',
              },
              {
                name: 'Dr. Aniruddha Joshi',
                role: 'Founder & CEO, Atreya Innovations',
                topic: 'AI in Healthcare & Diagnostics',
              },
              {
                name: 'Dr. Pratap Sanap',
                role: 'Head R&I, Neilsoft Pune',
                topic: 'Deploying LLMs at Scale',
              },
            ].map((speaker, idx) => (
              <Card 
                key={idx} 
                className="p-6 border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                style={{ animation: `fadeInUp 0.6s ease-out ${0.1 * idx}s both` }}
              >
                <div className="w-full h-40 bg-gradient-to-br from-violet-200 to-blue-200 rounded-lg mb-4"></div>
                <h3 className="font-bold text-foreground mb-1">{speaker.name}</h3>
                <p className="text-sm text-muted-foreground mb-2">{speaker.role}</p>
                <p className="text-sm font-medium text-primary">{speaker.topic}</p>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/speakers"
              className="group inline-flex items-center gap-2 px-6 py-2 text-primary font-semibold transition-all"
            >
              View All Speakers <Arrow size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-12">Participant Feedback</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, idx) => (
              <Card 
                key={idx} 
                className="p-8 border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                style={{ animation: `fadeInUp 0.6s ease-out ${0.1 * idx}s both` }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-foreground italic mb-6">&quot;{testimonial.quote}&quot;</p>
                <div>
                  <p className="font-bold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </Card>
            ))}
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
