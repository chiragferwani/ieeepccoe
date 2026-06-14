import type { Metadata } from 'next'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { SpeakerCard } from '@/components/cards/SpeakerCard'
import { plenaryPresenters, instructors } from '@/data/speakers'
import { Arrow } from '@/components/ui/arrow'

export const metadata: Metadata = {
  title: 'Speakers & Instructors — PCCOE Summer School 2026',
  description:
    'Meet the world-class researchers and industry experts speaking at PCCOE Summer School 2026. Leaders from IEEE, UBS Switzerland, Neilsoft, Atreya Innovations, and top academic institutions.',
  alternates: { canonical: 'https://pccoesummerschool.vercel.app/speakers' },
  openGraph: {
    title: 'Speakers & Instructors — PCCOE Summer School 2026',
    description: 'Learn from 10+ expert speakers from IEEE, industry, and academia at the PCCOE Summer School 2026 on LLM Fine-Tuning & Inference Optimization.',
    url: 'https://pccoesummerschool.vercel.app/speakers',
  },
}

export default function SpeakersPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Expert Speakers & Instructors</h1>
          <p className="text-xl text-muted-foreground">
            Learn from world-leading researchers and industry practitioners in computational intelligence
          </p>
        </div>
      </section>

      {/* Plenary Presenters */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-4">Plenary Presenters</h2>
          <p className="text-muted-foreground mb-12">
            Keynote speakers who will inspire and guide you through six days of intensive learning
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {plenaryPresenters.map((presenter) => (
              <SpeakerCard key={presenter.id} speaker={presenter} type="plenary" />
            ))}
          </div>
        </div>
      </section>

      {/* Instructors */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted border-y border-border">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-4">Tutorial Instructors</h2>
          <p className="text-muted-foreground mb-12">
            Experienced educators who will guide you through hands-on labs and practical applications
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {instructors.map((instructor) => (
              <SpeakerCard key={instructor.id} speaker={instructor} type="instructor" />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Learn from the Best?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Secure your spot in this exclusive summer school program
          </p>
          <a
            href="/register"
            className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-primary/90 transition-colors"
          >
            Register Now <Arrow size={18} />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}
