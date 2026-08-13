import { clientLogos } from '../data'

/** Row of text-based client logo placeholders (grayscale, color on hover). */
export function ClientLogos() {
  return (
    <section className="bg-band-50 py-24">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-x-16 gap-y-8 px-4 lg:px-8">
        {clientLogos.map((name) => (
          <span
            key={name}
            className="text-xl font-bold tracking-widest text-mute-400 uppercase transition-colors hover:text-primary-500"
          >
            {name}
          </span>
        ))}
      </div>
    </section>
  )
}
