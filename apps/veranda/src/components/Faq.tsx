import { useState } from 'react'
import { Plus } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { FAQS } from '../data'
import { Reveal } from './Reveal'
import { SectionHead } from './SectionHead'

/**
 * Five exclusive rows: opening one closes the rest, and the plus disc rotates
 * 45 degrees into a cross. Only the open panel is mounted, so nothing hidden is
 * still reachable by a screen reader.
 */
export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="scroll-mt-24 bg-white py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHead
          size="sm"
          eyebrow="Questions"
          title="Before you join"
          lede="The five things people ask before they pay for anything."
        />

        <Reveal className="mx-auto mt-12 max-w-3xl">
          <div className="divide-y divide-gray-200 border-y border-gray-200">
            {FAQS.map((faq, index) => {
              const open = openIndex === index

              return (
                <div key={faq.question}>
                  <h3>
                    <button
                      type="button"
                      aria-expanded={open}
                      aria-controls={`faq-panel-${index}`}
                      onClick={() => setOpenIndex(open ? null : index)}
                      className="flex w-full items-center justify-between gap-4 py-6 text-left"
                    >
                      <span className="text-base font-semibold text-gray-900">{faq.question}</span>
                      <span
                        aria-hidden="true"
                        className={cn(
                          'flex h-8 w-8 flex-none items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-transform duration-200',
                          open ? 'rotate-45' : 'rotate-0',
                        )}
                      >
                        <Plus className="h-4 w-4" />
                      </span>
                    </button>
                  </h3>
                  {open ? (
                    <div
                      id={`faq-panel-${index}`}
                      role="region"
                      aria-label={faq.question}
                      className="animate-slide-up pb-6 text-sm leading-relaxed text-gray-600"
                    >
                      {faq.answer}
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
