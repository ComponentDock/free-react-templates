import { ButtonLink } from '@free-react-templates/ui'

export function About() {
  return (
    <section id="about" className="bg-white py-20 transition-colors dark:bg-gray-950 lg:py-[120px]">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <img
            src="https://picsum.photos/seed/healnova-about/700/700"
            alt="Medical team providing care"
            className="w-full rounded-2xl object-cover shadow-xl"
          />
        </div>
        <div>
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-brand">
            About Us
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold text-ink dark:text-white sm:text-4xl">
            We Are Happy To Serve You!
          </h2>
          <p className="mt-6 text-sm leading-relaxed text-mist dark:text-gray-400">
            Our medical center is dedicated to providing exceptional healthcare services with
            compassion and expertise. We combine modern technology with experienced professionals to
            ensure the best possible outcomes for every patient.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-mist dark:text-gray-400">
            From preventive care to specialized treatments, we are committed to improving the health
            and wellbeing of our community.
          </p>
          <div className="mt-8 flex gap-4">
            <ButtonLink
              href="#contact"
              className="rounded-lg bg-brand px-8 text-white hover:bg-brand-dark"
            >
              Contact Us
            </ButtonLink>
            <ButtonLink href="#services" variant="outline" className="rounded-lg px-8">
              Read More
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  )
}
