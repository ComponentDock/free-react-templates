import { useState } from 'react'
import { Minus, Plus } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const features = [
  {
    title: 'Starts the automated process.',
    body: 'The automated process starts as soon as your clothes go into the machine. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.',
  },
  {
    title: 'The automated process starts.',
    body: 'The automated process starts as soon as your clothes go into the machine. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.',
  },
  {
    title: 'Automated process starts.',
    body: 'The automated process starts as soon as your clothes go into the machine. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.',
  },
  {
    title: 'Process the automated magic.',
    body: 'The automated process starts as soon as your clothes go into the machine. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.',
  },
] as const

/** Features accordion: heading over four bordered accordion rows on the
 *  left 70% — open title turns orange with a minus glyph, closed titles
 *  are deep indigo with a plus; only one row expands at a time (second row
 *  open by default). A tall photo fills the right 30%. */
export function FeaturesAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(1)

  return (
    <section id="features" className="pb-[90px] pt-[120px]">
      <div className="mx-auto flex max-w-7xl flex-col gap-[50px] px-4 lg:flex-row lg:px-8">
        <div className="lg:w-[70%]">
          <h2 className="mb-[50px] max-w-3xl font-heading text-[31px] font-bold leading-[1.4] text-ink lg:text-[46px]">
            Some more features that seal the deal and convert the customer
          </h2>
          <div>
            {features.map((feature, index) => {
              const isOpen = openIndex === index
              return (
                <div key={feature.title} className="border-b border-[#EFEFEF]">
                  <h3 className="m-0">
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className={cn(
                        'flex w-full items-center gap-3 bg-transparent py-5 pl-[41px] pr-[15px] text-left font-heading text-lg font-semibold transition-colors',
                        isOpen ? 'text-brand' : 'text-collapsed',
                      )}
                    >
                      {isOpen ? (
                        <Minus className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                      ) : (
                        <Plus className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                      )}
                      {feature.title}
                    </button>
                  </h3>
                  {isOpen ? (
                    <div className="bg-white px-[38px] py-5 font-body text-base text-body">
                      {feature.body}
                    </div>
                  ) : null}
                </div>
              )
            })}
          </div>
        </div>
        <div className="lg:w-[30%]">
          <img
            src="https://picsum.photos/seed/boostly-features/600/700"
            alt="Product analytics dashboard open on a laptop"
            className="w-full object-cover lg:h-[700px]"
          />
        </div>
      </div>
    </section>
  )
}
