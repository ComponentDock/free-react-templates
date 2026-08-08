import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const faqs = [
  {
    question: 'Can I freeze my membership?',
    answer:
      'Yes, you can freeze your membership for up to 3 months per year at no additional cost. This is perfect for vacations, injuries, or other life events. Simply notify us at least 7 days in advance.',
  },
  {
    question: 'Do you offer personal training?',
    answer:
      'Absolutely! We have certified personal trainers who create customized workout programs based on your goals, fitness level, and preferences. First-time members receive a complimentary consultation session.',
  },
  {
    question: 'What group classes do you offer?',
    answer:
      'We offer 50+ weekly classes including HIIT, yoga, spinning, boxing, CrossFit, Pilates, and more. Classes are included in all membership tiers and led by certified instructors.',
  },
  {
    question: 'Is there a locker room with showers?',
    answer:
      'Yes, our facility includes spacious locker rooms with private showers, complimentary towels, body wash, and hair dryers. Premium members also get access to our sauna and steam room.',
  },
  {
    question: 'Can I bring a guest?',
    answer:
      'Members can bring a guest for a day pass fee. Premium members receive 2 free guest passes per month. Guests must sign a waiver and be accompanied by the member during their visit.',
  },
]

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="bg-white py-20 lg:py-28 dark:bg-gray-950">
      <div className="mx-auto max-w-3xl px-4 lg:px-8">
        <p className="text-center text-sm font-bold uppercase tracking-widest text-primary-600 dark:text-primary-400">
          FAQ
        </p>
        <h2 className="font-display mt-3 text-center text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white">
          Frequently Asked Questions
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-gray-600 dark:text-gray-300">
          Find answers to common questions about our gym memberships and fitness programs.
        </p>
        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => {
            const open = openIndex === index
            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-2xl border border-gray-100 bg-gray-50 dark:border-gray-800 dark:bg-gray-900"
              >
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(open ? null : index)}
                    aria-expanded={open}
                    aria-controls={`faq-panel-${index}`}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-base font-bold text-gray-900 transition-colors hover:text-primary-600 dark:text-white dark:hover:text-primary-400"
                  >
                    {faq.question}
                    <ChevronDown
                      className={cn(
                        'h-5 w-5 shrink-0 text-primary-600 transition-transform dark:text-primary-400',
                        open && 'rotate-180',
                      )}
                      aria-hidden="true"
                    />
                  </button>
                </h3>
                <div
                  id={`faq-panel-${index}`}
                  role="region"
                  aria-label={faq.question}
                  className={cn('px-6 pb-5', open ? 'block' : 'hidden')}
                >
                  <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
