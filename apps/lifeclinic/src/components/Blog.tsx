import { blogTitle, blogPosts, blogCommentsLabel } from '../data'

export function Blog() {
  return (
    <section id="news" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <h2 className="mb-12 text-center text-3xl font-bold text-heading">{blogTitle}</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {blogPosts.map((post) => (
            <article
              key={post.title}
              className="overflow-hidden rounded-lg border border-card-border bg-white transition-shadow hover:shadow-lg"
            >
              <div className="relative">
                <img
                  src={`https://picsum.photos/seed/${post.imageSeed}/400/250`}
                  alt={post.title}
                  loading="lazy"
                  className="h-52 w-full object-cover"
                />
                <span className="absolute bottom-3 left-3 rounded bg-brand px-3 py-1 text-xs font-bold text-white">
                  {post.date}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-heading">{post.title}</h3>
                <p className="mt-2 text-sm text-muted">{post.excerpt}</p>
                <a
                  href="#"
                  className="mt-4 inline-block text-sm font-bold text-brand transition-colors hover:text-brand-hover"
                >
                  {blogCommentsLabel}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
