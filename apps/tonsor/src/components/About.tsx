import { ButtonLink } from '@free-react-templates/ui'

export function About() {
  return (
    <section id="about" className="bg-white py-24 dark:bg-gray-950 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div className="relative">
          <img
            src="https://picsum.photos/seed/tonsor-about-1/640/480"
            alt="Barber at work in the salon"
            className="w-4/5 rounded-md object-cover shadow-xl"
          />
          <img
            src="https://picsum.photos/seed/tonsor-about-2/480/360"
            alt="Grooming tools on a barber counter"
            className="absolute -bottom-8 right-0 w-1/2 rounded-md border-8 border-white object-cover shadow-xl dark:border-gray-950"
          />
        </div>

        <div>
          <h2 className="font-display text-3xl font-bold leading-snug text-ink dark:text-white sm:text-4xl">
            We Believe that Interior beauty Lasts Long
          </h2>
          <p className="mt-6 max-w-lg text-sm font-light leading-relaxed text-mist">
            Properly done, a haircut and shave are more than grooming — they are a ritual. Our
            master barbers combine classic technique with modern style, so you leave the chair
            feeling sharp, relaxed, and ready for anything.
          </p>
          <ButtonLink
            href="#services"
            className="mt-8 rounded-full bg-gradient-to-r from-brand to-gold px-8 text-xs font-semibold uppercase tracking-[0.2em] text-white hover:from-gold hover:to-brand"
          >
            Learn More
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
