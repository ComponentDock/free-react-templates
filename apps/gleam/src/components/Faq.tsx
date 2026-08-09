import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { Reveal } from './Reveal'

const faqs = [
  {
    question: 'How long does a typical cleaning take?',
    answer:
      'A standard cleaning for a 1,500 sq ft home typically takes 2-3 hours with a two-person team. Deep cleans may take 4-6 hours depending on the condition and size of the space. We always provide a time estimate before we begin.',
  },
  {
    question: 'What cleaning products do you use?',
    answer:
      'We use EPA-certified, eco-friendly cleaning products that are safe for children, pets, and people with allergies. Our green cleaning line is free from harsh chemicals, ammonia, and bleach while still delivering professional-grade results.',
  },
  {
    question: 'What is included in a standard cleaning?',
    answer:
      'Our standard cleaning covers dusting all surfaces, vacuuming and mopping floors, kitchen cleaning (counters, sink, stovetop, exterior of appliances), bathroom sanitization (toilet, tub, shower, sink, mirrors), and trash removal from all rooms.',
  },
  {
    question: 'Are your cleaners insured and bonded?',
    answer:
      'Yes, Gleam carries up to $2 million in liability insurance and all our team members are fully bonded. Every cleaner passes a thorough background check before joining our team, so you can feel confident and secure.',
  },
  {
    question: 'Can I reschedule or cancel a cleaning?',
    answer:
      'Absolutely. We ask for at least 24 hours notice for rescheduling or cancellations at no charge. Changes made within 24 hours of the appointment may incur a small fee. You can reschedule through our website, app, or by calling our team.',
  },
] as const

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="bg-gray-50 dark:bg-gray-950">
      <div className="mx-auto max-w-3xl px-4 py-16 lg:px-8 lg:py-20">
        <Reveal>
          <p className="text-center text-sm font-bold uppercase tracking-wider text-primary-600">
            FAQ
          </p>
          <h2 className="mt-2 text-center text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-base text-gray-600 dark:text-gray-400">
            Find answers to common questions about our cleaning services.
          </p>
        </Reveal>
        <div className="mt-10 space-y-3">
          {faqs.map((faq, index) => {
            const open = openIndex === index
            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(open ? null : index)}
                  aria-expanded={open}
                  aria-controls={`faq-panel-${index}`}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="text-sm font-bold text-gray-900 dark:text-white sm:text-base">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={cn(
                      'h-5 w-5 shrink-0 text-primary-600 transition-transform dark:text-primary-400',
                      open && 'rotate-180',
                    )}
                    aria-hidden="true"
                  />
                </button>
                <div id={`faq-panel-${index}`} className={cn('px-5', open ? 'pb-5' : 'hidden')}>
                  <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                    {faq.answer}
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
