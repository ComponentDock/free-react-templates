import { Play } from 'lucide-react'
import { Button } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-[640px] items-center bg-coal">
      <img
        src="https://picsum.photos/seed/belara-hero/1600/900"
        alt="Modern residential architecture at dusk"
        className="absolute inset-0 h-full w-full object-cover opacity-70"
      />
      <div className="absolute inset-0 bg-[#10142a]/60" />

      <div className="relative mx-auto w-full max-w-6xl px-4 py-24 sm:px-6">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">
          Salt Lake City, United States
        </p>
        <h1 className="mt-4 max-w-2xl font-display text-5xl font-bold uppercase leading-tight text-white sm:text-6xl">
          Homeownership never looked so affordable
        </h1>

        <div className="mt-10">
          <Button
            size="lg"
            className="rounded-none bg-brand px-10 font-display text-sm font-semibold uppercase tracking-[0.2em] text-white hover:bg-brand-dark"
          >
            <Play className="h-4 w-4" aria-hidden="true" fill="currentColor" />
            Play Reel
          </Button>
        </div>
      </div>
    </section>
  )
}
