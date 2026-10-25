import { INSTRUMENTS } from '../data'
import { LocatePanel } from './LocatePanel'
import { Reveal } from './Reveal'
import { SectionHead } from './SectionHead'

/**
 * Why-us: the located-slab panel on the left at `lg` (it drops below the copy
 * on a phone — `order-last`), and the four instruments as left-ruled
 * definitions. The order is the argument: each instrument narrows the area so
 * the next one has less ground to cover.
 */
export function InstrumentsBand() {
  return (
    <section id="why-us" className="section scroll-mt-24 bg-ink-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="order-last lg:order-first">
            <figure>
              <div className="overflow-hidden rounded-2xl shadow-soft">
                <LocatePanel />
              </div>
              <figcaption className="mt-3 text-sm text-ink-400">
                Replace with a photograph of your own equipment and a marked floor before launch.
              </figcaption>
            </figure>
          </Reveal>

          <div>
            <SectionHead
              eyebrow="How it works"
              title="Four instruments, and none of them is a jackhammer"
              lede="The order matters. Each step narrows the area so the next one has less ground to cover."
            />

            <dl className="mt-8 space-y-6">
              {INSTRUMENTS.map((instrument) => (
                <div key={instrument.title} className="border-l-2 border-primary-600 pl-5">
                  <dt className="text-lg font-bold text-ink-800">{instrument.title}</dt>
                  <dd className="mt-1 text-ink-500">{instrument.body}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
