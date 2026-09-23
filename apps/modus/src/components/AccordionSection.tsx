import { useState } from 'react'

const accordions = [
  {
    title: 'The automated process starts.',
    content:
      'The automated process starts as soon as your clothes go into the machine. Duis cursus, mi quis viverra ornare.',
    defaultOpen: true,
  },
  {
    title: 'Starts the automated process.',
    content:
      'The automated process starts as soon as your clothes go into the machine. Duis cursus, mi quis viverra ornare.',
    defaultOpen: false,
  },
  {
    title: 'Automated process starts.',
    content:
      'The automated process starts as soon as your clothes go into the machine. Duis cursus, mi quis viverra ornare.',
    defaultOpen: false,
  },
  {
    title: 'Process the automated magic.',
    content:
      'The automated process starts as soon as your clothes go into the machine. Duis cursus, mi quis viverra ornare.',
    defaultOpen: false,
  },
] as const

export function AccordionSection() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="bg-white py-24 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-bold text-ink dark:text-white sm:text-4xl">
              A design with different vision point
            </h2>
            <p className="mt-6 text-base leading-relaxed text-mist dark:text-gray-400">
              Even the all-powerful Pointing has no control about the blind texts it is an almost
              unorthographic. Exercitation photo booth stumptown.
            </p>
            <a
              href="#contact"
              className="mt-8 inline-block rounded bg-brand px-8 py-3.5 font-display text-sm font-medium text-white transition-colors hover:bg-brand-dark"
            >
              Learn More
            </a>
          </div>

          <div className="space-y-0">
            {accordions.map((item, index) => {
              const isOpen = openIndex === index
              return (
                <div key={item.title} className="border-b border-gray-200 dark:border-gray-800">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between py-4 text-left font-display text-base font-medium text-ink dark:text-white"
                  >
                    {item.title}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-5 w-5 shrink-0 text-brand transition-transform ${isOpen ? 'rotate-180' : ''}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {isOpen && (
                    <div className="pb-4 text-sm leading-relaxed text-mist dark:text-gray-400">
                      {item.content}
                    </div>
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
