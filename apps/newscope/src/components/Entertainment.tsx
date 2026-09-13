import { useState } from 'react'
import { cn } from '@free-react-templates/ui'

const subTabs = ['All', 'Celebrity', 'Movies', 'Music', 'Games'] as const

type SubTabKey = (typeof subTabs)[number]

const entertainArticles: Record<
  SubTabKey,
  Array<{ title: string; category: string; author: string; date: string; image: string }>
> = {
  All: [
    {
      title: 'Award Season Preview: Who Will Take Home the Trophies?',
      category: 'Celebrity',
      author: 'Amy Roberts',
      date: 'Sep 12, 2026',
      image: 'https://picsum.photos/seed/ns-ent-a/300/200',
    },
    {
      title: 'Top 10 Movies to Watch This Month',
      category: 'Movies',
      author: 'Tom Harris',
      date: 'Sep 11, 2026',
      image: 'https://picsum.photos/seed/ns-ent-b/300/200',
    },
    {
      title: 'Album of the Year Candidates',
      category: 'Music',
      author: 'Nina Patel',
      date: 'Sep 10, 2026',
      image: 'https://picsum.photos/seed/ns-ent-c/300/200',
    },
    {
      title: 'Indie Game Revolution: New Releases',
      category: 'Games',
      author: 'Chris Lee',
      date: 'Sep 9, 2026',
      image: 'https://picsum.photos/seed/ns-ent-d/300/200',
    },
  ],
  Celebrity: [
    {
      title: 'Award Season Preview',
      category: 'Celebrity',
      author: 'Amy Roberts',
      date: 'Sep 12, 2026',
      image: 'https://picsum.photos/seed/ns-celeb1/300/200',
    },
    {
      title: 'Red Carpet Fashion Highlights',
      category: 'Celebrity',
      author: 'Amy Roberts',
      date: 'Sep 11, 2026',
      image: 'https://picsum.photos/seed/ns-celeb2/300/200',
    },
  ],
  Movies: [
    {
      title: 'Top 10 Movies This Month',
      category: 'Movies',
      author: 'Tom Harris',
      date: 'Sep 11, 2026',
      image: 'https://picsum.photos/seed/ns-movie1/300/200',
    },
    {
      title: 'Upcoming Sequels to Watch',
      category: 'Movies',
      author: 'Tom Harris',
      date: 'Sep 9, 2026',
      image: 'https://picsum.photos/seed/ns-movie2/300/200',
    },
  ],
  Music: [
    {
      title: 'Album of the Year Candidates',
      category: 'Music',
      author: 'Nina Patel',
      date: 'Sep 10, 2026',
      image: 'https://picsum.photos/seed/ns-music1/300/200',
    },
  ],
  Games: [
    {
      title: 'Indie Game Revolution',
      category: 'Games',
      author: 'Chris Lee',
      date: 'Sep 9, 2026',
      image: 'https://picsum.photos/seed/ns-game1/300/200',
    },
  ],
}

export function Entertainment() {
  const [active, setActive] = useState<SubTabKey>('All')

  return (
    <section className="bg-gray-50 py-10">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <h2 className="font-body text-2xl font-bold text-text-dark">Entertainment</h2>
          <div className="flex flex-wrap items-center gap-2">
            {subTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActive(tab)}
                className={cn(
                  'rounded-full px-3 py-1 font-body text-sm transition-colors',
                  active === tab
                    ? 'bg-text-dark text-white'
                    : 'bg-white text-text-muted hover:bg-gray-200',
                )}
                aria-selected={active === tab}
                role="tab"
              >
                {tab}
              </button>
            ))}
            <a href="#" className="ml-2 font-ui text-sm text-brand-pink hover:underline">
              View all
            </a>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4" role="tabpanel">
          {entertainArticles[active].map((article) => (
            <article key={article.title} className="group cursor-pointer">
              <div className="relative mb-3 h-36 overflow-hidden rounded-sm">
                <img
                  src={article.image}
                  alt={article.title}
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
                <span className="absolute left-2 top-2 rounded-full bg-brand-orange px-2 py-0.5 font-ui text-xs font-bold text-white">
                  {article.category}
                </span>
              </div>
              <h3 className="mb-1 font-body text-sm font-bold leading-tight text-text-dark group-hover:text-brand-pink">
                {article.title}
              </h3>
              <div className="flex items-center gap-2 font-ui text-xs text-text-light">
                <span>{article.author}</span>
                <span>·</span>
                <time>{article.date}</time>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
