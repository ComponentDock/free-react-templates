import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import {
  BLOG_AUTHOR_NAME,
  BLOG_AUTHOR_ROLE,
  BLOG_AVATAR,
  BLOG_HEADING,
  BLOG_LEAD,
  BLOG_POSTS,
  BLOG_POST_DATE,
  CAROUSEL_INTERVAL_MS,
  POSTS_PER_VIEW,
} from '../data'

/* div.site-section.bg-primary — the vivid INDIGO "Blog Updates" band. The
   source runs an Owl Carousel (loop, 3 slides per view on desktop) of 12
   repeated cards; here the 12 posts are distinct and paginated 3-per-page
   (4 pages → 4 dots). Auto-advances, wraps, dots + prev/next controls.
   White text sits directly on the indigo band (no card backgrounds). */
export function BlogCarousel() {
  const pageCount = Math.ceil(BLOG_POSTS.length / POSTS_PER_VIEW)
  const [page, setPage] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setPage((current) => (current + 1) % pageCount)
    }, CAROUSEL_INTERVAL_MS)
    return () => clearInterval(timer)
  }, [pageCount])

  const visiblePosts = BLOG_POSTS.slice(
    page * POSTS_PER_VIEW,
    page * POSTS_PER_VIEW + POSTS_PER_VIEW,
  )

  return (
    <section id="blog" aria-label="Blog updates" className="bg-brand py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="font-sans text-[32px] font-bold text-white">{BLOG_HEADING}</h2>
        <p className="mt-3 max-w-xl text-[18px] leading-relaxed text-white/90">{BLOG_LEAD}</p>
      </div>

      <div className="mx-auto mt-10 max-w-6xl px-4">
        <div className="grid gap-10 md:grid-cols-3 md:gap-8">
          {visiblePosts.map((post) => (
            <article key={post.title} className="text-white">
              <a href="#blog" className="mb-4 block overflow-hidden">
                <img src={post.image} alt="" loading="lazy" className="h-44 w-full object-cover" />
              </a>
              <span className="block text-[14px] text-white">{BLOG_POST_DATE}</span>
              <h3 className="mt-2 mb-4 font-sans text-[26px] leading-snug font-bold">
                <a href="#blog" className="transition-colors hover:underline">
                  {post.title}
                </a>
              </h3>
              <div className="flex items-center gap-3">
                <img
                  src={BLOG_AVATAR}
                  alt=""
                  loading="lazy"
                  className="h-[60px] w-[60px] flex-[0_0_60px] rounded-full object-cover"
                />
                <div>
                  <p className="font-sans text-[14px] text-white">by {BLOG_AUTHOR_NAME}</p>
                  <p className="font-sans text-[14px] text-white">{BLOG_AUTHOR_ROLE}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Carousel controls — 10px white dots (below the band's bottom edge
         in the source) + prev/next glyphs. */}
      <div className="mt-12 flex items-center justify-center gap-4">
        <button
          type="button"
          aria-label="Previous posts"
          onClick={() => setPage((current) => (current - 1 + pageCount) % pageCount)}
          className="cursor-pointer text-white/80 transition-colors hover:text-white"
        >
          <ChevronLeft aria-hidden="true" className="h-6 w-6" />
        </button>
        {Array.from({ length: pageCount }, (_, index) => (
          <button
            key={index}
            type="button"
            aria-label={`Go to page ${index + 1}`}
            aria-current={index === page}
            onClick={() => setPage(index)}
            className={cn(
              'h-[10px] w-[10px] cursor-pointer rounded-full bg-white/50 transition-colors',
              index === page && 'bg-white',
            )}
          />
        ))}
        <button
          type="button"
          aria-label="Next posts"
          onClick={() => setPage((current) => (current + 1) % pageCount)}
          className="cursor-pointer text-white/80 transition-colors hover:text-white"
        >
          <ChevronRight aria-hidden="true" className="h-6 w-6" />
        </button>
      </div>
    </section>
  )
}
