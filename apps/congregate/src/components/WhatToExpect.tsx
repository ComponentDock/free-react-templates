import { BookOpen, Music, Sparkles, Users } from 'lucide-react'

const features = [
  {
    title: 'Welcoming Community',
    blurb: "You'll be greeted with a smile and helped to find your way around.",
    Icon: Users,
  },
  {
    title: 'Engaging Worship',
    blurb: 'Modern music that inspires and creates space to connect with God.',
    Icon: Music,
  },
  {
    title: 'Relevant Teaching',
    blurb: 'Messages that speak to real life and help you grow.',
    Icon: BookOpen,
  },
  {
    title: 'Great Kids Programs',
    blurb: "Safe, fun-filled environments where kids learn about God's love.",
    Icon: Sparkles,
  },
] as const

export function WhatToExpect() {
  return (
    <section id="about" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-amber-600 dark:text-amber-400">
          What to Expect
        </p>
        <h2 className="mt-3 text-3xl font-bold text-charcoal-900 dark:text-white sm:text-4xl">
          You&apos;re Invited
        </h2>
        <p className="mt-4 max-w-3xl text-lg text-charcoal-600 dark:text-charcoal-300">
          At Congregate, we believe church should be the best hour of your week. Expect warm
          welcomes, uplifting worship, and practical teaching that applies to real life. Come as you
          are—there&apos;s no dress code, and coffee is always free.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div key={feature.title} className="rounded-lg p-6">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400">
                <feature.Icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-charcoal-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-charcoal-600 dark:text-charcoal-300">
                {feature.blurb}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
