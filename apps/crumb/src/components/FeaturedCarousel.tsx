import { useState } from 'react'
import { cn } from '@free-react-templates/ui'
import { featuredIndicatorLabel, featuredLabel, featuredPosts, imgUrl } from '../data'

export function FeaturedCarousel() {
  const [index, setIndex] = useState(0)

  const post = featuredPosts[index]!

  return (
    <section aria-label={featuredLabel} className="mx-auto max-w-6xl px-4 pt-14 sm:px-6">
      <div className="grid overflow-hidden shadow-[0_0_10px_3px_rgba(0,0,0,0.15)] lg:grid-cols-[1fr_320px]">
        {/* Carousel image + overlay */}
        <div className="relative h-[320px] md:h-[502px]">
          {featuredPosts.map((item, i) => (
            <img
              key={item.seed}
              src={imgUrl(item.seed, 900, 502)}
              alt=""
              className={cn(
                'absolute inset-0 h-full w-full object-cover transition-opacity duration-500',
                i === index ? 'opacity-100' : 'opacity-0',
              )}
            />
          ))}
          <div
            className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"
            aria-hidden="true"
          />
          <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
            <p className="text-[13px] font-medium uppercase tracking-[2px] text-white/90">
              {`${post.date} / ${post.category}`}
            </p>
            <h2 className="mt-2 max-w-xl font-serif text-2xl font-light leading-snug text-white">
              {post.title}
            </h2>
          </div>
        </div>

        {/* Numbered indicator panel */}
        <div className="bg-panel p-6">
          <ul className="space-y-4">
            {featuredPosts.map((item, i) => {
              const active = i === index
              return (
                <li key={item.seed}>
                  <button
                    type="button"
                    onClick={() => setIndex(i)}
                    aria-pressed={active}
                    aria-label={featuredIndicatorLabel(i + 1)}
                    className={cn(
                      'flex w-full items-start gap-3 text-left transition-colors',
                      active ? 'text-primary' : 'text-body hover:text-primary',
                    )}
                  >
                    <span className="font-serif text-sm">{String(i + 1).padStart(2, '0')}</span>
                    <span className="font-serif text-sm leading-snug">{item.title}</span>
                  </button>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
