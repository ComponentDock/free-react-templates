const speakers = [
  { name: 'Maria Smith', role: 'Marketing Director' },
  { name: 'James Williams', role: 'Digital Strategist' },
  { name: 'Michael Parker', role: 'Brand Consultant' },
  { name: 'Gabriel Kim', role: 'Growth Engineer' },
  { name: 'Christine Brown', role: 'Content Lead' },
  { name: 'Laura White', role: 'Analytics Expert' },
]

export interface SpeakersProps {
  className?: string
}

export function Speakers({ className }: SpeakersProps) {
  return (
    <section className={`bg-white py-20 ${className ?? ''}`}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary-400">
            See what&apos;s all about
          </p>
          <h2 className="mt-2 text-3xl font-bold text-navy md:text-4xl">Speakers</h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {speakers.map((s) => (
            <div
              key={s.name}
              className="group overflow-hidden rounded-lg border border-gray-100 shadow-sm"
            >
              <img
                src={`https://picsum.photos/seed/spk-${s.name.replace(/\s/g, '')}/400/400`}
                alt={s.name}
                className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div className="bg-navy px-5 py-4">
                <a href="#" className="text-sm font-bold text-white hover:text-primary-400">
                  {s.name}
                </a>
                <p className="mt-0.5 text-xs text-gray-400">{s.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
