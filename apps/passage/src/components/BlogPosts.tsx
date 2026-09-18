import { Calendar } from 'lucide-react'

const posts = [
  {
    title: 'New Express Entry Draw Announced for Canada',
    image: 'https://picsum.photos/seed/passage-blog1/600/400',
    date: 'September 10, 2026',
    excerpt:
      'The latest Express Entry draw has been announced with a minimum CRS score. Learn what this means for your immigration plans.',
    link: '#',
  },
  {
    title: 'Australia Updates Skilled Migration Program',
    image: 'https://picsum.photos/seed/passage-blog2/600/400',
    date: 'September 5, 2026',
    excerpt:
      'Australia has made significant changes to its skilled migration program. Find out how these updates affect prospective migrants.',
    link: '#',
  },
]

export function BlogPosts() {
  return (
    <section id="blog" className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <span className="mb-2 block text-sm font-bold uppercase tracking-wider text-brand">
            Latest News
          </span>
          <h2 className="text-3xl font-bold text-heading sm:text-4xl">From Our Blog</h2>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {posts.map((post) => (
            <article
              key={post.title}
              className="group overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-xl"
            >
              <div className="overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <div className="mb-3 flex items-center gap-2 text-sm text-muted">
                  <Calendar className="h-4 w-4" />
                  {post.date}
                </div>
                <h3 className="mb-2 text-xl font-bold text-heading">{post.title}</h3>
                <p className="mb-4 text-sm text-muted">{post.excerpt}</p>
                <a
                  href={post.link}
                  className="text-sm font-semibold text-brand transition-colors hover:text-brand-dark"
                >
                  Read More →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
