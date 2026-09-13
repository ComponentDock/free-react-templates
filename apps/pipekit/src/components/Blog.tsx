import { Calendar } from 'lucide-react'

interface Post {
  id: number
  title: string
  excerpt: string
  date: string
  image: string
  author: string
}

const posts: Post[] = [
  {
    id: 1,
    title: 'The Future of Creative Design',
    excerpt:
      'Exploring emerging trends in design that will shape how brands communicate in the digital age.',
    date: 'Sep 10, 2026',
    image: 'https://picsum.photos/seed/pipekit-blog1/400/250',
    author: 'Alex Morgan',
  },
  {
    id: 2,
    title: 'Building Brands That Last',
    excerpt:
      'A deep dive into the principles of timeless brand identity and how to create lasting impressions.',
    date: 'Sep 5, 2026',
    image: 'https://picsum.photos/seed/pipekit-blog2/400/250',
    author: 'Jamie Lee',
  },
  {
    id: 3,
    title: 'Digital Strategy Essentials',
    excerpt:
      "Key strategies every business needs to succeed in today's competitive digital landscape.",
    date: 'Aug 28, 2026',
    image: 'https://picsum.photos/seed/pipekit-blog3/400/250',
    author: 'Taylor Reed',
  },
]

export function Blog() {
  return (
    <section id="blog" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section header */}
        <div className="mb-14 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-gold-500">
            Latest News
          </p>
          <h2 className="text-3xl font-bold text-navy-600 sm:text-4xl">From Our Blog</h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="group overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-xl"
            >
              <div className="overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <div className="mb-3 flex items-center gap-2 text-xs text-gray-400">
                  <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                  <time>{post.date}</time>
                  <span>&middot;</span>
                  <span>{post.author}</span>
                </div>
                <h3 className="mb-2 text-lg font-bold text-navy-600 transition-colors group-hover:text-gold-500">
                  {post.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-500">{post.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
