import { Play } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-hero">
      <div
        className="absolute inset-0 opacity-90"
        style={{
          backgroundImage:
            'linear-gradient(rgba(68, 142, 246, 0.9), rgba(68, 142, 246, 0.9)), url(https://picsum.photos/seed/verve-hero/1600/900)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        aria-hidden="true"
      />
      <div className="relative mx-auto flex min-h-[80vh] max-w-4xl flex-col items-center justify-center px-4 py-24 text-center sm:px-6">
        <h1 className="font-display text-5xl font-bold leading-tight tracking-wide text-white sm:text-6xl">
          I love to
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
          A small river named Duden flows by their place and supplies it with the necessary
          regelialia — a paradisematic country where roasted parts of sentences fly into your mouth.
        </p>
        <div className="mt-10">
          <ButtonLink
            href="#services"
            className="rounded-full bg-white px-9 py-3.5 font-semibold text-gray-800 shadow-lg hover:bg-gray-100"
          >
            <Play className="mr-2 h-4 w-4 fill-current" aria-hidden="true" />
            Watch Video
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
