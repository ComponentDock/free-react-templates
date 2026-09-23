const works = [
  {
    title: 'Vector Illustration',
    description:
      'LCD screens are uniquely modern in style, and the liquid crystals that make them work have allowed humanity to create slimmer, more portable technology.',
    image: 'https://picsum.photos/seed/kinetic-w1/700/400',
    reverse: false,
  },
  {
    title: 'Vector Illustration',
    description:
      'While most people enjoy casino gambling, sports betting, lottery and bingo playing for the fun and excitement it provides, others may experience it differently.',
    image: 'https://picsum.photos/seed/kinetic-w2/700/400',
    reverse: true,
  },
  {
    title: 'Vector Illustration',
    description:
      'LCD screens are uniquely modern in style, and the liquid crystals that make them work have allowed humanity to create slimmer, more portable technology.',
    image: 'https://picsum.photos/seed/kinetic-w3/700/400',
    reverse: false,
  },
]

export function RemarkableWorks() {
  return (
    <section id="portfolio" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto mb-12 max-w-xl text-center">
          <h2 className="mb-4 text-2xl font-medium text-ink">Remarkable Works</h2>
          <p className="text-sm font-light leading-relaxed text-smoke">
            LCD screens are uniquely modern in style, and the liquid crystals that make them work
            have allowed humanity to create slimmer, more portable technology.
          </p>
        </div>

        <div className="space-y-6">
          {works.map((work) => (
            <div
              key={work.title + work.description.slice(0, 20)}
              className={`flex flex-col overflow-hidden rounded-lg md:flex-row ${
                work.reverse ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className="md:w-7/12">
                <img
                  src={work.image}
                  alt={work.title}
                  className="h-64 w-full object-cover md:h-80"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col justify-center bg-mist p-8 md:w-5/12">
                <h4 className="mb-3 text-lg font-medium text-ink">{work.title}</h4>
                <p className="mb-4 text-sm font-light leading-relaxed text-smoke">
                  {work.description}
                </p>
                <div>
                  <a
                    href="#"
                    className="inline-flex items-center rounded-full border border-primary-400 px-5 py-1.5 text-sm font-medium text-primary-400 transition-colors hover:bg-primary-400 hover:text-white"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
