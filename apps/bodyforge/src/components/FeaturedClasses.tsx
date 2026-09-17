const classes = [
  {
    title: 'Cardio Blast',
    description: 'High-intensity cardio sessions that burn calories fast and boost your endurance.',
    image: 'https://picsum.photos/seed/bodyforge-class-1/600/400',
  },
  {
    title: 'Strength Training',
    description: 'Build lean muscle and increase your strength with guided weightlifting programs.',
    image: 'https://picsum.photos/seed/bodyforge-class-2/600/400',
  },
  {
    title: 'Yoga Flow',
    description:
      'Improve flexibility and mental clarity through guided yoga and breathing exercises.',
    image: 'https://picsum.photos/seed/bodyforge-class-3/600/400',
  },
] as const

export function FeaturedClasses() {
  return (
    <section id="schedule" className="bg-surface py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h2 className="text-center font-display text-3xl font-bold uppercase text-heading">
          Featured Classes
        </h2>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {classes.map((cls) => (
            <div
              key={cls.title}
              className="group overflow-hidden rounded bg-white shadow-md transition-shadow hover:shadow-xl"
            >
              <div className="relative overflow-hidden">
                <img
                  src={cls.image}
                  alt={cls.title}
                  className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <button
                    type="button"
                    className="rounded bg-white px-6 py-3 text-sm font-bold uppercase text-heading transition-colors hover:bg-transparent hover:text-white"
                  >
                    Details
                  </button>
                </div>
              </div>
              <div className="p-8">
                <h3 className="font-display text-lg font-bold uppercase text-heading">
                  {cls.title}
                </h3>
                <p className="mt-3 text-body-text">{cls.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
