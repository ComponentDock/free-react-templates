import { Heart, MessageCircle } from 'lucide-react'
import { POSTS } from '../content'
import { SectionHead } from './SectionHead'

/**
 * Five posts in a true CSS masonry (`columns-*`, not a grid — the cards have
 * unequal heights). Posts 2 and 4 carry no type badge; that asymmetry is in the
 * reference.
 */
export function Feed() {
  return (
    <section id="feed" aria-label="Your feed" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHead
          pill="Your feed"
          tone="accent"
          title="Everything, in the order it happened"
          lede="No ranking, no suggested posts, no accounts you did not choose. When you reach the end, it says so and stops."
        />

        <div className="mx-auto mt-12 max-w-5xl columns-1 gap-5 sm:columns-2 [&>*]:mb-5 [&>*]:break-inside-avoid">
          {POSTS.map((post) => (
            <article
              key={`${post.author}-${post.time}`}
              className="rounded-3xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary-400 to-accent-500 text-xs font-bold text-white">
                  {post.initials}
                </span>
                <div className="min-w-0 flex-1">
                  <div className="truncate text-sm font-bold">{post.author}</div>
                  <div className="truncate text-xs text-gray-500">
                    in <span className="font-semibold text-primary-600">{post.circle}</span> ·{' '}
                    {post.time}
                  </div>
                </div>
                {post.badge !== undefined && (
                  <span className="rounded-full bg-gray-100 px-2.5 py-0.5 text-[10px] font-bold tracking-wide text-gray-600 uppercase">
                    {post.badge}
                  </span>
                )}
              </div>

              <p className="mt-4 text-sm leading-relaxed text-gray-700">{post.body}</p>

              {post.image !== undefined && (
                <img
                  src={post.image}
                  alt=""
                  loading="lazy"
                  className="mt-4 aspect-[4/3] w-full rounded-2xl object-cover"
                />
              )}

              <div className="mt-4 flex items-center gap-5 border-t border-gray-100 pt-3 text-sm text-gray-500">
                <span className="inline-flex items-center gap-1.5">
                  <Heart aria-hidden="true" className="h-4 w-4 text-accent-500" />
                  <span className="font-semibold tabular-nums">{post.hearts}</span>
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <MessageCircle aria-hidden="true" className="h-4 w-4" />
                  <span className="font-semibold tabular-nums">{post.comments}</span>
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
