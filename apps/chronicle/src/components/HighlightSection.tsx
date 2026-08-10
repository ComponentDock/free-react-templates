import { highlightHorizontal, highlightVertical } from '../data'
import { NewsletterCard } from './NewsletterCard'
import { PostEntry } from './PostEntry'
import { SectionTitle } from './SectionTitle'

/**
 * "Today's Highlight" — two vertical post cards + three horizontal post
 * rows on the left (col-md-9), sticky newsletter card on the right
 * (col-md-3). Mirrors `div.section-latest` in the original.
 */
export function HighlightSection() {
  return (
    <section aria-label="Today's Highlight" className="px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <SectionTitle>Today's Highlight</SectionTitle>
        <div className="mt-8 grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-9 lg:pr-5">
            <div className="grid gap-x-8 sm:grid-cols-2">
              {highlightVertical.map((post) => (
                <PostEntry key={post.seed} post={post} />
              ))}
            </div>
            <div className="mt-2">
              {highlightHorizontal.map((post, i) => (
                <PostEntry
                  key={post.seed}
                  post={post}
                  variant="horizontal"
                  className={i === highlightHorizontal.length - 1 ? 'mb-0' : undefined}
                />
              ))}
            </div>
          </div>
          <div className="lg:col-span-3">
            <NewsletterCard />
          </div>
        </div>
      </div>
    </section>
  )
}
