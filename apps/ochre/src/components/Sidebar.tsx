import { ArrowRight, Search } from 'lucide-react'
import {
  categories,
  categoriesHeading,
  emailLabel,
  feedsHeading,
  imgUrl,
  popularFeeds,
  sidebarSearchLabel,
  subscribeLabel,
} from '../data'

export function Sidebar() {
  return (
    <aside aria-label="Sidebar" className="space-y-10">
      {/* Search */}
      <div className="bg-soft p-6 dark:bg-gray-800">
        <h3 className="mb-4 font-display text-xl font-semibold text-ink dark:text-white">
          {sidebarSearchLabel}
        </h3>
        <form role="search" className="flex">
          <input
            type="search"
            aria-label={sidebarSearchLabel}
            placeholder="Search here..."
            className="w-full border border-line bg-white px-4 py-2.5 text-sm text-ink outline-none transition-colors focus:border-brand dark:border-gray-700 dark:bg-gray-900 dark:text-white"
          />
          <button
            type="submit"
            aria-label="Submit search"
            className="inline-flex w-12 items-center justify-center bg-brand text-white transition-colors hover:bg-ink"
          >
            <Search className="h-4 w-4" aria-hidden="true" />
          </button>
        </form>
      </div>

      {/* Categories */}
      <div>
        <h3 className="relative mb-5 font-display text-xl font-semibold text-ink after:absolute after:-bottom-2 after:left-0 after:h-[3px] after:w-8 after:bg-brand dark:text-white">
          {categoriesHeading}
        </h3>
        <ul className="space-y-3 border-b border-line pb-5 text-sm dark:border-gray-700">
          {categories.map((category) => (
            <li key={category}>
              <a
                href="#top"
                className="text-ink transition-colors hover:text-brand dark:text-gray-200 dark:hover:text-brand"
              >
                {category}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Popular feeds */}
      <div>
        <h3 className="relative mb-5 font-display text-xl font-semibold text-ink after:absolute after:-bottom-2 after:left-0 after:h-[3px] after:w-8 after:bg-brand dark:text-white">
          {feedsHeading}
        </h3>
        <ul className="space-y-5">
          {popularFeeds.map((feed) => (
            <li key={feed.seed} className="flex gap-4">
              <img
                src={imgUrl(feed.seed, 90, 90)}
                alt=""
                className="h-16 w-16 shrink-0 object-cover"
              />
              <div>
                <h4 className="font-display text-sm font-semibold leading-snug text-ink dark:text-gray-100">
                  <a href="#top" className="transition-colors hover:text-brand">
                    {feed.title}
                  </a>
                </h4>
                <p className="mt-1 text-xs text-body">{feed.date}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Subscribe */}
      <div className="bg-soft p-6 dark:bg-gray-800">
        <h3 className="mb-4 font-display text-xl font-semibold text-ink dark:text-white">
          {subscribeLabel}
        </h3>
        <form className="flex">
          <input
            type="email"
            required
            aria-label={emailLabel}
            placeholder="Your Email Address"
            className="w-full border border-line bg-white px-4 py-2.5 text-sm text-ink outline-none transition-colors focus:border-brand dark:border-gray-700 dark:bg-gray-900 dark:text-white"
          />
          <button
            type="submit"
            aria-label={subscribeLabel}
            className="inline-flex w-12 items-center justify-center bg-brand text-white transition-colors hover:bg-ink"
          >
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </form>
      </div>
    </aside>
  )
}
