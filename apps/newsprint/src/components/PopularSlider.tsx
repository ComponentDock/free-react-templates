import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { PostMeta } from './PostMeta'
import { SectionHeading } from './SectionHeading'
import { imgUrl, popularPosts } from '../data'

const pageSize = 2

export function PopularSlider() {
  const [page, setPage] = useState(0)
  const pageCount = Math.ceil(popularPosts.length / pageSize)
  const start = page * pageSize
  const visible = popularPosts.slice(start, start + pageSize)

  return (
    <section aria-labelledby="popular-heading" className="mx-auto max-w-6xl px-4 py-12 lg:px-6">
      <div className="flex items-end justify-between gap-4">
        <SectionHeading title="Most Popular Posts" className="mb-0" />
        <div className="flex gap-2" aria-label="Most popular navigation">
          <button
            type="button"
            onClick={() => setPage((value) => Math.max(0, value - 1))}
            disabled={page === 0}
            aria-label="Previous posts"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-accent hover:text-accent disabled:cursor-not-allowed disabled:opacity-40"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => setPage((value) => Math.min(pageCount - 1, value + 1))}
            disabled={page >= pageCount - 1}
            aria-label="Next posts"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-accent hover:text-accent disabled:cursor-not-allowed disabled:opacity-40"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {visible.map((post) => (
          <article key={post.seed} className="group flex gap-4">
            <a href="#top" className="shrink-0 overflow-hidden rounded-lg">
              <img
                src={imgUrl(post.seed, 240, 240)}
                alt=""
                className="h-24 w-24 rounded-lg object-cover transition-transform duration-300 group-hover:scale-105 sm:h-28 sm:w-28"
              />
            </a>
            <div>
              <PostMeta post={post} className="text-[11px]" />
              <h3 className="mt-1.5 text-base font-bold leading-snug text-ink transition-colors group-hover:text-accent">
                <a href="#top">{post.title}</a>
              </h3>
              <p className="mt-2 hidden text-sm text-body sm:block">{post.excerpt}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
