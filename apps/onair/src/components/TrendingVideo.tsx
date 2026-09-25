import { Eye, MessageCircle, Play } from 'lucide-react'
import { videoPosts } from '../data'

export function TrendingVideo() {
  return (
    <section id="shows" className="py-16">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <h2 className="mb-10 text-center text-3xl font-bold uppercase">Trending Video</h2>

        {/* Featured video */}
        <div className="mb-10 aspect-video overflow-hidden rounded-lg bg-heading">
          <div className="flex h-full items-center justify-center">
            <Play className="h-16 w-16 text-white/40" />
          </div>
        </div>

        {/* Video grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {videoPosts.map((post) => (
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
                  href="#shows"
                  className="text-sm font-medium text-heading transition-colors hover:text-brand"
                >
                  {post.title}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
