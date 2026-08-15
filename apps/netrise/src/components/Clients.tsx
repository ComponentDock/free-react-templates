import { clients } from '../data'

export function Clients() {
  return (
    <section aria-label="Our Clients" className="bg-navy py-20">
      <div className="mx-auto max-w-[1200px] px-4 text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">Our Clients</h2>
        <p className="mx-auto mt-4 max-w-[560px] text-base font-light text-white/80">
          Even the all-powerful Pointing has no control about the blind texts.
        </p>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-14 gap-y-8">
          {clients.map((client) => (
            <span
              key={client}
              className="font-sans text-xl font-bold uppercase tracking-widest text-white/60"
            >
              {client}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
