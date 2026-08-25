const PROGRAMS = [
  {
    title: 'Faculty of Science',
    description:
      'Explore cutting-edge research in physics, chemistry, biology, and computer science with our world-class laboratories and faculty.',
    image: 'https://picsum.photos/seed/scholara-sci/600/400',
  },
  {
    title: 'Faculty of Arts',
    description:
      'Immerse yourself in literature, philosophy, history, and the creative arts with programs designed to broaden your perspective.',
    image: 'https://picsum.photos/seed/scholara-arts/600/400',
  },
]

export function Programs() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-black uppercase text-ink md:text-4xl">
            Programs We Offer
          </h2>
          <p className="mx-auto max-w-2xl text-mist">
            Choose from a wide range of programs tailored to your academic interests and career
            goals.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {PROGRAMS.map((program) => (
            <div key={program.title} className="group overflow-hidden bg-white shadow-md">
              <div className="overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="h-60 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-3 text-xl font-bold text-ink">{program.title}</h3>
                <p className="mb-4 text-sm text-mist">{program.description}</p>
                <a
                  href="#"
                  className="inline-block border-b-2 border-brand pb-1 text-sm font-medium text-brand transition-colors hover:text-brand-dark"
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
