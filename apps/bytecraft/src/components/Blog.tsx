import { ArrowRight } from 'lucide-react'

const posts = [
  {
    title: 'The Future of Digital Design',
    excerpt:
      'Exploring emerging trends in digital design and how they shape the way we interact with technology.',
    author: 'Alex Morgan',
    date: 'Sep 10, 2026',
    seed: 'bytecraft-blog-1',
  },
  {
    title: 'Building Scalable Web Applications',
    excerpt:
      'A deep dive into architecture patterns that help your applications grow with your business.',
    author: 'Sarah Chen',
    date: 'Sep 8, 2026',
    seed: 'bytecraft-blog-2',
  },
  {
    title: 'Brand Identity in the Digital Age',
    excerpt:
      'How to create a cohesive brand identity that resonates across all digital touchpoints.',
    author: 'Elena Voss',
    date: 'Sep 5, 2026',
    seed: 'bytecraft-blog-3',
  },
  {
    title: 'UX Principles Every Developer Should Know',
    excerpt:
      'Essential user experience principles that bridge the gap between design and development.',
    author: 'Marcus Reid',
    date: 'Sep 2, 2026',
    seed: 'bytecraft-blog-4',
  },
]

export function Blog() {
  return (
    <section id="blog" className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-dark">Latest From Blog</h2>
        <div className="grid gap-8 md:grid-cols-4">
          {posts.map((post) => (
            <article key={post.title} className="overflow-hidden rounded-lg border border-gray-100">
              <img
                src={`https://picsum.photos/seed/${post.seed}/400/250`}
                alt={post.title}
                className="h-40 w-full object-cover"
                loading="lazy"
              />
              <div className="p-5">
                <div className="mb-2 flex items-center gap-2 text-xs text-text-muted">
                  <span>{post.date}</span>
                  <span>&middot;</span>
                  <span>{post.author}</span>
                </div>
                <h3 className="mb-2 text-sm font-semibold text-dark">{post.title}</h3>
                <p className="mb-3 text-xs leading-relaxed text-text-muted">{post.excerpt}</p>
                <a
                  href="#"
                  className="inline-flex items-center gap-1 text-xs font-medium text-brand transition hover:text-brand-dark"
                >
                  Details <ArrowRight size={12} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
