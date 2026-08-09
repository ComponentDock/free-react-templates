import { ButtonLink } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <img
        src="https://picsum.photos/seed/shear-hero/1920/1080"
        alt="Barber at work trimming a client's hair"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
      <div className="relative z-10 max-w-3xl px-4 py-32 text-center sm:px-6">
        <h1 className="font-display text-4xl font-bold uppercase tracking-wide text-white sm:text-5xl lg:text-6xl">
          More Than Just A Haircut
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
          there live the blind texts.
        </p>
        <div className="mt-8">
          <ButtonLink href="#welcome" className="rounded-full px-8 uppercase tracking-wide">
            Learn More
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
