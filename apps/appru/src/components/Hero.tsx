import { StoreButtons } from './StoreButtons'

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-night px-4 pb-24 pt-40 sm:px-6 lg:pb-32 lg:pt-48"
    >
      <img
        src="https://picsum.photos/seed/appru-hero/1600/900"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-night via-night/80 to-night/40" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2">
        <div>
          <h1 className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl">
            App That Suits You Better
          </h1>
          <p className="mt-6 max-w-lg leading-relaxed text-white/80">
            Inappropriate behavior is often laughed off as &ldquo;boys will be boys&rdquo; — Appru
            raises the standard for conduct, clarity, and care in every interaction.
          </p>
          <div className="mt-10">
            <StoreButtons />
          </div>
        </div>
        <img
          src="https://picsum.photos/seed/appru-phone/600/900"
          alt="Appru app phone mockup"
          className="mx-auto w-full max-w-sm rounded-3xl shadow-2xl"
        />
      </div>
    </section>
  )
}
