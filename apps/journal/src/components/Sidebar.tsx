import type { FormEvent } from 'react'
import {
  advertisementSeed,
  advertisementTitle,
  imgUrl,
  latestPosts,
  latestPostsTitle,
  sidebarSearchLabel,
  sidebarSearchPlaceholder,
  subscribeTitle,
  tags,
  tagsTitle,
} from '../data'
import { NewsletterForm } from './NewsletterForm'

const widgetTitleClasses = 'mb-[30px] text-[18px] font-bold text-ink'

/** Right-hand magazine sidebar: underline search, newsletter widget,
 *  advertisement placeholder, latest posts, and tag chips. */
export function Sidebar() {
  const handleSearchSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <aside aria-label="Sidebar">
      <div className="space-y-[60px]">
        <section aria-label={sidebarSearchLabel}>
          <form role="search" onSubmit={handleSearchSubmit} className="border-b border-search">
            <label htmlFor="sidebar-search" className="sr-only">
              {sidebarSearchLabel}
            </label>
            <input
              id="sidebar-search"
              type="search"
              placeholder={sidebarSearchPlaceholder}
              className="w-full pb-2 text-[13px] italic text-ink placeholder:text-search focus:border-b-ink focus:outline-none"
            />
            <button type="submit" className="hidden">
              Search
            </button>
          </form>
        </section>

        <section aria-label={subscribeTitle}>
          <h3 className={widgetTitleClasses}>{subscribeTitle}</h3>
          <NewsletterForm variant="sidebar" />
        </section>

        <section aria-label={advertisementTitle}>
          <h3 className={widgetTitleClasses}>{advertisementTitle}</h3>
          <img src={imgUrl(advertisementSeed, 300, 250)} alt="" className="w-full" />
        </section>

        <section aria-label={latestPostsTitle}>
          <h3 className={widgetTitleClasses}>{latestPostsTitle}</h3>
          <ul className="space-y-5">
            {latestPosts.map((post) => (
              <li key={post.seed} className="flex gap-4">
                <img
                  src={imgUrl(post.seed, 115, 115)}
                  alt=""
                  className="h-[115px] w-[115px] shrink-0 object-cover"
                />
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[3px] text-tag">
                    {post.tag}
                  </p>
                  <a
                    href="#top"
                    className="mt-1 block text-[16px] leading-snug font-bold text-ink transition-colors hover:text-accent"
                  >
                    {post.title}
                  </a>
                  <p className="mt-1 text-[11px] text-meta">{post.date}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section aria-label={tagsTitle}>
          <h3 className={widgetTitleClasses}>{tagsTitle}</h3>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <a
                key={tag}
                href="#top"
                className="flex h-[45px] items-center border border-chip px-[35px] text-[12px] text-ink transition-colors hover:bg-accent hover:text-white"
              >
                {tag}
              </a>
            ))}
          </div>
        </section>
      </div>
    </aside>
  )
}
