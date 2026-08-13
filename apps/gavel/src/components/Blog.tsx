import { blogPosts } from '../data'

/** Light-background blog section with three cards; each card carries a
 *  sage-green date chip (day + month/year) with a triangle notch overlapping
 *  the image. */
export function Blog() {
  return (
    <section id="blog" aria-label="Blog" className="bg-mist py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">Our Blog</p>
          <h2 className="mt-4 text-4xl font-bold text-gray-900">Recent Blog</h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article
              key={post.title}
              className="overflow-hidden rounded bg-white shadow-[0px_5px_21px_-14px_rgba(0,0,0,0.14)]"
            >
              <div className="relative">
                <img src={post.image} alt="" className="h-56 w-full object-cover" />
                <div className="absolute left-4 top-4">
                  <div className="relative bg-brand px-3 py-2 text-center text-white">
                    <span className="block text-lg font-bold leading-none">{post.day}</span>
                    <span className="block text-[11px] font-medium leading-tight">
                      {post.month}
                    </span>
                    <span
                      aria-hidden="true"
                      className="absolute -bottom-[6px] left-3 h-0 w-0 border-l-[6px] border-r-[6px] border-t-[6px] border-l-transparent border-r-transparent border-t-brand"
                    />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">{post.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-body">{post.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
