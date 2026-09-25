const stats = [
  { label: 'Albums', value: 12 },
  { label: 'Fans', value: 48 },
  { label: 'Concerts', value: 230 },
]

export function About() {
  return (
    <section id="about" className="bg-deep-900 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Image */}
          <div className="relative overflow-hidden rounded-2xl">
            <img
              src="https://picsum.photos/seed/melodica-artist/600/700"
              alt="Artist performing on stage"
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deep-950/60 to-transparent" />
          </div>

          {/* Text */}
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent-green">
              About The Artist
            </p>
            <h2 className="font-heading text-3xl font-bold text-white md:text-4xl">
              Crafting Sound Since 2010
            </h2>
            <p className="mt-6 leading-relaxed text-white/60">
              Born from a passion for rhythm and melody, our sound blends electronic beats with
              organic instruments. From underground clubs to sold-out arenas, every performance is a
              journey through sound and emotion.
            </p>
            <p className="mt-4 leading-relaxed text-white/60">
              With 12 studio albums and over 230 live shows worldwide, we continue to push
              boundaries and connect with fans across every continent.
            </p>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-heading text-3xl font-bold text-accent-yellow">
                    {stat.value}
                    <span className="text-accent-purple">+</span>
                  </p>
                  <p className="mt-1 text-sm text-white/50">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
