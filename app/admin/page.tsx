'use client'

import { useState, FormEvent } from 'react'
import Link from 'next/link'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Card } from '@/components/ui/card'
import { ShieldCheck, Lock, Mail, ArrowRight, ArrowLeft } from 'lucide-react'

export default function AdminPortalPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleLogin = (e: FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setTimeout(() => {
      setStatus('error')
    }, 1200)
  }

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />

      <main className="flex-1 flex items-center justify-center pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Ambient lighting effects */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10 pointer-events-none" />

        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 text-primary mb-4 border border-primary/20 shadow-sm">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <h1 className="text-3xl font-bold text-foreground">Admin Portal</h1>
            <p className="text-sm text-muted-foreground mt-2">
              IEEE CIS Summer School Administration
            </p>
            <p className="text-xs text-primary font-medium mt-0.5">
              hosted by Department of CSE (AI &amp; ML), PCCOE
            </p>
          </div>

          <Card className="p-8 border border-border shadow-xl backdrop-blur-sm bg-background/95">
            <form onSubmit={handleLogin} className="space-y-5">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-foreground mb-2">
                  Administrator Email
                </label>
                <div className="relative">
                  <Mail className="w-5 h-5 text-muted-foreground absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="admin@pccoepune.org"
                    className="w-full pl-11 pr-4 py-2.5 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-foreground">
                    Password
                  </label>
                  <span className="text-xs text-primary cursor-pointer hover:underline">
                    Forgot password?
                  </span>
                </div>
                <div className="relative">
                  <Lock className="w-5 h-5 text-muted-foreground absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••••••"
                    className="w-full pl-11 pr-4 py-2.5 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <input
                  type="checkbox"
                  id="remember"
                  className="rounded border-border text-primary focus:ring-primary"
                />
                <label htmlFor="remember" className="text-xs cursor-pointer select-none">
                  Keep me signed in for 30 days
                </label>
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all duration-200 flex items-center justify-center gap-2 shadow-md hover:shadow-lg disabled:opacity-70 text-sm"
              >
                {status === 'loading' ? 'Authenticating...' : 'Sign In to Admin Portal'}
                <ArrowRight size={16} />
              </button>

              {status === 'error' && (
                <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-600 dark:text-red-400 text-xs text-center">
                  Invalid administrative credentials or account not provisioned for v1 portal access.
                </div>
              )}
            </form>

            <div className="mt-6 pt-6 border-t border-border text-center text-xs text-muted-foreground">
              Authorized personnel only. All access attempts are logged and monitored for security.
            </div>
          </Card>

          <div className="mt-8 text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft size={14} /> Back to Event Home
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
