import { ChevronsDown, Play } from 'lucide-react'
import { heroBlurb, heroImage, heroVideoUrl } from '../data'

// Full-height hero over the purple-tinted DJ photo: eyebrow, display
// headline, blurb, circular play button and a bottom chevron.
export function Hero() {
  return (
    <section
      id="home"
      className="relative flex items-center justify-center overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div aria-hidden="true" className="absolute inset-0 bg-overlay" />
      <div className="relative z-10 mx-auto max-w-4xl px-6 pb-[295px] pt-[400px] text-center">
        <span className="text-[15px] uppercase tracking-[6px] text-white">New single</span>
        <h1 className="mt-6 font-display text-[64px] font-bold uppercase leading-[1.05] text-white md:text-[110px]">
          Feel the heart beats
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-[15px] leading-relaxed text-white">{heroBlurb}</p>
        <a
          href={heroVideoUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="Watch the latest music video"
          className="mt-10 inline-flex h-[90px] w-[90px] items-center justify-center rounded-full bg-white/30 text-brand transition hover:bg-white/50"
        >
          <Play className="h-7 w-7 fill-current" />
        </a>
      </div>
      <a
        href="#events"
        aria-label="Scroll to upcoming events"
        className="absolute bottom-0 left-1/2 z-10 -translate-x-1/2 text-brand"
      >
        <ChevronsDown className="h-[50px] w-[50px]" />
      </a>
    </section>
  )
}
