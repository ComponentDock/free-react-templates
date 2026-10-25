import { useState } from 'react'
import { Plus } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { FAQ_HEADING, FAQ_NOTE, FAQS } from '../content'
import { Reveal } from './Reveal'

/** Five questions, one open at a time — opening a second closes the first. */
export function Faq() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <Reveal className="max-w-2xl">
          <span className="inline-flex items-center rounded-full bg-primary-100 px-3 py-1 text-sm font-medium text-primary-700">
            Questions
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {FAQ_HEADING}
          </h2>
          <p className="mt-4 text-ink-500">{FAQ_NOTE}</p>
          <div className="mt-10 divide-y divide-gray-200">
            {FAQS.map((faq, index) => {
              const expanded = open === index
              return (
                <div key={faq.question} className="py-6">
                  <button
                    type="button"
                    aria-expanded={expanded}
                    aria-controls={`faq-panel-${index}`}
                    onClick={() => setOpen(expanded ? null : index)}
                    className="flex w-full items-center justify-between gap-4 text-left"
                  >
                    <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                    <span
                      aria-hidden="true"
                      className={cn(
                        'flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-transform duration-200',
                        expanded && 'rotate-45',
                      )}
                    >
                      <Plus className="h-4 w-4" />
                    </span>
                  </button>
                  {expanded ? (
                    <div id={`faq-panel-${index}`} className="overflow-hidden">
                      <p className="pt-4 text-gray-600">{faq.answer}</p>
                    </div>
                  ) : null}
                </div>
              )
            })}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
