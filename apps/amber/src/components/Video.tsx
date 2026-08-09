import { Play } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

export function Video() {
  return (
    <section aria-label="Video" className="relative overflow-hidden bg-ink py-24 dark:bg-ink-dark">
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
        <span className="font-display text-lg font-semibold uppercase tracking-[0.25em] text-gold">
          How we Work
        </span>
        <h2 className="mt-4 font-display text-4xl font-bold uppercase text-white sm:text-5xl">
          Watch the Video How we Work?
        </h2>
        <a
          href="#video"
          aria-label="Play the shop tour video"
          className="mx-auto mt-10 flex h-20 w-20 items-center justify-center rounded-full bg-brand text-white shadow-xl transition-transform hover:scale-110"
        >
          <Play className="h-8 w-8 fill-current" aria-hidden="true" />
        </a>
        <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-gray-400">
          Inspires employees and organizations to support causes they care about. We do this to
          bring more resources to the nonprofits that are changing our world.
        </p>
        <ButtonLink
          href="#contact"
          className="mt-8 rounded-lg bg-brand px-10 uppercase tracking-[0.2em] text-white transition-colors hover:bg-brand-dark"
        >
          book now
        </ButtonLink>
      </div>
    </section>
  )
}
