const barbers = [
  {
    name: 'Marcus Johnson',
    role: 'Master Barber & Owner',
    blurb:
      'Marcus founded Fade with a vision to create a neighborhood barbershop that combines old-school hospitality with modern precision. His fades are legendary in Brooklyn.',
    image: 'https://picsum.photos/seed/fade-marcus/600/700',
  },
  {
    name: 'Jake Rivera',
    role: 'Senior Barber',
    blurb:
      'Jake specializes in classic cuts and hot towel shaves. Trained in traditional barbering techniques, he brings old-world craftsmanship to every chair.',
    image: 'https://picsum.photos/seed/fade-jake/600/700',
  },
  {
    name: 'Tony Chen',
    role: 'Style Specialist',
    blurb:
      'Tony is our go-to for modern styles, fades, and beard design. He stays ahead of the trends so you always leave looking fresh.',
    image: 'https://picsum.photos/seed/fade-tony/600/700',
  },
] as const

export function Team() {
  return (
    <section id="team" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent-600 dark:text-accent-400">
            Our Team
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Meet Your Barbers
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Skilled, friendly, and dedicated to their craft — get to know the team behind the chair.
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {barbers.map((barber) => (
            <article
              key={barber.name}
              className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-lg dark:border-gray-800 dark:bg-gray-800"
            >
              <div className="aspect-[4/5] overflow-hidden bg-gray-100 dark:bg-gray-700">
                <img
                  src={barber.image}
                  alt={barber.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{barber.name}</h3>
                <p className="mt-1 text-sm font-medium text-accent-600 dark:text-accent-400">
                  {barber.role}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  {barber.blurb}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
