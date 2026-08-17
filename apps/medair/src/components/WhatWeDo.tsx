import { Apple, Dumbbell, HandHeart, Heart, Salad } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { PROGRAMS } from '../data'

const iconMap: Record<string, LucideIcon> = {
  apple: Apple,
  dumbbell: Dumbbell,
  heart: Heart,
  'hand-heart': HandHeart,
  salad: Salad,
}

/** What We Do — five nutrition-program cards with circular photos, green
    numbered badges, an icon, blurb, and a Learn More link. */
export function WhatWeDo() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-brand">
          What We Do
        </p>
        <h2 className="mt-3 text-center font-display text-4xl text-dark sm:text-5xl">What We Do</h2>
        <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {PROGRAMS.map(({ title, icon, image, blurb }, index) => {
            const Icon = iconMap[icon]!
            return (
              <article key={title} className="text-center">
                <div className="relative mx-auto inline-block">
                  <img
                    src={image}
                    alt=""
                    className="h-32 w-32 rounded-full border-[7px] border-white object-cover shadow-lg"
                    loading="lazy"
                  />
                  <span className="absolute -bottom-1 -right-1 flex h-8 w-8 items-center justify-center rounded-full bg-brand text-sm font-bold text-white">
                    {index + 1}
                  </span>
                </div>
                <div className="mx-auto mt-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand/10">
                  <Icon className="h-6 w-6 text-brand" aria-hidden="true" />
                </div>
                <h3 className="mt-3 text-xl font-medium text-dark">{title}</h3>
                <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-black/50">
                  {blurb}
                </p>
                <a
                  href="#appointment"
                  className="mt-3 inline-block text-xs font-semibold uppercase tracking-widest text-brand hover:text-dark"
                >
                  Learn More
                </a>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
