import { ArrowRight, Megaphone, MessagesSquare, Send, Users, type LucideIcon } from 'lucide-react'
import { FEATURES } from '../data'

const ICONS = {
  send: Send,
  messages: MessagesSquare,
  megaphone: Megaphone,
  users: Users,
} as const satisfies Record<string, LucideIcon>

export function FeatureGrid() {
  return (
    <section aria-label="Church features" className="bg-light py-14 md:py-28">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-px overflow-hidden rounded border border-black/10 bg-black/10 md:grid-cols-2">
        {FEATURES.map((feature) => {
          const Icon = ICONS[feature.icon]
          return (
            <article key={feature.title} className="bg-light p-8 text-center">
              <Icon aria-hidden="true" className="mx-auto mb-4 h-10 w-10 text-primary-600" />
              <h3 className="mb-3 text-lg font-medium uppercase tracking-wide text-ink">
                {feature.title}
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-body">{feature.body}</p>
              <a
                href="#about"
                className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.05em] text-primary-600 transition-colors hover:text-primary-700"
              >
                Read More
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </a>
            </article>
          )
        })}
      </div>
    </section>
  )
}
