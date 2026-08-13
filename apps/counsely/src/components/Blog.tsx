import { blogPosts } from '../data'

/** Light "Recent Blog" section: three post cards, each with a cover image,
 *  a gold date topper, a title, a snippet, and a Read more button. */
export function Blog() {
  return (
    <section id="blog" aria-label="Blog" className="bg-mist py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-[15px] font-extrabold uppercase tracking-wide text-brand">
            {blogPosts.eyebrow}
          </p>
          <h2 className="mt-4 text-[30px] font-bold text-ink">{blogPosts.headline}</h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {blogPosts.posts.map((post) => (
            <article key={post.title} className="overflow-hidden rounded bg-white shadow-sm">
              <div className="h-[270px] overflow-hidden">
                <img
                  src={post.image}
                  alt=""
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="relative p-4">
                <div className="absolute left-5 top-0 flex -translate-y-full bg-brand text-white">
                  <span className="py-2 pl-3 pr-1 text-lg font-bold">{post.day}</span>
                  <span className="py-2 pl-0 pr-3 text-xs font-medium leading-6">
                    {post.year} {post.month}
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-medium text-ink transition-colors hover:text-brand">
                  <a href="#blog">{post.title}</a>
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-body">{post.excerpt}</p>
                <a
                  href="#blog"
                  className="mt-4 inline-block text-sm font-medium text-brand hover:text-brand/80"
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
