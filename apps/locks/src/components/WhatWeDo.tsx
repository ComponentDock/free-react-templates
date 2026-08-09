import { Ruler, Scissors, User, Flower2 } from 'lucide-react'

const items = [
  {
    icon: Scissors,
    title: 'Hair Style',
    copy: 'Modern and classic styles cut to fit your face and your life.',
  },
  {
    icon: Ruler,
    title: 'Trimming',
    copy: 'Neat, precise trims that keep your look sharp between visits.',
  },
  {
    icon: User,
    title: 'Traditional Haircuts Mens',
    copy: 'Time-honored barbering — clipper work, scissor over comb, straight razors.',
  },
  {
    icon: Flower2,
    title: 'Hair Style for Womens',
    copy: 'Layered cuts, shaping, and finishes designed around your hair.',
  },
] as const

export function WhatWeDo() {
  return (
    <section className="bg-ink py-24 transition-colors dark:bg-ink-dark lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-bold text-white sm:text-4xl">
          What <span className="text-brand">We Do</span>
        </h2>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center transition-colors hover:border-brand/50"
            >
              <item.icon className="mx-auto h-10 w-10 text-brand" aria-hidden="true" />
              <h3 className="mt-5 text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/60">{item.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
