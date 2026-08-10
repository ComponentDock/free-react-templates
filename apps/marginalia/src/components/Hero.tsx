import { heroImage } from '../data'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[90vh] items-center justify-center overflow-hidden bg-charcoal"
    >
      <img
        src={heroImage.src}
        alt={heroImage.alt}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-charcoal/60" />
      <div className="relative z-10 max-w-4xl px-6 py-24 text-center">
        <h1 className="font-sans text-3xl font-light leading-tight text-white sm:text-5xl lg:text-6xl">
          My personal journey for <em className="font-serif italic">inspiration</em>
        </h1>
      </div>
    </section>
  )
}
