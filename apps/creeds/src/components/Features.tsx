import { HeartHandshake, Smile, Sparkles, Sun } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { features } from '../data'

const icons = [Sun, HeartHandshake, Smile, Sparkles] as const

export function Features() {
  return (
    <section className="grid md:grid-cols-2 xl:grid-cols-4">
      {features.map((feature, index) => {
        const Icon = icons[index]!
        const dark = index % 2 === 1
        return (
          <article
            key={feature.title}
            className={cn(
              'px-[45px] py-[73px] text-white',
              dark ? 'bg-dark' : 'bg-brand',
              index > 0 && 'border-l border-white',
            )}
          >
            <Icon className="h-10 w-10" aria-hidden="true" />
            <h3 className="mt-6 text-xl font-semibold">{feature.title}</h3>
            <p className="mt-4 text-sm leading-relaxed text-white/85">{feature.text}</p>
            <a
              href="#"
              className="mt-7 inline-block bg-white px-6 py-2 text-xs font-medium uppercase text-heading transition-colors hover:border hover:border-heading hover:bg-heading hover:text-white"
            >
              View Details
            </a>
          </article>
        )
      })}
    </section>
  )
}
