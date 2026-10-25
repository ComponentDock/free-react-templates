import { OPTIONS, SAMPLE_PRICES } from '../data'
import { Reveal } from './Reveal'
import { SectionHead } from './SectionHead'

/**
 * Six cells split by a 1 px gutter that is the block's own fill showing
 * through. The prices are the point: the cheapest honest answer on the page is
 * a repair, and it is in the same grid as the most expensive one.
 */
export function Options() {
  return (
    <section id="options" className="section bg-white" aria-labelledby="options-title">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHead
          eyebrow="The honest version"
          title="Tankless is not automatically better"
          lede="It is better for some households and worse for others, and which one you are depends mostly on your gas supply and your groundwater."
        />

        <Reveal className="mt-12">
          <div className="grid gap-px overflow-hidden rounded-2xl border border-ink-100 bg-ink-100 sm:grid-cols-2 lg:grid-cols-3">
            {OPTIONS.map((option) => (
              <div key={option.title} className="flex flex-col bg-white p-6 lg:p-8">
                <h3 className="text-lg font-bold text-ink-800">{option.title}</h3>
                <p className="mt-2 flex-1 text-ink-500">{option.blurb}</p>
                <p className="mt-4 text-sm font-bold text-primary-700">{option.price}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <p className="mt-6 text-sm text-ink-400">{SAMPLE_PRICES}</p>
      </div>
    </section>
  )
}
