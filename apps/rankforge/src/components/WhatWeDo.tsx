import { ArrowRight, Link, Megaphone, FolderKanban } from 'lucide-react'

const services = [
  {
    title: 'Link Building',
    icon: Link,
    active: false,
    description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
  },
  {
    title: 'Content Marketing',
    icon: Megaphone,
    active: true,
    description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
  },
  {
    title: 'On Page SEO',
    icon: FolderKanban,
    active: false,
    description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
  },
] as const

export function WhatWeDo() {
  return (
    <section id="services" aria-label="What we do" className="bg-mist py-20 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="font-display text-3xl font-semibold text-primary-700 dark:text-gray-100">
            What We Will Do For Your Business
          </h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className={`rounded-md p-8 text-center shadow-sm transition-shadow hover:shadow-md ${
                service.active ? 'bg-accent-400 text-white' : 'bg-white dark:bg-gray-900'
              }`}
            >
              <span
                className={`mx-auto flex h-14 w-14 items-center justify-center rounded-full ${
                  service.active ? 'bg-white/20 text-white' : 'bg-accent-400/10 text-accent-400'
                }`}
              >
                <service.icon className="h-7 w-7" aria-hidden="true" />
              </span>
              <h3
                className={`mt-5 font-display text-xl font-semibold ${
                  service.active ? 'text-white' : 'text-primary-700 dark:text-gray-100'
                }`}
              >
                {service.title}
              </h3>
              <p
                className={`mt-3 text-sm leading-relaxed ${
                  service.active ? 'text-white/80' : 'text-smoke dark:text-gray-400'
                }`}
              >
                {service.description}
              </p>
              <a
                href="#contact"
                className={`mt-4 inline-flex items-center gap-1 text-sm font-medium transition-colors ${
                  service.active
                    ? 'text-white hover:text-white/80'
                    : 'text-accent-400 hover:text-accent-500'
                }`}
              >
                get started
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
