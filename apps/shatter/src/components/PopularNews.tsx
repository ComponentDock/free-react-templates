import { PostCard } from './PostCard'

const popularPosts = [
  {
    image: 'https://picsum.photos/seed/shatter-pop1/400/300',
    category: 'Trending',
    date: 'Nov 18, 2026',
    headline: 'Top 10 Destinations for Winter Travel',
    commentCount: 36,
  },
  {
    image: 'https://picsum.photos/seed/shatter-pop2/400/300',
    category: 'Food',
    date: 'Nov 17, 2026',
    headline: "Sustainable Dining: A Chef's Perspective",
    commentCount: 14,
  },
  {
    image: 'https://picsum.photos/seed/shatter-pop3/400/300',
    category: 'Sports',
    date: 'Nov 16, 2026',
    headline: 'Championship Season Preview: Key Matchups',
    commentCount: 29,
  },
  {
    image: 'https://picsum.photos/seed/shatter-pop4/400/300',
    category: 'Opinion',
    date: 'Nov 15, 2026',
    headline: 'The Changing Landscape of Remote Work',
    commentCount: 21,
  },
]

export function PopularNews() {
  return (
    <section className="bg-paper py-10" aria-labelledby="popular-heading">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 id="popular-heading" className="mb-6 font-display text-2xl font-bold text-ink">
          Popular News Feed
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {popularPosts.map((post) => (
            <PostCard key={post.headline} {...post} variant="stacked" />
          ))}
        </div>
      </div>
    </section>
  )
}
