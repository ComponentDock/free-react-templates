const classes = [
  {
    title: 'Yoga Barre',
    description: 'Combine ballet-inspired movements with yoga for toned muscles.',
  },
  { title: 'Yoga Core', description: 'Build core strength and stability through targeted poses.' },
  {
    title: 'Yoga For Health',
    description: 'Improve overall wellness with gentle, restorative sequences.',
  },
  {
    title: 'Yoga For Beginners',
    description: 'Start your journey with foundational poses and breathing.',
  },
  {
    title: 'Yoga for All',
    description: 'Inclusive classes designed for every body and every level.',
  },
  { title: 'Yoga Restore', description: 'Deep relaxation and recovery through restorative yoga.' },
]

export function YogaClasses() {
  return (
    <section className="border-t border-brand-light py-16" id="classes">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="font-display mb-8 text-center text-3xl font-bold text-ink">Yoga Classes</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {classes.map((cls) => (
            <div
              key={cls.title}
              className="group overflow-hidden rounded-lg bg-white shadow-md transition hover:shadow-lg"
            >
              <img
                src={`https://picsum.photos/seed/namastay-${cls.title.toLowerCase().replace(/\s+/g, '-')}/400/250`}
                alt={cls.title}
                className="h-40 w-full object-cover"
                loading="lazy"
              />
              <div className="p-5">
                <h3 className="font-display text-lg font-bold text-ink">{cls.title}</h3>
                <p className="mt-2 text-sm text-mist">{cls.description}</p>
                <a
                  href="#"
                  className="mt-3 inline-block text-sm font-medium text-brand transition hover:text-brand-dark"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
