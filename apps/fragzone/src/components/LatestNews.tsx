import { Newspaper } from 'lucide-react'

const NEWS_ITEMS = [
  {
    badge: 'New',
    badgeColor: 'bg-badge-red',
    text: 'Major update drops for competitive ranked mode this weekend',
  },
  {
    badge: 'Hot',
    badgeColor: 'bg-badge-orange',
    text: 'Community tournament registrations are now open for all regions',
  },
  {
    badge: 'Patch',
    badgeColor: 'bg-badge-blue',
    text: 'Season 4 balance patch brings 20+ hero adjustments',
  },
]

export function LatestNews() {
  return (
    <section className="flex flex-col md:flex-row" aria-label="Latest news">
      <div className="flex items-center justify-center bg-primary px-6 py-5 md:w-1/4 md:justify-end">
        <Newspaper className="mr-2 h-5 w-5 text-heading" aria-hidden="true" />
        <h2 className="text-lg font-semibold text-heading">Latest News</h2>
      </div>
      <div className="flex flex-1 items-center gap-4 overflow-x-auto bg-heading px-6 py-5">
        {NEWS_ITEMS.map((item) => (
          <div key={item.text} className="flex items-center gap-3 whitespace-nowrap">
            <span
              className={`${item.badgeColor} inline-block px-4 py-1.5 text-xs font-semibold uppercase text-white`}
            >
              {item.badge}
            </span>
            <span className="text-sm text-gray-300">{item.text}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
