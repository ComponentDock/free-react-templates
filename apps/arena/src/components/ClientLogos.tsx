import { clientLogos } from '../data'

export function ClientLogos() {
  return (
    <section aria-label="Client logos" className="border-y border-white/10 bg-navy-900">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-10 px-4 py-10 sm:px-6 lg:px-8">
        {clientLogos.map((logo) => (
          <img
            key={logo.id}
            src={logo.image}
            alt={`${logo.name} logo`}
            className="h-12 w-32 object-contain opacity-60 grayscale transition-opacity hover:opacity-100"
          />
        ))}
      </div>
    </section>
  )
}
