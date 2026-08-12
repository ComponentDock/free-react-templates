import { cn } from '@free-react-templates/ui'
import { FEATURES } from '../data'

/**
 * FeatureRows — four alternating photo/text rows; each text block is a
 * white rounded card overlapping its photo by ~67px with a serif heading,
 * paragraph and a light "Explore Gallery" button.
 */
export function FeatureRows() {
  return (
    <section id="about" className="bg-white pt-[120px]">
      <div className="mx-auto max-w-7xl px-4">
        {FEATURES.map((feature, index) => {
          const flip = index % 2 === 1
          return (
            <div key={index} className="mb-[50px] grid items-center lg:grid-cols-2">
              <div className={cn('relative', flip && 'lg:order-2')}>
                <img
                  src={feature.image}
                  alt=""
                  className="aspect-[7/5] w-full rounded-[10px] object-cover"
                />
              </div>
              <div className="py-10 lg:py-[60px]">
                <div
                  className={cn(
                    'rounded-[10px] bg-white p-8 sm:p-10 lg:p-[75px]',
                    flip ? 'lg:-mr-[67px]' : 'lg:-ml-[67px]',
                  )}
                >
                  <h4 className="mb-4 font-serif text-3xl leading-tight text-ink md:text-[42px]">
                    {feature.title}
                  </h4>
                  <p className="mb-8 text-sm">{feature.text}</p>
                  <a
                    href="#gallery"
                    className="inline-flex h-12 items-center rounded-[5px] border border-line bg-light px-[45px] text-[13px] font-medium uppercase tracking-wide text-ink transition-colors hover:border-brand hover:bg-brand hover:text-white hover:shadow-[0px_10px_20px_0px_rgba(250,51,63,0.25)]"
                  >
                    Explore Gallery
                  </a>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
