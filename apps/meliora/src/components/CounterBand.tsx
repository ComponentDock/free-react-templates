import { counters, counterBgImage } from '../data'

export function CounterBand() {
  return (
    <section
      aria-label="Impact counters"
      className="relative bg-cover bg-center bg-fixed py-24"
      style={{ backgroundImage: `url(${counterBgImage.src})` }}
    >
      <div className="absolute inset-0 bg-plum/80" />
      <div className="relative mx-auto grid max-w-7xl grid-cols-2 gap-10 px-4 text-center sm:px-8 lg:grid-cols-4">
        {counters.map((counter) => (
          <div key={counter.label}>
            <div className="font-serif text-5xl font-bold text-white">{counter.value}</div>
            <div className="mt-3 text-sm font-light uppercase tracking-[0.15em] text-white/80">
              {counter.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
