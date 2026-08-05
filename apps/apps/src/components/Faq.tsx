import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const questions = [
  {
    question: 'Are your Templates responsive?',
    answer:
      'Yes, absolutely. Fast, responsive, and pixel-perfect at every breakpoint — from phones to widescreen desktops.',
  },
  {
    question: 'Does it have all the plugin as mentioned?',
    answer:
      'Every plugin listed on the feature sheet is included and wired up, with documented setup steps for each one.',
  },
  {
    question: 'Can i use the these theme for my client?',
    answer:
      'Sure. The template is free to use in personal and commercial client projects, no attribution required.',
  },
] as const

const stats = [
  { value: '5962', label: 'Projects Completed' },
  { value: '2394', label: 'New Projects' },
  { value: '1439', label: 'Tickets Submitted' },
  { value: '933', label: 'Cups of Coffee' },
] as const

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="bg-white py-24 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold text-night dark:text-white sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 leading-relaxed text-muted dark:text-gray-400">
            Who are in extremely love with eco friendly system.
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-3xl space-y-4">
          {questions.map((item, index) => {
            const open = openIndex === index
            return (
              <div
                key={item.question}
                className="border border-gray-100 bg-paper dark:border-gray-800 dark:bg-gray-900"
              >
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(open ? null : index)}
                    aria-expanded={open}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-display text-base font-semibold text-night dark:text-white"
                  >
                    {item.question}
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-primary-600 transition-transform ${open ? 'rotate-180' : ''}`}
                      aria-hidden="true"
                    />
                  </button>
                </h3>
                {open && (
                  <p className="px-6 pb-5 text-sm leading-relaxed text-muted dark:text-gray-400">
                    {item.answer}
                  </p>
                )}
              </div>
            )
          })}
        </div>

        <div className="mx-auto mt-16 grid max-w-4xl gap-8 text-center sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-4xl font-bold text-transparent bg-gradient-to-b from-primary-500 to-azure bg-clip-text">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-muted dark:text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
