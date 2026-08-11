import { Award, Smile, Sparkles, Utensils } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import {
  counterHeading,
  counterParagraph,
  counterSectionLabel,
  counterSeed,
  counterStats,
} from '../data'

type IconName = (typeof counterStats)[number]['icon']

const icons: Record<IconName, LucideIcon> = {
  award: Award,
  utensils: Utensils,
  sparkles: Sparkles,
  smile: Smile,
}

export function Counter() {
  return (
    <section aria-label={counterSectionLabel} className="relative overflow-hidden py-20">
      {/* Background photo + dark overlay (ftco-counter.img). */}
      <img
        src={`https://picsum.photos/seed/${counterSeed}/1920/700`}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <span aria-hidden="true" className="absolute inset-0 bg-black/70" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="font-serif text-3xl font-normal text-white">{counterHeading}</h2>
          <p className="mt-4 text-sm leading-relaxed text-white/70">{counterParagraph}</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {counterStats.map((stat) => {
            const Icon = icons[stat.icon]
            return (
              <div key={stat.label} className="bg-white/10 p-8 text-center backdrop-blur-sm">
                {/* 70px icon circle — blue gradient #6b75ff → #59b7ff. */}
                <span
                  data-icon-circle
                  className="mx-auto flex h-[70px] w-[70px] items-center justify-center rounded-full bg-gradient-to-br from-counter-from to-counter-to"
                >
                  <Icon className="h-8 w-8 text-white" aria-hidden="true" />
                </span>
                <strong className="mt-5 block text-3xl font-bold text-white">{stat.value}</strong>
                <span className="mt-2 block text-xs font-semibold uppercase tracking-wide text-white/70">
                  {stat.label}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
