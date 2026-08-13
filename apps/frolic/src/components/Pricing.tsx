import { Check } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { pricing } from '../data'

const planColors: Record<string, string> = {
  lagoon: 'bg-lagoon',
  coral: 'bg-coral',
}

/** Pricing section (reference `.site-section`): intro column on the left
 *  (cursive eyebrow, black heading, paragraph) and two pricing cards with a
 *  90px price circle (3px inner ring), a check list, and a BUY NOW button. */
export function Pricing() {
  return (
    <section id="pricing" aria-label="Pricing" className="bg-white py-24">
      <div className="mx-auto grid max-w-7xl items-start gap-14 px-4 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="font-cursive text-2xl text-coral">{pricing.eyebrow}</p>
          <h2 className="mt-3 text-4xl font-bold text-black">{pricing.heading}</h2>
          <p className="mt-5 leading-relaxed text-ink">{pricing.intro}</p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          {pricing.plans.map(({ name, price, color, items }) => (
            <article key={name} className="text-center">
              <span
                className={cn(
                  'relative mx-auto flex h-[90px] w-[90px] items-center justify-center rounded-full text-2xl font-bold text-white',
                  planColors[color],
                )}
              >
                <span
                  className="absolute inset-[5px] rounded-full ring-3 ring-white"
                  aria-hidden="true"
                />
                {price}
              </span>
              <h3 className="mt-6 text-xl font-bold text-black">{name}</h3>
              <ul className="mt-5 space-y-3">
                {items.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-ink">
                    <Check
                      className={`h-5 w-5 shrink-0 ${color === 'lagoon' ? 'text-lagoon' : 'text-coral'}`}
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={cn(
                  'mt-7 inline-block rounded-[30px] px-6 py-3 text-sm tracking-[0.2rem] text-white uppercase transition-colors hover:opacity-90',
                  planColors[color],
                )}
              >
                BUY NOW
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
