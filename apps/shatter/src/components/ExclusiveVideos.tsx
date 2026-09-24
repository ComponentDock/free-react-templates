import { ChevronLeft, ChevronRight } from 'lucide-react'
import { PostCard } from './PostCard'

const videoPosts = [
  {
    image: 'https://picsum.photos/seed/shatter-vid1/800/500',
    category: 'Documentary',
    date: 'Nov 18, 2026',
    headline: "Inside the World's Most Advanced Research Lab",
    commentCount: 18,
  },
  {
    image: 'https://picsum.photos/seed/shatter-vid2/800/500',
    category: 'Interview',
    date: 'Nov 17, 2026',
    headline: 'CEO Roundtable: The Future of AI',
    commentCount: 42,
  },
  {
    image: 'https://picsum.photos/seed/shatter-vid3/800/500',
    category: 'Report',
    date: 'Nov 16, 2026',
    headline: 'Climate Change Impact on Coastal Cities',
    commentCount: 27,
  },
]

export function ExclusiveVideos() {
  return (
    <section className="bg-paper py-10" aria-labelledby="videos-heading">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 id="videos-heading" className="mb-6 font-display text-2xl font-bold text-ink">
          Exclusive Videos
        </h2>
        <div className="relative">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {videoPosts.map((post) => (
              <PostCard key={post.headline} {...post} variant="large" showPlayButton />
            ))}
          </div>
          {/* Carousel arrows */}
          <button
            className="absolute -left-4 top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-dark/80 text-white transition-colors hover:bg-dark sm:flex"
            aria-label="Previous videos"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            className="absolute -right-4 top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-dark/80 text-white transition-colors hover:bg-dark sm:flex"
            aria-label="Next videos"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
