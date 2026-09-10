import { Wrench, Briefcase, Headphones, Cpu, ThumbsUp, Star } from 'lucide-react'
import { features } from '../data'

const iconMap = {
  wrench: Wrench,
  briefcase: Briefcase,
  headphones: Headphones,
  cpu: Cpu,
  'thumbs-up': ThumbsUp,
  star: Star,
} as const

export function Features() {
  return (
    <section id="features" aria-label="Features" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <p className="text-center text-sm tracking-wider text-text-light uppercase">
          What Services we offer to our clients
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon, title, text }) => {
            const Icon = iconMap[icon]
            return (
              <article
                key={title}
                className="rounded-[3px] border border-gray-100 bg-white p-8 text-center transition-colors hover:bg-bg-alt"
              >
                <Icon
                  className="mx-auto h-12 w-12 text-brand"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <h3 className="mt-5 text-lg font-semibold text-text">{title}</h3>
                <p className="mt-3 leading-relaxed text-text-light">{text}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
