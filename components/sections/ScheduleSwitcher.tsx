'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { schedules } from '@/data/schedule'
import { Clock, User } from 'lucide-react'

const dayColorMap = {
  violet: 'bg-[hsl(270,72%,60%)] text-white',
  cyan: 'bg-[hsl(220,100%,64%)] text-white',
  amber: 'bg-[hsl(70,115%,72%)] text-foreground',
  emerald: 'bg-[hsl(150,130%,65%)] text-foreground',
  rose: 'bg-[hsl(10,120%,68%)] text-white',
  indigo: 'bg-[hsl(270,100%,59%)] text-white',
}

const sessionTypeConfig = {
  plenary: { badge: 'Plenary', color: 'bg-primary/10 text-primary border border-primary/20' },
  lecture: { badge: 'Lecture', color: 'bg-blue-50 text-blue-700 border border-blue-200 dark:bg-blue-950 dark:text-blue-300 dark:border-blue-700' },
  lab: { badge: 'Lab', color: 'bg-purple-50 text-purple-700 border border-purple-200 dark:bg-purple-950 dark:text-purple-300 dark:border-purple-700' },
  clinic: { badge: 'Clinic', color: 'bg-emerald-50 text-emerald-700 border border-emerald-200 dark:bg-emerald-950 dark:text-emerald-300 dark:border-emerald-700' },
  discussion: { badge: 'Discussion', color: 'bg-gray-100 text-gray-700 border border-gray-300 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700' },
  break: { badge: 'Break', color: 'bg-gray-100 text-gray-600 border border-gray-300 dark:bg-gray-900 dark:text-gray-400 dark:border-gray-700' },
  lunch: { badge: 'Lunch', color: 'bg-orange-50 text-orange-700 border border-orange-200 dark:bg-orange-950 dark:text-orange-300 dark:border-orange-700' },
  reflection: { badge: 'Reflection', color: 'bg-indigo-50 text-indigo-700 border border-indigo-200 dark:bg-indigo-950 dark:text-indigo-300 dark:border-indigo-700' },
  practical: { badge: 'Lab', color: 'bg-purple-50 text-purple-700 border border-purple-200 dark:bg-purple-950 dark:text-purple-300 dark:border-purple-700' },
}

export function ScheduleSwitcher() {
  const [selectedDay, setSelectedDay] = useState(0)
  const schedule = schedules[selectedDay]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">6-Day Program Schedule</h2>
          <p className="text-lg text-muted-foreground">
            Carefully designed curriculum with expert instruction, hands-on labs, and networking opportunities
          </p>
        </div>

        {/* Day Tabs */}
        <Tabs value={`day-${selectedDay + 1}`} onValueChange={(v) => setSelectedDay(parseInt(v.split('-')[1]) - 1)} className="w-full">
          <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 gap-2 h-auto p-2 bg-muted">
            {schedules.map((s, idx) => (
              <TabsTrigger
                key={idx}
                value={`day-${idx + 1}`}
                className={`flex flex-col gap-1 px-2 py-3 rounded-md text-xs sm:text-sm font-medium transition-all ${
                  selectedDay === idx
                    ? `${dayColorMap[s.dayAccentColor as keyof typeof dayColorMap]} shadow-md`
                    : 'bg-background text-foreground hover:bg-muted/80'
                }`}
              >
                <span className="font-bold">Day {s.dayNumber}</span>
                <span className="hidden sm:block text-xs opacity-75">{s.weekday}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value={`day-${selectedDay + 1}`} className="mt-8">
            {/* Day Header */}
            <div className={`${dayColorMap[schedule.dayAccentColor as keyof typeof dayColorMap]} rounded-lg p-6 mb-8`}>
              <div className="flex flex-col gap-1">
                <h3 className="text-2xl sm:text-3xl font-bold">Day {schedule.dayNumber}</h3>
                <p className="text-sm opacity-90">
                  {schedule.date} • {schedule.weekday}
                </p>
                <p className="text-lg font-semibold mt-2">{schedule.theme}</p>
              </div>
            </div>

            {/* Sessions */}
            <div className="space-y-4">
              {schedule.sessions.map((session) => {
                const config = sessionTypeConfig[session.type as keyof typeof sessionTypeConfig]
                return (
                  <Card key={session.id} className="p-5 border-l-4 border-l-primary hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-4">
                      {/* Time Column */}
                      <div className="flex-shrink-0 font-mono font-bold text-lg text-primary w-16 pt-0.5">{session.time}</div>

                      {/* Content Column */}
                      <div className="flex-grow min-w-0">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                          <div>
                            <h4 className="font-semibold text-foreground text-lg leading-snug">{session.title}</h4>
                            {session.speaker && (
                              <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                                <User size={14} className="flex-shrink-0" />
                                <span>{session.speaker}</span>
                              </div>
                            )}
                          </div>
                          <div className={`self-start sm:self-auto px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap w-fit ${config.color}`}>
                            {config.badge}
                          </div>
                        </div>

                        {session.description && (
                          <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{session.description}</p>
                        )}

                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Clock size={12} className="flex-shrink-0" />
                          <span>{session.duration} minutes</span>
                        </div>
                      </div>
                    </div>
                  </Card>
                )
              })}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
