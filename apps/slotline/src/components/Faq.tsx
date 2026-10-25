import { useState } from 'react'
import { Plus } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { faq } from '../content'
import { SectionHeading, containerClass } from './ui'

/**
 * Six questions, one open at a time, and the two attributes the reference
 * forgets: every trigger carries `aria-expanded` and points at its panel.
 */
export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="scroll-mt-28 bg-white py-20 lg:py-28">
      <div className={containerClass}>
        <SectionHeading kicker={faq.kicker} title={faq.title} lede={faq.lede} tone="lavender" align="center" serif={false} />

        <div className="mx-auto mt-16 max-w-3xl divide-y divide-gray-200">
          {faq.items.map((item, index) => {
            const open = openIndex === index
            return (
              <div key={item.question} className="py-6">
                <button
                  type="button"
                  aria-expanded={open}
                  aria-controls={`faq-panel-${index}`}
                  onClick={() => setOpenIndex(open ? null : index)}
                  className="flex w-full items-center justify-between gap-6 text-left"
                >
                  <span className="text-lg leading-7 font-semibold text-gray-900">{item.question}</span>
                  <span
                    aria-hidden="true"
                    className={cn(
                      'grid h-8 w-8 shrink-0 place-items-center rounded-full bg-gray-100 text-gray-700 transition-transform duration-300 motion-reduce:transition-none',
                      open && 'rotate-45',
                    )}
                  >
                    <Plus className="h-4 w-4" />
                  </span>
                </button>
                <div
                  id={`faq-panel-${index}`}
                  className={cn(
                    'grid transition-all duration-300 motion-reduce:transition-none',
                    open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="pt-4 pr-12 text-base leading-6 text-gray-600">{item.answer}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
