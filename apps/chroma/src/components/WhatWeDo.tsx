import { Brush, Lightbulb, Layout, Palette, Rocket, Smartphone } from 'lucide-react'

const services = [
  {
    title: 'Brand Identity',
    blurb: 'Etiam nec odio vestibulum est mattis efficitur ut magna.',
    icon: Palette,
  },
  {
    title: 'Illustration',
    blurb: 'Etiam nec odio vestibulum est mattis efficitur ut magna.',
    icon: Brush,
  },
  {
    title: 'Web Design',
    blurb: 'Etiam nec odio vestibulum est mattis efficitur ut magna.',
    icon: Layout,
  },
  {
    title: 'Product Strategy',
    blurb: 'Etiam nec odio vestibulum est mattis efficitur ut magna.',
    icon: Lightbulb,
  },
  {
    title: 'UI/UX Design',
    blurb: 'Etiam nec odio vestibulum est mattis efficitur ut magna.',
    icon: Rocket,
  },
  {
    title: 'Mobile Development',
    blurb: 'Etiam nec odio vestibulum est mattis efficitur ut magna.',
    icon: Smartphone,
  },
] as const

export function WhatWeDo() {
  return (
    <section
      id="services"
      aria-label="What we do"
      className="bg-primary-50/50 py-20 dark:bg-gray-900"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-bold text-ink dark:text-gray-100">
            What We Do
          </h2>
          <p className="mt-4 leading-relaxed text-smoke dark:text-gray-400">
            We have everything you need to launch and grow a successful digital business.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-primary-100 bg-white p-7 transition-shadow hover:shadow-lg dark:border-gray-800 dark:bg-gray-950"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-400 text-white">
                <service.icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold text-ink dark:text-gray-100">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-smoke dark:text-gray-400">
                {service.blurb}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
