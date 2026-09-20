const SPONSORS = Array.from({ length: 8 }, (_, i) => ({
  name: `Sponsor ${i + 1}`,
  logo: `https://picsum.photos/seed/gala-sp${i + 10}/200/100`,
}))

export function Sponsors() {
  return (
    <section id="sponsors" className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4">
        <h3 className="mb-10 text-center text-3xl font-bold">
          Our <span className="text-brand">Sponsors</span>
        </h3>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {SPONSORS.map((sponsor) => (
            <div key={sponsor.name} className="flex items-center justify-center">
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="h-16 w-auto object-contain opacity-60 grayscale transition-all hover:opacity-100 hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
