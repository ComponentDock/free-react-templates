import { Camera, MessageCircle, Clock } from 'lucide-react'
import { useState } from 'react'

const featuredArticles = [
  {
    id: 1,
    category: 'News',
    title: 'Breaking: Global Summit Reaches Historic Climate Agreement',
    date: 'January 31, 2025',
    comments: 33,
    image: 'https://picsum.photos/seed/pressbox-hero1/800/500',
  },
  {
    id: 2,
    category: 'News',
    title: 'Tech Giants Announce Revolutionary AI Partnership',
    date: 'January 31, 2025',
    comments: 47,
    image: 'https://picsum.photos/seed/pressbox-hero2/800/500',
  },
  {
    id: 3,
    category: 'Sport',
    title: 'Championship Finals Deliver Thrilling Overtime Victory',
    date: 'January 30, 2025',
    comments: 21,
    image: 'https://picsum.photos/seed/pressbox-hero3/800/500',
  },
]

export function HeroCarousel() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c === 0 ? featuredArticles.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === featuredArticles.length - 1 ? 0 : c + 1))

  const article = featuredArticles[current]!

  return (
    <section aria-label="Featured articles" className="relative bg-brand-dark">
      <div className="relative mx-auto max-w-6xl overflow-hidden">
        <div className="relative h-[320px] sm:h-[420px] md:h-[500px]">
          <img src={article.image} alt="" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 p-6 sm:p-8 md:p-12">
            <div className="mb-2 flex items-center gap-2">
              <span className="rounded bg-brand-red px-3 py-1 text-xs font-bold uppercase text-white">
                {article.category}
              </span>
              <Camera size={14} className="text-white/70" />
            </div>
            <h2 className="max-w-xl text-xl font-extrabold uppercase leading-tight text-white sm:text-2xl md:text-3xl">
              {article.title}
            </h2>
            <div className="mt-3 flex items-center gap-4 text-xs text-white/70">
              <span className="flex items-center gap-1">
                <Clock size={12} />
                {article.date}
              </span>
              <span className="flex items-center gap-1">
                <MessageCircle size={12} />
                {article.comments}
              </span>
            </div>
          </div>
        </div>
        <button
          type="button"
          aria-label="Previous slide"
          onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/70"
        >
          ‹
        </button>
        <button
          type="button"
          aria-label="Next slide"
          onClick={next}
          className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/70"
        >
          ›
        </button>
      </div>
      <div className="flex justify-center gap-2 py-3">
        {featuredArticles.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setCurrent(i)}
            className={`h-2 rounded-full transition-colors ${
              i === current ? 'bg-brand-red' : 'bg-white/40'
            }`}
          />
        ))}
      </div>
    </section>
  )
}
