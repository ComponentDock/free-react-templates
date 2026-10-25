import { useState } from 'react'
import { Plus } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { Reveal } from './Reveal'
import { faq } from '../content'

/** Five divided rows; opening one closes every other. */
export function Faq() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="scroll-mt-20 bg-white py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="inline-flex rounded-full bg-primary-100 px-3 py-1 text-sm font-medium text-primary-700">
            {faq.chip}
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {faq.title}
          </h2>
          <p className="mt-3 text-gray-600">{faq.lede}</p>
        </Reveal>

        <div className="mx-auto mt-12 max-w-3xl divide-y divide-gray-200">
          {faq.items.map((item, index) => {
            const expanded = open === index

            return (
              <div key={item.question}>
                <h3>
                  <button
                    type="button"
                    data-faq-toggle
                    aria-expanded={expanded}
                    aria-controls={`faq-panel-${index}`}
                    onClick={() => setOpen(expanded ? null : index)}
                    className="flex w-full items-center justify-between gap-4 py-6 text-left focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:outline-none"
                  >
                    <span className="text-lg font-semibold text-gray-900">{item.question}</span>
                    <span
                      data-faq-icon
                      aria-hidden="true"
                      className={cn(
                        'inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-transform duration-300',
                        expanded && 'rotate-45',
                      )}
                    >
                      <Plus className="h-4 w-4" />
                    </span>
                  </button>
                </h3>
                <div
                  id={`faq-panel-${index}`}
                  data-open={expanded ? 'true' : 'false'}
                  className={cn(
                    'overflow-hidden transition-all duration-300',
                    expanded ? 'max-h-[32rem] opacity-100' : 'max-h-0 opacity-0',
                  )}
                >
                  <p className="pb-6 text-gray-600">{item.answer}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
