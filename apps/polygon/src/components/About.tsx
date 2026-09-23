const aboutSections = [
  {
    number: '01',
    label: 'Infrastructure',
    heading: "Let's Build Together",
    description:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
    imageSeed: 'polygon-about-1',
    reversed: false,
  },
  {
    number: '02',
    label: 'Collaborate',
    heading: 'Open for Collaboration',
    description:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
    imageSeed: 'polygon-about-2',
    reversed: true,
  },
]

export function About() {
  return (
    <div id="about">
      {aboutSections.map((section) => (
        <section
          key={section.number}
          className={`py-28 ${section.reversed ? 'bg-paper' : 'bg-white'}`}
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div
              className={`flex flex-col items-center gap-10 ${
                section.reversed ? 'md:flex-row-reverse' : 'md:flex-row'
              }`}
            >
              <div className="md:w-5/12">
                <div className="mb-6 flex items-center gap-3">
                  <span className="text-3xl font-bold text-brand">{section.number}</span>
                  <span className="h-px flex-1 bg-brand" />
                  <span className="text-sm font-bold uppercase tracking-wider text-mist">
                    {section.label}
                  </span>
                </div>
                <h2 className="mb-6 text-3xl font-bold text-ink">{section.heading}</h2>
                <p className="leading-relaxed text-mist">{section.description}</p>
              </div>
              <div className="md:w-7/12">
                <img
                  src={`https://picsum.photos/seed/${section.imageSeed}/800/600`}
                  alt={section.heading}
                  className="w-full rounded object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  )
}
