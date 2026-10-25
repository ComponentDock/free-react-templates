import { useState } from 'react'
import { Plus } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { FAQ } from '../content'
import { Reveal } from './Reveal'

/** Exclusive accordion: opening one row collapses every other panel. */
export function Faq() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="bg-white py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="inline-flex rounded-full bg-primary-100 px-3 py-1 text-sm font-medium text-primary-700">
            {FAQ.eyebrow}
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {FAQ.heading}
          </h2>
          <p className="mt-4 text-gray-600">{FAQ.lede}</p>
        </Reveal>

        <Reveal delay={100} className="mx-auto mt-16 max-w-3xl">
          <div className="divide-y divide-gray-200">
            {FAQ.items.map((item, index) => {
              const expanded = open === index
              return (
                <div key={item.question} className="py-6">
                  <h3>
                    <button
                      type="button"
                      id={`faq-question-${index}`}
                      aria-expanded={expanded}
                      aria-controls={`faq-panel-${index}`}
                      onClick={() => setOpen(expanded ? null : index)}
                      className="flex w-full items-center justify-between gap-4 text-left"
                    >
                      <span className="text-lg font-semibold text-gray-900">{item.question}</span>
                      <span
                        aria-hidden="true"
                        className={cn(
                          'flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-transform duration-300',
                          expanded && 'rotate-45',
                        )}
                      >
                        <Plus className="h-4 w-4" />
                      </span>
                    </button>
                  </h3>
                  <div
                    id={`faq-panel-${index}`}
                    role="region"
                    aria-labelledby={`faq-question-${index}`}
                    data-faq-panel
                    style={{ maxHeight: expanded ? '24rem' : '0px', opacity: expanded ? 1 : 0 }}
                    className="overflow-hidden transition-all duration-300"
                  >
                    <p className="pt-4 text-gray-600">{item.answer}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
