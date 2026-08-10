import { cn } from '@free-react-templates/ui'
import { featuredPosts, imgUrl } from '../data'
import { PostIconRow } from './PostIconRow'

export function FeaturedPosts() {
  return (
    <section aria-label="Featured posts" className="bg-white">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-8 px-4 py-[70px] md:grid-cols-3">
        {featuredPosts.map((post, index) => {
          const isMiddle = index === 1
          const image = (
            <img
              src={imgUrl(post.seed, 700, 470)}
              alt={post.title}
              className="w-full"
              loading="lazy"
            />
          )
          const text = (
            <div className={cn('mt-5', isMiddle && 'md:px-[30px]')}>
              <h5 className="mb-3.5 text-[11px] font-semibold uppercase text-brand">
                {post.category}
              </h5>
              <a href="#">
                <h3 className="font-display text-[18px] text-ink transition-colors hover:text-brand">
                  {post.title}
                </h3>
              </a>
              <p className="mt-2 text-[13px] text-meta">{post.meta}</p>
              <PostIconRow />
            </div>
          )
          return (
            <article key={post.seed} className={cn(isMiddle && 'md:flex md:flex-col-reverse')}>
              {isMiddle ? (
                <>
                  {text}
                  <div className="md:mt-0">{image}</div>
                </>
              ) : (
                <>
                  {image}
                  {text}
                </>
              )}
            </article>
          )
        })}
      </div>
    </section>
  )
}
