import { Award, Leaf, Sprout, Tractor, type LucideIcon } from 'lucide-react'

const benefits: { title: string; copy: string; Icon: LucideIcon }[] = [
  {
    title: 'Best Services',
    copy: 'Friendly support and honest advice for every order, from seed to harvest.',
    Icon: Award,
  },
  {
    title: 'Farm Experiences',
    copy: 'Real farm stories and seasonal experiences shared with our community.',
    Icon: Tractor,
  },
  {
    title: '100% Natural',
    copy: 'Certified organic produce grown without synthetic chemicals or GMOs.',
    Icon: Leaf,
  },
  {
    title: 'Farm Equipment',
    copy: 'Modern, sustainable equipment that keeps our fields healthy and productive.',
    Icon: Sprout,
  },
]

export function Benefits() {
  return (
    <section id="benefits" className="py-14 md:py-20">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 sm:grid-cols-2 lg:grid-cols-4">
        {benefits.map(({ title, copy, Icon }) => (
          <article key={title} className="text-center">
            <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand/15 text-brand">
              <Icon className="h-8 w-8" aria-hidden="true" />
            </span>
            <h3 className="mt-5 text-lg font-bold text-black dark:text-white">{title}</h3>
            <p className="mt-3 text-sm font-light leading-relaxed text-gray-500 dark:text-gray-400">
              {copy}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}
