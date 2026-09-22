const classes = [
  {
    id: 1,
    image: 'zenbloom-class1',
    title: 'Vinyasa Flow',
    time: '6:00 AM - 7:00 AM',
    trainer: 'Sarah Lee',
    category: 'Beginner',
  },
  {
    id: 2,
    image: 'zenbloom-class2',
    title: 'Power Yoga',
    time: '8:00 AM - 9:30 AM',
    trainer: 'Mike Chen',
    category: 'Advanced',
  },
  {
    id: 3,
    image: 'zenbloom-class3',
    title: 'Hatha Yoga',
    time: '10:00 AM - 11:00 AM',
    trainer: 'Anna Patel',
    category: 'Intermediate',
  },
  {
    id: 4,
    image: 'zenbloom-class4',
    title: 'Yin Yoga',
    time: '4:00 PM - 5:00 PM',
    trainer: 'Sarah Lee',
    category: 'Beginner',
  },
  {
    id: 5,
    image: 'zenbloom-class5',
    title: 'Ashtanga Yoga',
    time: '6:00 PM - 7:30 PM',
    trainer: 'Mike Chen',
    category: 'Advanced',
  },
  {
    id: 6,
    image: 'zenbloom-class6',
    title: 'Restorative Yoga',
    time: '8:00 PM - 9:00 PM',
    trainer: 'Anna Patel',
    category: 'All Levels',
  },
]

export function Classes() {
  return (
    <section id="classes" className="bg-white py-16 sm:py-20" data-testid="classes">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="mb-1 text-center font-display text-2xl text-ember-400">Join Our Classes</p>
        <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">Our Classes</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {classes.map(({ id, image, title, time, trainer, category }) => (
            <div
              key={id}
              className="group overflow-hidden rounded-lg bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={`https://picsum.photos/seed/${image}/400/300`}
                  alt={title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <span className="absolute right-3 top-3 rounded bg-sage-400 px-2 py-1 text-xs font-medium text-white">
                  {category}
                </span>
              </div>
              <div className="p-5">
                <p className="mb-1 text-xs text-gray-400">{time}</p>
                <h3 className="mb-1 text-lg font-semibold text-gray-900">{title}</h3>
                <p className="text-sm text-gray-500">Trainer: {trainer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
