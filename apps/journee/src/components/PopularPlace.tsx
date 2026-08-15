import { Bike, Ship, TreePalm } from 'lucide-react'
import { bookNowLabel, popularCards, popularParagraph, popularTitle } from '../data'

const popularIcons = [Ship, Bike, TreePalm] as const

export function PopularPlace() {
  return (
    <section id="popular-section" className="bg-paper py-36 lg:py-44">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="font-heading text-4xl font-medium text-ink">
            {popularTitle.split(' ')[0]}{' '}
            <span className="font-bold">{popularTitle.split(' ').slice(1).join(' ')}</span>
          </h2>
          <p className="mt-6 text-[15px] leading-[1.8] text-muted">{popularParagraph}</p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {popularCards.map((card, index) => {
            const Icon = popularIcons[index]!
            return (
              <article key={card.title} className="bg-white px-6 pb-12 pt-14 text-center shadow-sm">
                <Icon className="mx-auto h-16 w-16 text-ink" aria-hidden="true" />
                <h3 className="mt-10 font-heading text-xl font-semibold text-black">
                  {card.title}
                </h3>
                <p className="mt-4 text-[15px] leading-[1.8] text-muted">{card.paragraph}</p>
                <a
                  href="#packages-section"
                  className="mt-10 inline-block font-script text-lg text-black transition-colors hover:text-sky"
                >
                  {bookNowLabel}
                </a>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
