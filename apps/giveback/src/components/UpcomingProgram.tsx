import { ButtonLink } from '@free-react-templates/ui'
import { upcoming } from '../data'

export function UpcomingProgram() {
  return (
    <section id="program" className="bg-cream py-16 transition-colors dark:bg-navy/40 lg:py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2">
        <img
          src={upcoming.image}
          alt="Children receiving donated vitamin supplies"
          className="h-full w-full object-cover"
        />
        <div>
          <span className="text-base font-medium uppercase tracking-widest text-teal">
            {upcoming.kicker}
          </span>
          <h2 className="mt-3 font-display text-3xl font-medium leading-tight text-navy sm:text-4xl dark:text-white">
            {upcoming.title}
          </h2>
          <p className="mt-5 max-w-xl text-base font-light leading-relaxed text-ink">
            {upcoming.paragraph}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <ButtonLink
              href="#contact"
              className="rounded-none bg-brand px-8 py-3.5 text-sm font-medium uppercase tracking-wide text-white transition-colors hover:bg-flame"
            >
              {upcoming.donateLabel}
            </ButtonLink>
            <ButtonLink
              href="#causes"
              className="rounded-none border-2 border-brand px-8 py-3.5 text-sm font-medium uppercase tracking-wide text-brand transition-colors hover:bg-brand hover:text-white"
            >
              {upcoming.viewLabel}
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  )
}
