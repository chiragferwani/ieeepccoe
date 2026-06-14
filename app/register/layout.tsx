import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Register — PCCOE Summer School 2026',
  description:
    'Register for the PCCOE Summer School 2026 on Fine-Tuning LLMs & Inference Optimization. Limited to 80 participants. June 22–27, 2026 at PCCoE Pune. IEEE CIS certified program.',
  alternates: { canonical: 'https://pccoesummerschool.vercel.app/register' },
  openGraph: {
    title: 'Register Now — PCCOE Summer School 2026',
    description: 'Secure your spot at the IEEE CIS PCCOE Summer School 2026. Only 80 seats available. Fine-tune LLMs, earn a certificate, and network with AI experts.',
    url: 'https://pccoesummerschool.vercel.app/register',
  },
}

export default function RegisterLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
