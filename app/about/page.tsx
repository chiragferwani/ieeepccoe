import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Card } from '@/components/ui/card'
import Image from 'next/image'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">About the Summer School</h1>
          <p className="text-xl text-muted-foreground">
            Intensive learning experience in computational intelligence from leading researchers worldwide
          </p>
        </div>
      </section>

      {/* Partner Logos */}
      <section className="py-8 bg-muted/20 border-b border-border/50">
        <div className="max-w-4xl mx-auto text-center px-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">
            Organized & Supported By
          </p>
          <div className="flex flex-row flex-nowrap items-center justify-start lg:justify-center gap-6 md:gap-10 bg-background py-6 px-8 rounded-xl border border-border/60 max-w-4xl mx-auto overflow-x-auto no-scrollbar">
            <div className="relative h-20 w-56 flex-shrink-0">
              <Image
                src="/ieeecis.png"
                alt="IEEE CIS Logo"
                fill
                sizes="(max-width: 768px) 224px, 224px"
                className="object-contain"
              />
            </div>
            <div className="relative h-20 w-36 flex-shrink-0">
              <Image
                src="/ieeecs.jpg"
                alt="IEEE CS Logo"
                fill
                sizes="(max-width: 768px) 144px, 144px"
                className="object-contain rounded-sm"
              />
            </div>
            <div className="relative h-20 w-36 flex-shrink-0">
              <Image
                src="/ieeepune.png"
                alt="IEEE Pune Section Logo"
                fill
                sizes="(max-width: 768px) 144px, 144px"
                className="object-contain"
              />
            </div>
            <div className="relative h-20 w-36 flex-shrink-0">
              <Image
                src="/pccoe.jpeg"
                alt="PCCoE Pune Logo"
                fill
                sizes="(max-width: 768px) 144px, 144px"
                className="object-contain rounded-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
          <div className="space-y-4 text-foreground leading-relaxed">
            <p>
              The IEEE Computational Intelligence Society Summer School is a flagship educational initiative designed to
              advance knowledge and skills in computational intelligence. Our mission is to provide a transformative learning
              experience that bridges the gap between theoretical foundations and practical applications.
            </p>
            <p>
              We bring together leading researchers, industry practitioners, and emerging talent to explore the frontiers of
              artificial neural networks, evolutionary algorithms, fuzzy logic, and swarm intelligence. Through intensive
              hands-on training, mentorship, and collaborative learning, we empower participants to advance their careers and
              contribute to the field of computational intelligence.
            </p>
          </div>
        </div>
      </section>

      {/* Who Should Attend */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted border-y border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8">Who Should Attend?</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Students',
                description: 'Graduate and advanced undergraduate students looking to build expertise in computational intelligence and AI',
              },
              {
                title: 'Researchers',
                description: 'Academic researchers seeking to deepen knowledge and network with peers in computational intelligence',
              },
              {
                title: 'Professionals',
                description: 'Industry engineers and data scientists looking to advance their skills and career in AI and ML',
              },
            ].map((item, idx) => (
              <Card key={idx} className="p-6 border border-border">
                <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why PCCOE */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8">Why PCCOE Summer School?</h2>

          <div className="space-y-6">
            {[
              {
                title: 'World-Class Instructors',
                description:
                  'Learn from leading researchers and industry experts with decades of combined experience in computational intelligence and machine learning.',
              },
              {
                title: 'Comprehensive Curriculum',
                description:
                  'Cover all major areas of computational intelligence: neural networks, evolutionary algorithms, fuzzy systems, and swarm intelligence with both theory and practice.',
              },
              {
                title: 'Hands-on Learning',
                description:
                  'Participate in intensive practical labs using industry-standard tools like Python, TensorFlow, and PyTorch to build real systems and solve real problems.',
              },
              {
                title: 'Networking Opportunities',
                description:
                  'Connect with peers from over 40 countries, build professional relationships, and expand your global network in the computational intelligence community.',
              },
              {
                title: 'IEEE CIS Recognized Certificate',
                description:
                  'Earn an official certificate of completion from the IEEE Computational Intelligence Society, a leading organization in the field.',
              },
              {
                title: 'Career Advancement',
                description:
                  'Develop advanced skills and credentials that open doors to new opportunities in research, industry, and entrepreneurship.',
              },
            ].map((item, idx) => (
              <div key={idx} className="border-l-4 border-l-primary pl-6 py-2">
                <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted border-y border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8">Program History</h2>

          <div className="bg-background rounded-lg p-8 border border-border">
            <p className="text-foreground mb-4">
              The PCCOE Summer School has been held annually since 2015, establishing itself as a premier educational event
              in computational intelligence. Over the past decade, we have trained more than 500 participants from over 40
              countries, many of whom have gone on to leading positions in academia and industry.
            </p>
            <p className="text-foreground">
              Our program has evolved to reflect the cutting-edge developments in AI and machine learning while maintaining our
              commitment to rigorous, hands-on instruction. With the success of previous years and growing demand, we continue
              to enhance the curriculum and learning experience for new participants.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">By the Numbers</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: '10+', label: 'Years of Excellence' },
              { number: '500+', label: 'Participants Trained' },
              { number: '40+', label: 'Countries Represented' },
              { number: '20+', label: 'Expert Instructors' },
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
