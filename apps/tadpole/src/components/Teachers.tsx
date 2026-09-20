const teachers = [
  {
    name: 'Sarah Mitchell',
    role: 'Lead Educator',
    image: 'https://picsum.photos/seed/tadpole-teacher1/400/400',
  },
  {
    name: 'James Wilson',
    role: 'Creative Arts Director',
    image: 'https://picsum.photos/seed/tadpole-teacher2/400/400',
  },
  {
    name: 'Emily Chen',
    role: 'Early Learning Specialist',
    image: 'https://picsum.photos/seed/tadpole-teacher3/400/400',
  },
] as const

export function Teachers() {
  return (
    <section id="teachers" aria-label="Teachers" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <p className="text-center font-display text-lg font-semibold text-brand-pink">
          Meet Our Team
        </p>
        <h2 className="mt-3 text-center text-3xl font-bold text-brand-dark sm:text-4xl">
          Our Teachers
        </h2>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {teachers.map(({ name, role, image }) => (
            <article
              key={name}
              className="overflow-hidden rounded-xl bg-brand-light transition-shadow hover:shadow-lg"
            >
              <img
                src={image}
                alt={`Portrait of ${name}`}
                className="h-64 w-full object-cover"
                loading="lazy"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-brand-dark">{name}</h3>
                <p className="mt-2 text-sm text-brand-pink font-semibold">{role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
