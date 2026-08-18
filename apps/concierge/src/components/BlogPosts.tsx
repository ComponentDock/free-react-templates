import { useState } from 'react'
import { ChevronLeft, ChevronRight, Pencil } from 'lucide-react'
import { BLOG_POSTS } from '../data'

const VISIBLE = 3

/** Blog Posts — white section, teal heading, Prev/Next pills, and a
    carousel of image cards (pencil icon, title, Read More link). */
export function BlogPosts() {
  const [index, setIndex] = useState(0)
  const maxIndex = BLOG_POSTS.length - VISIBLE

  const next = () => setIndex((i) => (i + 1) % (maxIndex + 1))
  const prev = () => setIndex((i) => (i + maxIndex) % (maxIndex + 1))

  return (
    <section id="blog" className="bg-white" aria-label="Blog posts">
      <div className="mx-auto max-w-7xl px-4 py-28">
        <div className="mb-10 flex items-end justify-between gap-6">
          <h2 className="font-display text-2xl font-bold uppercase text-brand">Blog Posts</h2>
          <div className="flex gap-2">
            <button
              type="button"
              aria-label="Previous posts"
              onClick={prev}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 transition-colors hover:border-black"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              aria-label="Next posts"
              onClick={next}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 transition-colors hover:border-black"
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-300"
            style={{ transform: `translateX(-${index * (100 / VISIBLE)}%)` }}
          >
            {BLOG_POSTS.map((post, i) => {
              const inView = i >= index && i < index + VISIBLE
              return (
                <article
                  key={post.title}
                  aria-hidden={inView ? undefined : 'true'}
                  className="w-1/3 shrink-0 px-3"
                >
                  <a href="#blog" className="block overflow-hidden rounded">
                    <img
                      src={post.image}
                      alt=""
                      loading="lazy"
                      className="h-64 w-full object-cover"
                    />
                  </a>
                  <div className="pt-6">
                    <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand">
                      <Pencil className="h-4 w-4" aria-hidden="true" />
                      Travel Journal
                    </span>
                    <h3 className="mt-2 text-lg font-bold leading-snug text-ink">
                      <a href="#blog" className="transition-colors hover:text-brand">
                        {post.title}
                      </a>
                    </h3>
                    <a
                      href="#blog"
                      className="mt-4 inline-block text-xs font-bold uppercase tracking-[0.1em] text-mute transition-colors hover:text-ink"
                    >
                      Read More
                    </a>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
