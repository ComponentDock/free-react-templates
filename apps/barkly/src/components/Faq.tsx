import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const items = [
  {
    question: 'Should I stop letting my dog sleep with me at night?',
    answer:
      'A bedtime routine matters more than the sleeping spot — most dogs are happy either way. If you both rest well, sharing the bed is perfectly fine.',
  },
  {
    question: 'Is it okay to dress up your dog?',
    answer:
      'Yes, as long as the outfit is comfortable, breathable, and your dog is relaxed. Watch for signs of stress and keep costumes short and light.',
  },
  {
    question: 'Why do dogs like belly rubs so much?',
    answer:
      'A belly rub is a social gesture that releases feel-good hormones. It is also a spot dogs cannot easily reach, so they love the attention.',
  },
  {
    question: 'Is a warm dry nose a sign of illness in dogs?',
    answer:
      'Not by itself. Nose temperature and moisture change throughout the day. Look for other symptoms like lethargy or loss of appetite instead.',
  },
] as const

export function Faq() {
  const [open, setOpen] = useState<ReadonlySet<number>>(new Set())

  const toggle = (index: number) => {
    setOpen((current) => {
      const next = new Set(current)
      if (next.has(index)) {
        next.delete(index)
      } else {
        next.add(index)
      }
      return next
    })
  }

  return (
    <section id="faq" className="py-14 md:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-extrabold text-black dark:text-white">
          Frequently Ask Questions
        </h2>
        <div className="mt-12 divide-y divide-gray-200 dark:divide-gray-700">
          {items.map((item, index) => {
            const expanded = open.has(index)
            return (
              <div key={item.question} className="py-4">
                <h3>
                  <button
                    type="button"
                    aria-expanded={expanded}
                    onClick={() => toggle(index)}
                    className="flex w-full items-center justify-between gap-4 text-left text-base font-medium text-black transition-colors hover:text-brand dark:text-white dark:hover:text-brand"
                  >
                    {item.question}
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-brand text-brand transition-colors ${
                        expanded ? 'bg-brand text-white' : ''
                      }`}
                    >
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${expanded ? 'rotate-180' : ''}`}
                        aria-hidden="true"
                      />
                    </span>
                  </button>
                </h3>
                {expanded && (
                  <p className="mt-3 pl-0 text-sm font-light leading-relaxed text-gray-500 dark:text-gray-400">
                    {item.answer}
                  </p>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
