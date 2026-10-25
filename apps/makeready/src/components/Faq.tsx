import { useState } from 'react'
import { Plus } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { faq } from '../content'
import { Pill, containerClass } from './ui'

/**
 * Five questions about money, ownership and scope. Single-open, and — unlike
 * the reference — every button carries `aria-expanded`/`aria-controls` and the
 * closed panels are `hidden`, so a screen reader is told the state rather than
 * having to infer it from a rotated icon.
 */
export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="bg-white py-20 lg:py-28 dark:bg-gray-950">
      <div className={containerClass}>
        <div className="mx-auto max-w-3xl text-center">
          <Pill>{faq.eyebrow}</Pill>
          <h2 className="mt-4 text-3xl leading-9 font-bold tracking-[-0.9px] text-gray-900 sm:text-4xl sm:leading-10 dark:text-white">
            {faq.title}
          </h2>
          <p className="mt-3 text-lg leading-7 text-gray-600 dark:text-gray-300">{faq.lead}</p>
        </div>

        <div className="mx-auto mt-10 max-w-3xl divide-y divide-gray-200 dark:divide-gray-800">
          {faq.items.map((item, index) => {
            const expanded = open === index
            return (
              <div key={item.question}>
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpen(expanded ? null : index)}
                    aria-expanded={expanded}
                    aria-controls={`faq-panel-${index}`}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  >
                    <span className="text-lg leading-7 font-semibold text-gray-900 dark:text-white">
                      {item.question}
                    </span>
                    <span
                      aria-hidden="true"
                      className={cn(
                        'grid h-8 w-8 shrink-0 place-items-center rounded-full bg-gray-100 text-gray-700 transition-transform duration-300 motion-reduce:transition-none dark:bg-gray-800 dark:text-gray-200',
                        expanded ? 'rotate-45' : '',
                      )}
                    >
                      <Plus className="h-4 w-4" />
                    </span>
                  </button>
                </h3>
                <div
                  id={`faq-panel-${index}`}
                  hidden={!expanded}
                  className="overflow-hidden motion-safe:animate-[faq-open_300ms_ease-out]"
                >
                  <p className="pb-6 text-base leading-7 text-gray-600 dark:text-gray-300">
                    {item.answer}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
