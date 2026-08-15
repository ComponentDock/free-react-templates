import { ButtonLink } from '@free-react-templates/ui'

export function About() {
  return (
    <section id="about" aria-label="About us" className="bg-ink py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 lg:grid-cols-2 lg:px-8">
        <img
          src="https://picsum.photos/seed/ascent-about/800/640"
          alt="Team collaborating around a table"
          className="hidden w-full rounded-md object-cover lg:block"
        />
        <div>
          <span className="text-sm font-medium uppercase tracking-wide text-white/80">
            About Us
          </span>
          <h2 className="mt-3 font-display text-4xl font-normal text-white">
            Empowering individuals
          </h2>
          <p className="mt-6 max-w-md text-white/70">
            Efficiently unleash cross-media tour function information without cross action media
            value. Quickly maximize timely deliverables for real-time schemas.
          </p>
          <p className="mt-4 max-w-md text-white/70">
            &ldquo;Function information without cross action media value.&rdquo;
          </p>
          <div className="mt-10">
            <ButtonLink
              href="#contact"
              className="bg-brand px-8 py-4 text-sm font-medium uppercase tracking-wide text-white transition-colors hover:bg-brand-dark"
            >
              About Us
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  )
}
