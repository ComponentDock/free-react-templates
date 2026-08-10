import { PostCard } from './PostCard'
import { featuredCenter, featuredLarge, featuredStacked } from '../data'

/** Asymmetric featured grid: large + centered + two stacked small cards. */
export function FeaturedGrid() {
  return (
    <section aria-label="Featured posts" className="bg-white">
      <div className="mx-auto max-w-[1200px] px-4 py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <PostCard post={featuredLarge} imageSize={[760, 520]} />
          </div>
          <div className="lg:col-span-4">
            <PostCard post={featuredCenter} variant="center" imageSize={[600, 520]} />
          </div>
          <div className="flex flex-col justify-between gap-8 lg:col-span-3">
            {featuredStacked.map((post) => (
              <PostCard key={post.seed} post={post} variant="stack" imageSize={[420, 250]} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
