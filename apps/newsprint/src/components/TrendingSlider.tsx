import { useState } from 'react'
import { PostAuthor } from './PostAuthor'
import { PostMeta } from './PostMeta'
import { SectionHeading } from './SectionHeading'
import { imgUrl, trendingPosts } from '../data'

export function TrendingSlider() {
  const [index, setIndex] = useState(0)
  const post = trendingPosts[index]!
  const total = trendingPosts.length

  return (
    <section aria-labelledby="trending-heading" className="mx-auto max-w-6xl px-4 pt-10 lg:px-6">
      <SectionHeading title="Trending" />
      <div className="overflow-hidden rounded-xl border border-line">
        <article className="grid gap-6 bg-white p-4 sm:p-6 lg:grid-cols-2 lg:gap-10">
          <img
            src={imgUrl(post.seed, 900, 600)}
            alt=""
            className="aspect-[3/2] w-full rounded-lg object-cover"
          />
          <div className="flex flex-col justify-center py-2 lg:py-4">
            <PostMeta post={post} />
            <h3 className="mt-3 text-2xl font-bold leading-snug text-ink sm:text-3xl">
              {post.title}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-body">{post.excerpt}</p>
            <PostAuthor post={post} className="mt-6" />
          </div>
        </article>
      </div>

      {/* tns-style dot navigation */}
      <ul className="mt-6 flex justify-center gap-2" aria-label="Trending slides">
        {trendingPosts.map((slide, i) => (
          <li key={slide.seed}>
            <button
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Show trending slide ${i + 1}`}
              aria-current={i === index ? 'true' : undefined}
              className={`h-2 w-2 rounded-full transition-colors ${
                i === index ? 'bg-accent' : 'bg-black/20 hover:bg-black/40'
              }`}
            />
          </li>
        ))}
      </ul>
      <span className="sr-only">{`Slide ${index + 1} of ${total}`}</span>
    </section>
  )
}
