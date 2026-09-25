const WORKS = [
  {
    image: 'https://picsum.photos/seed/artwave-work1/700/400',
    title: 'Vector Illustration',
    description:
      'LCD screens are uniquely modern in style, and the liquid crystals that make them work have allowed humanity to create slimmer, more portable technology.',
    reverse: false,
  },
  {
    image: 'https://picsum.photos/seed/artwave-work2/700/400',
    title: 'Vector Illustration',
    description:
      'While most people enjoy casino gambling, sports betting, lottery and bingo for the fun and excitement it provides, others may experience it as an addictive habit.',
    reverse: true,
  },
  {
    image: 'https://picsum.photos/seed/artwave-work3/700/400',
    title: 'Vector Illustration',
    description:
      'LCD screens are uniquely modern in style, and the liquid crystals that make them work have allowed humanity to create slimmer, more portable technology.',
    reverse: false,
  },
]

export function RemarkableWorks() {
  return (
    <section className="bg-white py-20" id="portfolio">
      <div className="mx-auto max-w-[1140px] px-4">
        <div className="mx-auto mb-12 max-w-[600px] text-center">
          <h2 className="mb-4 text-[30px] font-medium text-heading">Remarkable Works</h2>
          <p className="text-sm font-light leading-relaxed text-body">
            LCD screens are uniquely modern in style, and the liquid crystals that make them work
            have allowed humanity to create slimmer, more portable technology.
          </p>
        </div>
        <div className="space-y-0">
          {WORKS.map((work) => (
            <div key={work.title + String(work.reverse)} className="flex flex-col md:flex-row">
              {work.reverse ? (
                <>
                  <div className="order-2 flex-1 md:order-1">
                    <div className="flex h-full items-center px-6 py-8 md:px-12">
                      <div>
                        <h4 className="mb-3 text-lg font-medium text-heading">{work.title}</h4>
                        <p className="mb-4 text-sm font-light leading-relaxed text-body">
                          {work.description}
                        </p>
                        <a
                          href="#"
                          className="inline-block rounded-[20px] border border-border-subtle px-5 py-2 text-sm font-light text-heading transition hover:border-brand-blue hover:text-brand-blue"
                        >
                          View Project
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="order-1 md:order-2 md:w-[58%]">
                    <div
                      className="h-[300px] bg-cover bg-center md:h-full"
                      style={{ backgroundImage: `url(${work.image})` }}
                    />
                  </div>
                </>
              ) : (
                <>
                  <div className="md:w-[58%]">
                    <div
                      className="h-[300px] bg-cover bg-center md:h-full"
                      style={{ backgroundImage: `url(${work.image})` }}
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex h-full items-center px-6 py-8 md:px-12">
                      <div>
                        <h4 className="mb-3 text-lg font-medium text-heading">{work.title}</h4>
                        <p className="mb-4 text-sm font-light leading-relaxed text-body">
                          {work.description}
                        </p>
                        <a
                          href="#"
                          className="inline-block rounded-[20px] border border-border-subtle px-5 py-2 text-sm font-light text-heading transition hover:border-brand-blue hover:text-brand-blue"
                        >
                          View Project
                        </a>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
