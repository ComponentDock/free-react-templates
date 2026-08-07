import { Briefcase, Cpu, Handshake, Layers, Rocket, Smile } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface Feature {
  title: string
  blurb: string
  icon: LucideIcon
}

const features: Feature[] = [
  {
    title: 'Powerful Apps',
    blurb: 'Fast, focused tools for every part of your workflow, ready to go out of the box.',
    icon: Rocket,
  },
  {
    title: 'Strategic Partners',
    blurb: 'Integrate with the services you already use and keep everything in one place.',
    icon: Handshake,
  },
  {
    title: 'Business in Mind',
    blurb: 'Built for teams that need clarity, control, and room to grow.',
    icon: Briefcase,
  },
  {
    title: 'Innovative Technologies',
    blurb: 'Modern architecture that keeps your data fast, secure, and always available.',
    icon: Cpu,
  },
  {
    title: 'Many Features',
    blurb: 'Everything from reporting to automation, included from day one.',
    icon: Layers,
  },
  {
    title: 'Easy to use',
    blurb: 'A clean interface your whole team can pick up in minutes, not weeks.',
    icon: Smile,
  },
]

export function Features() {
  return (
    <section id="features" className="bg-white py-20 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-bold text-ink dark:text-white">The Features</h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-mist dark:text-gray-400">
          Everything you need to run your business better, in one place.
        </p>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <article key={feature.title} className="text-center">
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand/10 text-brand">
                <feature.icon className="h-7 w-7" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-ink dark:text-white">
                {feature.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-mist dark:text-gray-400">
                {feature.blurb}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
