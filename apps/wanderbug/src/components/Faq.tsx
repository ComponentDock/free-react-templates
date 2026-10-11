import { useState } from 'react'
import { Minus, Plus } from 'lucide-react'
import { ButtonLink, cn } from '@free-react-templates/ui'
import { SectionTitle } from './SectionTitle'
import { BUTTON_CLASS, BUTTON_SOLID } from '../lib/buttonStyles'

interface FaqItem {
  question: string
  answer: string
}

const FAQ_ITEMS: readonly FaqItem[] = [
  {
    question: 'Starts the automated process.',
    answer:
      'The automated process starts as soon as your clothes go into the machine. Duis cursus, mi quis viverra ornare.',
  },
  {
    question: 'The automated process starts.',
    answer:
      'Packing lists, transfers and permits are generated the moment you confirm a departure date.',
  },
  {
    question: 'Automated process starts.',
    answer: 'A local leader is matched to your group within one working day of booking.',
  },
  {
    question: 'Process the automated magic.',
    answer: 'Flight changes and storm reroutes are handled before you land, at no extra cost.',
  },
]

/* FAQ accordion under the periwinkle link-style titles of the reference. */
export function Faq() {
  const [openItem, setOpenItem] = useState<number | null>(null)

  return (
    <section id="faq" className="bg-panel pt-[120px] pb-[100px]">
      <div className="mx-auto max-w-[900px] px-4">
        <SectionTitle eyebrow="FAQ" title="Full range of travel service" />

        <ul className="space-y-[20px]">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openItem === index
            return (
              <li key={item.question} className="rounded-[5px] bg-white px-[30px] py-[24px]">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenItem(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 text-left text-[18px] font-medium text-periwinkle transition-colors hover:text-navy focus-visible:ring-2 focus-visible:ring-periwinkle"
                >
                  {item.question}
                  {isOpen ? (
                    <Minus className="h-5 w-5 shrink-0" aria-hidden="true" />
                  ) : (
                    <Plus className="h-5 w-5 shrink-0" aria-hidden="true" />
                  )}
                </button>
                {isOpen ? (
                  <p className="mt-4 text-[16px] leading-[1.8] text-body">{item.answer}</p>
                ) : null}
              </li>
            )
          })}
        </ul>

        <div className="mt-[40px] text-center">
          <ButtonLink
            href="#events"
            className={cn(BUTTON_CLASS, BUTTON_SOLID, 'px-[40px] py-[26px]')}
          >
            Book Your Destination
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
