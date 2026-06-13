import { Card } from '@/components/ui/card'
import { Brain, Zap, Users, Book, Code, Award } from 'lucide-react'

interface Highlight {
  id: string
  icon: React.ReactNode
  title: string
  description: string
  dayAccentColor?: string
}

const highlights: Highlight[] = [
  {
    id: 'nn',
    icon: <Brain className="w-6 h-6" />,
    title: 'Neural Networks',
    description: 'Deep dive into artificial neural networks, architectures, and modern deep learning frameworks.',
  },
  {
    id: 'ea',
    icon: <Zap className="w-6 h-6" />,
    title: 'Evolutionary Algorithms',
    description: 'Master genetic algorithms, particle swarm optimization, and other bio-inspired techniques.',
  },
  {
    id: 'fuzzy',
    icon: <Users className="w-6 h-6" />,
    title: 'Fuzzy Logic',
    description: 'Learn fuzzy systems, inference engines, and control applications.',
  },
  {
    id: 'practical',
    icon: <Code className="w-6 h-6" />,
    title: 'Hands-on Labs',
    description: 'Build real systems using Python, TensorFlow, PyTorch, and scikit-learn.',
  },
  {
    id: 'networking',
    icon: <Users className="w-6 h-6" />,
    title: 'Expert Networking',
    description: 'Connect with leading researchers and industry professionals in the field.',
  },
  {
    id: 'career',
    icon: <Award className="w-6 h-6" />,
    title: 'Career Growth',
    description: 'Advance your skills and credentials with an IEEE CIS certificate.',
  },
]

export function HighlightGrid() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">What You&apos;ll Learn</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive curriculum covering all major areas of computational intelligence with practical applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((highlight, idx) => (
            <Card
              key={highlight.id}
              className="p-6 hover:shadow-lg transition-all duration-300 border border-border hover:border-primary/30 cursor-default hover:-translate-y-1"
              style={{ animation: `fadeInUp 0.6s ease-out ${0.05 * idx}s both` }}
            >
              <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center text-primary mb-4">
                {highlight.icon}
              </div>
              <h3 className="font-semibold text-foreground mb-2">{highlight.title}</h3>
              <p className="text-sm text-muted-foreground">{highlight.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
