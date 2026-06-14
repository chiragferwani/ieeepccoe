import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FAQ — PCCOE Summer School 2026',
  description:
    'Frequently asked questions about the PCCOE Summer School 2026 — eligibility, fees, accommodation, schedule, certificates, and registration details.',
  alternates: { canonical: 'https://pccoesummerschool.vercel.app/faq' },
  openGraph: {
    title: 'FAQ — PCCOE Summer School 2026',
    description: 'All your questions about the IEEE CIS PCCOE Summer School 2026 answered — who can attend, what to bring, costs, and more.',
    url: 'https://pccoesummerschool.vercel.app/faq',
  },
}

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
