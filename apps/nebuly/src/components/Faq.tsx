import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { FAQ } from '../data'

/* FAQ — image panel beside an accordion of four questions; one item open
   at a time (first by default), active toggle filled brand indigo, pill
   rows, rotating chevron, aria-expanded. */

export function Faq() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq-section" className="bg-light py-24 dark:bg-gray-900">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="hidden lg:block">
          <img
            src={FAQ.image}
            alt="Support team answering questions"
            className="h-[700px] w-full rounded-md object-cover shadow-[17px_25px_56px_-22px_rgba(0,0,0,0.38)]"
            loading="lazy"
          />
        </div>
        <div>
          <h2 className="text-[32px] font-bold text-navy dark:text-white sm:text-[40px]">
            {FAQ.heading}
          </h2>
          <div className="mt-8 space-y-4">
            {FAQ.items.map((item, index) => {
              const open = index === openIndex
              return (
                <div
                  key={item.question}
                  className="overflow-hidden rounded-[40px] border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800"
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(open ? -1 : index)}
                    aria-expanded={open}
                    className={cn(
                      'flex w-full items-center justify-between gap-4 rounded-[40px] px-7 py-5 text-left text-[17px] font-semibold transition-colors',
                      open ? 'bg-brand text-white' : 'text-navy dark:text-white',
                    )}
                  >
                    {item.question}
                    <ChevronDown
                      className={cn(
                        'h-5 w-5 shrink-0 transition-transform',
                        open ? 'rotate-180' : 'rotate-0',
                      )}
                      aria-hidden="true"
                    />
                  </button>
                  {open && (
                    <p className="px-7 pb-6 text-[15px] leading-relaxed text-white/80">
                      {item.answer}
                    </p>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
