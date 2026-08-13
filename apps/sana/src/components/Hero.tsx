import { ButtonLink } from '@free-react-templates/ui'

/** Full-width hero: pastel medical photo, white headline + Get Started CTA. */
export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[720px] items-center bg-ink-900 bg-cover bg-center"
      style={{ backgroundImage: 'url(https://picsum.photos/seed/sana-hero/1920/1080)' }}
    >
      <div className="absolute inset-0 bg-black/45" aria-hidden="true" />
      <div className="relative mx-auto w-full max-w-7xl px-4 py-24 lg:px-8">
        <div className="max-w-xl">
          <h1 className="text-4xl leading-tight font-bold text-white sm:text-5xl">
            We Care for Your Health Every Moment
          </h1>
          <p className="mt-6 max-w-md text-base leading-7 text-white/90">
            Compassionate, round-the-clock medical care for your whole family — quality treatment
            delivered by experienced specialists.
          </p>
          <ButtonLink
            href="#appointment"
            className="mt-10 h-12 rounded-none bg-primary-500 px-10 font-medium text-white uppercase hover:bg-primary-600"
          >
            Get Started
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
