import { ButtonLink } from '@free-react-templates/ui'

export function About() {
  return (
    <section id="about" className="bg-white py-20 transition-colors dark:bg-gray-950 lg:py-[120px]">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div className="relative">
          <img
            src="https://picsum.photos/seed/amber-about/700/700"
            alt="Barber at work in the chair"
            className="w-full rounded-2xl object-cover shadow-xl"
          />
        </div>
        <div>
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-brand">
            About Us
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold uppercase text-ink dark:text-white sm:text-4xl">
            Experienced and Traditional Stylish Barber Shop
          </h2>
          <p className="mt-6 text-sm leading-relaxed text-mist dark:text-gray-400">
            Inspires employees and organizations to support causes they care about. We do this to
            bring more resources to the nonprofits that are changing our world — one sharp cut at a
            time, with tools and techniques passed down through generations.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-mist dark:text-gray-400">
            From classic scissor work to hot-towel shaves, every service is delivered with the
            precision and tradition of a master barber.
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
