import { useState } from 'react'
import { Calendar, Coffee, Image as ImageIcon, MessageCircle } from 'lucide-react'
import {
  authorName,
  nextSlideLabel,
  postCategory,
  postComments,
  postDate,
  postSliderLabel,
  postType,
  prevSlideLabel,
  readMoreLabel,
  sliderPosts,
} from '../data'
import { ButtonLink } from '@free-react-templates/ui'

export function PostSlider() {
  const [active, setActive] = useState(0)

  const goTo = (index: number) => {
    setActive((index + sliderPosts.length) % sliderPosts.length)
  }

  return (
    <section aria-label={postSliderLabel} className="relative z-10 -mt-16 pb-8 md:-mt-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${active * 100}%)` }}
          >
            {sliderPosts.map((post, index) => (
              <article
                key={post.seed}
                aria-hidden={index !== active}
                className="w-full shrink-0 px-1"
              >
                <div className="rounded-md bg-white p-8 shadow-[0_10px_30px_rgba(0,0,0,0.05)] md:p-10">
                  <div className="flex items-center gap-4">
                    <img
                      src="https://picsum.photos/seed/odyssey-author/48/48"
                      alt=""
                      className="h-12 w-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wide text-ink">
                        {authorName}
                      </p>
                      <ul className="mt-1 flex flex-wrap gap-x-4 gap-y-1 text-[11px] uppercase tracking-wide text-meta">
                        <li className="flex items-center gap-1.5">
                          <Calendar aria-hidden="true" className="h-3.5 w-3.5" />
                          {postDate}
                        </li>
                        <li className="flex items-center gap-1.5">
                          <ImageIcon aria-hidden="true" className="h-3.5 w-3.5" />
                          {postType}
                        </li>
                        <li className="flex items-center gap-1.5">
                          <Coffee aria-hidden="true" className="h-3.5 w-3.5" />
                          {postCategory}
                        </li>
                        <li className="flex items-center gap-1.5">
                          <MessageCircle aria-hidden="true" className="h-3.5 w-3.5" />
                          {postComments}
                        </li>
                      </ul>
                    </div>
                  </div>
                  <h3 className="mt-6 font-serif text-xl font-semibold text-ink">
                    <a href="#" className="transition-colors hover:text-brand">
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-4 max-w-[635px] text-sm leading-relaxed text-ink/70">
                    {post.excerpt}
                  </p>
                  <div className="mt-6">
                    <ButtonLink
                      href="#"
                      className="rounded-full border border-soft bg-mist px-7 text-xs font-medium normal-case text-ink hover:border-brand hover:bg-brand hover:text-white"
                    >
                      {readMoreLabel}
                    </ButtonLink>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="mt-6 flex items-center justify-center gap-3">
          <button
            type="button"
            aria-label={prevSlideLabel}
            onClick={() => goTo(active - 1)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-soft text-ink transition-colors hover:border-brand hover:bg-brand hover:text-white"
          >
            <span aria-hidden="true" className="text-sm">
              ‹
            </span>
          </button>
          <button
            type="button"
            aria-label={nextSlideLabel}
            onClick={() => goTo(active + 1)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-soft text-ink transition-colors hover:border-brand hover:bg-brand hover:text-white"
          >
            <span aria-hidden="true" className="text-sm">
              ›
            </span>
          </button>
        </div>
      </div>
    </section>
  )
}
