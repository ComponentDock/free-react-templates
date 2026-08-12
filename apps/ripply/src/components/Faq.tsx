import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

/* Four accordion items (the source repeats one lorem question four times —
   questions and answers varied here for realism). */
const ITEMS = [
  {
    question: 'Is it a long established fact that a reader will be distracted?',
    answer:
      'Yes — the readable content of a page is what keeps visitors engaged, and our layout is built to hold attention from the first headline.',
  },
  {
    question: 'How do I install the app on my device?',
    answer:
      'Download it from the Android or App Store button above; the setup takes less than a minute and your data syncs automatically.',
  },
  {
    question: 'Can I upgrade my plan later?',
    answer:
      'Absolutely. You can move between BASIC, PREMIUM and EXCLUSIVE at any time, and the difference is applied instantly.',
  },
  {
    question: 'Do you offer support for teams?',
    answer:
      'Yes — every plan includes 24/7 support, and team accounts get a dedicated onboarding session with our specialists.',
  },
]

export function Faq() {
  const [openId, setOpenId] = useState<number | null>(0)

  const toggle = (id: number) => setOpenId((current) => (current === id ? null : id))

  return (
    <section className="bg-periwinkle px-[15px] py-[100px]">
      <div className="mx-auto max-w-[860px] text-center">
        <h2 className="font-display text-[30px] font-bold uppercase text-ink">
          Frequently Asked Question
        </h2>
        <p className="mx-auto mt-4 max-w-[600px] text-[14px] text-body">
          Everything you need to know before getting started with Ripply.
        </p>
      </div>
      <div className="mx-auto mt-12 max-w-[860px] space-y-4">
        {ITEMS.map((item, index) => {
          const isOpen = openId === index
          return (
            <div
              key={item.question}
              className={cn(
                'overflow-hidden rounded-[12px] bg-white transition-shadow',
                isOpen && 'shadow-[0_0_20px_rgba(0,0,0,0.14)]',
              )}
            >
              <button
                type="button"
                aria-expanded={isOpen}
                onClick={() => toggle(index)}
                className={cn(
                  'flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-[15px] font-medium text-ink',
                  isOpen && 'bg-[linear-gradient(to_right,#d6c3fc,#acc4fc,#98c5fc)] text-white',
                )}
              >
                {item.question}
                <ChevronDown
                  className={cn('h-5 w-5 shrink-0 transition-transform', isOpen && 'rotate-180')}
                  aria-hidden="true"
                />
              </button>
              {isOpen && (
                <p className="px-6 py-5 text-[14px] leading-relaxed text-body">{item.answer}</p>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}
