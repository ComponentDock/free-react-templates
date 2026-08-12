import { posts } from '../data'

export function LatestBlog() {
  return (
    <section id="blog" className="bg-lavender-50 py-30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-[75px] max-w-[720px] text-center">
          <h2 className="font-display text-4xl font-bold text-ink-900">Latest Posts from Blog</h2>
          <p className="mt-4 text-sm leading-6 text-ink-600">
            Ideas, guides, and updates from the Vantage team — written for business owners who want
            to stay sharp.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.title} className="bg-white">
              <img src={post.image} alt="" className="w-full object-cover" />
              <div className="border border-t-0 border-line-100 px-7.5 py-8">
                <p className="text-xs text-ink-600">
                  {post.date} | By {post.author}
                </p>
                <h3 className="mt-4 border-b border-line-100 pb-5 text-lg font-medium text-ink-900 transition-colors hover:text-brand-400">
                  {post.title}
                </h3>
                <p className="mt-4 text-sm leading-6 text-ink-600">{post.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
