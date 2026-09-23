import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { faqItems } from '../data'

export function Faq() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="bg-surface-alt py-20">
      <div className="mx-auto max-w-4xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-2 text-3xl font-bold text-body">Frequently Asked Questions</h2>
          <p className="text-muted">Find answers to common questions</p>
        </div>
        <div className="space-y-4">
          {faqItems.map((item, index) => {
            const isOpen = activeIndex === index
            return (
              <div key={item.question} className="rounded-xl bg-white shadow-sm">
                <button
                  type="button"
                  onClick={() => setActiveIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between p-5 text-left"
                >
                  <span className="text-sm font-semibold text-body">{item.question}</span>
                  <ChevronDown
                    className={cn(
                      'h-5 w-5 text-muted transition-transform duration-200',
                      isOpen && 'rotate-180',
                    )}
                    aria-hidden="true"
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5">
                    <p className="text-sm text-muted">{item.answer}</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
