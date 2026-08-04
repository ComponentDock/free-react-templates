import { Home, Sparkles, UtensilsCrossed, type LucideIcon } from 'lucide-react'

const services: { title: string; blurb: string; Icon: LucideIcon }[] = [
  {
    title: 'Pet Boarding',
    blurb: 'A cozy home away from home with attentive staff and daily playtime.',
    Icon: Home,
  },
  {
    title: 'Healthy Meals',
    blurb: 'Balanced, vet-approved nutrition prepared fresh for every pet.',
    Icon: UtensilsCrossed,
  },
  {
    title: 'Pet Spa',
    blurb: 'Gentle grooming, relaxing baths, and a sparkling new look.',
    Icon: Sparkles,
  },
]

export function Services() {
  return (
    <section className="bg-paper py-20 dark:bg-gray-900 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-semibold text-ink dark:text-white lg:text-4xl">
          Services for every dog
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-sm font-light leading-relaxed text-mist dark:text-gray-400">
          Everything your pet needs, under one caring roof.
        </p>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, blurb, Icon }) => (
            <article
              key={title}
              className="flex flex-col items-center rounded bg-white p-10 text-center shadow-sm transition-shadow hover:shadow-md dark:bg-gray-800"
            >
              <span className="flex h-20 w-20 items-center justify-center rounded-full bg-lavender text-brand">
                <Icon className="h-9 w-9" aria-hidden="true" />
              </span>
              <h3 className="mt-6 text-xl font-semibold text-ink dark:text-white">{title}</h3>
              <p className="mt-3 text-sm font-light leading-relaxed text-mist dark:text-gray-400">
                {blurb}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
