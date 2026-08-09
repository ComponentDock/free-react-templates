import { ButtonLink } from '@free-react-templates/ui'

export function About() {
  return (
    <section id="about" className="bg-white py-20 transition-colors dark:bg-gray-950 lg:py-[120px]">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div className="relative">
          <img
            src="https://picsum.photos/seed/slick-about/700/700"
            alt="Barber tools laid out on the counter"
            className="w-full rounded-2xl object-cover shadow-xl"
          />
        </div>
        <div>
          <span className="text-sm font-bold uppercase tracking-[0.25em] text-brand">
            About Our Story
          </span>
          <h2 className="mt-4 font-display text-3xl font-black uppercase text-ink dark:text-white sm:text-4xl">
            ABOUT Our STORY
          </h2>
          <p className="mt-6 text-sm leading-relaxed text-mist dark:text-gray-400">
            Slick started with a single chair and a simple belief: a great haircut is not a luxury,
            it is a necessity. Our barbers have spent years perfecting the classic craft — from
            precision fades to traditional straight-razor shaves.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-mist dark:text-gray-400">
            Every visit starts with a conversation. Tell us how you live, and we will shape a cut
            that fits your face, your routine, and your personality — then back it with a guarantee.
          </p>
          <div className="mt-8">
            <ButtonLink
              href="#prices"
              className="rounded-lg bg-brand px-10 uppercase tracking-[0.2em] text-white transition-colors hover:bg-brand-dark"
            >
              View Prices
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  )
}
