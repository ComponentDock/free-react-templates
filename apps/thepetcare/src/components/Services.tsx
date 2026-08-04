import { Droplets, GraduationCap, Stethoscope, type LucideIcon } from 'lucide-react'

const services: { title: string; blurb: string; Icon: LucideIcon }[] = [
  {
    title: 'Pet Traning',
    blurb: 'Gentle obedience and behavior training that helps every pet shine.',
    Icon: GraduationCap,
  },
  {
    title: 'Hygienic Care',
    blurb: 'Bathing, grooming, and spa rituals that keep coats clean and healthy.',
    Icon: Droplets,
  },
  {
    title: 'Pet Treatment',
    blurb: 'Caring medical attention from experienced vets when pets feel unwell.',
    Icon: Stethoscope,
  },
]

export function Services() {
  return (
    <section id="services" className="bg-paper py-20 dark:bg-gray-900 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center font-display text-3xl leading-snug text-heading dark:text-white lg:text-4xl">
          Our Pet Care Services
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-sm font-light leading-relaxed text-mist dark:text-gray-400">
          Far far away, behind the word mountains, far from the countries Vokalia.
        </p>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, blurb, Icon }) => (
            <article
              key={title}
              className="flex flex-col items-center rounded-3xl bg-white p-10 text-center shadow-sm transition-shadow hover:shadow-md dark:bg-gray-800"
            >
              <span className="flex h-20 w-20 items-center justify-center rounded-full bg-lavender text-brand">
                <Icon className="h-9 w-9" aria-hidden="true" />
              </span>
              <h3 className="mt-6 text-xl font-semibold text-heading dark:text-white">{title}</h3>
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
