import { CalendarCheck, Gift, Tag } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface IntroCard {
  icon: LucideIcon
  title: string
  copy: string
}

const cards: IntroCard[] = [
  {
    icon: CalendarCheck,
    title: 'Book Your Treatment',
    copy: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
  {
    icon: Gift,
    title: 'Great Gift Packages',
    copy: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
  {
    icon: Tag,
    title: 'Special Offer & Deal',
    copy: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
] as const

export function Intro() {
  return (
    <section id="about" className="bg-white transition-colors dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-light text-ink dark:text-white sm:text-4xl">
            Benefits of Doing Spa & Massage
          </h2>
          <p className="mt-4 text-sm font-light leading-relaxed text-mist dark:text-white/60">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {cards.map((card) => {
            const Icon = card.icon
            return (
              <article
                key={card.title}
                className="border border-line p-8 text-center transition-shadow hover:shadow-lg dark:border-gray-800"
              >
                <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand/10 text-brand">
                  <Icon className="h-7 w-7" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-ink dark:text-white">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm font-light leading-relaxed text-mist dark:text-white/60">
                  {card.copy}
                </p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
