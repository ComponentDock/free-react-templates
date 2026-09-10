import { facts } from '../data'

export function Facts() {
  return (
    <section aria-label="Facts and statistics" className="bg-brand py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 sm:grid-cols-3 md:grid-cols-5 lg:px-8">
        {facts.map(({ value, label }) => (
          <div key={label} className="text-center">
            <strong className="block text-3xl font-bold text-white tabular-nums">
              {value.toLocaleString('en-US')}
            </strong>
            <span className="mt-2 block text-sm text-white/80">{label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
