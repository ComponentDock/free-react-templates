import { useState } from 'react'
import { Button } from '@free-react-templates/ui'
import { PostCard } from './PostCard'
import { posts } from '../data'

const initialCount = 3

export function BlogPosts() {
  const [visible, setVisible] = useState(initialCount)
  const shown = posts.slice(0, visible)
  const hasMore = visible < posts.length

  return (
    <section aria-label="Blog posts" className="space-y-12">
      {shown.map((post) => (
        <PostCard key={post.title} post={post} />
      ))}
      {hasMore ? (
        <div className="flex justify-center pt-2">
          <Button
            type="button"
            onClick={() => setVisible(posts.length)}
            className="rounded-sm border border-line bg-white px-8 py-2.5 font-display text-sm font-medium text-ink shadow-[1px_10px_15px_rgba(0,0,0,0.08)] transition-all hover:bg-section dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
          >
            Load More
          </Button>
        </div>
      ) : null}
    </section>
  )
}
