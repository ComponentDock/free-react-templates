import { ButtonLink } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden">
      <img
        src="https://picsum.photos/seed/mane-hero/1920/1080"
        alt="Hair salon styling station with warm lighting"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 py-32 text-center sm:px-6">
        <span className="font-display text-lg font-medium uppercase tracking-[0.25em] text-brand-light">
          Welcome to our Salon
        </span>
        <h1 className="mx-auto mt-4 max-w-3xl font-display text-4xl font-bold uppercase leading-tight text-white sm:text-5xl lg:text-6xl">
          We are professional care for your hair
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
          From precision cuts to luxurious treatments, our stylists craft a look that celebrates you
          — every visit leaves you feeling renewed.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <ButtonLink
            href="#booking"
            className="rounded-full border border-brand bg-brand px-10 uppercase tracking-[0.2em] text-white transition-colors hover:bg-brand-dark"
          >
            For Men
          </ButtonLink>
          <ButtonLink
            href="#booking"
            className="rounded-full border border-white bg-transparent px-10 uppercase tracking-[0.2em] text-white transition-colors hover:bg-white hover:text-black"
          >
            For Women
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
