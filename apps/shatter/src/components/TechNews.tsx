import { PostCard } from './PostCard'

const techPosts = [
  {
    image: 'https://picsum.photos/seed/shatter-tech1/400/300',
    category: 'Technology',
    date: 'Nov 18, 2026',
    headline: 'Quantum Computing Reaches New Milestone',
    commentCount: 15,
  },
  {
    image: 'https://picsum.photos/seed/shatter-tech2/400/300',
    category: 'Gadgets',
    date: 'Nov 17, 2026',
    headline: 'Next-Gen Wearables Redefine Health Tracking',
    commentCount: 22,
    showPlayButton: true,
  },
  {
    image: 'https://picsum.photos/seed/shatter-tech3/400/300',
    category: 'Software',
    date: 'Nov 16, 2026',
    headline: 'Open Source AI Models Challenge Big Tech',
    commentCount: 31,
  },
  {
    image: 'https://picsum.photos/seed/shatter-tech4/400/300',
    category: 'Science',
    date: 'Nov 15, 2026',
    headline: 'Space Tech Startups Secure Record Funding',
    commentCount: 9,
    showPlayButton: true,
  },
]

export function TechNews() {
  return (
    <section className="bg-paper py-10" aria-labelledby="tech-heading">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 id="tech-heading" className="mb-6 font-display text-2xl font-bold text-ink">
          Technology News
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {techPosts.map((post) => (
            <PostCard key={post.headline} {...post} variant="stacked" />
          ))}
        </div>
      </div>
    </section>
  )
}
