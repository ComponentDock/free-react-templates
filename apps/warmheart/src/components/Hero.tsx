const stats = [
  {
    label: 'Total Donation',
    value: '$2.5M',
    description: 'Supporting communities affected by disasters worldwide',
  },
  {
    label: 'Total Volunteers',
    value: '3,268',
    description: 'Dedicated individuals making a difference every day',
  },
  {
    label: 'Future Plans',
    value: '$7.5M',
    description: 'Expanding our reach to help even more people in need',
  },
] as const

export function Hero() {
  return (
    <section className="relative flex min-h-[500px] items-center bg-text-primary md:min-h-[700px]">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(https://picsum.photos/seed/warmheart-hero/1920/800)' }}
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 mx-auto max-w-6xl px-4 py-32 text-center md:py-40">
        <h5 className="mb-2 text-sm font-medium uppercase tracking-widest text-white/80">
          We Need Your Help to Serve the People
        </h5>
        <h1 className="mb-6 text-3xl font-bold uppercase tracking-wider text-white md:text-5xl">
          Help for Victims Affected by Flood
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-sm leading-relaxed text-white/90 md:text-base">
          Your generous support provides essential relief to families displaced by natural
          disasters. Every donation brings hope and rebuilds communities.
        </p>
        <div className="mb-16 flex justify-center gap-4">
          <a
            href="#donate"
            className="inline-block bg-brand px-8 py-3 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-brand-dark"
          >
            Donate Now
          </a>
          <a
            href="#causes"
            className="inline-block border border-white bg-white/10 px-8 py-3 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-white/20"
          >
            View Activity
          </a>
        </div>

        <div className="mx-auto grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-sm bg-white/10 px-6 py-4 backdrop-blur-sm">
              <p className="mb-1 text-xs font-medium uppercase tracking-wider text-white/70">
                {stat.label}
              </p>
              <p className="text-2xl font-bold text-white">{stat.value}</p>
              <p className="mt-1 text-xs text-white/60">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
