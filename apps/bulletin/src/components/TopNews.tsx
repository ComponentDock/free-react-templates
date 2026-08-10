import { topNewsPosts } from '../data'
import { PostCard } from './PostCard'

/** Top news grid: six style-2 cards in three columns (reference:
    .top-news-area .single-blog-post.style-2). */
export function TopNews() {
  return (
    <section aria-label="Top news" className="bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-[100px] md:grid-cols-2 lg:grid-cols-3">
        {topNewsPosts.map((post) => (
          <PostCard key={post.seed} post={post} />
        ))}
      </div>
    </section>
  )
}
