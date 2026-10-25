import { useState } from 'react'
import { Plus } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { FAQS } from '../content'
import { SectionHead } from './SectionHead'

/**
 * Exclusive accordion: opening a row closes whichever row was open, the panel
 * is removed from the tree when collapsed, and the disc rotates 45° into an
 * ×. The first row ships closed.
 */
export function Faq() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" aria-label="Questions" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-4 lg:px-8">
        <SectionHead
          pill="Questions"
          title="The things people check first"
          lede="Mostly about what we do not do."
        />

        <ul className="mt-12 divide-y divide-gray-200 border-y border-gray-200">
          {FAQS.map((faq, index) => {
            const expanded = open === index
            return (
              <li key={faq.question}>
                <button
                  type="button"
                  aria-expanded={expanded}
                  aria-controls={`faq-panel-${index}`}
                  onClick={() => setOpen(expanded ? null : index)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-gray-100">
                    <Plus
                      aria-hidden="true"
                      className={cn(
                        'h-4 w-4 text-gray-700 transition-transform',
                        expanded && 'rotate-45',
                      )}
                    />
                  </span>
                </button>
                {expanded && (
                  <div
                    id={`faq-panel-${index}`}
                    className="pb-5 text-sm leading-relaxed text-gray-600"
                  >
                    {faq.answer}
                  </div>
                )}
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
