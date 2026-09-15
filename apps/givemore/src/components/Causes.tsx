import { Target, TrendingUp } from 'lucide-react'
import { causes } from '../data'

export function Causes() {
  return (
    <section className="bg-white py-20" id="causes">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-primary">
            Donation shows Passion
          </p>
          <h2 className="mt-2 font-heading text-3xl font-bold text-ink">Featured Causes</h2>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {causes.map((cause) => (
            <div
              key={cause.title}
              className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm"
            >
              <img src={cause.image} alt={cause.title} className="h-48 w-full object-cover" />
              <div className="p-6">
                <h3 className="font-heading text-lg font-bold text-ink">{cause.title}</h3>
                <div className="mt-4 h-2 overflow-hidden rounded-full bg-gray-200">
                  <div
                    className="h-full rounded-full bg-primary transition-all"
                    style={{ width: `${cause.percent}%` }}
                  />
                </div>
                <div className="mt-3 flex justify-between text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <Target className="h-4 w-4" /> Goal: ${cause.goal.toLocaleString()}
                  </span>
                  <span className="flex items-center gap-1">
                    <TrendingUp className="h-4 w-4" /> Raised: ${cause.raised.toLocaleString()}
                  </span>
                </div>
                <a
                  href="#"
                  className="mt-4 inline-block rounded border border-primary px-6 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-white"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
