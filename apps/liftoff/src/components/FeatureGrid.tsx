import {
  Power,
  RefreshCw,
  Settings2,
  ShoppingBag,
  Smile,
  Store,
  type LucideIcon,
} from 'lucide-react'
import { features } from '../data'

const ICONS: Record<string, LucideIcon> = {
  refresh: RefreshCw,
  store: Store,
  'shopping-bag': ShoppingBag,
  settings: Settings2,
  smile: Smile,
  power: Power,
}

/** Features grid (reference `#features-section`): a #f6f6f6 band with the
 *  centered 900-weight title and six white unit cards — teal circular icon,
 *  black title, 300-weight excerpt and a Learn More link. Cards fill teal
 *  and lift 7px on hover (icon circle inverts). */
export function FeatureGrid() {
  return (
    <section id="features-section" aria-label="Features" className="bg-light py-10 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="text-center font-heading text-[30px] font-black text-ink lg:text-[40px]">
          {features.heading}
        </h2>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {features.cards.map((card) => {
            const Icon = ICONS[card.icon]!
            return (
              <article
                key={card.title}
                className="group rounded-[5px] bg-paper p-[30px] transition-all duration-200 hover:top-[-7px] hover:bg-brand hover:shadow-[0_4px_20px_-5px_rgba(0,210,181,0.4)]"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-brand shadow-[0_4px_20px_-5px_rgba(0,210,181,0.4)] transition-colors group-hover:bg-paper">
                  <Icon
                    aria-hidden="true"
                    className="h-[1.5rem] w-[1.5rem] text-paper transition-colors group-hover:text-brand"
                  />
                </div>
                <h3 className="font-heading text-base font-black text-ink transition-colors group-hover:text-paper">
                  {card.title}
                </h3>
                <p className="mt-2 text-[15px] text-muted transition-colors group-hover:text-paper/70">
                  {card.text}
                </p>
                <a
                  href="#features-section"
                  className="mt-2 inline-block transition-colors group-hover:text-paper"
                >
                  {features.learnMore}
                </a>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
