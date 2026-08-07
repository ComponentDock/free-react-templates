import { Calculator, DraftingCompass, Home, ShieldCheck } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

const steps: ReadonlyArray<{ title: string; icon: LucideIcon; blurb: string }> = [
  {
    title: 'Design Process',
    icon: DraftingCompass,
    blurb:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
  },
  {
    title: 'Supervision',
    icon: ShieldCheck,
    blurb:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
  },
  {
    title: 'Budget Planning',
    icon: Calculator,
    blurb:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
  },
] as const

export function Process() {
  return (
    <section id="services" className="bg-brand py-16">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((step) => (
          <article key={step.title} className="text-white">
            <span className="flex h-16 w-16 items-center justify-center rounded-full border border-white/60">
              <step.icon className="h-8 w-8" aria-hidden="true" />
            </span>
            <h3 className="mt-6 text-lg font-bold uppercase tracking-wide">{step.title}</h3>
            <p className="mt-3 text-sm font-light leading-relaxed text-white/85">{step.blurb}</p>
          </article>
        ))}

        <article className="text-white">
          <span className="flex h-16 w-16 items-center justify-center rounded-full border border-white/60">
            <Home className="h-8 w-8" aria-hidden="true" />
          </span>
          <h3 className="mt-6 text-lg font-bold uppercase tracking-wide">Build a Home For You</h3>
          <a
            href="#quote"
            className="mt-5 inline-block rounded-full bg-white px-6 py-3 text-sm font-bold uppercase tracking-wide text-brand transition-colors hover:bg-paper"
          >
            Request A Quote
          </a>
        </article>
      </div>
    </section>
  )
}
