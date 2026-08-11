import { latestHeading, latestPosts, videosHeading, videoPosts } from '../data'
import { FeaturedPost } from './FeaturedPost'
import { SectionTitle } from './SectionTitle'
import { SmallPostRow } from './SmallPostRow'

/* Latest Articles column (4 horizontal post-style-4 rows) + Most Popular
   Videos column (2 post cards with category chips). */
export function LatestArticles() {
  return (
    <div className="mt-12 grid gap-10 lg:grid-cols-3">
      <div className="lg:col-span-2">
        <SectionTitle>{latestHeading}</SectionTitle>
        <div className="mt-8 space-y-6">
          {latestPosts.map((post) => (
            <SmallPostRow key={post.title} post={post} size="md" />
          ))}
        </div>
      </div>
      <div>
        <SectionTitle>{videosHeading}</SectionTitle>
        <div className="mt-8 space-y-8">
          {videoPosts.map((post) => (
            <FeaturedPost key={post.title} post={post} />
          ))}
        </div>
      </div>
    </div>
  )
}
