export function StatsSection() {
  const stats = [
    {
      number: '6',
      label: 'Intensive Days',
      description: 'Full-day learning with tutorials, labs, and discussions',
    },
    {
      number: '40+',
      label: 'Hours of Content',
      description: 'Comprehensive coverage of core CI topics',
    },
    {
      number: '10+',
      label: 'Expert Instructors',
      description: 'Leading researchers and industry practitioners',
    },
    {
      number: '500+',
      label: 'Past Participants',
      description: 'From 40+ countries, all advancing their careers',
    },
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      {/* Decorative background blur shapes for glassmorphism highlights */}
      <div className="absolute top-0 left-10 w-72 h-72 bg-violet-200/30 dark:bg-violet-900/20 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-72 h-72 bg-sky-200/30 dark:bg-sky-900/20 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <div className="bg-muted/40 dark:bg-muted/10 backdrop-blur-md border border-white/20 dark:border-white/5 rounded-2xl p-8 md:p-12 shadow-lg grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center group transition-all duration-300 hover:scale-105"
              style={{ animation: `fadeInUp 0.6s ease-out ${0.1 * index}s both` }}
            >
              <div className="text-4xl sm:text-5xl font-extrabold text-primary mb-2 transition-transform duration-300 group-hover:scale-110">{stat.number}</div>
              <div className="text-lg font-semibold text-foreground mb-1">{stat.label}</div>
              <p className="text-sm text-muted-foreground">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
