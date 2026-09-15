import { causes } from '../data'

export function Causes() {
  return (
    <section id="causes" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <h2 className="font-heading text-3xl font-bold text-ink">Popular Causes</h2>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {causes.map((cause) => (
            <div
              key={cause.title}
              className="overflow-hidden rounded border border-gray-100 bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <img src={cause.image} alt={cause.title} className="h-48 w-full object-cover" />
              <div className="p-6">
                <p className="mb-2 text-xs font-medium uppercase tracking-wider text-primary">
                  Raised: ${cause.raised.toLocaleString()}
                </p>
                <h4 className="mb-2 font-heading text-lg font-bold text-ink">{cause.title}</h4>
                <p className="mb-4 text-sm text-gray-500">Goal: ${cause.goal.toLocaleString()}</p>
                <div className="h-px bg-gray-200" />
                <div className="mt-4 flex items-center justify-between">
                  <a
                    href="#"
                    className="rounded bg-primary px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-600"
                  >
                    Donate
                  </a>
                  <span className="text-sm font-medium text-primary">
                    {Math.round((cause.raised / cause.goal) * 100)}%
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
