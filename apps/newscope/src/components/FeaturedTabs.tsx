import { useState } from 'react'
import { cn } from '@free-react-templates/ui'

const tabs = ['All', 'Entertainment', 'Fashion', 'Life Style', 'Technology', 'Travel'] as const

type TabKey = (typeof tabs)[number]

const articles: Record<
  TabKey,
  Array<{ title: string; category: string; date: string; image: string; color: string }>
> = {
  All: [
    {
      title: 'Top Fashion Trends Dominating 2026',
      category: 'Fashion',
      date: 'Sep 12, 2026',
      image: 'https://picsum.photos/seed/ns-tab1/400/250',
      color: 'bg-brand-pink',
    },
    {
      title: 'Tech Giants Announce New AI Platform',
      category: 'Technology',
      date: 'Sep 11, 2026',
      image: 'https://picsum.photos/seed/ns-tab2/400/250',
      color: 'bg-brand-teal',
    },
    {
      title: 'Best Travel Destinations This Fall',
      category: 'Travel',
      date: 'Sep 10, 2026',
      image: 'https://picsum.photos/seed/ns-tab3/400/250',
      color: 'bg-brand-green',
    },
    {
      title: 'Celebrity Style Guide: Red Carpet Looks',
      category: 'Entertainment',
      date: 'Sep 9, 2026',
      image: 'https://picsum.photos/seed/ns-tab4/400/250',
      color: 'bg-brand-orange',
    },
    {
      title: 'Home Decor Ideas for Modern Living',
      category: 'Life Style',
      date: 'Sep 8, 2026',
      image: 'https://picsum.photos/seed/ns-tab5/400/250',
      color: 'bg-brand-pink',
    },
    {
      title: 'Gaming Industry Reaches New Heights',
      category: 'Technology',
      date: 'Sep 7, 2026',
      image: 'https://picsum.photos/seed/ns-tab6/400/250',
      color: 'bg-brand-teal',
    },
  ],
  Entertainment: [
    {
      title: 'Summer Blockbuster Roundup',
      category: 'Entertainment',
      date: 'Sep 10, 2026',
      image: 'https://picsum.photos/seed/ns-ent1/400/250',
      color: 'bg-brand-orange',
    },
    {
      title: 'Music Festival Guide 2026',
      category: 'Entertainment',
      date: 'Sep 9, 2026',
      image: 'https://picsum.photos/seed/ns-ent2/400/250',
      color: 'bg-brand-orange',
    },
    {
      title: 'New Streaming Shows to Watch',
      category: 'Entertainment',
      date: 'Sep 8, 2026',
      image: 'https://picsum.photos/seed/ns-ent3/400/250',
      color: 'bg-brand-orange',
    },
  ],
  Fashion: [
    {
      title: 'Sustainable Fashion Brands to Know',
      category: 'Fashion',
      date: 'Sep 11, 2026',
      image: 'https://picsum.photos/seed/ns-fash1/400/250',
      color: 'bg-brand-pink',
    },
    {
      title: 'Autumn Color Palette Trends',
      category: 'Fashion',
      date: 'Sep 10, 2026',
      image: 'https://picsum.photos/seed/ns-fash2/400/250',
      color: 'bg-brand-pink',
    },
  ],
  'Life Style': [
    {
      title: 'Morning Routines for Productivity',
      category: 'Life Style',
      date: 'Sep 12, 2026',
      image: 'https://picsum.photos/seed/ns-life1/400/250',
      color: 'bg-brand-green',
    },
    {
      title: 'Healthy Meal Prep Ideas',
      category: 'Life Style',
      date: 'Sep 11, 2026',
      image: 'https://picsum.photos/seed/ns-life2/400/250',
      color: 'bg-brand-green',
    },
  ],
  Technology: [
    {
      title: 'AI Tools Every Professional Needs',
      category: 'Technology',
      date: 'Sep 12, 2026',
      image: 'https://picsum.photos/seed/ns-tech1/400/250',
      color: 'bg-brand-teal',
    },
    {
      title: 'Smart Home Setup Guide',
      category: 'Technology',
      date: 'Sep 10, 2026',
      image: 'https://picsum.photos/seed/ns-tech2/400/250',
      color: 'bg-brand-teal',
    },
  ],
  Travel: [
    {
      title: 'Hidden Gems in Southeast Asia',
      category: 'Travel',
      date: 'Sep 11, 2026',
      image: 'https://picsum.photos/seed/ns-trav1/400/250',
      color: 'bg-brand-green',
    },
    {
      title: 'Budget-Friendly European Trips',
      category: 'Travel',
      date: 'Sep 9, 2026',
      image: 'https://picsum.photos/seed/ns-trav2/400/250',
      color: 'bg-brand-green',
    },
  ],
}

export function FeaturedTabs() {
  const [active, setActive] = useState<TabKey>('All')

  return (
    <section className="bg-white py-10">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-6 font-body text-2xl font-bold text-text-dark">Featured News</h2>
        <div className="mb-6 flex flex-wrap gap-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={cn(
                'rounded-full px-4 py-1.5 font-body text-sm font-medium transition-colors',
                active === tab
                  ? 'bg-text-dark text-white'
                  : 'bg-gray-100 text-text-muted hover:bg-gray-200',
              )}
              aria-selected={active === tab}
              role="tab"
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3" role="tabpanel">
          {articles[active].map((article) => (
            <article key={article.title} className="group cursor-pointer">
              <div className="relative mb-3 h-48 overflow-hidden rounded-sm">
                <img
                  src={article.image}
                  alt={article.title}
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
                <span
                  className={cn(
                    'absolute left-3 top-3 rounded-full px-3 py-0.5 font-ui text-xs font-bold text-white',
                    article.color,
                  )}
                >
                  {article.category}
                </span>
              </div>
              <h3 className="mb-1 font-body text-base font-bold leading-tight text-text-dark group-hover:text-brand-pink">
                {article.title}
              </h3>
              <time className="font-ui text-xs text-text-light">{article.date}</time>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
