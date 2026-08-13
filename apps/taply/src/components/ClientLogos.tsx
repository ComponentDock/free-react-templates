import { clientLogos } from '../data'

/** White strip of greyed-out client logo placeholders between hero and
 *  features. */
export function ClientLogos() {
  return (
    <div className="bg-white py-10">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-x-12 gap-y-6 px-4">
        {clientLogos.map((logo) => (
          <span
            key={logo}
            className="text-xl font-bold uppercase tracking-widest text-gray-300"
            aria-hidden="true"
          >
            {logo}
          </span>
        ))}
      </div>
    </div>
  )
}
