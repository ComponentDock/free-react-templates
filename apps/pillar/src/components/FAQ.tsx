import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const questions = [
  {
    q: 'How much do you charge for a building?',
    a: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos quos incidunt, perspiciatis, ad saepe, magnam error adipisci vitae ut provident alias! Odit asperiores modi sed.',
  },
  {
    q: 'What is your process?',
    a: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat voluptate animi hic quasi sequi obcaecati, blanditiis, earum, dolorum perspiciatis laboriosam.',
  },
  {
    q: 'How it works? Please let us know!',
    a: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum et dolorum libero consequuntur facere, quae nemo recusandae corporis.',
  },
  {
    q: 'Is it free?',
    a: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos quos incidunt, perspiciatis, ad saepe, magnam error adipisci.',
  },
  {
    q: 'Where to find you? Where is your location?',
    a: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos quos incidunt, perspiciatis, ad saepe, magnam error adipisci vitae.',
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div>
            <h4 className="mb-1 text-sm font-semibold uppercase tracking-wider text-accent">
              Ask Us
            </h4>
            <h2 className="mb-8 text-3xl font-bold text-gray-900">Frequently Ask Questions</h2>
            <div className="space-y-3">
              {questions.map((item, i) => (
                <div key={item.q} className="rounded border bg-white">
                  <button
                    type="button"
                    onClick={() => setOpenIndex((prev) => (prev === i ? null : i))}
                    aria-expanded={openIndex === i}
                    className="flex w-full items-center justify-between p-4 text-left text-sm font-medium text-gray-800"
                  >
                    {item.q}
                    <ChevronDown
                      className={cn(
                        'h-4 w-4 shrink-0 text-gray-400 transition-transform',
                        openIndex === i && 'rotate-180',
                      )}
                    />
                  </button>
                  {openIndex === i && (
                    <div className="border-t px-4 pb-4 pt-3 text-sm text-gray-500">{item.a}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="hidden lg:block">
            <img
              src="https://picsum.photos/seed/pillar-faq/600/500"
              alt="Architecture interior"
              className="rounded object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
