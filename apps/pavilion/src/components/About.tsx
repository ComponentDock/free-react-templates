import { ButtonLink } from '@free-react-templates/ui'

export function About() {
  return (
    <section id="about" className="bg-white py-20 lg:py-[120px]">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div className="relative">
          <img
            src="https://picsum.photos/seed/pavilion-about/700/700"
            alt="Hotel lobby with elegant furnishings"
            className="w-full rounded-2xl object-cover shadow-xl"
          />
          <div className="absolute -bottom-6 -right-6 flex h-32 w-32 items-center justify-center rounded-full bg-brand text-center shadow-xl">
            <div>
              <span className="block text-3xl font-bold text-white">25</span>
              <span className="text-xs font-semibold uppercase tracking-wide text-white">
                Years of Service
              </span>
              <span className="block text-xs text-white/80">Experience</span>
            </div>
          </div>
        </div>
        <div>
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-brand">
            About our company
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold text-ink sm:text-4xl">
            Make the customer the hero of your story
          </h2>
          <p className="mt-6 text-sm leading-relaxed text-mist">
            We believe hospitality is an art form. From the moment you step through our doors, every
            detail is designed around your comfort — handpicked linens, locally sourced cuisine, and
            a staff that remembers your name.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-mist">
            With over two decades of experience, we have perfected the balance between luxury and
            warmth, creating a home away from home for travelers from around the world.
          </p>
          <div className="mt-8">
            <ButtonLink
              href="#rooms"
              className="rounded-lg bg-brand px-10 py-3 uppercase tracking-[0.2em] text-white transition-colors hover:bg-brand-dark"
            >
              Learn More
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  )
}
