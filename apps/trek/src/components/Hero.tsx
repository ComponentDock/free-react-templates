import { Play } from 'lucide-react'
import { heroImage, heroText, heroTitle, playButtonLabel } from '../data'

export function Hero() {
  return (
    <section
      id="home-section"
      aria-label="Hero"
      className="relative flex min-h-[600px] items-center md:h-[calc(100vh-196px)] md:min-h-[677px]"
    >
      <img src={heroImage} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div aria-hidden="true" className="absolute inset-0 bg-black/30" />
      <div className="relative mx-auto w-full max-w-[1200px] px-6">
        <div className="max-w-xl">
          <h1 className="mb-3 text-5xl font-black leading-none text-white md:text-[3rem]">
            {heroTitle}
          </h1>
          <p className="text-[15px] leading-[1.7] text-white">{heroText}</p>
          <div className="mt-8 flex items-center gap-4">
            <button
              type="button"
              aria-label={playButtonLabel}
              className="group inline-flex h-[60px] w-[60px] items-center justify-center rounded-full border border-white bg-white/10 transition-colors hover:bg-white"
            >
              <Play
                className="h-6 w-6 text-white transition-colors group-hover:text-black"
                aria-hidden="true"
              />
            </button>
            <span className="text-sm text-white">{playButtonLabel}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
