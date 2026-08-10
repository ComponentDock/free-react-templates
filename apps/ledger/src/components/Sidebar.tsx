import type { FormEvent } from 'react'
import { Search } from 'lucide-react'
import {
  feedPosts,
  imgUrl,
  popularTags,
  sidebarCategories,
  sidebarSearchPlaceholder,
} from '../data'

function WidgetTitle({ children }: { children: string }) {
  return (
    <div className="relative mb-11">
      <h3 className="text-2xl font-semibold text-ink">{children}</h3>
      <span aria-hidden="true" className="absolute bottom-[-13px] left-0 h-1 w-[15px] bg-brand" />
      <span aria-hidden="true" className="absolute bottom-[-12px] left-[25px] h-px w-10 bg-brand" />
    </div>
  )
}

export function Sidebar() {
  function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
  }

  return (
    <aside aria-label="Sidebar" className="mt-12 lg:mt-0">
      <div className="mb-14">
        <WidgetTitle>Search Objects</WidgetTitle>
        <form role="search" onSubmit={handleSearch} className="flex">
          <label htmlFor="sidebar-search" className="sr-only">
            Search Keyword
          </label>
          <input
            id="sidebar-search"
            type="search"
            placeholder={sidebarSearchPlaceholder}
            className="h-[52px] flex-1 rounded-none border border-line px-4 text-[13px] text-input-text placeholder:text-input-text focus:border-line focus:outline-none"
          />
          <button
            type="submit"
            aria-label="Search"
            className="ml-[10px] flex h-[52px] w-[50px] items-center justify-center bg-brand text-white transition-colors hover:bg-ink"
          >
            <Search className="h-4 w-4" aria-hidden="true" />
          </button>
        </form>
      </div>

      <div className="mb-14">
        <WidgetTitle>Popular Feeds</WidgetTitle>
        <ul className="flex flex-col gap-6">
          {feedPosts.map((post) => (
            <li key={post.seed} className="flex gap-4">
              <img
                src={imgUrl(post.seed, 110, 110)}
                alt={post.title}
                className="h-[110px] w-[110px] shrink-0 object-cover"
                loading="lazy"
              />
              <div className="my-[30px]">
                <p className="text-[13px] text-meta">{post.meta}</p>
                <a href="#">
                  <h3 className="mt-2 font-display text-base text-ink transition-colors hover:text-brand">
                    {post.title}
                  </h3>
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-14">
        <WidgetTitle>Categories</WidgetTitle>
        <ul>
          {sidebarCategories.map((category) => (
            <li key={category.name} className="mb-3">
              <a
                href="#"
                className="font-display text-[18px] text-muted transition-colors hover:text-brand"
              >
                {category.name} ({category.count})
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <WidgetTitle>Popular Tags</WidgetTitle>
        <ul className="flex flex-wrap gap-3">
          {popularTags.map((tag) => (
            <li key={tag}>
              <a
                href="#"
                className="inline-block border border-transparent bg-white px-4 py-2 text-[13px] text-muted transition-colors hover:border-brand"
              >
                {tag}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  )
}
