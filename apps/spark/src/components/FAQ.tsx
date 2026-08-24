import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const faqs = [
  {
    q: 'What is Spark?',
    a: 'Spark is an all-in-one app landing template built with React, Tailwind CSS, and TypeScript. It provides a modern, responsive design for showcasing your app.',
  },
  {
    q: 'How do I get started?',
    a: 'Simply download the template, install dependencies, and customize the components to match your brand. The setup takes just a few minutes.',
  },
  {
    q: 'Is Spark free to use?',
    a: 'Yes! Spark is completely free and open source. Use it for personal or commercial projects without any restrictions.',
  },
  {
    q: 'Can I customize the design?',
    a: 'Absolutely. Every component is built with Tailwind CSS utility classes and uses theme tokens that you can override in index.css.',
  },
  {
    q: 'Does it support dark mode?',
    a: 'Yes, Spark includes a dark mode toggle in the navbar that applies the .dark class to the document root, enabling dark mode across all sections.',
  },
  {
    q: 'What technologies does Spark use?',
    a: 'Spark uses Vite, React 19, Tailwind CSS 4, TypeScript, and lucide-react icons. It follows modern best practices for performance and accessibility.',
  },
] as const

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  function toggle(index: number) {
    setOpenIndex((prev) => (prev === index ? null : index))
  }

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center text-3xl font-bold text-ink sm:text-4xl">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={faq.q} className="rounded-2xl bg-mist shadow-sm">
              <button
                type="button"
                onClick={() => toggle(i)}
                aria-expanded={openIndex === i}
                className="flex w-full items-center justify-between px-6 py-4 text-left font-semibold text-ink"
              >
                {faq.q}
                <ChevronDown
                  className={cn(
                    'h-5 w-5 shrink-0 text-smoke transition-transform',
                    openIndex === i && 'rotate-180',
                  )}
                />
              </button>
              <div
                className={cn(
                  'overflow-hidden transition-all duration-300',
                  openIndex === i ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0',
                )}
              >
                <p className="px-6 pb-4 text-sm leading-relaxed text-smoke">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
