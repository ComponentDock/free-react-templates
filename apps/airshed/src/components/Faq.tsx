import { useState } from 'react'
import { Plus } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { FAQ } from '../content'
import { Container, Reveal, SectionPill } from './ui'

/**
 * Five exclusive disclosures. The reference opens them correctly but exposes no
 * state at all, so every button here carries `aria-expanded` and `aria-controls`
 * and every collapsed panel is `hidden`.
 */
export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="section bg-white dark:bg-gray-950">
      <Container>
        <Reveal className="mx-auto max-w-3xl text-center">
          <SectionPill>{FAQ.pill}</SectionPill>
        </Reveal>
        <Reveal className="mx-auto mt-4 max-w-3xl text-center">
          <h2 className="text-3xl font-bold leading-[1.1] tracking-[-0.9px] text-ink-800 sm:text-4xl dark:text-white">
            {FAQ.heading}
          </h2>
        </Reveal>
        <Reveal className="mx-auto mt-3 max-w-3xl text-center">
          <p className="text-lg leading-7 text-ink-500 dark:text-gray-300">{FAQ.lede}</p>
        </Reveal>

        <div className="mx-auto mt-10 max-w-3xl divide-y divide-gray-200 dark:divide-gray-800">
          {FAQ.items.map((item, index) => {
            const open = openIndex === index
            return (
              <div key={item.question} className="py-6">
                <h3>
                  <button
                    type="button"
                    aria-expanded={open}
                    aria-controls={`faq-answer-${index}`}
                    onClick={() => setOpenIndex(open ? null : index)}
                    className="flex w-full items-center justify-between gap-4 text-left"
                  >
                    <span className="text-lg font-semibold leading-7 text-ink-800 dark:text-white">
                      {item.question}
                    </span>
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800">
                      <Plus
                        aria-hidden="true"
                        className={cn(
                          'h-5 w-5 text-ink-700 transition-transform duration-200 dark:text-gray-200',
                          open && 'rotate-45',
                        )}
                      />
                    </span>
                  </button>
                </h3>
                <div id={`faq-answer-${index}`} hidden={!open} className="overflow-hidden">
                  <p className="pt-4 text-base leading-6 text-ink-500 dark:text-gray-300">
                    {item.answer}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
