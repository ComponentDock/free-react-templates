import { partnerLogos } from '../data'

export function Partners() {
  return (
    <section aria-label="Partners" className="border-y border-line bg-surface/60 py-12">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-12 gap-y-6 px-4 lg:px-8">
        {partnerLogos.map((name) => (
          <span
            key={name}
            className="text-lg font-semibold uppercase tracking-widest text-label/70"
          >
            {name}
          </span>
        ))}
      </div>
    </section>
  )
}
