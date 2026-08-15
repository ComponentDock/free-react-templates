import { BLOG_POSTS } from '../data'

/* Blog — light #f8faff band with a centered heading + subtitle and three
   blog entries (image, date / author / comment count meta, title,
   excerpt). */
export function Blog() {
  return (
    <section id="blog" aria-label="Blog" className="bg-paper py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold text-ink md:text-4xl">Blog</h2>
          <p className="mt-4 text-base leading-relaxed text-muted">Recent Blog</p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {BLOG_POSTS.map((post) => (
            <article key={post.title} className="overflow-hidden rounded-sm bg-white shadow-sm">
              <img src={post.image} alt="" className="h-52 w-full object-cover" loading="lazy" />
              <div className="p-6">
                <p className="text-xs uppercase tracking-wider text-muted">
                  {post.date} · {post.author} · {post.comments} comments
                </p>
                <h3 className="mt-3 text-lg font-semibold leading-snug text-ink">{post.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{post.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
