import { MOST_RECENT, type NewsCard } from '../data'

const badgeClasses: Record<NonNullable<NewsCard['badgeColor']>, string> = {
  red: 'bg-badge-red',
  blue: 'bg-badge-blue',
  green: 'bg-badge-green',
  purple: 'bg-badge-purple',
}

function RecentCard({ card }: { card: NewsCard }) {
  return (
    <article className="group bg-white shadow-sm">
      <div className="relative overflow-hidden">
        <img
          src={card.image}
          alt=""
          className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {card.badge && card.badgeColor && (
          <span
            className={`absolute left-4 top-4 px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-white ${badgeClasses[card.badgeColor]}`}
          >
            {card.badge}
          </span>
        )}
      </div>
      <div className="p-5">
        <h4 className="font-heading text-xl font-bold leading-snug text-navy transition-colors group-hover:text-brand">
          {card.title}
        </h4>
        <p className="mt-2 text-sm text-meta">{card.byline}</p>
      </div>
    </article>
  )
}

export function MostRecent() {
  return (
    <section id="latest" aria-label="Most Recent" className="pt-8">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-6 font-heading text-2xl font-bold text-navy">Most Recent</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {MOST_RECENT.map((card) => (
            <RecentCard key={card.title} card={card} />
          ))}
        </div>
      </div>
    </section>
  )
}
