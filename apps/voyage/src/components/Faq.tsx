import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface FaqItem {
  id: number
  question: string
  answer: string
}

const faqItems: FaqItem[] = [
  {
    id: 1,
    question: 'How to download and register?',
    answer:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
  },
  {
    id: 2,
    question: 'How to create your paypal account?',
    answer:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
  },
  {
    id: 3,
    question: 'How to link your paypal and bank account?',
    answer:
      'When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road.',
  },
  {
    id: 4,
    question: 'We are better than others?',
    answer:
      "But nothing the copy said could convince her and so it didn't take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency.",
  },
]

export function Faq() {
  const [openId, setOpenId] = useState<number | null>(1)

  const toggle = (id: number) => {
    setOpenId((current) => (current === id ? null : id))
  }

  return (
    <section className="py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-heading text-3xl font-bold text-ink sm:text-4xl">
          Frequently Asked Questions
        </h2>

        <div className="mt-12 space-y-4">
          {faqItems.map((item) => {
            const isOpen = openId === item.id
            return (
              <div key={item.id} className="overflow-hidden rounded-lg border border-gray-200">
                <button
                  type="button"
                  onClick={() => toggle(item.id)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between px-6 py-4 text-left font-heading text-lg font-bold text-ink transition-colors hover:bg-light"
                >
                  {item.question}
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-gray-500 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                    aria-hidden="true"
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-4 text-sm leading-relaxed text-gray-600">
                    {item.answer}
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
