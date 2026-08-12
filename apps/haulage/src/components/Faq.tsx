import { MessageCircleQuestion } from 'lucide-react'
import { FAQ_ITEMS } from '../data'
import { SectionHeading } from './SectionHeading'

/* Frequently Ask Questions — centered heading + a two-column Q&A grid
   (question icon, Oswald black question, answer paragraph). */
export function Faq() {
  return (
    <section id="faq" className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          center
          title="Frequently Ask Questions"
          blurb="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
        />
        <div className="grid gap-x-12 gap-y-10 md:grid-cols-2">
          {FAQ_ITEMS.map((item, index) => (
            <div key={`${item.question}-${index}`} className="flex items-start gap-3">
              <MessageCircleQuestion
                aria-hidden="true"
                className="mt-1 h-5 w-5 shrink-0 text-brand"
              />
              <div>
                <h3 className="font-display text-lg font-medium uppercase text-ink">
                  {item.question}
                </h3>
                <p className="mt-2 text-smoke">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
