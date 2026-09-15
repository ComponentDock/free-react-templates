import { partners } from '../data'

export function Partners() {
  return (
    <section className="bg-light py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-10 text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-primary">Our Partners</p>
          <h2 className="mt-2 font-heading text-3xl font-bold text-ink">Worldwide Partners</h2>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-10">
          {partners.map((partner) => (
            <img
              key={partner.name}
              src={partner.image}
              alt={partner.name}
              className="h-10 opacity-50 grayscale transition-all hover:opacity-100 hover:grayscale-0"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
