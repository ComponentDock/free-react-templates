import { ChevronRight, MessageCircle } from 'lucide-react'

const posts = [
  { image: 'rently-blog-1' },
  { image: 'rently-blog-2' },
  { image: 'rently-blog-3' },
] as const

export function Blog() {
  return (
    <section id="blog" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-brand">Blog</span>
          <h2 className="mt-2 font-display text-3xl font-extrabold text-ink sm:text-4xl">
            Recent Blog
          </h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.image}
              className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <div
                className="h-48 bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://picsum.photos/seed/${post.image}/600/400')`,
                }}
                aria-hidden="true"
              />
              <div className="p-6">
                <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-wide text-mist">
                  <a href="#blog" className="text-brand transition-colors hover:text-brand-dark">
                    July. 24, 2019
                  </a>
                  <span>Admin</span>
                  <span className="inline-flex items-center gap-1">
                    <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" /> 3
                  </span>
                </div>
                <h3 className="mt-4 font-display text-lg font-bold leading-snug text-ink">
                  <a href="#blog" className="transition-colors hover:text-brand">
                    Why Lead Generation is Key for Business Growth
                  </a>
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-mist">
                  A small river named Duden flows by their place and supplies it with the necessary
                  regelialia.
                </p>
                <a
                  href="#blog"
                  className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-brand transition-colors hover:text-brand-dark"
                >
                  Read more <ChevronRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
