import { verticalPosts, widePosts } from '../data'
import { BlogCard } from './BlogCard'
import { FeaturedCard } from './FeaturedCard'

export function BlogGrid() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-12 lg:py-16">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <FeaturedCard />
        </div>

        <div className="flex flex-col gap-6 lg:col-span-8">
          {widePosts.map((post, i) => (
            <BlogCard key={post.title} post={post} variant="wide" reversed={i === 1} />
          ))}
        </div>

        {verticalPosts.map((post, i) => (
          <div key={post.title} className="lg:col-span-4">
            <BlogCard post={post} reversed={i === 4} />
          </div>
        ))}
      </div>
    </div>
  )
}
