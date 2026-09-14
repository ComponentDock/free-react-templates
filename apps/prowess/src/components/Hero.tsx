import { ButtonLink } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-navy dark:bg-navy-dark">
      <div className="absolute inset-0">
        <img
          src="https://picsum.photos/seed/prowess-hero/1600/900"
          alt="Gym interior with workout equipment"
          className="h-full w-full object-cover opacity-40"
        />
      </div>
      <div className="relative mx-auto max-w-6xl px-4 py-32 sm:px-6 lg:py-44">
        <div className="max-w-2xl text-white">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-brand">
            Go to the gym now!
          </span>
          <h1 className="mt-6 font-sans text-5xl font-extrabold leading-tight uppercase tracking-wide sm:text-6xl lg:text-7xl">
            <span className="inline-block rounded-full border-2 border-white px-6 py-2">Never</span>{' '}
            limit yourself
          </h1>
          <p className="mt-8 max-w-md text-base leading-relaxed text-white/70">
            Push beyond your limits. Transform your body and mind with our world-class trainers and
            state-of-the-art equipment.
          </p>
          <div className="mt-10">
            <ButtonLink
              href="#about"
              className="inline-flex rounded-full bg-brand px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:bg-white hover:text-brand"
            >
              Read More
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  )
}
