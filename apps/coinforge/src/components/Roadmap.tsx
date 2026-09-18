const milestones = [
  {
    date: 'Q1 2024',
    title: 'Concept & Whitepaper',
    description:
      'Initial concept development, whitepaper publication, and market research for the platform.',
  },
  {
    date: 'Q2 2024',
    title: 'Team Recruitment',
    description:
      'Building the core development team, establishing partnerships, and securing initial funding.',
  },
  {
    date: 'Q3 2024',
    title: 'Core Development',
    description:
      'Platform architecture, smart contract development, and security audit preparation.',
  },
  {
    date: 'Q4 2024',
    title: 'Main Launch',
    description:
      'Public ICO launch, exchange listings, and full platform deployment with trading features.',
  },
]

export function Roadmap() {
  return (
    <section id="roadmap" className="bg-surface py-20">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <p className="mb-2 text-sm uppercase tracking-wider text-coral">History Timeline</p>
        <h2 className="mb-12 text-3xl font-bold text-white md:text-4xl">Development Roadmap</h2>
        <div className="relative mx-auto max-w-3xl">
          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-accent/30" />
          <div className="space-y-12">
            {milestones.map((m, i) => (
              <div
                key={m.title}
                className={`relative flex items-center gap-8 ${
                  i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                <div className={`w-1/2 ${i % 2 === 0 ? 'text-right' : 'text-left'}`}>
                  <p className="text-sm text-coral">{m.date}</p>
                  <h3 className="mt-1 text-lg font-bold text-white">{m.title}</h3>
                  <p className="mt-1 text-sm text-light/70">{m.description}</p>
                </div>
                <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-accent bg-navy">
                  <span className="h-3 w-3 rounded-full bg-accent" />
                </div>
                <div className="w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
