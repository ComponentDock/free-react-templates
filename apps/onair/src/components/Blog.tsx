import { Eye, MessageCircle } from 'lucide-react'
import { blogPosts, trendingPosts } from '../data'

export function Blog() {
  const featured = blogPosts.find((p) => p.featured)
  const smallPosts = blogPosts.filter((p) => !p.featured)

  return (
    <section id="blog" className="py-16">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-3">
          {/* Left column — Blog posts */}
          <div className="lg:col-span-2">
            <h2 className="mb-8 text-3xl font-bold uppercase">Blog New</h2>

            {/* Featured post */}
            {featured && (
              <div
                className="relative mb-8 h-72 overflow-hidden rounded bg-cover bg-center"
                style={{ backgroundImage: `url(${featured.image})` }}
              >
                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute bottom-0 left-0 p-6">
                  <div className="mb-3 flex gap-4 text-sm text-white/70">
                    <span className="flex items-center gap-1">
                      <MessageCircle className="h-4 w-4" /> {featured.comments}
                    </span>
                    <span className="flex items-center gap-1">
                      <Eye className="h-4 w-4" /> {featured.views}
                    </span>
                  </div>
                  <a
                    href="#blog"
                    className="text-lg font-semibold text-white transition-colors hover:text-brand"
                  >
                    {featured.title}
                  </a>
                </div>
              </div>
            )}

            {/* Small posts grid */}
            <div className="grid gap-6 sm:grid-cols-2">
              {smallPosts.map((post) => (
                <div key={post.id} className="flex gap-4">
                  <img
                    src={post.image}
                    alt=""
                    className="h-20 w-20 flex-shrink-0 rounded object-cover"
                    loading="lazy"
                  />
                  <div>
                    <div className="mb-2 flex gap-3 text-xs text-secondary">
                      <span className="flex items-center gap-1">
                        <MessageCircle className="h-3 w-3" /> {post.comments}
                      </span>
                      <span className="flex items-center gap-1">
                        <Eye className="h-3 w-3" /> {post.views}
                      </span>
                    </div>
                    <a
                      href="#blog"
                      className="text-sm font-medium text-heading transition-colors hover:text-brand"
                    >
                      {post.title}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column — Trending */}
          <div>
            <h2 className="mb-8 text-3xl font-bold uppercase">Trending</h2>
            <div className="space-y-6">
              {trendingPosts.map((post) => (
                <div key={post.id} className="flex gap-4">
                  <img
                    src={post.image}
                    alt=""
                    className="h-20 w-20 flex-shrink-0 rounded object-cover"
                    loading="lazy"
                  />
                  <div>
                    <div className="mb-2 flex gap-3 text-xs text-secondary">
                      <span className="flex items-center gap-1">
                        <MessageCircle className="h-3 w-3" /> {post.comments}
                      </span>
                      <span className="flex items-center gap-1">
                        <Eye className="h-3 w-3" /> {post.views}
                      </span>
                    </div>
                    <a
                      href="#blog"
                      className="text-sm font-medium text-heading transition-colors hover:text-brand"
                    >
                      {post.title}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
