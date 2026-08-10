import { imgUrl, type PostRow as PostRowData } from '../data'
import { PostMeta } from './PostMeta'
import { TagPill } from './TagPill'

/* Shared image-left / text-right post row (latest news + relevant stories). */

export function PostRow({ post }: { post: PostRowData }) {
  return (
    <article className="grid items-center gap-5 md:grid-cols-12">
      <div className="md:col-span-5">
        <a
          href="#post"
          className="block overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/60"
        >
          <img
            src={imgUrl(post.seed, 400, 300)}
            alt={post.title}
            className="h-48 w-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </a>
      </div>
      <div className="md:col-span-7">
        <TagPill label={post.tag} />
        <h4 className="mt-3 max-w-[300px] text-base font-semibold leading-snug text-heading">
          <a
            href="#post"
            className="transition-colors hover:text-primary-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/60"
          >
            {post.title}
          </a>
        </h4>
        <PostMeta meta={post.meta} className="mt-2" />
        <p className="mt-3 text-sm font-light leading-relaxed text-body">{post.excerpt}</p>
      </div>
    </article>
  )
}
