import { clients } from '../data'

/** White "Clients" section: centered title with green underline and six
 *  client logo images in a responsive grid (2/2/3/3 columns by breakpoint). */
export function Clients() {
  return (
    <section id="clients-section" data-testid="clients" className="bg-white py-[2.5em] md:py-[7em]">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="section-title relative pb-5 text-center text-3xl">{clients.heading}</h2>
        <div className="mt-10 grid grid-cols-2 gap-8 text-center md:grid-cols-3 lg:grid-cols-4">
          {clients.logos.map((logo) => (
            <img
              key={logo.name}
              src={logo.image}
              alt={logo.name}
              loading="lazy"
              className="mx-auto w-full max-w-[180px] object-contain"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
