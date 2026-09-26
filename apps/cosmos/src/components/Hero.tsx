import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section id="home-section" className="flex min-h-[70vh] items-center bg-white pt-24">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <h1 className="font-mulish mb-4 text-5xl font-bold leading-tight md:text-7xl">
          Hey! I&apos;m{' '}
          <span className="text-ink">
            Cosmos<span className="text-primary">.</span>
          </span>
        </h1>
        <p className="font-roboto-mono mb-8 max-w-2xl text-lg text-muted">
          A minimal, clean, and modern free portfolio template built with React, Tailwind CSS, and
          TypeScript.
        </p>
        <a
          href="https://www.componentdock.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-ink px-8 py-3 text-sm font-medium text-white transition-all hover:bg-transparent hover:text-ink"
        >
          More free templates here
          <ArrowRight size={16} />
        </a>
      </div>
    </section>
  )
}
