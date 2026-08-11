import { ArrowRight } from 'lucide-react'
import { featuredPost, loadMoreLabel, posts, readMoreLabel } from '../data'

/* Blog column mirroring the reference `#blog-wrapper .blog-holder`
   (max-width 470px): one featured post (category, date, 48px headline,
   serif excerpt + read-more arrow), five regular posts (headline,
   category, date), and the LOAD MORE ENTRIES label. */
export function BlogList() {
  return (
    <div className="mx-auto max-w-[470px] px-6 pb-[85px] pt-[100px]">
      <article className="pb-10">
        <div className="flex flex-wrap items-baseline gap-x-3">
          <a
            href="#"
            className="font-display text-[16px] font-bold uppercase tracking-wide text-blush transition-colors hover:text-brand"
          >
            {featuredPost.category}
          </a>
          <p className="font-display text-[14px] font-bold uppercase tracking-wide text-mist">
            <span aria-hidden="true">• </span>
            {featuredPost.date}
          </p>
        </div>
        <h2 className="pb-10 pt-2 font-display text-[34px] font-bold leading-[42px] text-ink md:text-[48px] md:leading-[50px]">
          <a href="#" className="transition-colors hover:text-brand">
            {featuredPost.title}
          </a>
        </h2>
        <p className="text-[16px] leading-7 text-body">
          {featuredPost.excerpt}
          <a
            href="#"
            aria-label={readMoreLabel}
            className="ml-2 inline-flex translate-y-1 text-brand transition-colors hover:text-ink"
          >
            <ArrowRight className="h-5 w-5" />
          </a>
        </p>
      </article>
      <div className="flex flex-col gap-10">
        {posts.map((post) => (
          <article key={post.title}>
            <h2 className="font-display text-[30px] font-bold leading-[38px] text-ink">
              <a href="#" className="transition-colors hover:text-brand">
                {post.title}
              </a>
            </h2>
            <div className="mt-2 flex flex-wrap items-baseline gap-x-3">
              <a
                href="#"
                className="font-display text-[14px] font-bold uppercase tracking-wide text-blush transition-colors hover:text-brand"
              >
                {post.category}
              </a>
              <p className="font-display text-[14px] font-bold uppercase tracking-wide text-mist">
                <span aria-hidden="true">• </span>
                {post.date}
              </p>
            </div>
          </article>
        ))}
      </div>
      <a
        href="#"
        className="mt-[85px] block text-center font-display text-[18px] font-bold uppercase tracking-wide text-fog transition-colors hover:text-mist"
      >
        {loadMoreLabel}
      </a>
    </div>
  )
}
