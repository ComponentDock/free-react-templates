const members = [
  { name: 'Alex Johnson', role: 'CEO & Founder', seed: 'hammerly-team-1' },
  { name: 'Maria Garcia', role: 'Project Manager', seed: 'hammerly-team-2' },
  { name: 'David Lee', role: 'Lead Engineer', seed: 'hammerly-team-3' },
  { name: 'Sarah Chen', role: 'Architect', seed: 'hammerly-team-4' },
] as const

export function Team() {
  return (
    <section className="bg-paper py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 border-l-4 border-brand pl-4">
          <h2 className="font-section text-3xl font-bold uppercase md:text-4xl">Meet Our Team</h2>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {members.map((m) => (
            <div key={m.name} className="text-center">
              <div className="relative mx-auto mb-4 h-64 w-64 overflow-hidden rounded-full">
                <img
                  src={`https://picsum.photos/seed/${m.seed}/256/256`}
                  alt={m.name}
                  className="h-full w-full object-cover"
                  width={256}
                  height={256}
                  loading="lazy"
                />
              </div>
              <h3 className="font-heading text-lg font-bold text-ink">{m.name}</h3>
              <p className="text-sm text-body">{m.role}</p>
              <div className="mt-3 flex justify-center gap-3">
                <a
                  href="#"
                  className="text-body transition-colors hover:text-brand"
                  aria-label={`${m.name} on Facebook`}
                >
                  Facebook
                </a>
                <a
                  href="#"
                  className="text-body transition-colors hover:text-brand"
                  aria-label={`${m.name} on Twitter`}
                >
                  Twitter
                </a>
                <a
                  href="#"
                  className="text-body transition-colors hover:text-brand"
                  aria-label={`${m.name} on LinkedIn`}
                >
                  LinkedIn
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
