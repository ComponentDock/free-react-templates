const projects = [
  {
    image: 'https://picsum.photos/seed/glissade-works1/700/400',
    title: 'Vector Illustration',
    description:
      'LCD screens are uniquely modern in style, and the liquid crystals that make them work have allowed humanity to create slimmer, more portable technology.',
  },
  {
    image: 'https://picsum.photos/seed/glissade-works2/700/400',
    title: 'Vector Illustration',
    description:
      'While most people enjoy casino gambling, sports betting, lottery and bingo playing for the fun and excitement it provides.',
  },
  {
    image: 'https://picsum.photos/seed/glissade-works3/700/400',
    title: 'Vector Illustration',
    description:
      'LCD screens are uniquely modern in style, and the liquid crystals that make them work have allowed humanity to create slimmer, more portable technology.',
  },
] as const

export function RemarkableWorks() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold text-ink md:text-3xl">Remarkable Works</h2>
          <p className="mt-3 text-sm leading-relaxed text-mist">
            LCD screens are uniquely modern in style, and the liquid crystals that make them work
            have allowed humanity to create slimmer, more portable technology.
          </p>
        </div>

        <div className="mt-14 flex flex-col gap-8">
          {projects.map((p, i) => (
            <div
              key={p.title + String(i)}
              className="flex flex-col overflow-hidden rounded shadow-[0_15px_50px_rgba(0,0,0,0.1)] md:flex-row"
            >
              {i % 2 === 0 ? (
                <>
                  <div className="h-64 md:h-auto md:w-7/12">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex flex-col justify-center p-8 md:w-5/12">
                    <h4 className="text-lg font-medium text-ink">{p.title}</h4>
                    <p className="mt-3 text-sm leading-relaxed text-mist">{p.description}</p>
                    <a
                      href="#"
                      className="mt-5 inline-flex w-fit items-center rounded-full border border-border px-6 py-2 text-sm font-medium text-mist transition-all hover:border-transparent hover:bg-gradient-to-b hover:from-brand-start hover:to-brand-end hover:text-white"
                    >
                      View Project
                    </a>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex flex-col justify-center p-8 md:w-5/12">
                    <h4 className="text-lg font-medium text-ink">{p.title}</h4>
                    <p className="mt-3 text-sm leading-relaxed text-mist">{p.description}</p>
                    <a
                      href="#"
                      className="mt-5 inline-flex w-fit items-center rounded-full border border-border px-6 py-2 text-sm font-medium text-mist transition-all hover:border-transparent hover:bg-gradient-to-b hover:from-brand-start hover:to-brand-end hover:text-white"
                    >
                      View Project
                    </a>
                  </div>
                  <div className="h-64 md:h-auto md:w-7/12">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
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
