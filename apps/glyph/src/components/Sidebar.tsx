import type { FormEvent } from 'react'
import { Search } from 'lucide-react'
import {
  authorBio,
  authorName,
  authorRole,
  authorSocials,
  authorWidgetTitle,
  imgUrl,
  newsletterTitle,
  popularPosts,
  popularPostsTitle,
  postCategories,
  postCategoriesTitle,
  searchFieldLabel,
  searchPlaceholder,
  searchSubmitLabel,
  searchWidgetTitle,
} from '../data'
import { BrandIcon } from './BrandIcon'
import { NewsletterForm } from './NewsletterForm'

const widgetTitleClasses = 'relative pl-[50px] text-[21px] font-bold text-ink'

function WidgetTitle({ id, children }: { id: string; children: string }) {
  return (
    <h3 id={id} className={widgetTitleClasses}>
      <span
        aria-hidden="true"
        className="absolute left-0 top-1/2 h-1 w-[30px] -translate-y-1/2 bg-accent"
      />
      {children}
    </h3>
  )
}

/** Right-hand sidebar: search, author, popular posts, newsletter, categories. */
export function Sidebar() {
  const handleSearchSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <aside aria-label="Sidebar" className="space-y-8">
      <section aria-labelledby="widget-search" className="border border-line bg-soft p-[30px]">
        <WidgetTitle id="widget-search">{searchWidgetTitle}</WidgetTitle>
        <form role="search" onSubmit={handleSearchSubmit} className="relative mt-6">
          <label htmlFor="sidebar-search" className="sr-only">
            {searchFieldLabel}
          </label>
          <input
            id="sidebar-search"
            type="search"
            placeholder={searchPlaceholder}
            className="h-[50px] w-full rounded-[5px] border border-line bg-white px-4 pr-12 text-sm text-ink placeholder:text-meta focus:border-accent focus:outline-none"
          />
          <button
            type="submit"
            aria-label={searchSubmitLabel}
            className="absolute right-0 top-0 flex h-[50px] w-[50px] items-center justify-center text-ink transition-colors hover:text-accent"
          >
            <Search className="h-4 w-4" aria-hidden="true" />
          </button>
        </form>
      </section>

      <section aria-labelledby="widget-author" className="border border-line bg-soft p-[30px]">
        <WidgetTitle id="widget-author">{authorWidgetTitle}</WidgetTitle>
        <div className="mt-6 text-center">
          <img
            src={imgUrl('glyph-author', 150, 150)}
            alt={authorName}
            className="mx-auto h-[150px] w-[150px] rounded-full object-cover"
          />
          <h4 className="mt-4 text-lg font-bold text-ink">{authorName}</h4>
          <p className="mt-1 text-xs uppercase tracking-wide text-accent">{authorRole}</p>
          <p className="mt-3 text-sm leading-relaxed text-body">{authorBio}</p>
          <div className="mt-4 flex justify-center gap-3">
            {authorSocials.map((social) => (
              <BrandIcon key={social.name} name={social.name} label={social.label} />
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="widget-popular" className="border border-line bg-soft p-[30px]">
        <WidgetTitle id="widget-popular">{popularPostsTitle}</WidgetTitle>
        <ul className="mt-6 space-y-5">
          {popularPosts.map((post) => (
            <li key={post.seed} className="flex gap-4">
              <img
                src={imgUrl(post.seed, 80, 80)}
                alt=""
                loading="lazy"
                className="h-20 w-20 shrink-0 object-cover"
              />
              <div>
                <a
                  href="#top"
                  className="text-sm font-medium leading-snug text-ink transition-colors hover:text-accent"
                >
                  {post.title}
                </a>
                <p className="mt-1 text-xs text-meta">{post.time}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="widget-newsletter" className="border border-line bg-soft p-[30px]">
        <WidgetTitle id="widget-newsletter">{newsletterTitle}</WidgetTitle>
        <p className="mt-5 text-sm text-body">
          Subscribe to our newsletter for the latest updates.
        </p>
        <div className="mt-5">
          <NewsletterForm variant="sidebar" />
        </div>
      </section>

      <section aria-labelledby="widget-categories" className="border border-line bg-soft p-[30px]">
        <WidgetTitle id="widget-categories">{postCategoriesTitle}</WidgetTitle>
        <ul className="mt-6 space-y-3">
          {postCategories.map((category) => (
            <li key={category.label}>
              <a
                href="#top"
                className="flex items-center justify-between border-b-2 border-dotted border-[#eeeeee] pb-3 text-sm text-body transition-colors hover:text-accent"
              >
                <span>{category.label}</span>
                <span>{category.count}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </aside>
  )
}
