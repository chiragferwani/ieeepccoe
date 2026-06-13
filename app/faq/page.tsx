'use client'

import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { faqs } from '@/data/registration'

export default function FAQPage() {
  const additionalFaqs = [
    {
      id: 'add-1',
      question: 'What is the language of instruction?',
      answer: 'The course is taught in English. Materials are provided in English, and most participants are fluent in English.',
    },
    {
      id: 'add-2',
      question: 'Is accommodation included in the registration fee?',
      answer:
        'Accommodation is not included, but we have negotiated special group rates with nearby hotels. Details are provided upon registration.',
    },
    {
      id: 'add-3',
      question: 'What happens if I need to withdraw after the program starts?',
      answer:
        'If circumstances force you to withdraw after the program begins, we can discuss partial refunds or credit toward next year on a case-by-case basis.',
    },
    {
      id: 'add-4',
      question: 'Will I receive a certificate?',
      answer:
        'Yes! Upon successful completion of the 6-day program, you will receive an official IEEE CIS Certificate of Completion, which is recognized worldwide.',
    },
    {
      id: 'add-5',
      question: 'Can I audit the program without earning a certificate?',
      answer:
        'The summer school is primarily for participants seeking the certificate and complete experience. Auditing arrangements can be discussed – contact us directly.',
    },
    {
      id: 'add-6',
      question: 'What is the venue like? Will it be comfortable for learning?',
      answer:
        'The summer school is held at Meiji University in Tokyo, which features modern classrooms, computer labs, and a welcoming campus environment designed for intensive learning.',
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-muted-foreground">Find answers to common questions about the PCCOE Summer School</p>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-4xl mx-auto">
          {/* Program FAQs */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-8">Program & Learning</h2>
            <Accordion className="space-y-2">
              {faqs.slice(0, 4).map((faq) => (
                <AccordionItem key={faq.id} value={faq.id} className="border border-border rounded-lg px-6">
                  <AccordionTrigger className="font-semibold text-foreground hover:text-primary transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-2">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Registration & Pricing FAQs */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-8">Registration & Pricing</h2>
            <Accordion className="space-y-2">
              {faqs.slice(4, 8).map((faq) => (
                <AccordionItem key={faq.id} value={faq.id} className="border border-border rounded-lg px-6">
                  <AccordionTrigger className="font-semibold text-foreground hover:text-primary transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-2">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Additional FAQs */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-8">General Questions</h2>
            <Accordion className="space-y-2">
              {additionalFaqs.map((faq) => (
                <AccordionItem key={faq.id} value={faq.id} className="border border-border rounded-lg px-6">
                  <AccordionTrigger className="font-semibold text-foreground hover:text-primary transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-2">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted border-y border-border">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Didn&apos;t Find Your Answer?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Get in touch with our team – we&apos;re happy to help with any additional questions
          </p>
          <a
            href="/contact"
            className="inline-block px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-primary/90 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}
