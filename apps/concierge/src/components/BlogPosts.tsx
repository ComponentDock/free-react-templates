import { useState } from 'react'
import { ChevronLeft, ChevronRight, Pencil } from 'lucide-react'
import { posts } from '../data'
import { pillOutline } from './buttonClasses'

const PER_VIEW = 3
const TOTAL = posts.length
const MAX_INDEX = TOTAL - PER_VIEW

/**
 * "Blog Posts" image-card carousel (reference: .sec-posts). Tiny-slider in
 * the source — recreated with client-side index state and Prev/Next pills.
 */
export function BlogPosts() {
  const [index, setIndex] = useState(0)

  const next = () => setIndex((i) => (i >= MAX_INDEX ? 0 : i + PER_VIEW))
  const prev = () => setIndex((i) => (i <= 0 ? MAX_INDEX : Math.max(0, i - PER_VIEW)))

  return (
    <section id="blog" aria-label="Blog posts" className="py-[7rem]">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 flex items-end justify-between">
          <h2 className="font-heading text-2xl font-bold uppercase tracking-wide text-brand">
            Blog Posts
          </h2>
          <div className="flex gap-2">
            <button
              type="button"
              aria-label="Previous posts"
              onClick={prev}
              className={pillOutline}
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <button type="button" aria-label="Next posts" onClick={next} className={pillOutline}>
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="overflow-hidden">
          <div
            data-posts-track
            className="flex transition-transform duration-500"
            style={{
              width: `${(TOTAL / PER_VIEW) * 100}%`,
              transform: `translateX(${-(index / TOTAL) * 100}%)`,
            }}
          >
            {posts.map((post) => (
              <article
                key={post.title}
                aria-label={`Post: ${post.title}`}
                className="shrink-0 px-3"
                style={{ width: `${100 / TOTAL}%` }}
              >
                <a href="#blog" className="block overflow-hidden rounded-md">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="aspect-[3/2] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </a>
                <div className="pt-5">
                  <Pencil className="mb-3 h-5 w-5 text-brand" aria-hidden="true" />
                  <h3 className="mb-3 text-lg font-bold leading-snug text-ink">
                    <a href="#blog" className="transition-colors hover:text-brand">
                      {post.title}
                    </a>
                  </h3>
                  <a
                    href="#blog"
                    className="text-xs font-bold uppercase tracking-[0.1em] text-muted transition-colors hover:text-ink"
                  >
                    Read More
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
