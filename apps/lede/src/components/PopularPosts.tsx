import { imgUrl, popularFeature, popularGrid, popularPostsTitle } from '../data'
import { PostMeta } from './PostMeta'
import { SectionTitle } from './SectionTitle'
import { TagPill } from './TagPill'

export function PopularPosts() {
  return (
    <section aria-label={popularPostsTitle} className="mt-7">
      <SectionTitle>{popularPostsTitle}</SectionTitle>
      <div className="mt-5">
        <article className="relative overflow-hidden">
          <img
            src={imgUrl(popularFeature.seed, 800, 420)}
            alt={popularFeature.title}
            className="h-64 w-full object-cover md:h-80"
          />
          <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
          <div className="absolute bottom-[30px] left-[40px] right-4 md:right-[40px]">
            <TagPill label={popularFeature.tag} />
            <h3 className="mt-4 text-xl font-light leading-snug text-white md:text-2xl">
              {popularFeature.title}
            </h3>
            <PostMeta
              meta={popularFeature.meta}
              className="mt-3 text-white"
              iconClassName="text-white"
            />
          </div>
        </article>
        <div className="mt-5 grid gap-8 md:grid-cols-2">
          {popularGrid.map((post) => (
            <article key={`${post.seed}-${post.title}`}>
              <a
                href="#post"
                className="block overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/60"
              >
                <img
                  src={imgUrl(post.seed, 400, 260)}
                  alt={post.title}
                  className="h-44 w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </a>
              <div className="pt-4">
                <TagPill label={post.tag} />
                <h4 className="mt-3 text-base font-semibold leading-snug text-heading">
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
          ))}
        </div>
      </div>
    </section>
  )
}
