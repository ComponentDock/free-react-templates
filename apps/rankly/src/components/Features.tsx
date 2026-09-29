import { ArrowRight } from 'lucide-react'

export function Features() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-semibold text-ink">Ranking Improvement Solutions</h2>
          <p className="text-mist">Who are in extremely love with eco friendly system.</p>
        </div>

        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <h3 className="mb-6 text-3xl font-semibold text-ink leading-tight">
              Helps You Increase
              <br />
              Website Traffic
            </h3>
            <p className="mb-8 leading-relaxed text-mist">
              Our proven SEO methodologies combine technical excellence with creative content
              strategies to drive sustainable organic growth for your business.
            </p>
            <a
              href="#plan"
              className="inline-flex items-center gap-2 rounded bg-brand px-8 py-3 text-sm font-semibold uppercase text-white transition-colors hover:bg-brand-dark"
            >
              Research Details
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div>
            <img
              src="https://picsum.photos/seed/rankly-features/600/450"
              alt="SEO growth visualization"
              className="w-full rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
