import { ButtonLink } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <img
        src="https://picsum.photos/seed/buzz-hero/1920/1080"
        alt="Barber shaving a client's beard"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
      <div className="relative z-10 max-w-3xl px-4 py-32 text-center sm:px-6">
        <h1 className="font-display text-4xl font-bold uppercase tracking-wide text-white sm:text-5xl lg:text-6xl">
          Modern barber shop in center of the city
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
          anim id est laborum. Sed ut perspiciatis unde omnis iste natus error.
        </p>
        <div className="mt-10">
          <ButtonLink
            href="#appointment"
            className="rounded-none border border-brand bg-white px-10 uppercase tracking-[0.2em] text-brand transition-colors hover:bg-brand hover:text-white"
          >
            Appointment
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
