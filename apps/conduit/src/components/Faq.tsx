import { useState } from 'react'
import { Plus } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { faq } from '../content'
import { Badge, containerClass, sectionClass } from './ui'

/**
 * One answer open at a time. The panel's height is measured from the content on
 * open, exactly as the reference does it, so the transition has somewhere to go.
 */
export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [height, setHeight] = useState(0)

  const toggle = (index: number, panel: HTMLElement) => {
    if (openIndex === index) {
      setOpenIndex(null)
      return
    }
    setHeight(panel.scrollHeight)
    setOpenIndex(index)
  }

  return (
    <section id="faq" className={`bg-white ${sectionClass} dark:bg-gray-950`}>
      <div className={containerClass}>
        <div className="mx-auto max-w-3xl text-center">
          <Badge>{faq.badge}</Badge>
          <h2 className="mt-4 text-[30px] leading-[34px] font-bold tracking-[-0.9px] text-gray-900 sm:text-4xl sm:leading-10 dark:text-white">
            {faq.title}
          </h2>
          <p className="mt-4 text-lg leading-7 text-gray-600 dark:text-gray-400">{faq.lead}</p>
        </div>

        <div className="mx-auto mt-16 max-w-3xl divide-y divide-gray-200 dark:divide-gray-800">
          {faq.items.map((item, index) => {
            const open = openIndex === index
            return (
              <div key={item.question} className="py-6">
                <button
                  type="button"
                  data-faq-toggle
                  aria-expanded={open}
                  aria-controls={`faq-panel-${index}`}
                  onClick={(event) =>
                    toggle(index, event.currentTarget.nextElementSibling as HTMLElement)
                  }
                  className="flex w-full items-center justify-between gap-4 text-left"
                >
                  <span className="text-lg leading-7 font-semibold text-gray-900 dark:text-white">
                    {item.question}
                  </span>
                  <span
                    data-faq-icon
                    className={cn(
                      'grid h-8 w-8 shrink-0 place-items-center rounded-full bg-gray-100 text-gray-700 transition-transform duration-300 motion-reduce:transition-none dark:bg-gray-800 dark:text-gray-200',
                      open ? 'rotate-45' : '',
                    )}
                  >
                    <Plus aria-hidden="true" className="h-4 w-4" />
                  </span>
                </button>
                <div
                  id={`faq-panel-${index}`}
                  data-testid="faq-panel"
                  className="overflow-hidden transition-all duration-300 motion-reduce:transition-none"
                  style={{ maxHeight: open ? `${height}px` : '0px', opacity: open ? 1 : 0 }}
                >
                  <p className="pt-3 text-base leading-6 text-gray-600 dark:text-gray-400">
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
