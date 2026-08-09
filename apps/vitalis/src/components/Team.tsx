const doctors = [
  {
    name: 'Caroline Grant',
    role: 'Plastic surgeon',
    img: 'https://picsum.photos/seed/vitalis-doc1/400/400',
  },
  {
    name: 'Dr. Maria Angel',
    role: 'Plastic surgeon',
    img: 'https://picsum.photos/seed/vitalis-doc2/400/400',
  },
  {
    name: 'Nathan Mullins',
    role: 'Plastic surgeon',
    img: 'https://picsum.photos/seed/vitalis-doc3/400/400',
  },
] as const

export function Team() {
  return (
    <section id="doctors" className="bg-paper py-20 transition-colors dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-medium uppercase tracking-[0.3em] text-brand">
            Our Team
          </span>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Our Expert Doctors</h2>
          <p className="mt-4 text-sm leading-relaxed text-mist dark:text-gray-400">
            Meet the specialists who will take care of your health and beauty.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {doctors.map((doctor) => (
            <article
              key={doctor.name}
              className="overflow-hidden rounded-lg bg-white shadow-sm transition-colors dark:bg-gray-900"
            >
              <img src={doctor.img} alt={doctor.name} className="h-64 w-full object-cover" />
              <div className="p-6 text-center">
                <h3 className="text-lg font-semibold">{doctor.name}</h3>
                <p className="mt-1 text-sm text-brand">{doctor.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
