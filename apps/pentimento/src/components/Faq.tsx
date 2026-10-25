import { useState } from 'react'
import { Plus } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { faq } from '../content'
import { Badge, containerClass, SectionHeading } from './ui'

/**
 * Single-open: opening a question closes the one before it. The reference only
 * animated `max-height`; here the buttons also carry `aria-expanded` and
 * `aria-controls`, and the panel is a grid row that grows from 0fr to 1fr.
 */
export function Faq() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="bg-white py-20 lg:py-28 dark:bg-gray-950">
      <div className={cn(containerClass, 'mx-auto max-w-3xl text-center')}>
        <Badge tone="solid">{faq.pill}</Badge>
        <div className="mt-6 text-left sm:text-center">
          <SectionHeading sans title={faq.title} lead={faq.lead} />
        </div>

        <ul className="mt-16 divide-y divide-gray-200 text-left dark:divide-gray-800">
          {faq.items.map((item, index) => {
            const expanded = open === index
            return (
              <li key={item.question} className="py-6">
                <h3>
                  <button
                    type="button"
                    id={`faq-toggle-${index}`}
                    aria-expanded={expanded}
                    aria-controls={`faq-panel-${index}`}
                    onClick={() => setOpen(expanded ? null : index)}
                    className="flex w-full items-center justify-between gap-6 text-left"
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
                  role="region"
                  aria-labelledby={`faq-toggle-${index}`}
                  className={cn(
                    'grid transition-[grid-template-rows] duration-300 motion-reduce:transition-none',
                    expanded ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="pt-4 text-base leading-7 text-gray-600 dark:text-gray-400">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
