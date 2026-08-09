import { ButtonLink } from '@free-react-templates/ui'

export function About() {
  return (
    <section id="about" className="bg-white py-20 transition-colors dark:bg-gray-950 lg:py-[120px]">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 md:grid-cols-2">
        <div>
          <h2 className="font-display text-3xl font-bold text-ink dark:text-white sm:text-4xl">
            We Believe that Interior beauty Lasts Long
          </h2>
          <p className="mt-6 leading-relaxed text-mist dark:text-gray-400">
            Inappropriate behavior is often laughed off as "boys will be boys," women face higher
            conduct standards especially in the workplace. That's why it's crucial that as women we
            raise the bar for ourselves.
          </p>
          <div className="mt-8">
            <ButtonLink
              href="#services"
              className="rounded-full bg-gradient-to-r from-brand to-brand-light px-9 uppercase tracking-wide hover:from-brand-dark hover:to-brand"
            >
              Learn More
            </ButtonLink>
          </div>
        </div>
        <div className="relative">
          <img
            src="https://picsum.photos/seed/dapper-about/640/720"
            alt="Barber styling a client's hair"
            className="aspect-[8/9] w-full rounded-md border-4 border-brand/40 object-cover"
          />
          <div
            className="absolute -bottom-4 -left-4 h-24 w-24 rounded-md border-4 border-brand/40 bg-paper"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  )
}
