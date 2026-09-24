import { Calendar } from 'lucide-react'
import { blogTitle, blogPosts } from '../data'

export function Blog() {
  return (
    <section id="blog" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <h2 className="text-center font-heading text-3xl font-bold text-heading sm:text-4xl">
          {blogTitle}
        </h2>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article
              key={post.title}
              className="overflow-hidden rounded-lg border border-card-border bg-white transition-shadow hover:shadow-lg"
            >
              <img
                src={`https://picsum.photos/seed/${post.imageSeed}/400/250`}
                alt={post.title}
                loading="lazy"
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <div className="flex items-center gap-2 text-xs text-muted">
                  <span className="rounded bg-brand/10 px-2 py-0.5 font-medium text-brand">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar aria-hidden="true" className="h-3 w-3" />
                    {post.date}
                  </span>
                </div>
                <h3 className="mt-3 font-heading text-lg font-semibold text-heading">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted">{post.excerpt}</p>
                <a
                  href="#"
                  className="mt-4 inline-block text-sm font-medium text-brand transition-colors hover:text-brand-hover"
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
