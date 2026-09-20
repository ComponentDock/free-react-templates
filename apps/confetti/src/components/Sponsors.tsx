const logos = [
  { name: 'Sponsor 1', seed: 'confetti-spon1' },
  { name: 'Sponsor 2', seed: 'confetti-spon2' },
  { name: 'Sponsor 3', seed: 'confetti-spon3' },
  { name: 'Sponsor 4', seed: 'confetti-spon4' },
  { name: 'Sponsor 5', seed: 'confetti-spon5' },
  { name: 'Sponsor 6', seed: 'confetti-spon6' },
]

export function Sponsors() {
  return (
    <section className="bg-brand-dark py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-16">
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
            Our Top General Sponsors.
          </h2>
          <p className="mt-4 text-white/70">
            We are proud to partner with industry-leading organizations.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="flex h-24 items-center justify-center rounded bg-white/10 p-4"
            >
              <img
                src={`https://picsum.photos/seed/${logo.seed}/200/80`}
                alt={logo.name}
                className="h-16 w-auto object-contain opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
