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
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted border-y border-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center"
              style={{ animation: `fadeInUp 0.6s ease-out ${0.1 * index}s both` }}
            >
              <div className="text-4xl sm:text-5xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-lg font-semibold text-foreground mb-1">{stat.label}</div>
              <p className="text-sm text-muted-foreground">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
