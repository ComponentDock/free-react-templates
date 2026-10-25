import { SERVICES } from '../data'
import { Reveal } from './Reveal'
import { SectionHead } from './SectionHead'

/**
 * The six services as one hairline-bordered block divided into six cells. The
 * separator is the `gap-px` gutter showing the `ink-100` wrapper through it —
 * give the cells borders instead and every seam doubles. The `flex-1` on the
 * blurb is load-bearing: it pushes every price line onto the same baseline.
 */
export function ServicesGrid() {
  return (
    <section id="services" className="section scroll-mt-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHead
          eyebrow="What we do"
          title="Location, and the repair if you want it"
          lede="The location is the product. The repair is an option, quoted after the mark is on the floor rather than before."
        />

        <Reveal>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-ink-100 bg-ink-100 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service) => (
              <div key={service.title} className="flex flex-col bg-white p-6 lg:p-8">
                <h3 className="text-lg font-bold text-ink-800">{service.title}</h3>
                <p className="mt-2 flex-1 text-ink-500">{service.body}</p>
                <p className="mt-4 text-sm font-bold text-primary-700">{service.price}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <p className="mt-6 text-sm text-ink-400">
          Starting prices are sample data for demonstration. Replace with your own before launch.
        </p>
      </div>
    </section>
  )
}
