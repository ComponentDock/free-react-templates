import { Play } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

export function CallToAction() {
  return (
    <section className="relative overflow-hidden bg-coal py-24">
      <img
        src="https://picsum.photos/seed/arclabs-callto/1600/500"
        alt="Modern building facade at night"
        className="absolute inset-0 h-full w-full object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-[#050a34]/70" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-4 text-center sm:px-6">
        <ButtonLink
          href="#projects"
          aria-label="Play video"
          className="h-20 w-20 rounded-full border border-white bg-transparent p-0 hover:border-brand hover:bg-transparent"
        >
          <Play className="h-8 w-8 text-white" aria-hidden="true" fill="currentColor" />
        </ButtonLink>
        <h2 className="mt-8 font-display text-4xl font-bold uppercase leading-tight text-white sm:text-5xl">
          View Our Project
        </h2>
        <p className="mt-4 text-sm font-semibold uppercase tracking-[0.3em] text-white/70">05:35</p>
      </div>
    </section>
  )
}
