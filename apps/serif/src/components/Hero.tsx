import {
  heroAlt,
  heroCategory,
  heroDate,
  heroHeadline,
  heroImageSeed,
  heroSectionLabel,
} from '../data'

export function Hero() {
  return (
    <section aria-label={heroSectionLabel} className="relative h-[550px] overflow-hidden bg-ink">
      <img
        src={`https://picsum.photos/seed/${heroImageSeed}/1920/550`}
        alt={heroAlt}
        className="h-full w-full object-cover"
      />
      {/* hero-banner ::after overlay rgba(1,3,15,0.2) — bumped to /30 so the
          centered white text stays readable over bright placeholder photos. */}
      <span aria-hidden="true" className="absolute inset-0 bg-black/30" />
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white">
        <h3 className="text-[27px]">{heroCategory}</h3>
        <h1 className="mt-3 max-w-3xl font-serif text-4xl font-bold md:text-5xl">{heroHeadline}</h1>
        <h4 className="mt-3 text-lg">{heroDate}</h4>
      </div>
    </section>
  )
}
