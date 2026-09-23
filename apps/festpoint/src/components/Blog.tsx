import { Calendar, ArrowRight } from 'lucide-react'

const posts = [
  {
    title: 'Why You Should Attend Developer Conference 2025',
    date: 'Nov 12, 2025',
    excerpt:
      "Discover the top reasons to join this year's conference, from world-class speakers to hands-on workshops.",
    image: 'https://picsum.photos/seed/festpoint-blog-1/400/250',
  },
  {
    title: 'Top 10 Sessions to Watch at Festpoint',
    date: 'Nov 8, 2025',
    excerpt: "A curated list of the most anticipated talks and panels at this year's event.",
    image: 'https://picsum.photos/seed/festpoint-blog-2/400/250',
  },
  {
    title: 'How to Make the Most of Conference Networking',
    date: 'Nov 4, 2025',
    excerpt: 'Tips and strategies for building meaningful connections at tech events.',
    image: 'https://picsum.photos/seed/festpoint-blog-3/400/250',
  },
]

export function Blog() {
  return (
    <section id="blog" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-fest-400">Blog</p>
          <h2 className="text-3xl font-bold text-gray-900">
            Latest <span className="text-fest-400">News</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.title}
              className="group overflow-hidden rounded-lg bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <div className="mb-3 flex items-center gap-2 text-xs text-gray-400">
                  <Calendar className="h-3.5 w-3.5" />
                  {post.date}
                </div>
                <h3 className="mb-2 text-lg font-semibold text-gray-900 group-hover:text-fest-400">
                  {post.title}
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-gray-500">{post.excerpt}</p>
                <a
                  href="#"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-fest-400 transition-colors hover:text-fest-600"
                >
                  Read More
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
