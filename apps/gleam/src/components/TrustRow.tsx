import { BadgeCheck, Leaf, ShieldCheck, Star } from 'lucide-react'
import { Reveal } from './Reveal'

const items = [
  {
    title: 'Fully Insured',
    blurb: 'Up to $2M liability coverage for complete peace of mind.',
    Icon: ShieldCheck,
  },
  {
    title: 'Background Checked',
    blurb: 'Every team member passes thorough background screening.',
    Icon: BadgeCheck,
  },
  {
    title: 'Eco-Friendly',
    blurb: 'Green-certified products safe for kids, pets, and the planet.',
    Icon: Leaf,
  },
  {
    title: 'Satisfaction Guaranteed',
    blurb: "Not happy? We'll re-clean for free within 24 hours.",
    Icon: Star,
  },
] as const

export function TrustRow() {
  return (
    <section className="border-y border-gray-100 bg-gray-50 dark:border-gray-800 dark:bg-gray-950">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {items.map(({ title, blurb, Icon }, index) => (
          <Reveal key={title} delay={index * 100}>
            <div className="flex items-start gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary-600 dark:bg-primary-900/60 dark:text-primary-300">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-base font-bold text-gray-900 dark:text-white">{title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  {blurb}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
