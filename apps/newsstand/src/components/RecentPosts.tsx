import { mostRead, mostReadHeading, recentHeading, recentPosts, recentSectionLabel } from '../data'
import { PostCard } from './PostCard'
import { PostWidget } from './PostWidget'
import { SectionTitle } from './SectionTitle'

/* Section 1 (white): main column with the "Recent Posts" 28px heading and
   six post cards (3×2 grid) + sidebar "Most Read" widget list. */
export function RecentPosts() {
  return (
    <section aria-label={recentSectionLabel} className="bg-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-14 sm:px-6 lg:grid-cols-[2fr_1fr] lg:px-8">
        <div>
          <SectionTitle title={recentHeading} />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {recentPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
        <aside aria-label={mostReadHeading}>
          <SectionTitle title={mostReadHeading} />
          <div className="flex flex-col gap-5">
            {mostRead.map((post) => (
              <PostWidget key={post.id} post={post} />
            ))}
          </div>
        </aside>
      </div>
    </section>
  )
}
