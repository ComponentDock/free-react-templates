import { Calendar } from 'lucide-react'

interface BlogPost {
  id: number
  title: string
  date: string
  excerpt: string
  image: string
}

const POSTS: BlogPost[] = [
  {
    id: 1,
    title: 'Why Location is Key When Buying Property',
    date: 'Sep 20, 2026',
    excerpt:
      'Discover how choosing the right location can make or break your real estate investment.',
    image: 'https://picsum.photos/seed/fern-blog1/600/400',
  },
  {
    id: 2,
    title: 'First-Time Buyer Guide: What to Expect',
    date: 'Sep 15, 2026',
    excerpt: 'A comprehensive guide for first-time buyers navigating the property market.',
    image: 'https://picsum.photos/seed/fern-blog2/600/400',
  },
  {
    id: 3,
    title: 'Top 5 Home Staging Tips for Sellers',
    date: 'Sep 10, 2026',
    excerpt: 'Simple staging tips that can help you sell your home faster and at a better price.',
    image: 'https://picsum.photos/seed/fern-blog3/600/400',
  },
]

export function Blog() {
  return (
    <section className="bg-paper py-16">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-4 text-center text-3xl font-bold text-ink">Recent Blog</h2>
        <p className="mb-12 text-center text-mist">
          Insights and tips from our real estate experts
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {POSTS.map((post) => (
            <article
              key={post.id}
              className="overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-lg"
            >
              <img src={post.image} alt={post.title} className="h-48 w-full object-cover" />
              <div className="p-5">
                <p className="mb-2 flex items-center gap-1 text-xs text-mist">
                  <Calendar size={12} />
                  {post.date}
                </p>
                <h3 className="mb-2 text-lg font-bold text-ink">{post.title}</h3>
                <p className="mb-3 text-sm text-mist">{post.excerpt}</p>
                <a
                  href="#"
                  className="text-sm font-semibold text-brand transition-colors hover:text-brand-dark"
                >
                  Read More
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
