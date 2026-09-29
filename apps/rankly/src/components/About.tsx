import { ArrowRight } from 'lucide-react'

export function About() {
  return (
    <section className="bg-paper py-20">
      <div className="container mx-auto grid items-center gap-12 px-4 md:grid-cols-2">
        {/* Chart placeholder */}
        <div className="flex items-center justify-center">
          <div className="h-80 w-full max-w-sm rounded-lg bg-white shadow-md flex items-center justify-center">
            <div className="text-center text-mist">
              <BarChartPlaceholder />
              <p className="mt-4 text-sm">Performance Metrics</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="mb-6 text-3xl font-semibold text-ink leading-tight">
            We Believe That
            <br />
            Strategy Drives Growth
          </h2>
          <p className="mb-8 leading-relaxed text-mist">
            Data-driven SEO strategies help your business reach the right audience at the right
            time. Our approach combines technical optimization with creative content to deliver
            measurable results that grow over time.
          </p>
          <a
            href="#service"
            className="inline-flex items-center gap-2 rounded bg-brand px-8 py-3 text-sm font-semibold uppercase text-white transition-colors hover:bg-brand-dark"
          >
            See Details
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}

function BarChartPlaceholder() {
  const bars = [65, 45, 80, 55, 70, 90, 60]
  return (
    <div className="flex items-end gap-2 h-48">
      {bars.map((h, i) => (
        <div
          key={i}
          className="w-8 rounded-t bg-brand/80 transition-all"
          style={{ height: `${h}%` }}
        />
      ))}
    </div>
  )
}
