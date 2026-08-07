import { useState } from 'react'
import { ChevronDown, MapPin } from 'lucide-react'

const questions = [
  {
    question: 'How do I get started?',
    answer:
      'Download the app from the store of your choice, create a free account, and follow the in-app tour to set up your workspace in minutes.',
  },
  {
    question: 'Is Blush available on mobile?',
    answer:
      'Yes — Blush ships as a mobile app for both iOS and Android, with the same experience across phones, tablets, and the web.',
  },
  {
    question: 'Can I cancel anytime?',
    answer:
      'Absolutely. Plans are month-to-month and you can cancel from your account settings at any time, no questions asked.',
  },
] as const

const pins = [
  { label: 'New York', x: '18%', y: '35%' },
  { label: 'London', x: '42%', y: '28%' },
  { label: 'Dubai', x: '58%', y: '38%' },
  { label: 'Singapore', x: '78%', y: '52%' },
] as const

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section
      aria-label="Frequently asked questions"
      className="bg-primary-50/40 py-20 dark:bg-gray-900"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-semibold text-ink dark:text-gray-100">
              An app for Each &amp; Everyone
            </h2>
            <p className="mt-5 leading-relaxed text-smoke dark:text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac nibh sed mi
              ullamcorper rhoncus. Curabitur pulvinar vel augue sit amet vestibulum.
            </p>
            <div className="mt-8 space-y-3">
              {questions.map((item, index) => {
                const open = openIndex === index
                return (
                  <div
                    key={item.question}
                    className="rounded-xl border border-primary-100 bg-white dark:border-gray-800 dark:bg-gray-950"
                  >
                    <button
                      type="button"
                      aria-expanded={open}
                      onClick={() => setOpenIndex(open ? null : index)}
                      className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-medium text-ink dark:text-gray-100"
                    >
                      <span>{item.question}</span>
                      <ChevronDown
                        className={`h-4 w-4 shrink-0 text-primary-400 transition-transform ${open ? 'rotate-180' : ''}`}
                        aria-hidden="true"
                      />
                    </button>
                    {open && (
                      <p className="px-5 pb-4 text-sm leading-relaxed text-smoke dark:text-gray-400">
                        {item.answer}
                      </p>
                    )}
                  </div>
                )
              })}
            </div>
          </div>

          <div
            aria-label="Used worldwide"
            className="relative overflow-hidden rounded-3xl border border-primary-100 bg-white p-10 dark:border-gray-800 dark:bg-gray-950"
          >
            <div
              className="absolute inset-0 opacity-40"
              style={{
                backgroundImage: 'radial-gradient(circle, #fa91b9 1.5px, transparent 1.5px)',
                backgroundSize: '26px 26px',
              }}
              aria-hidden="true"
            />
            <div className="relative">
              <h3 className="font-display text-xl font-semibold text-ink dark:text-gray-100">
                Used worldwide
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-smoke dark:text-gray-400">
                Join thousands of teams on every continent, from New York to Singapore.
              </p>
              <ul className="relative mt-10 h-56">
                {pins.map((pin) => (
                  <li
                    key={pin.label}
                    className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1"
                    style={{ left: pin.x, top: pin.y }}
                  >
                    <MapPin className="h-7 w-7 text-primary-400" aria-hidden="true" />
                    <span className="rounded-full bg-primary-400 px-2 py-0.5 text-xs font-semibold text-white">
                      {pin.label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
