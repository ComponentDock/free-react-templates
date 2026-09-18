import { ButtonLink } from '@free-react-templates/ui'

export function About() {
  return (
    <section id="about" className="bg-white py-20 transition-colors dark:bg-gray-950 lg:py-[120px]">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div className="relative">
          <img
            src="https://picsum.photos/seed/finflow-about/700/700"
            alt="Financial advisor consultation"
            className="w-full rounded-2xl object-cover shadow-xl"
          />
        </div>
        <div>
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-brand">
            About Us
          </span>
          <h2 className="mt-4 text-3xl font-bold uppercase text-ink dark:text-white sm:text-4xl">
            We Solve Your Financial Problem
          </h2>
          <p className="mt-6 text-sm leading-relaxed text-mist dark:text-gray-400">
            Finflow is dedicated to providing top-notch financial solutions for individuals and
            businesses. Our team of experienced professionals works tirelessly to ensure your
            financial goals are met with precision and care.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-mist dark:text-gray-400">
            From personal banking to corporate finance, we offer comprehensive services designed to
            simplify your financial journey and maximize your growth potential.
          </p>
          <div className="mt-8">
            <ButtonLink
              href="#services"
              className="rounded-lg bg-brand px-10 uppercase tracking-[0.2em] text-white transition-colors hover:bg-brand-dark"
            >
              Learn More
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  )
}
