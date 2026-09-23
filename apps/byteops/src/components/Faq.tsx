import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const faqs = [
  {
    q: 'What services do you offer?',
    a: 'We offer a comprehensive range of digital services including web design, web development, mobile app development, digital marketing, SEO optimization, and business strategy consulting.',
  },
  {
    q: 'How long does a typical project take?',
    a: 'Project timelines vary based on scope and complexity. A simple website typically takes 4-6 weeks, while more complex web applications can take 3-6 months.',
  },
  {
    q: 'What is your pricing structure?',
    a: 'We offer flexible pricing options including fixed-price projects, hourly rates, and retainer agreements. After understanding your requirements, we provide a detailed proposal.',
  },
  {
    q: 'Do you provide ongoing support after launch?',
    a: 'Yes, we offer comprehensive post-launch support including maintenance packages, security updates, performance monitoring, and feature enhancements.',
  },
  {
    q: 'How do we get started?',
    a: 'Getting started is easy! Simply reach out through our contact form or give us a call. We will schedule a free consultation to discuss your project requirements.',
  },
]

export function Faq() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-ops-400">FAQ</span>
          <h2 className="mt-2 text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={faq.q} className="rounded-lg border border-gray-200 bg-white">
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                className="flex w-full items-center justify-between px-6 py-4 text-left text-sm font-semibold text-gray-900"
                aria-expanded={openIndex === i}
              >
                {faq.q}
                <ChevronDown
                  className={cn(
                    'h-5 w-5 shrink-0 text-gray-500 transition-transform',
                    openIndex === i && 'rotate-180',
                  )}
                />
              </button>
              {openIndex === i && <div className="px-6 pb-4 text-sm text-gray-600">{faq.a}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
