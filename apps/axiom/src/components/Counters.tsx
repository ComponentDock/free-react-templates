const COUNTERS = [
  { value: '220', label: 'Amazing Products' },
  { value: '7930', label: 'Happy Clients' },
  { value: '67', label: 'Support Daily Support' },
] as const

/* Counters recreated from the source's Quick Fact row: three statistics
   with large #615CFD numbers and dark labels. */

export function Counters() {
  return (
    <section id="facts" aria-label="Counters" className="bg-white pb-24 pt-20 lg:pb-40 lg:pt-32">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-body">Quick Fact</p>
          <h2 className="mt-2 text-3xl font-semibold text-ink lg:text-[46px] lg:leading-[58px]">
            Quick Fact
          </h2>
        </div>
        <div className="mt-16 grid gap-12 sm:grid-cols-3">
          {COUNTERS.map((counter) => (
            <div key={counter.label} className="text-center">
              <p className="text-[50px] font-semibold leading-none text-counter">{counter.value}</p>
              <p className="mt-4 text-base text-ink">{counter.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
