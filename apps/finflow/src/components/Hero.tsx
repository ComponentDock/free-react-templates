import { Mouse } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-ink dark:bg-ink-dark">
      <div className="absolute inset-0">
        <img
          src="https://picsum.photos/seed/finflow-hero/1600/900"
          alt="Banking solutions overview"
          className="h-full w-full object-cover opacity-40"
        />
      </div>
      <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:py-36">
        <div className="max-w-2xl text-white">
          <span className="text-lg font-semibold uppercase tracking-[0.25em] text-brand">
            Welcome to Finflow
          </span>
          <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Banking Solutions
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/80">
            We provide tailored financial services to help you manage, save, and grow your money
            with confidence.
          </p>
          <div className="mt-10">
            <ButtonLink
              href="#contact"
              className="rounded-lg bg-brand px-10 uppercase tracking-[0.2em] text-white transition-colors hover:bg-brand-dark"
            >
              Get In Touch
            </ButtonLink>
          </div>
        </div>

        <div className="mt-20 flex items-center gap-3 text-white/60">
          <Mouse className="h-5 w-5 animate-bounce" aria-hidden="true" />
          <span className="text-xs uppercase tracking-widest">Scroll Down</span>
        </div>
      </div>
    </section>
  )
}
