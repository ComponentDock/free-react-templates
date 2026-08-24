const FEATURE = {
  kicker: 'Technology',
  headline: "The world's first fitness influencer was a Victorian strongman",
  byline: 'by Pete Sariya',
  image: 'https://picsum.photos/seed/kicker-hero/800/500',
}

const RAIL = [
  {
    kicker: 'Technology',
    headline: 'Needs to Rename the James Webb Space Telescope',
    image: 'https://picsum.photos/seed/kicker-rail1/400/250',
  },
  {
    kicker: 'Technology',
    headline: 'These striking photos capture the future of human flight',
    image: 'https://picsum.photos/seed/kicker-rail2/400/250',
  },
  {
    kicker: 'Technology',
    headline: 'Exploring the origins of punk across America with Kid Karate',
    image: 'https://picsum.photos/seed/kicker-rail3/400/250',
  },
]

export function Hero() {
  return (
    <section className="px-4 pb-8 pt-5 lg:px-[88px]">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        {/* Left: feature story */}
        <div className="lg:col-span-7">
          <article className="group">
            <div className="overflow-hidden">
              <img
                src={FEATURE.image}
                alt={FEATURE.headline}
                className="h-auto w-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="eager"
              />
            </div>
            <div className="pt-5">
              <span className="font-chivo text-[14px] font-bold capitalize text-brand-red">
                {FEATURE.kicker}
              </span>
              <h2 className="mt-2 font-serif text-[32px] font-bold leading-[1.1] tracking-tight text-ink transition-colors group-hover:text-brand-red lg:text-[44px]">
                <a href="#">{FEATURE.headline}</a>
              </h2>
              <p className="mt-3 font-chivo text-[16px] font-bold text-ink">{FEATURE.byline}</p>
            </div>
          </article>
        </div>

        {/* Right: rail stories */}
        <div className="flex flex-col gap-5 lg:col-span-5 lg:pl-[18px]">
          {RAIL.map((story) => (
            <article key={story.headline} className="group flex gap-4">
              <div className="w-[160px] shrink-0 overflow-hidden">
                <img
                  src={story.image}
                  alt={story.headline}
                  className="h-[100px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col justify-center">
                <span className="font-chivo text-[12px] font-bold capitalize text-brand-red">
                  {story.kicker}
                </span>
                <h4 className="mt-1 font-chivo text-[18px] font-bold leading-[1.4] text-ink transition-colors group-hover:text-brand-red lg:text-[22px]">
                  <a href="#">{story.headline}</a>
                </h4>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
