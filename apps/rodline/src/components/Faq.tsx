import { useState } from 'react'
import { Plus } from 'lucide-react'
import { Reveal } from './Reveal'
import { faq } from '../content'

/** Five questions, divided by hairlines, exactly one panel open at a time. */
export function Faq() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="bg-white py-20 lg:py-28 dark:bg-gray-950">
      <div className="container mx-auto px-4 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="mb-4 inline-flex items-center rounded-full bg-primary-100 px-3 py-1 text-sm font-medium text-primary-700 dark:bg-primary-900/50 dark:text-primary-300">
            {faq.badge}
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            {faq.title}
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">{faq.lede}</p>
        </Reveal>

        <ul className="mx-auto mt-16 max-w-3xl divide-y divide-gray-200 dark:divide-gray-800">
          {faq.items.map((item, index) => {
            const isOpen = open === index

            return (
              <li key={item.question} className="py-6">
                <h3>
                  <button
                    type="button"
                    id={`faq-toggle-${index}`}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${index}`}
                    onClick={() => setOpen(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-4 text-left"
                  >
                    <span className="text-lg font-semibold text-gray-900 dark:text-white">
                      {item.question}
                    </span>
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-transform duration-300 dark:bg-gray-800 dark:text-gray-300 ${
                        isOpen ? 'rotate-45' : ''
                      }`}
                    >
                      <Plus aria-hidden="true" className="h-5 w-5" />
                    </span>
                  </button>
                </h3>
                <div
                  id={`faq-panel-${index}`}
                  role="region"
                  aria-labelledby={`faq-toggle-${index}`}
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="pt-4 text-gray-600 dark:text-gray-400">{item.answer}</p>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
