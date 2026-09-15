import { Target } from 'lucide-react'
import { causes } from '../data'

export function Causes() {
  return (
    <section className="bg-white py-20" id="causes">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <h2 className="font-heading text-3xl text-ink">Popular Causes</h2>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {causes.map((cause) => (
            <div
              key={cause.title}
              className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm"
            >
              <img src={cause.image} alt={cause.title} className="h-48 w-full object-cover" />
              <div className="p-6">
                <div className="mb-4 h-2.5 overflow-hidden rounded-full bg-red-progress/20">
                  <div
                    className="h-full rounded-full bg-primary transition-all"
                    style={{ width: `${cause.percent}%` }}
                  />
                </div>
                <div className="mb-3 flex justify-between text-sm text-body">
                  <span>Raised: ${cause.raised.toLocaleString()}.00</span>
                  <span>Goal: ${cause.goal.toLocaleString()}.00</span>
                </div>
                <h3 className="mb-2 font-heading text-lg text-ink">{cause.title}</h3>
                <p className="mb-3 text-sm text-body">{cause.description}</p>
                <a
                  href="#"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-primary transition-colors hover:text-primary-600"
                >
                  <Target className="h-4 w-4" /> Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
