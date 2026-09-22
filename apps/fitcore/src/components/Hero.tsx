import { Play } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('https://picsum.photos/seed/fitcore-hero/1600/900')" }}
    >
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"
        aria-hidden="true"
      />
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-32 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="mb-8 inline-block border-l-2 border-brand pl-6 font-display text-2xl font-light uppercase tracking-wider text-brand">
            With Our Expert Trainers
          </span>
          <h1 className="mb-10 font-display text-5xl font-bold uppercase leading-tight text-white md:text-7xl">
            Build Perfect Body Shape for a Good and Healthy Life
          </h1>
          <ButtonLink
            href="#contact"
            className="bg-brand px-10 py-4 font-display text-base font-light uppercase tracking-widest text-white hover:bg-brand-dark"
          >
            Become a Member
          </ButtonLink>
        </div>
      </div>

      {/* Video play icon */}
      <div className="absolute bottom-10 right-10 z-10 hidden md:block">
        <button
          type="button"
          aria-label="Play video"
          className="group flex h-20 w-20 items-center justify-center rounded-full border border-brand bg-brand text-white transition-all hover:bg-white hover:text-brand"
        >
          <Play size={28} fill="currentColor" />
        </button>
      </div>
    </section>
  )
}
