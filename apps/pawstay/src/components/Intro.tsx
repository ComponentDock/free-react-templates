import { Footprints, PawPrint, Scissors, type LucideIcon } from 'lucide-react'

const services: { title: string; copy: string; Icon: LucideIcon }[] = [
  {
    title: 'Dog Walking',
    copy: 'Leisurely walks around the neighborhood to keep your dog happy, healthy, and well exercised.',
    Icon: Footprints,
  },
  {
    title: 'Pet Daycare',
    copy: 'Safe, supervised play all day with plenty of toys, naps, and new furry friends.',
    Icon: PawPrint,
  },
  {
    title: 'Pet Grooming',
    copy: 'Baths, trims, and brush-outs that leave your pet looking and feeling their very best.',
    Icon: Scissors,
  },
]

export function Intro() {
  return (
    <section id="services" className="bg-paper py-14 dark:bg-gray-900 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, copy, Icon }) => (
            <article
              key={title}
              className="rounded-lg bg-white p-8 text-center shadow-sm transition-shadow hover:shadow-md dark:bg-gray-800"
            >
              <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand/10 text-brand">
                <Icon className="h-8 w-8" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-lg font-bold text-night dark:text-white">{title}</h3>
              <p className="mt-3 text-sm font-light leading-relaxed text-gray-500 dark:text-gray-400">
                {copy}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
