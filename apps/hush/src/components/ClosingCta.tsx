import { Reveal } from './Reveal'

export function ClosingCta() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-28">
      <img
        src="https://picsum.photos/seed/hush-cta/1920/800"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-primary-950/70" />
      <Reveal className="relative z-10 mx-auto max-w-3xl px-4 text-center lg:px-8">
        <h2 className="font-heading text-3xl font-light text-white sm:text-4xl lg:text-5xl">
          Begin Your Journey Inward
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-stone-200">
          Whether you&rsquo;re seeking rest, direction, or a deeper relationship with God, there is
          a place for you here. Come and see.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#retreats"
            className="inline-flex items-center rounded-full bg-primary-600 px-7 py-3.5 text-sm font-medium text-white shadow-soft transition-colors hover:bg-primary-500"
          >
            Book a Retreat
          </a>
          <a
            href="#connect"
            className="inline-flex items-center rounded-full border-2 border-white/40 px-7 py-3.5 text-sm font-medium text-white transition-colors hover:border-white hover:bg-white/10"
          >
            Contact Us
          </a>
        </div>
      </Reveal>
    </section>
  )
}
