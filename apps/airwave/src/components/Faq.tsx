import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { Reveal } from './Reveal'

const faqs = [
  {
    question: 'How do I book a guest on the show?',
    answer:
      'Pitch your story through the contact form below — tell us who you are, what you are building, and the one idea you want founders to hear. We respond to every pitch within two weeks.',
  },
  {
    question: 'How often are new episodes released?',
    answer:
      'New episodes drop every Tuesday and Thursday, with bonus weekend episodes for subscribers. The full archive stays free on every major platform.',
  },
  {
    question: 'Where can I listen to Airwave?',
    answer:
      'Airwave is available on Apple Podcasts, Spotify, Google Podcasts, YouTube, and Amazon Music. Pick your favorite platform and hit subscribe.',
  },
  {
    question: 'How can my company sponsor the show?',
    answer:
      'We offer pre-roll, mid-roll, and post-roll sponsorships plus integrated segments and a downloadable media kit. Email hello@airwave.fm and our team will send over rates and availability.',
  },
  {
    question: 'Can I suggest a topic for an episode?',
    answer:
      'Absolutely — topic suggestions are one of our favorite parts of the community. Drop your idea in the contact form and we read every single one.',
  },
] as const

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="bg-white py-20 dark:bg-gray-950 lg:py-28">
      <div className="mx-auto max-w-3xl px-4 lg:px-8">
        <Reveal>
          <p className="text-center text-sm font-bold uppercase tracking-wider text-primary-600 dark:text-primary-400">
            FAQ
          </p>
          <h2 className="mt-2 text-center text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Frequently Asked Questions
          </h2>
        </Reveal>

        <div className="mt-10 space-y-3">
          {faqs.map((faq, index) => {
            const open = openIndex === index
            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900"
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
