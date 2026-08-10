import { Eye, Heart, MessageCircle } from 'lucide-react'
import {
  bigPosts,
  mediumPost,
  normalPosts,
  smallPosts,
  type DetailedPost,
  type NormalPost,
  type SmallPost,
} from '../data'

function StatsBar({ likes, comments, views }: { likes: string; comments: string; views: string }) {
  return (
    <ul className="grid h-[45px] grid-cols-3 items-center divide-x divide-gray-200 bg-blog-bg text-xs font-medium text-gray-600">
      <li className="flex items-center justify-center gap-1.5">
        <Heart className="h-4 w-4" aria-hidden="true" /> {likes}
      </li>
      <li className="flex items-center justify-center gap-1.5">
        <MessageCircle className="h-4 w-4" aria-hidden="true" /> {comments}
      </li>
      <li className="flex items-center justify-center gap-1.5">
        <Eye className="h-4 w-4" aria-hidden="true" /> {views}
      </li>
    </ul>
  )
}

function NormalCard({ post }: { post: NormalPost }) {
  return (
    <article className="card bg-white shadow-[0_0_5px_rgba(0,0,0,0.1)]">
      <img
        src={`https://picsum.photos/seed/${post.seed}/640/400`}
        alt=""
        loading="lazy"
        className="max-h-[200px] w-full object-cover"
      />
      <img
        src={`https://picsum.photos/seed/${post.avatarSeed}/140/140`}
        alt=""
        loading="lazy"
        className="relative z-10 -mt-10 mx-auto h-[70px] w-[70px] rounded-full border-[7px] border-white object-cover shadow-[0_0_10px_rgba(0,0,0,0.2)]"
      />
      <div className="px-6 pb-2 pt-4 text-center">
        <h3 className="font-display text-base font-medium leading-snug text-ink">
          <a href="#blog" className="transition-colors hover:text-brand">
            {post.title}
          </a>
        </h3>
      </div>
      <StatsBar likes={post.likes} comments={post.comments} views={post.views} />
    </article>
  )
}

function AvatarRow({ post }: { post: DetailedPost }) {
  return (
    <div className="mt-5 flex items-center gap-3">
      <img
        src={`https://picsum.photos/seed/${post.avatarSeed}/120/120`}
        alt=""
        loading="lazy"
        className="h-10 w-10 rounded-full object-cover"
      />
      <div>
        <p className="font-display text-sm font-semibold text-ink">{post.author}</p>
        <p className="text-xs text-gray-500">{post.date}</p>
      </div>
    </div>
  )
}

function DetailedInfo({ post }: { post: DetailedPost }) {
  return (
    <div className="p-6">
      <p className="text-xs font-semibold uppercase tracking-wider text-brand">{post.category}</p>
      <h3 className="mt-2 font-display text-xl font-medium leading-snug text-ink">
        <a href="#blog" className="transition-colors hover:text-brand">
          {post.title}
        </a>
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-ink">{post.excerpt}</p>
      <AvatarRow post={post} />
      <div className="mt-5">
        <StatsBar likes={post.likes} comments={post.comments} views={post.views} />
      </div>
    </div>
  )
}

function BigCard({ post }: { post: DetailedPost }) {
  return (
    <article className="card grid bg-white shadow-[0_0_5px_rgba(0,0,0,0.1)] sm:grid-cols-2 lg:col-span-2">
      <img
        src={`https://picsum.photos/seed/${post.seed}/640/480`}
        alt=""
        loading="lazy"
        className="h-full max-h-96 w-full object-cover"
      />
      <div className="flex flex-col justify-center">
        <DetailedInfo post={post} />
      </div>
    </article>
  )
}

function MediumCard({ post }: { post: DetailedPost }) {
  return (
    <article className="card bg-white shadow-[0_0_5px_rgba(0,0,0,0.1)]">
      <img
        src={`https://picsum.photos/seed/${post.seed}/640/360`}
        alt=""
        loading="lazy"
        className="h-44 w-full object-cover"
      />
      <DetailedInfo post={post} />
    </article>
  )
}

function SmallCard({ post }: { post: SmallPost }) {
  return (
    <article className="card bg-white shadow-[0_0_5px_rgba(0,0,0,0.1)]">
      <img
        src={`https://picsum.photos/seed/${post.seed}/640/300`}
        alt=""
        loading="lazy"
        className="h-32 w-full object-cover"
      />
      <div className="px-5 py-4">
        <h3 className="font-display text-sm font-medium leading-snug text-ink">
          <a href="#blog" className="transition-colors hover:text-brand">
            {post.title}
          </a>
        </h3>
      </div>
      <StatsBar likes={post.likes} comments={post.comments} views={post.views} />
    </article>
  )
}

export function Blog() {
  return (
    <section id="blog" className="bg-blog-bg py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-3">
          {normalPosts.slice(0, 3).map((post) => (
            <NormalCard key={post.seed} post={post} />
          ))}
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-3">
          <BigCard post={bigPosts[0]!} />
          <MediumCard post={mediumPost} />
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-3">
          {normalPosts.slice(3).map((post) => (
            <NormalCard key={post.seed} post={post} />
          ))}
          <SmallCard post={smallPosts[0]!} />
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-3">
          <BigCard post={bigPosts[1]!} />
          <SmallCard post={smallPosts[1]!} />
        </div>

        <div className="mt-14 text-center">
          <a
            href="#blog"
            className="inline-block bg-peri px-10 py-4 font-display text-sm font-semibold uppercase tracking-wide text-ink shadow-[0_0_2px_rgba(0,0,0,0.4)] transition-all hover:-translate-y-0.5 hover:shadow-[5px_10px_20px_rgba(0,0,0,0.3)]"
          >
            Load More
          </a>
        </div>
      </div>
    </section>
  )
}
