import { OLD_SPONDON } from '../data'
import { Carousel } from './Carousel'

function OldCard({ title, byline, image }: { title: string; byline: string; image: string }) {
  return (
    <article className="group bg-white shadow-sm">
      <div className="overflow-hidden">
        <img
          src={image}
          alt=""
          className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <h4 className="font-heading text-base font-bold leading-snug text-navy transition-colors group-hover:text-brand">
          {title}
        </h4>
        <p className="mt-1.5 text-xs text-meta">{byline}</p>
      </div>
    </article>
  )
}

export function OldSpondon() {
  return (
    <section id="archive" aria-label="Old Spondon News" className="pb-20 pt-14">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-6 font-heading text-3xl font-bold text-navy">Old Spondon News - 2020</h2>
        <Carousel
          slides={OLD_SPONDON.map((card) => (
            <OldCard key={card.title} title={card.title} byline={card.byline} image={card.image} />
          ))}
          visibleCount={3}
          showDots
          regionLabel="Old Spondon News"
          prevLabel="Previous old stories"
          nextLabel="Next old stories"
          className="-mx-2"
        />
      </div>
    </section>
  )
}
