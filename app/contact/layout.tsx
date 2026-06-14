import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us — PCCOE Summer School 2026',
  description:
    'Get in touch with the PCCOE Summer School 2026 organising team. Reach out for registration queries, sponsorship, speaker invitations, or general information.',
  alternates: { canonical: 'https://pccoesummerschool.vercel.app/contact' },
  openGraph: {
    title: 'Contact Us — PCCOE Summer School 2026',
    description: 'Contact the PCCOE Summer School 2026 team for queries about registration, accommodation, or the IEEE CIS Summer School program.',
    url: 'https://pccoesummerschool.vercel.app/contact',
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
