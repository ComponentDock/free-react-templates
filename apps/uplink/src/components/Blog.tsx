import { Eye, MessageCircle, Share2 } from 'lucide-react'
import { posts } from '../data'

/** Three text-only blog cards with date badges and meta links. */
export function Blog() {
  return (
    <section id="blog" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-medium text-ink-900">Latest Posts from Our Blog</h2>
          <p className="mt-4 text-sm leading-6 text-mute-500">
            Guides, benchmarks, and industry news from the Uplink engineering team.
          </p>
        </div>
        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.title}
              className="rounded-[10px] border border-line-200 p-8 transition-all duration-300 hover:border-transparent hover:shadow-[0px_10px_30px_0px_rgba(98,71,234,0.1)]"
            >
              <span className="inline-block bg-accent-500 leading-[30px] px-5 text-xs font-light text-white uppercase">
                {post.date}
              </span>
              <h3 className="mt-6 text-xl font-medium text-ink-900 transition-colors hover:text-primary-500">
                {post.title}
              </h3>
              <p className="mt-4 text-sm leading-6 text-mute-500">{post.excerpt}</p>
              <div className="mt-6 flex items-center gap-6 text-sm text-mute-400">
                <span className="flex items-center gap-2">
                  <Eye className="h-4 w-4" aria-hidden="true" />
                  2.5k Views
                </span>
                <span className="flex items-center gap-2">
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  03 Comments
                </span>
                <span className="flex items-center gap-2">
                  <Share2 className="h-4 w-4" aria-hidden="true" />
                  06 Shares
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
