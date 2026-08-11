import { CLIENTS } from '../data'

/* div.site-section.bg-light (#f8f9fa): four client logo cells. The source
   uses logo images (Google, InVision, Nike, Microsoft) — replaced with
   muted gray text wordmarks (never copy the logo images). */
export function ClientLogos() {
  return (
    <section aria-label="Our clients" className="bg-mist py-20">
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-10 px-4 text-center md:grid-cols-4">
        {CLIENTS.map((name) => (
          <span
            key={name}
            className="font-sans text-xl font-bold tracking-widest text-black/40 uppercase"
          >
            {name}
          </span>
        ))}
      </div>
    </section>
  )
}
