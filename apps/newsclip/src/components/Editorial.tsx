import { useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { editorialPosts } from '../data'

export function Editorial() {
  const [current, setCurrent] = useState(0)
  const timerRef = useRef<ReturnType<typeof setInterval>>(
    undefined! as ReturnType<typeof setInterval>,
  )

  const startTimer = () => {
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % editorialPosts.length)
    }, 6000)
  }

  useEffect(() => {
    startTimer()
    return () => {
      clearInterval(timerRef.current)
    }
  }, [])

  const goTo = (index: number) => {
    clearInterval(timerRef.current)
    setCurrent(index)
    startTimer()
  }

  const prev = () => goTo((current - 1 + editorialPosts.length) % editorialPosts.length)
  const next = () => goTo((current + 1) % editorialPosts.length)

  const post = editorialPosts[current]!

  return (
    <section className="relative bg-dark-bg px-4 py-16 text-white" aria-label="Editorial">
      <div className="mx-auto max-w-7xl">
        <h3 className="mb-8 font-serif text-2xl font-bold">Editor&apos;s Pick</h3>

        <div className="relative overflow-hidden">
          <div className="md:flex md:gap-8">
            <div className="relative mb-4 md:mb-0 md:w-1/2">
              <img
                src={`https://picsum.photos/seed/${post.seed}/600/400`}
                alt=""
                className="h-[300px] w-full object-cover"
              />
              <span className="absolute left-3 top-3 bg-brand px-2 py-0.5 text-xs font-bold uppercase text-white">
                {post.category}
              </span>
            </div>
            <div className="md:w-1/2">
              <p className="mb-2 text-xs uppercase tracking-widest text-white/60">{post.date}</p>
              <h4 className="mb-3 font-serif text-2xl font-bold leading-snug">{post.title}</h4>
              <p className="mb-4 text-sm leading-relaxed text-white/70">{post.excerpt}</p>
              <a
                href="#editorial"
                className="inline-block border-2 border-brand bg-brand px-5 py-2 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-brand-hover hover:border-brand-hover"
              >
                Continue Reading
              </a>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="mt-8 flex items-center justify-between">
          <div className="flex gap-2">
            {editorialPosts.map((p, i) => (
              <button
                key={p.seed}
                type="button"
                aria-label={`Go to editorial ${i + 1}`}
                aria-current={i === current ? 'true' : undefined}
                onClick={() => goTo(i)}
                className={`h-3 w-3 rounded-full border-2 border-white transition-colors ${
                  i === current ? 'bg-brand border-brand' : 'bg-transparent'
                }`}
              />
            ))}
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              aria-label="Previous editorial"
              onClick={prev}
              className="border border-white/30 p-2 text-white transition-colors hover:border-brand hover:text-brand"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              aria-label="Next editorial"
              onClick={next}
              className="border border-white/30 p-2 text-white transition-colors hover:border-brand hover:text-brand"
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
