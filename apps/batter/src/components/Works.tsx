const works = [
  {
    title: 'Vector Illustration',
    description:
      'LCD screens are uniquely modern in style, and the liquid crystals that make them work have allowed humanity to.',
    image: 'https://picsum.photos/seed/batter1/600/400',
  },
  {
    title: 'Brand Identity',
    description:
      'The world of electronics is rapidly evolving, with new technologies emerging every day.',
    image: 'https://picsum.photos/seed/batter2/600/400',
  },
  {
    title: 'Web Design',
    description:
      'Creative solutions for modern businesses looking to establish a strong online presence.',
    image: 'https://picsum.photos/seed/batter3/600/400',
  },
  {
    title: 'Mobile App',
    description:
      'Cross-platform applications built with the latest frameworks for optimal performance.',
    image: 'https://picsum.photos/seed/batter4/600/400',
  },
  {
    title: 'Photography',
    description:
      'Professional visual content creation for brands that want to stand out in the market.',
    image: 'https://picsum.photos/seed/batter5/600/400',
  },
  {
    title: 'UI/UX Design',
    description: 'User-centered design approaches that prioritize experience and accessibility.',
    image: 'https://picsum.photos/seed/batter6/600/400',
  },
]

export function Works() {
  return (
    <section id="works" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <h3 className="mb-2 text-2xl font-bold text-gray-900">Our Amazing Works</h3>
          <span className="text-sm font-semibold uppercase tracking-wider text-orange-500">
            Re-imagining the way
          </span>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {works.map((work) => (
            <div
              key={work.title}
              className="overflow-hidden rounded-lg bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <img
                src={work.image}
                alt={work.title}
                className="h-48 w-full object-cover"
                loading="lazy"
              />
              <div className="p-6 text-center">
                <h6 className="mb-2 text-sm font-semibold uppercase tracking-wider text-gray-900">
                  {work.title}
                </h6>
                <p className="text-sm leading-relaxed text-gray-600">{work.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
