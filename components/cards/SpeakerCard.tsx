import Image from 'next/image'
import { Card } from '@/components/ui/card'
import { PlenaryPresenter, Instructor } from '@/data/speakers'
import { cn } from '@/lib/utils'

interface SpeakerCardProps {
  speaker: PlenaryPresenter | Instructor
  type: 'plenary' | 'instructor'
}

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.8v8.37h2.8v-4.87c0-.26.05-.52.12-.7a1.16 1.16 0 0 1 1.07-.78c.76 0 1.33.58 1.33 1.62v4.73zm-11-8.37H4.7v8.37h2.8zm-1.4-2.8a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z" />
  </svg>
)

const ScholarIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2L1 9l11 7 9-5.73V17h2V9L12 2zM4 11.23V15c0 1.66 3.58 3 8 3s8-1.34 8-3v-3.77l-8 5.1-8-5.1z" />
  </svg>
)

const getInitials = (name: string) => {
  const cleanName = name.replace(/\b(Dr|Prof|Mr|Ms|Fellow|IEEE|Researcher|Assistant|Associate|Professor)\b\.?/gi, '').trim()
  const parts = cleanName.split(/\s+/)
  if (parts.length === 1) return parts[0].substring(0, 2).toUpperCase()
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
}

export function SpeakerCard({ speaker, type }: SpeakerCardProps) {
  const isPlenaryPresenter = type === 'plenary' && 'dayNumber' in speaker
  const isInstructor = type === 'instructor' && 'topics' in speaker

  const imageAlignClass = speaker.imageAlign === 'top' 
    ? 'object-top' 
    : speaker.imageAlign === 'bottom' 
      ? 'object-bottom' 
      : 'object-center'

  let bannerBgClass = 'bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-800'
  let dayBadgeClass = 'bg-muted text-muted-foreground border-border'

  if (isPlenaryPresenter) {
    const day = (speaker as PlenaryPresenter).dayNumber
    switch (day) {
      case 1:
        bannerBgClass = 'bg-gradient-to-br from-violet-500/20 via-fuchsia-500/10 to-transparent'
        dayBadgeClass = 'bg-violet-500/10 text-violet-700 dark:text-violet-300 border-violet-500/20'
        break
      case 2:
        bannerBgClass = 'bg-gradient-to-br from-cyan-500/20 via-teal-500/10 to-transparent'
        dayBadgeClass = 'bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border-cyan-500/20'
        break
      case 3:
        bannerBgClass = 'bg-gradient-to-br from-amber-500/20 via-orange-500/10 to-transparent'
        dayBadgeClass = 'bg-amber-500/10 text-amber-700 dark:text-amber-300 border-amber-500/20'
        break
      case 4:
        bannerBgClass = 'bg-gradient-to-br from-emerald-500/20 via-green-500/10 to-transparent'
        dayBadgeClass = 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/20'
        break
      case 5:
        bannerBgClass = 'bg-gradient-to-br from-rose-500/20 via-pink-500/10 to-transparent'
        dayBadgeClass = 'bg-rose-500/10 text-rose-700 dark:text-rose-300 border-rose-500/20'
        break
      case 6:
        bannerBgClass = 'bg-gradient-to-br from-indigo-500/20 via-blue-500/10 to-transparent'
        dayBadgeClass = 'bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border-indigo-500/20'
        break
    }
  } else {
    bannerBgClass = 'bg-gradient-to-br from-blue-500/10 via-indigo-500/5 to-transparent'
  }

  return (
    <Card className="relative flex flex-col h-full overflow-hidden border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 py-0">
      {/* Banner Header */}
      <div className={cn("w-full h-24 flex-shrink-0 border-b border-border/40", bannerBgClass)}></div>

      {/* Social Links top-right */}
      {(speaker.linkedin || speaker.scholar) && (
        <div className="absolute top-3 right-3 z-10 flex gap-1.5">
          {speaker.linkedin && (
            <a
              href={speaker.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary bg-background/60 hover:bg-background/90 border border-border/40 backdrop-blur-sm rounded-full p-2 shadow-sm transition-all duration-200 flex items-center justify-center"
              aria-label={`${speaker.name} LinkedIn`}
            >
              <LinkedinIcon className="w-[18px] h-[18px]" />
            </a>
          )}
          {speaker.scholar && (
            <a
              href={speaker.scholar}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary bg-background/60 hover:bg-background/90 border border-border/40 backdrop-blur-sm rounded-full p-2 shadow-sm transition-all duration-200 flex items-center justify-center"
              aria-label={`${speaker.name} Google Scholar`}
            >
              <ScholarIcon className="w-[18px] h-[18px]" />
            </a>
          )}
        </div>
      )}

      {/* Avatar */}
      <div className="relative w-32 h-32 rounded-full border-4 border-background bg-card mx-auto -mt-16 shadow-md overflow-hidden flex-shrink-0 flex items-center justify-center">
        {speaker.image ? (
          <Image
            src={speaker.image}
            alt={speaker.name}
            fill
            sizes="128px"
            className={cn("object-cover transition-transform duration-500 hover:scale-105", imageAlignClass)}
            priority={type === 'plenary'}
          />
        ) : (
          <div className="text-3xl font-bold text-slate-400 dark:text-slate-500 tracking-wider select-none">
            {getInitials(speaker.name)}
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="p-6 pt-4 flex flex-col flex-grow text-center items-center">
        <h3 className="font-bold text-lg text-foreground mb-1">{speaker.name}</h3>
        <p className="text-sm text-muted-foreground mb-2">{speaker.title}</p>
        <span className="inline-flex items-center justify-center text-xs font-semibold text-primary mb-4 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 leading-none h-6 select-none">
          {speaker.organization}
        </span>

        {isPlenaryPresenter && (
          <div className="flex flex-col items-center w-full">
            <p className="text-sm font-semibold text-foreground mb-2 px-4 line-clamp-2 min-h-[40px]">
              {(speaker as PlenaryPresenter).topic}
            </p>
            <span className={cn("inline-flex items-center justify-center text-xs font-semibold px-2.5 py-1 rounded border w-fit mb-4 leading-none h-6 select-none", dayBadgeClass)}>
              Day {(speaker as PlenaryPresenter).dayNumber}
            </span>
          </div>
        )}

        {isInstructor && (
          <div className="flex flex-wrap gap-1 justify-center mb-4 min-h-[32px] items-center">
            {(speaker as Instructor).topics.map((topic) => (
              <span
                key={topic}
                className="inline-flex items-center justify-center text-[10px] font-medium bg-primary/10 text-primary px-2.5 py-1 rounded-full leading-none h-5 select-none"
              >
                {topic}
              </span>
            ))}
          </div>
        )}

        <p className="text-sm text-muted-foreground leading-relaxed flex-grow text-left w-full border-t border-border/40 pt-4">
          {speaker.bio}
        </p>
      </div>
    </Card>
  )
}
