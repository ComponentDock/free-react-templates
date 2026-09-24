import { ChevronLeft, ChevronRight } from 'lucide-react'
import { PostCard } from './PostCard'

const leftPosts = [
  {
    image: 'https://picsum.photos/seed/shatter-l1/400/300',
    category: 'Lifestyle',
    date: 'Nov 18, 2026',
    headline: 'The Future of Urban Living Spaces',
    excerpt: 'How architects are reimagining city dwellings for the next generation.',
    commentCount: 12,
  },
  {
    image: 'https://picsum.photos/seed/shatter-l2/400/300',
    category: 'Health',
    date: 'Nov 17, 2026',
    headline: 'Mental Wellness in the Digital Age',
    excerpt: 'New studies reveal the impact of screen time on mental health.',
    commentCount: 8,
  },
  {
    image: 'https://picsum.photos/seed/shatter-l3/400/300',
    category: 'Science',
    date: 'Nov 16, 2026',
    headline: 'Breakthrough in Renewable Energy',
    excerpt: 'Scientists achieve record efficiency in solar cell technology.',
    commentCount: 24,
  },
]

const featuredPost = {
  image: 'https://picsum.photos/seed/shatter-featured/1200/700',
  category: 'Breaking',
  date: 'Nov 18, 2026',
  headline: 'Global Markets Rally as Trade Agreements Progress',
  excerpt:
    'Major stock indices surged worldwide following the announcement of new bilateral trade deals between leading economies, signaling optimism for the global supply chain.',
  commentCount: 47,
}

const playlistItems = ['Morning Headlines Recap', 'Tech Talk Weekly', 'Evening News Digest']

export function BannerArea() {
  return (
    <section className="relative" aria-label="Featured stories banner">
      <div className="mx-auto max-w-7xl px-4 py-6 lg:px-8">
        <div className="grid gap-4 lg:grid-cols-12">
          {/* Left column — 3 stacked small cards */}
          <div className="flex flex-col gap-4 lg:col-span-3">
            {leftPosts.map((post) => (
              <PostCard key={post.headline} {...post} variant="stacked" />
            ))}
          </div>

          {/* Center — large featured carousel */}
          <div className="relative lg:col-span-6">
            <PostCard {...featuredPost} variant="large" />
            {/* Carousel arrows */}
            <button
              className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-dark/80 text-white transition-colors hover:bg-dark"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-dark/80 text-white transition-colors hover:bg-dark"
              aria-label="Next slide"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          {/* Right sidebar — widgets */}
          <div className="flex flex-col gap-4 lg:col-span-3">
            {/* Weather widget */}
            <div className="rounded-sm bg-dark-card p-5 text-white">
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white/70">
                Weather
              </h3>
              <div className="text-center">
                <p className="text-sm text-white/80">United States</p>
                <p className="text-xs text-white/60">Nov 18, 2026</p>
                <p className="my-2 text-4xl font-bold">28°C</p>
                <p className="text-sm text-white/80">Partly Cloudy</p>
              </div>
            </div>

            {/* Music playlist widget */}
            <div className="rounded-sm bg-dark-card p-5 text-white">
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white/70">
                Playlist
              </h3>
              <ol className="space-y-2">
                {playlistItems.map((item, i) => (
                  <li key={item} className="flex items-center gap-3 text-sm">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center bg-brand text-xs font-bold text-white">
                      {i + 1}
                    </span>
                    <span className="text-white/80">{item}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
