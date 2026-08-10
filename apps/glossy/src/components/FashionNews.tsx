import { fashionNewsTitle, fashionPosts, latestPosts } from '../data'
import { PostCard } from './PostCard'
import { SectionHeading } from './SectionHeading'

/** Two Fashion News blocks: a 3-column grid and a 2-column latest-news grid. */
export function FashionNews() {
  return (
    <section aria-label={fashionNewsTitle} className="bg-white">
      <div className="mx-auto max-w-[1200px] px-4 py-16">
        <SectionHeading title={fashionNewsTitle} />
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {fashionPosts.map((post) => (
            <PostCard key={post.seed} post={post} variant="card" imageSize={[500, 340]} />
          ))}
        </div>
      </div>
      <div className="mx-auto max-w-[1200px] px-4 pb-16">
        <SectionHeading title={fashionNewsTitle} />
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {latestPosts.map((post) => (
            <PostCard key={post.seed} post={post} variant="horizontal" imageSize={[420, 260]} />
          ))}
        </div>
      </div>
    </section>
  )
}
