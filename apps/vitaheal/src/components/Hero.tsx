import { ButtonLink } from '@free-react-templates/ui'

/** Full-width hero: medical background photo, white headline + Read More CTA. */
export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[600px] items-center bg-cover bg-center"
      style={{ backgroundImage: 'url(https://picsum.photos/seed/vitaheal-hero/1920/1080)' }}
    >
      <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
      <div className="relative mx-auto w-full max-w-7xl px-4 py-24 lg:px-8">
        <div className="max-w-xl">
          <h1 className="text-4xl leading-tight font-bold text-white sm:text-5xl">
            Medical Services that you can trust
          </h1>
          <p className="mt-6 max-w-md text-base leading-7 text-white/90">
            Compassionate, professional healthcare for your whole family — quality treatment
            delivered by experienced specialists in a modern facility.
          </p>
          <ButtonLink
            href="#services"
            className="mt-10 inline-flex h-12 items-center rounded-sm bg-teal-400 px-8 font-semibold text-white uppercase transition-colors hover:bg-teal-500"
          >
            Read More
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
