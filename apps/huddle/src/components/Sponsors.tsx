export interface SponsorsProps {
  className?: string
}

const sponsors = Array.from({ length: 6 }, (_, i) => i + 1)

export function Sponsors({ className }: SponsorsProps) {
  return (
    <section id="sponsors" className={`py-16 md:py-24 ${className ?? ''}`}>
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-12 text-center text-3xl font-bold uppercase tracking-wider text-gray-900 md:text-4xl">
          Sponsors
        </h2>
        <div className="mb-10 grid grid-cols-2 gap-6 md:grid-cols-3">
          {sponsors.map((n) => (
            <div key={n} className="flex h-24 items-center justify-center rounded-lg bg-gray-100">
              <span className="text-sm font-medium text-gray-400">Sponsor {n}</span>
            </div>
          ))}
        </div>
        <div className="text-center">
          <a
            href="#contact"
            className="inline-block rounded-lg bg-brand px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-all hover:bg-brand-hover hover:shadow-lg"
          >
            Become a Sponsor
          </a>
        </div>
      </div>
    </section>
  )
}
