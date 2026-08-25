const PRESS_LOGOS = [
  { name: 'TechCrunch', width: 'w-24' },
  { name: 'Forbes', width: 'w-20' },
  { name: 'Bloomberg', width: 'w-20' },
  { name: 'Wired', width: 'w-16' },
  { name: 'VentureBeat', width: 'w-24' },
] as const

export function LogosStrip() {
  return (
    <section className="py-20 text-center" aria-label="As seen on">
      <div className="mx-auto max-w-4xl px-5">
        <h5 className="mb-8 text-sm font-semibold uppercase tracking-wider text-text-black-50">
          As seen on
        </h5>
        <div className="flex flex-wrap items-center justify-center gap-10">
          {PRESS_LOGOS.map((logo) => (
            <span key={logo.name} className={`text-lg font-bold text-gray-300 ${logo.width}`}>
              {logo.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
