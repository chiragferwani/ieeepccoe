import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { ScheduleSwitcher } from '@/components/sections/ScheduleSwitcher'

export default function ProgramPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Program Overview</h1>
          <p className="text-xl text-muted-foreground">
            A comprehensive six-day curriculum designed to take you from fundamentals to advanced applications
          </p>
        </div>
      </section>

      {/* Program Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-4xl mx-auto">
          <div className="bg-muted rounded-lg p-8 border border-border mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-4">Program Highlights</h2>
            <ul className="space-y-3 text-foreground">
              <li className="flex gap-3">
                <span className="text-primary font-bold">→</span>
                <span>
                  <strong>40+ hours</strong> of intensive instruction combining theory and practice
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">→</span>
                <span>
                  <strong>6 expert plenary speakers</strong> presenting the latest developments in CI
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">→</span>
                <span>
                  <strong>Hands-on labs</strong> with Python, TensorFlow, PyTorch, and scikit-learn
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">→</span>
                <span>
                  <strong>Group projects</strong> with mentorship from experienced instructors
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">→</span>
                <span>
                  <strong>Networking opportunities</strong> with peers, instructors, and industry leaders
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">→</span>
                <span>
                  <strong>Official IEEE CIS certificate</strong> upon successful completion
                </span>
              </li>
            </ul>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-muted rounded-lg p-6 border border-border">
              <h3 className="text-xl font-bold text-foreground mb-4">Daily Structure</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-semibold text-foreground">09:00 - 10:45</p>
                  <p className="text-muted-foreground">Plenary presentation or advanced tutorial</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground">10:45 - 11:00</p>
                  <p className="text-muted-foreground">Coffee break & networking</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground">11:00 - 13:00</p>
                  <p className="text-muted-foreground">Hands-on lab session</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground">13:00 - 14:00</p>
                  <p className="text-muted-foreground">Lunch break</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground">14:00 - 16:00</p>
                  <p className="text-muted-foreground">Practical workshop</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground">16:00 - 17:30</p>
                  <p className="text-muted-foreground">Discussion, Q&A, and evening reception</p>
                </div>
              </div>
            </div>

            <div className="bg-muted rounded-lg p-6 border border-border">
              <h3 className="text-xl font-bold text-foreground mb-4">What&apos;s Included</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-2">
                  <span className="text-primary">✓</span>
                  <span className="text-foreground">All course materials and slides</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">✓</span>
                  <span className="text-foreground">Daily lunch and refreshments</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">✓</span>
                  <span className="text-foreground">Lab environment with all necessary software</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">✓</span>
                  <span className="text-foreground">Networking events and evening reception</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">✓</span>
                  <span className="text-foreground">Instructor contact information</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">✓</span>
                  <span className="text-foreground">IEEE CIS certificate of completion</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Schedule */}
      <ScheduleSwitcher />

      {/* Learning Outcomes */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted border-y border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Learning Outcomes</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              'Understand foundational concepts of neural networks and deep learning',
              'Master evolutionary algorithms and bio-inspired optimization techniques',
              'Learn fuzzy logic and design fuzzy control systems',
              'Implement and apply swarm intelligence algorithms',
              'Develop practical skills using Python and modern ML frameworks',
              'Design and execute machine learning projects from concept to deployment',
            ].map((outcome, idx) => (
              <div key={idx} className="bg-background rounded-lg p-6 border border-border">
                <h3 className="font-bold text-foreground mb-2">Outcome {idx + 1}</h3>
                <p className="text-foreground">{outcome}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prerequisites */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8">Prerequisites</h2>

          <div className="bg-muted rounded-lg p-8 border border-border">
            <h3 className="text-xl font-bold text-foreground mb-4">Required Knowledge</h3>
            <ul className="space-y-2 mb-8 text-foreground">
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>Basic programming experience (Python or C++)</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>Familiarity with calculus and linear algebra concepts</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>Basic understanding of probability and statistics</span>
              </li>
            </ul>

            <h3 className="text-xl font-bold text-foreground mb-4">Technical Requirements</h3>
            <ul className="space-y-2 text-foreground">
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>Laptop with Python 3.8+ installed</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>Installation support will be provided before the course</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>All software used is open-source and free</span>
              </li>
            </ul>

            <div className="mt-8 p-4 bg-background border border-border rounded">
              <p className="text-sm text-muted-foreground">
                <strong>Note:</strong> We provide refresher materials for participants who need to review mathematical or
                programming concepts. Don&apos;t let knowledge gaps discourage you – we&apos;re here to help!
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
