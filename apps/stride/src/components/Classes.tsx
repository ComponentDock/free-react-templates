const leftClasses = [
  { title: 'Yoga Basics', trainer: 'Sarah Miller', duration: '45' },
  { title: 'Strength Training', trainer: 'Mike Johnson', duration: '60' },
  { title: 'Cardio Blast', trainer: 'Lisa Chen', duration: '30' },
  { title: 'Pilates Core', trainer: 'Emma Davis', duration: '50' },
  { title: 'HIIT Circuit', trainer: 'James Wilson', duration: '40' },
]

const rightClasses = [
  { title: 'Spin Cycle', trainer: 'Alex Turner', duration: '45' },
  { title: 'Boxing Basics', trainer: 'Carlos Rivera', duration: '60' },
  { title: 'Stretch & Flow', trainer: 'Nina Patel', duration: '30' },
  { title: 'Power Lift', trainer: 'Derek Brown', duration: '55' },
  { title: 'Aerobics', trainer: 'Karen Lopez', duration: '45' },
]

function ClassCard({
  title,
  trainer,
  duration,
}: {
  title: string
  trainer: string
  duration: string
}) {
  return (
    <div className="flex items-center gap-4 bg-white rounded shadow-md hover:bg-brand hover:scale-[1.03] transition-all duration-200 group p-3 mb-4">
      <img
        src={`https://picsum.photos/seed/class-${title.replace(/\s/g, '-')}/100/100`}
        alt={title}
        className="w-[100px] h-[70px] object-cover rounded"
      />
      <div className="flex-1">
        <h3 className="text-base font-bold group-hover:text-white transition-colors">
          <a href="#schedule" className="hover:underline">
            {title}
          </a>
        </h3>
        <span className="text-sm text-text-meta group-hover:text-brand-light transition-colors">
          By {trainer}
        </span>
        <span className="text-sm text-text-meta group-hover:text-brand-light transition-colors ml-2">
          {duration} minutes
        </span>
      </div>
    </div>
  )
}

export function Classes() {
  return (
    <section className="py-20 bg-white" id="classes">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <p className="text-text-sub text-sm uppercase tracking-wider mb-2">Fitness Class</p>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">Classes</h2>
          <p className="text-text-gray leading-relaxed">
            Explore our wide range of fitness classes designed for every level and interest.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
          <div>
            {leftClasses.map((c) => (
              <ClassCard key={c.title} {...c} />
            ))}
          </div>
          <div>
            {rightClasses.map((c) => (
              <ClassCard key={c.title} {...c} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
