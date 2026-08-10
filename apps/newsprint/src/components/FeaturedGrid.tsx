import { PostAuthor } from './PostAuthor'
import { PostMeta } from './PostMeta'
import { imgUrl, featuredPosts } from '../data'

/** Three-column grid of vertical post cards. */
export function FeaturedGrid() {
  return (
    <section aria-labelledby="featured-heading" className="mx-auto max-w-6xl px-4 py-12 lg:px-6">
      <div className="grid gap-8 md:grid-cols-3">
        {featuredPosts.map((post) => (
          <article key={post.seed} className="group">
            <a href="#top" className="block overflow-hidden rounded-lg">
              <img
                src={imgUrl(post.seed, 600, 400)}
                alt=""
                className="aspect-[3/2] w-full rounded-lg object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </a>
            <div className="pt-4">
              <PostMeta post={post} />
              <h3 className="mt-2 text-lg font-bold leading-snug text-ink transition-colors group-hover:text-accent">
                <a href="#top">{post.title}</a>
              </h3>
              <PostAuthor post={post} className="mt-3" />
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
