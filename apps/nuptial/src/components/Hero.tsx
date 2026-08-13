import { Flower2 } from 'lucide-react'
import { Countdown } from './Countdown'

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-[88vh] items-center justify-center">
      <img
        src="https://picsum.photos/seed/nuptial-1/1920/1080"
        alt="Francisco and Laura on their wedding day"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/45" aria-hidden="true" />
      <div className="relative mx-auto max-w-4xl px-4 py-32 text-center text-white sm:px-6">
        <p className="flex items-center justify-center gap-4 text-xs font-semibold tracking-[0.45em] text-white uppercase">
          <span className="h-px w-10 bg-white/70 sm:w-16" aria-hidden="true" />
          The Wedding of
          <span className="h-px w-10 bg-white/70 sm:w-16" aria-hidden="true" />
        </p>
        <h1 className="mt-6 font-script text-6xl leading-tight text-white sm:text-7xl lg:text-8xl">
          Francisco &amp; Laura
        </h1>
        <div className="mt-6 flex items-center justify-center gap-3 text-white/70">
          <span className="h-px w-8 bg-white/40" aria-hidden="true" />
          <Flower2 className="h-5 w-5 text-pink-400" aria-hidden="true" />
          <span className="h-px w-8 bg-white/40" aria-hidden="true" />
        </div>
        <div className="mt-10">
          <Countdown />
        </div>
      </div>
    </section>
  )
}
