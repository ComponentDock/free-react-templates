import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { FAQS, FAQ_COPY } from '../content'
import { Container, Reveal, SectionPill } from './ui'

/**
 * Five disclosures that actually open — the reference's five answers all
 * measure 0 px, which is the one defect worth fixing rather than porting.
 */
export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="section bg-white dark:bg-gray-950">
      <Container>
        <Reveal className="mx-auto max-w-3xl text-center">
          <SectionPill>{FAQ_COPY.pill}</SectionPill>
        </Reveal>
        <Reveal className="mx-auto mt-4 max-w-3xl text-center">
          <h2 className="text-3xl font-bold leading-[1.1] tracking-tight text-ink-800 sm:text-4xl dark:text-white">
            {FAQ_COPY.heading}
          </h2>
        </Reveal>
        <Reveal className="mx-auto mt-3 max-w-3xl text-center">
          <p className="text-lg leading-7 text-ink-500 dark:text-gray-300">{FAQ_COPY.lede}</p>
        </Reveal>

        <div className="mx-auto mt-10 max-w-3xl divide-y divide-gray-200 dark:divide-gray-800">
          {FAQS.map((faq, index) => {
            const open = openIndex === index
            return (
              <Reveal key={faq.question}>
                <h3>
                  <button
                    type="button"
                    aria-expanded={open}
                    aria-controls={`faq-answer-${index}`}
                    onClick={() => setOpenIndex(open ? null : index)}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  >
                    <span className="text-lg font-semibold leading-6 text-ink-800 dark:text-white">
                      {faq.question}
                    </span>
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-ink-200 dark:border-gray-700">
                      <ChevronDown
                        aria-hidden="true"
                        className={cn(
                          'h-4 w-4 text-ink-600 transition-transform duration-150 dark:text-gray-300',
                          open && 'rotate-180',
                        )}
                      />
                    </span>
                  </button>
                </h3>
                {open ? (
                  <div
                    id={`faq-answer-${index}`}
                    className="pb-6 pr-12 text-base leading-7 text-ink-500 transition-opacity duration-150 dark:text-gray-300"
                  >
                    {faq.answer}
                  </div>
                ) : null}
              </Reveal>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
