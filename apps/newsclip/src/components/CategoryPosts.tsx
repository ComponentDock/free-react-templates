import { Clock, MessageCircle } from 'lucide-react'
import {
  categoryLeftFeatured,
  categoryLeftText,
  categoryMiddlePosts,
  categoryRightFeatured,
  categoryRightText,
} from '../data'

function PostMeta({ date, comments }: { date: string; comments?: number }) {
  return (
    <span className="flex items-center gap-2 text-xs text-meta">
      <Clock className="h-3 w-3" aria-hidden="true" />
      <time>{date}</time>
      {comments !== undefined && (
        <>
          <MessageCircle className="h-3 w-3" aria-hidden="true" />
          <span>{comments}</span>
        </>
      )}
    </span>
  )
}

function FeaturedBlock({ post }: { post: typeof categoryLeftFeatured }) {
  return (
    <article className="mb-4">
      <div className="relative overflow-hidden">
        <img
          src={`https://picsum.photos/seed/${post.seed}/400/250`}
          alt=""
          className="h-[200px] w-full object-cover"
        />
        <span className="absolute left-2 top-2 bg-brand px-2 py-0.5 text-[10px] font-bold uppercase text-white">
          {post.category}
        </span>
      </div>
      <PostMeta date={post.date} comments={post.comments} />
      <h4 className="my-1 font-serif text-base font-bold leading-snug text-ink">{post.title}</h4>
    </article>
  )
}

function TextPost({ post }: { post: (typeof categoryLeftText)[number] }) {
  return (
    <article className="border-b border-gray-200 py-3 last:border-b-0">
      <PostMeta date={post.date} comments={post.comments} />
      <h4 className="mt-1 font-serif text-sm font-bold leading-snug text-ink">{post.title}</h4>
    </article>
  )
}

function GridPost({ post }: { post: (typeof categoryMiddlePosts)[number] }) {
  return (
    <article className="group cursor-pointer">
      <div className="relative overflow-hidden">
        <img
          src={`https://picsum.photos/seed/${post.seed}/300/200`}
          alt=""
          className="h-[140px] w-full object-cover transition-transform group-hover:scale-105"
        />
        <span className="absolute left-2 top-2 bg-brand px-2 py-0.5 text-[10px] font-bold uppercase text-white">
          {post.category}
        </span>
      </div>
      <PostMeta date={post.date} comments={post.comments} />
      <h4 className="mt-1 font-serif text-sm font-bold leading-snug text-ink">{post.title}</h4>
    </article>
  )
}

export function CategoryPosts() {
  return (
    <section className="bg-light-bg px-4 py-10">
      <div className="mx-auto max-w-7xl md:grid md:grid-cols-3 md:gap-8">
        {/* Left */}
        <div>
          <FeaturedBlock post={categoryLeftFeatured} />
          {categoryLeftText.map((post) => (
            <TextPost key={post.seed} post={post} />
          ))}
        </div>

        {/* Middle - 2x2 grid */}
        <div className="mt-8 grid grid-cols-2 gap-4 md:mt-0">
          {categoryMiddlePosts.map((post) => (
            <GridPost key={post.seed} post={post} />
          ))}
        </div>

        {/* Right */}
        <div className="mt-8 md:mt-0">
          <FeaturedBlock post={categoryRightFeatured} />
          {categoryRightText.map((post) => (
            <TextPost key={post.seed} post={post} />
          ))}
        </div>
      </div>
    </section>
  )
}
