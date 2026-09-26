const services = [
  {
    title: 'Portrait Photography',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: 'https://picsum.photos/seed/shotwise-s1/600/400',
  },
  {
    title: 'Landscape Photography',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: 'https://picsum.photos/seed/shotwise-s2/600/400',
  },
  {
    title: 'Event Photography',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: 'https://picsum.photos/seed/shotwise-s3/600/400',
  },
  {
    title: 'Product Photography',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: 'https://picsum.photos/seed/shotwise-s4/600/400',
  },
]

export function Services() {
  return (
    <section id="services" className="bg-white py-0">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {services.map((s) => (
          <div
            key={s.title}
            className="group relative h-72 bg-cover bg-center"
            style={{ backgroundImage: `url(${s.image})` }}
          >
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary-800 to-primary-400 opacity-80 transition-opacity group-hover:opacity-90" />
            <div className="relative z-10 flex h-full flex-col justify-end p-8">
              <h4 className="mb-2 text-sm font-semibold uppercase tracking-wider text-white">
                {s.title}
              </h4>
              <p className="text-sm leading-relaxed text-white/90">{s.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
