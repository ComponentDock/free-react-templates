import { ButtonLink } from '@free-react-templates/ui'
import { about } from '../data'

export function About() {
  return (
    <section id="about" className="bg-white py-20 transition-colors dark:bg-gray-950 lg:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <span className="text-base font-medium uppercase tracking-widest text-teal">
            {about.kicker}
          </span>
          <h2 className="mt-3 font-display text-3xl font-medium leading-tight text-navy sm:text-4xl dark:text-white">
            {about.title}
          </h2>
          <p className="mt-5 max-w-xl text-base font-light leading-relaxed text-ink">
            {about.paragraph}
          </p>
          <div className="mt-8">
            <ButtonLink
              href="#causes"
              className="rounded-none bg-brand px-8 py-3.5 text-sm font-medium uppercase tracking-wide text-white transition-colors hover:bg-flame"
            >
              {about.cta}
            </ButtonLink>
          </div>
        </div>
        <img
          src={about.image}
          alt="Charity volunteers caring for children"
          className="w-full object-cover"
        />
      </div>
    </section>
  )
}
