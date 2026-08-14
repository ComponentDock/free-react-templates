import { HERO_SLIDES, MINI_ARTICLES, type Slide } from '../data'
import { Carousel } from './Carousel'

const badgeClasses: Record<Slide['badgeColor'], string> = {
  red: 'bg-badge-red',
  blue: 'bg-badge-blue',
  green: 'bg-badge-green',
  purple: 'bg-badge-purple',
}

function Badge({ slide }: { slide: Slide }) {
  return (
    <span
      className={`absolute left-4 top-4 px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-white ${badgeClasses[slide.badgeColor]}`}
    >
      {slide.badge}
    </span>
  )
}

function FeaturedCard({ slide }: { slide: Slide }) {
  return (
    <article className="relative overflow-hidden">
      <img
        src={slide.image}
        alt=""
        className="h-[320px] w-full object-cover md:h-[420px]"
        loading="lazy"
      />
      <Badge slide={slide} />
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-6 pt-20">
        <h1 className="font-heading text-2xl font-extrabold leading-tight text-white md:text-4xl">
          {slide.title}
        </h1>
        <p className="mt-2 text-sm text-white/80">{slide.byline}</p>
      </div>
    </article>
  )
}

function MiniCard({ slide }: { slide: Slide }) {
  return (
    <article className="flex gap-4 bg-white">
      <div className="relative shrink-0">
        <img src={slide.image} alt="" className="h-24 w-32 object-cover" loading="lazy" />
        <Badge slide={slide} />
      </div>
      <div className="py-1">
        <h3 className="font-heading text-[15px] font-bold leading-snug text-navy transition-colors hover:text-brand">
          {slide.title}
        </h3>
        <p className="mt-1 text-xs text-meta">{slide.byline}</p>
      </div>
    </article>
  )
}

export function Hero() {
  return (
    <section id="home" aria-label="Featured stories" className="bg-surface pt-6">
      <div className="mx-auto grid max-w-7xl gap-6 px-6 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <Carousel
            slides={HERO_SLIDES.map((slide) => (
              <FeaturedCard key={slide.title} slide={slide} />
            ))}
            regionLabel="Featured stories"
            prevLabel="Previous featured story"
            nextLabel="Next featured story"
            autoplayMs={6000}
            className="shadow-sm"
          />
        </div>
        <div className="hidden flex-col justify-between gap-6 lg:col-span-4 lg:flex">
          {MINI_ARTICLES.map((slide) => (
            <MiniCard key={slide.title} slide={slide} />
          ))}
        </div>
      </div>
    </section>
  )
}
