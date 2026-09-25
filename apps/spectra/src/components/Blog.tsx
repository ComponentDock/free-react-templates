import { Calendar, User } from 'lucide-react'

const POSTS = [
  {
    title: 'Building Modern Web Applications',
    date: 'Sep 20, 2026',
    author: 'Alex',
    image: 'spectra-blog-1',
  },
  {
    title: 'The Future of Web Development',
    date: 'Sep 15, 2026',
    author: 'Alex',
    image: 'spectra-blog-2',
  },
  {
    title: 'Design Tips for Developers',
    date: 'Sep 10, 2026',
    author: 'Alex',
    image: 'spectra-blog-3',
  },
]

export function Blog() {
  return (
    <section id="blog" className="bg-light py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <span className="mb-2 block text-sm font-medium uppercase tracking-[3px] text-brand">
            Blog
          </span>
          <h2 className="mb-4 text-[40px] font-semibold text-dark">Latest Blog</h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {POSTS.map((post) => (
            <article
              key={post.title}
              className="overflow-hidden rounded-lg bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <img
                src={`https://picsum.photos/seed/${post.image}/400/250`}
                alt={post.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <div className="mb-3 flex items-center gap-4 text-xs text-text-light">
                  <span className="flex items-center gap-1">
                    <Calendar size={12} />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <User size={12} />
                    {post.author}
                  </span>
                </div>
                <h3 className="mb-2 text-lg font-semibold text-dark">{post.title}</h3>
                <a
                  href="#blog"
                  className="text-sm font-medium text-brand transition-colors hover:text-brand-dark"
                >
                  Read more
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
