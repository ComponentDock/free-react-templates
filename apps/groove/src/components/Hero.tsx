import { ButtonLink } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section
      id="home"
      aria-label="Hero"
      className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-br from-void via-deep to-primary-900"
    >
      {/* Background image overlay */}
      <img
        src="https://picsum.photos/seed/groove-hero/1920/1080"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-30"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-void/80 via-void/40 to-transparent" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 py-32 sm:px-6">
        <span className="font-script text-2xl text-accent-400">The electro vibe</span>
        <h1 className="mt-4 text-5xl font-extrabold leading-tight text-white sm:text-7xl">
          Groove Sessions
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
          Experience the electrifying sound that blends electro vibes with raw energy. Join us for
          unforgettable live performances and exclusive album releases.
        </p>
        <div className="mt-10">
          <ButtonLink
            href="#shows"
            className="inline-block rounded-full bg-primary-400 px-8 py-3.5 text-sm font-bold text-white transition-colors hover:bg-accent-400"
          >
            Buy tickets
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
