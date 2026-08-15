import { numberedRows } from '../data'

export function NumberedRows() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-3">
        {numberedRows.map((row) => (
          <div key={row.count} className="flex items-start gap-6">
            <p className="text-5xl font-semibold text-brand">{row.count}</p>
            <div>
              <h2 className="mt-2 text-lg font-semibold uppercase tracking-[2px] text-ink">
                <span aria-hidden="true" className="mr-1">
                  -
                </span>
                {row.title}
              </h2>
              <p className="mt-3 text-sm font-light leading-6 text-muted">{row.blurb}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
