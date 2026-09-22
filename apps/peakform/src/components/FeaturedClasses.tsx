const classes = [
  {
    image: 'https://picsum.photos/seed/peakform-class1/400/300',
    title: 'Power Yoga',
    description: 'Build strength and flexibility through dynamic yoga flows.',
    instructor: 'John Smith',
  },
  {
    image: 'https://picsum.photos/seed/peakform-class2/400/300',
    title: 'CrossFit',
    description: 'High-intensity functional training for total body fitness.',
    instructor: 'Sarah Williams',
  },
  {
    image: 'https://picsum.photos/seed/peakform-class3/400/300',
    title: 'Zumba Dance',
    description: 'Fun dance workout that burns calories and boosts mood.',
    instructor: 'Maria Garcia',
  },
  {
    image: 'https://picsum.photos/seed/peakform-class4/400/300',
    title: 'HIIT Training',
    description: 'Interval training for maximum calorie burn in minimum time.',
    instructor: 'Mike Johnson',
  },
  {
    image: 'https://picsum.photos/seed/peakform-class5/400/300',
    title: 'Pilates Core',
    description: 'Strengthen your core and improve posture with Pilates.',
    instructor: 'Emma Davis',
  },
]

export function FeaturedClasses() {
  return (
    <section className="py-16 md:py-24 bg-cloud" aria-label="Featured Classes">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-ink uppercase text-center mb-12">
          Our Classes
        </h2>
        <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
          {classes.map((cls) => (
            <article
              key={cls.title}
              className="min-w-[280px] max-w-[320px] flex-shrink-0 snap-start bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <img src={cls.image} alt={cls.title} className="h-48 w-full object-cover" />
              <div className="p-5">
                <h3 className="text-lg font-bold text-ink mb-1">{cls.title}</h3>
                <p className="text-sm text-ink/60 mb-3 leading-relaxed">{cls.description}</p>
                <p className="text-xs font-semibold text-brand uppercase">
                  Instructor: {cls.instructor}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
