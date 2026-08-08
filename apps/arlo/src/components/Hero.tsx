import { ArrowRight } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section id="home" className="bg-gray-50 py-20 dark:bg-gray-900 lg:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary-600 dark:text-primary-400">
          Hello, I&apos;m Arlo
        </p>
        <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl">
          I design &amp; build digital experiences
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
          I&apos;m a full-stack developer and designer who turns ideas into fast, accessible,
          beautiful products — from first sketch to production.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <ButtonLink href="#projects" size="md">
            View My Work <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </ButtonLink>
          <ButtonLink href="#contact" variant="outline" size="md">
            Let&apos;s Talk
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
