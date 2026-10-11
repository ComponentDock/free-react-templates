import { IMAGES } from '../data/content'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <img
        src={IMAGES.hero}
        alt="Coastal town at sunset"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-navy/35" />

      <div className="relative px-4 text-center">
        <p aria-hidden="true" className="hero-watermark select-none">
          discover
        </p>
        <h1 className="-mt-[0.35em] text-4xl font-normal text-white drop-shadow-[0_11px_51px_rgba(0,0,0,0.35)] sm:text-6xl lg:text-7xl">
          Discover new worlds
        </h1>
      </div>
    </section>
  )
}
