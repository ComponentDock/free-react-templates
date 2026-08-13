import { hero } from '../data'

/* Reference: section.hero-section.home-page.set-bg — 633px hero with a
   real-estate photo background, a solid dark-navy overlay
   (rgba(18,16,82,.75)) and the centered white two-line headline
   "Find your next" (48px/300) + "dream home." (72px/300). */
export function Hero() {
  return (
    <section id="home" aria-label="Welcome" className="relative h-[633px] overflow-hidden">
      <img
        src={hero.photo}
        alt={hero.alt}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-[rgba(18,16,82,0.75)]" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 pt-20 text-center">
        <h2 className="text-[32px] font-light text-white lg:text-[48px]">{hero.lineOne}</h2>
        <h1 className="mt-2 text-[52px] font-light leading-none text-white lg:text-[72px]">
          {hero.lineTwo}
        </h1>
      </div>
    </section>
  )
}
