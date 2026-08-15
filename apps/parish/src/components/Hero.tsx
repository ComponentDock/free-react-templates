import { Play } from 'lucide-react'
import { hero } from '../data'

export function Hero() {
  return (
    <section className="relative flex h-[800px] items-end justify-end overflow-hidden">
      <img
        src={hero.image}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-brand-deep/20" />
      <div className="relative z-[1] mx-auto w-full max-w-[1250px] px-4 pb-16 text-right md:pb-24">
        <div className="ml-auto flex max-w-xl items-center justify-end gap-4">
          <a
            href="#sermons"
            className="flex h-[70px] w-[70px] shrink-0 items-center justify-center rounded-full bg-white text-black transition-colors hover:text-brand"
            aria-label="Watch our latest sermons"
          >
            <Play className="ml-1 h-7 w-7" />
          </a>
          <span className="text-sm text-white">{hero.playLabel}</span>
        </div>
        <h1 className="ml-auto mt-6 max-w-2xl font-heading text-[34px] leading-[1.1] font-bold tracking-[3px] text-white uppercase md:text-[50px]">
          {hero.headline}
        </h1>
        <p className="ml-auto mt-4 max-w-xl text-right text-lg text-white/90">{hero.sub}</p>
      </div>
    </section>
  )
}
