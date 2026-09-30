import { news } from '../data'
import { SectionHeading } from './SectionHeading'

function NewsCard({ item }: { item: (typeof news)[number] }) {
  return (
    <article className="group relative overflow-hidden">
      <img src={item.image} alt={item.title} className="aspect-[4/3] w-full object-cover" />
      <div className="absolute inset-0 flex items-center bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100 group-focus-within:opacity-100">
        <span className="absolute inset-y-0 left-0 w-16 -skew-x-12 bg-brand" aria-hidden="true" />
        <div className="relative z-10 px-6 pl-20">
          <h3 className="text-lg font-bold text-white">{item.title}</h3>
          <div className="mt-3 flex items-center gap-3">
            <img src={item.author.avatar} alt="" className="h-8 w-8 rounded-full object-cover" />
            <span className="text-sm text-white/80">{item.author.name}</span>
            <span className="text-sm text-white/50">{item.date}</span>
          </div>
        </div>
      </div>
    </article>
  )
}

/** Latest News (reference `.latest-news`): red-bar heading plus three photo
 *  cards whose caption overlay (red diagonal + title + author row) reveals
 *  on hover/focus. */
export function LatestNews() {
  return (
    <section id="news" className="mx-auto max-w-7xl px-4 py-24 lg:px-8">
      <SectionHeading>Latest News</SectionHeading>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {news.map((item) => (
          <NewsCard key={item.title} item={item} />
        ))}
      </div>
    </section>
  )
}
