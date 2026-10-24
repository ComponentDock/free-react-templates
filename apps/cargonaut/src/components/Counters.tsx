import { counters } from '../data'

const counterImage = 'https://picsum.photos/seed/cargonaut-counter/1600/500'

export function Counters() {
  return (
    <section className="relative isolate overflow-hidden">
      <img
        src={counterImage}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 -z-10 bg-navy/90" aria-hidden="true" />
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-24 text-center sm:grid-cols-2 lg:grid-cols-4">
        {counters.map((counter) => (
          <div key={counter.label}>
            <p className="text-4xl font-medium text-white">
              {counter.value}
              <span className="text-brand">{counter.suffix}</span>
            </p>
            <p className="mt-2 text-sm uppercase tracking-[2px] text-white/70">{counter.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
