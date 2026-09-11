import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const items = [
  {
    title: 'Starts the automated process.',
    content:
      'The automated process starts as soon as your clothes go into the machine. Duis cursus, mi quis viverra ornare.',
  },
  {
    title: 'The automated process starts.',
    content:
      'The automated process starts as soon as your clothes go into the machine. Duis cursus, mi quis viverra ornare.',
  },
  {
    title: 'Automated process starts.',
    content:
      'The automated process starts as soon as your clothes go into the machine. Duis cursus, mi quis viverra ornare.',
  },
  {
    title: 'Process the automated magic.',
    content:
      'The automated process starts as soon as your clothes go into the machine. Duis cursus, mi quis viverra ornare.',
  },
]

export function Accordion() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="bg-white py-20 sm:py-32">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-4 sm:px-6 lg:flex-row">
        <div className="lg:w-1/2">
          <h2 className="mb-8 text-3xl font-bold text-navy sm:text-4xl">
            Creative solutions
            <br />
            from experts
          </h2>
          <div className="space-y-4">
            {items.map((item, i) => (
              <div key={item.title} className="border border-gray-100 rounded-lg">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                  className={cn(
                    'flex w-full items-center justify-between px-6 py-4 text-left text-sm font-bold transition-colors',
                    openIndex === i ? 'text-brand' : 'text-navy hover:text-brand',
                  )}
                  aria-expanded={openIndex === i}
                  type="button"
                >
                  {item.title}
                  <ChevronDown
                    className={cn('h-5 w-5 transition-transform', openIndex === i && 'rotate-180')}
                  />
                </button>
                {openIndex === i && (
                  <div className="px-6 pb-4 text-sm text-text">{item.content}</div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center gap-8 lg:w-1/2">
          <div className="text-center">
            <div className="mb-2 text-4xl font-bold text-brand">900+</div>
            <p className="text-sm text-mist">
              Interdum nulla, ut commodo
              <br />
              diam libero vitae erat.
            </p>
          </div>
          <div className="text-center">
            <div className="mb-2 text-4xl font-bold text-brand">95%</div>
            <p className="text-sm text-mist">
              Interdum nulla, ut commodo
              <br />
              diam libero vitae erat.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
