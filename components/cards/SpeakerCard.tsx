import { Card } from '@/components/ui/card'
import { PlenaryPresenter, Instructor } from '@/data/speakers'

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

export function SpeakerCard({ speaker, type }: SpeakerCardProps) {
  const isPlenaryPresenter = type === 'plenary' && 'dayNumber' in speaker
  const isInstructor = type === 'instructor' && 'topics' in speaker

  return (
    <Card className="flex flex-col h-full overflow-hidden border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      {/* Image Placeholder */}
      <div className="w-full h-48 bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-800 flex-shrink-0"></div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="font-bold text-lg text-foreground mb-1">{speaker.name}</h3>
        <p className="text-sm text-muted-foreground mb-3">{speaker.title}</p>
        <p className="text-xs font-medium text-primary mb-4">{speaker.organization}</p>

        {isPlenaryPresenter && (
          <>
            <p className="text-sm font-semibold text-foreground mb-2">
              {(speaker as PlenaryPresenter).topic}
            </p>
            <p className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded w-fit mb-3">
              Day {(speaker as PlenaryPresenter).dayNumber}
            </p>
          </>
        )}

        {isInstructor && (
          <div className="flex flex-wrap gap-1 mb-3">
            {(speaker as Instructor).topics.map((topic) => (
              <span key={topic} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                {topic}
              </span>
            ))}
          </div>
        )}

        <p className="text-sm text-muted-foreground leading-relaxed flex-grow">{speaker.bio}</p>

        {(speaker.linkedin || speaker.scholar) && (
          <div className="flex gap-2.5 mt-4 border-t border-border pt-4 items-center flex-shrink-0">
            {speaker.linkedin && (
              <a
                href={speaker.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors p-1.5 hover:bg-muted rounded"
                aria-label={`${speaker.name} LinkedIn`}
              >
                <LinkedinIcon className="w-6 h-6" />
              </a>
            )}
            {speaker.scholar && (
              <a
                href={speaker.scholar}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors p-1.5 hover:bg-muted rounded"
                aria-label={`${speaker.name} Google Scholar`}
              >
                <ScholarIcon className="w-6 h-6" />
              </a>
            )}
          </div>
        )}
      </div>
    </Card>
  )
}
