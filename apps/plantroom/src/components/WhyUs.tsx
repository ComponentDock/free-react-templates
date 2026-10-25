import { COMMITMENTS } from '../data'
import { AssetRegisterPanel } from './AssetRegisterPanel'
import { Reveal } from './Reveal'
import { SectionHead } from './SectionHead'

/**
 * Why-us: the register panel on the left at `lg` (it drops below the text on a
 * phone) and four left-ruled definitions on the right. The heading says
 * "three things" while the list has four rows — that mismatch is in the
 * reference, and the four rows are the more useful half, so both stay.
 */
export function WhyUs() {
  return (
    <section id="why-us" className="section scroll-mt-24 bg-ink-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="order-last lg:order-first">
            <figure>
              <div className="overflow-hidden rounded-2xl shadow-soft">
                <AssetRegisterPanel />
              </div>
              <figcaption className="mt-3 text-sm text-ink-400">
                Replace with a photograph of your own engineers on a roof before launch.
              </figcaption>
            </figure>
          </Reveal>

          <div>
            <SectionHead
              eyebrow="Why facilities managers move to us"
              title="Three things that are boring and decisive"
              lede="Nobody changes mechanical contractor because of a better website. They change because of these."
            />

            <dl className="mt-8 space-y-6">
              {COMMITMENTS.map((item) => (
                <div key={item.title} className="border-l-2 border-primary-600 pl-5">
                  <dt className="text-lg font-bold text-ink-800">{item.title}</dt>
                  <dd className="mt-1 text-ink-500">{item.body}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
