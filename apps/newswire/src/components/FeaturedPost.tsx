import { featuredPost, imgUrl } from '../data'
import { PostMeta } from './PostMeta'

/** Standalone light-background horizontal half-post panel. */
export function FeaturedPost() {
  return (
    <section aria-label="Featured post" className="bg-white">
      <div className="mx-auto grid max-w-6xl items-stretch bg-soft lg:grid-cols-2">
        <img
          src={imgUrl(featuredPost.seed, 900, 600)}
          alt=""
          className="h-64 w-full object-cover lg:h-full"
        />
        <div className="flex flex-col justify-center p-6 lg:p-12">
          <h2 className="text-2xl font-bold leading-tight text-ink">
            <a href="#top" className="transition-colors hover:text-accent">
              {featuredPost.title}
            </a>
          </h2>
          <div className="mt-3">
            <PostMeta post={featuredPost} />
          </div>
        </div>
      </div>
    </section>
  )
}
