import { ButtonLink } from '@free-react-templates/ui'

export function TimerSection() {
  return (
    <section className="bg-bg-section py-16">
      <div className="mx-auto max-w-7xl px-4 text-center">
        <h2 className="mb-2 text-2xl font-bold text-heading">Hot Deals of this Month</h2>
        <p className="mb-8 text-sm text-ink">Who are in extremely love with eco friendly system.</p>
        <div className="mb-8 flex items-center justify-center gap-6">
          {[
            { value: '02', label: 'Days' },
            { value: '14', label: 'Hours' },
            { value: '36', label: 'Minutes' },
            { value: '52', label: 'Seconds' },
          ].map((unit) => (
            <div key={unit.label} className="text-center">
              <span className="block text-3xl font-bold text-brand">{unit.value}</span>
              <span className="text-xs uppercase text-ink">{unit.label}</span>
            </div>
          ))}
        </div>
        <ButtonLink
          href="#"
          className="inline-block rounded bg-brand px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
        >
          Shop Now
        </ButtonLink>
      </div>
    </section>
  )
}
