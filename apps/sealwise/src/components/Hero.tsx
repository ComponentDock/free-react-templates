import { cn } from '@free-react-templates/ui'
import { hero } from '../content'
import { QuoteCard } from './QuoteCard'
import { CheckLine, Kicker, Reveal, Stars, containerClass } from './ui'

/**
 * The band runs on `py-14` → `py-20` rather than the section rhythm: the offer
 * starts high on the page, and the card is the only thing at its right.
 */
export function Hero() {
  return (
    <section className="bg-ink-50 py-14 lg:py-20 dark:bg-gray-900">
      <div className={cn(containerClass, 'grid gap-10 lg:grid-cols-12 lg:gap-16')}>
        <Reveal className="lg:col-span-7 lg:pt-6">
          <Kicker>{hero.kicker}</Kicker>
          <h1 className="mt-4 text-4xl leading-[1.1] font-bold tracking-tight text-ink-800 sm:text-5xl lg:text-6xl lg:tracking-[-1.5px] dark:text-ink-50">
            {hero.titleLead}{' '}
            <span className="text-primary-600 dark:text-primary-400">{hero.titleTail}</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-7 text-ink-500 dark:text-ink-300">{hero.lead}</p>

          <p className="mt-6 flex flex-wrap items-center gap-2 text-sm leading-5 text-ink-600 dark:text-ink-300">
            <Stars size="h-5 w-5" />
            <span className="font-bold">{hero.rating}</span>
            <span className="opacity-80">{hero.reviews}</span>
          </p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {hero.checklist.map((item) => (
              <CheckLine key={item}>{item}</CheckLine>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={150} className="lg:col-span-5">
          <QuoteCard />
        </Reveal>
      </div>
    </section>
  )
}
