import { imgUrl, recentPosts, type RecentPost } from '../data'
import { CategoryPill } from './CategoryPill'
import { Pagination } from './Pagination'

interface PostCardProps {
  post: RecentPost
}

function PostCard({ post }: PostCardProps) {
  return (
    <article className="flex flex-col">
      <a href="#top" className="mb-8 block overflow-hidden rounded">
        <img
          src={imgUrl(post.seed, 600, 400)}
          alt=""
          className="aspect-[3/2] w-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </a>
      <div className="flex flex-1 flex-col px-5">
        <div className="mb-3 flex flex-wrap gap-2">
          {post.categories.map((category) => (
            <CategoryPill key={category.label} label={category.label} color={category.color} />
          ))}
        </div>
        <h2 className="mb-4 text-xl font-bold text-ink sm:text-2xl">
          <a href="#top" className="transition-colors hover:text-accent">
            {post.title}
          </a>
        </h2>
        <div className="mb-4 flex items-center gap-3">
          <img src={imgUrl(post.avatar, 50, 50)} alt="" className="h-9 w-9 rounded-full" />
          <p className="text-[13px] text-meta">
            By {post.author} — {post.date}
          </p>
        </div>
        <p className="mb-4 flex-1 text-sm leading-relaxed text-body">{post.excerpt}</p>
        <p>
          <a
            href="#top"
            className="text-sm font-bold text-accent transition-colors hover:text-primary-700"
          >
            Read More
          </a>
        </p>
      </div>
    </article>
  )
}

/** \"Recent Posts\" heading + 3×3 grid of post cards + circular pagination. */
export function RecentPosts() {
  return (
    <section aria-labelledby="recent-heading">
      <div className="mx-auto max-w-6xl px-4 py-14 lg:px-6 lg:py-20">
        <h2 id="recent-heading" className="mb-10 text-2xl font-bold text-ink sm:text-3xl">
          Recent Posts
        </h2>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {recentPosts.map((post) => (
            <PostCard key={post.seed} post={post} />
          ))}
        </div>
        <Pagination />
      </div>
    </section>
  )
}
