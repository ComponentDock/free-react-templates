import { Play } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section id="home" className="bg-paper dark:bg-gray-950">
      <div className="mx-auto grid max-w-6xl items-stretch gap-0 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24">
        <div className="relative min-h-[320px] overflow-hidden">
          <img
            src="https://picsum.photos/seed/girder-hero/1200/900"
            alt="Sweeping metallic curves of a modern building facade"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>

        <div className="flex items-center bg-white px-6 py-14 dark:bg-gray-900 sm:px-12">
          <div>
            <p className="text-sm font-bold uppercase tracking-[2.4px] text-brand">Welcome</p>
            <h1 className="mt-3 font-display text-4xl font-extrabold uppercase leading-tight text-ink dark:text-white sm:text-5xl">
              We Are Girder
            </h1>
            <p className="mt-5 max-w-md leading-relaxed text-mist dark:text-gray-400">
              Far far away, behind the word mountains, far from the countries Vokalia and
              Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right
              at the coast of the Semantics, a large language ocean.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <ButtonLink
                href="#projects"
                className="rounded-[5px] bg-brand px-8 font-sans text-sm font-semibold uppercase text-white hover:bg-brand-dark"
              >
                See our projects
              </ButtonLink>
              <ButtonLink
                href="#about"
                variant="outline"
                className="rounded-[5px] border-ink/30 px-8 font-sans text-sm font-semibold uppercase text-ink hover:bg-ink hover:text-white dark:border-white/30 dark:text-white dark:hover:bg-white dark:hover:text-ink"
              >
                <Play className="mr-2 h-4 w-4" aria-hidden="true" />
                Watch our video
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
