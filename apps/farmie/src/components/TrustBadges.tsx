import { BadgeCheck, Leaf, Recycle, Sprout, Wheat, type LucideIcon } from 'lucide-react'

const badges: { title: string; Icon: LucideIcon }[] = [
  { title: 'USDA Organic', Icon: Leaf },
  { title: 'Non-GMO', Icon: Sprout },
  { title: 'Fair Trade', Icon: BadgeCheck },
  { title: 'Eco-Friendly', Icon: Recycle },
  { title: 'Quality Assured', Icon: Wheat },
]

export function TrustBadges() {
  return (
    <section id="badges" className="bg-paper py-14 dark:bg-gray-900 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-extrabold text-black dark:text-white">
          Our Certifications &amp; Guarantees
        </h2>
        <div className="mt-14 flex flex-wrap justify-center gap-8">
          {badges.map(({ title, Icon }) => (
            <article key={title} className="flex w-40 flex-col items-center text-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-brand/15 text-brand">
                <Icon className="h-8 w-8" aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-sm font-bold text-black dark:text-white">{title}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
