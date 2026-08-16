import { counters } from '../data'

export function Counters() {
  return (
    <section
      className="relative bg-cover bg-center bg-fixed py-24"
      style={{ backgroundImage: "url('https://picsum.photos/seed/mortar-counters/1920/500')" }}
    >
      <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-2 gap-10 px-6 text-center lg:grid-cols-4">
        {counters.map((counter) => (
          <div key={counter.label}>
            <span className="block text-4xl font-semibold text-brand md:text-5xl">
              {counter.value}
            </span>
            <span className="mt-2 block text-sm uppercase tracking-wider text-white/80">
              {counter.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
