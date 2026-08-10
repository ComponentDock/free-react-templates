import { blogPosts } from '../data'
import { PostCard } from './PostCard'

export function BlogFeed() {
  return (
    <section id="blog" className="bg-white py-16 sm:py-20 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl space-y-16 px-6 sm:space-y-20">
        {blogPosts.map((post, index) => (
          <PostCard key={post.seed} post={post} reversed={index % 2 === 1} />
        ))}
      </div>
    </section>
  )
}
