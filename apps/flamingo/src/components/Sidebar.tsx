import { Search } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import {
  adAlt,
  adImage,
  author,
  authorSocials,
  categories,
  imgUrl,
  popularPosts,
  searchLabel,
  searchPlaceholder,
  socialLabels,
  tags,
} from '../data'
import { BrandIcon } from './BrandIcon'

const widgetTitle = cn(
  'mb-[30px] border-l-[3px] border-primary py-[6px] pl-[13px] font-heading text-lg text-heading',
)

export function Sidebar() {
  return (
    <aside className="space-y-[50px]">
      {/* Pill search box */}
      <section aria-label="Search">
        <div className="relative">
          <label htmlFor="search-input" className="sr-only">
            {searchPlaceholder}
          </label>
          <input
            id="search-input"
            type="search"
            placeholder={searchPlaceholder}
            className="h-11 w-full rounded-[45px] border border-line pl-5 pr-12 text-sm text-heading placeholder:text-muted focus:border-primary focus:outline-none"
          />
          <button
            type="button"
            aria-label={searchLabel}
            className="absolute top-0 right-0 flex h-11 w-11 items-center justify-center text-heading transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-primary"
          >
            <Search className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </section>

      {/* Author widget */}
      <section aria-label="Author" className="text-center">
        <img
          src={author.avatar}
          alt={author.name}
          className="mx-auto h-24 w-24 rounded-full object-cover"
        />
        <h4 className="mt-4 font-heading text-lg text-heading">{author.name}</h4>
        <p className="mt-1 text-sm">{author.role}</p>
        <div className="mt-3 flex justify-center gap-5">
          {authorSocials.map((social) => (
            <a
              key={social}
              href="#"
              aria-label={socialLabels[social]}
              className="text-heading transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              <BrandIcon name={social} />
            </a>
          ))}
        </div>
        <p className="mt-4 text-sm leading-6">{author.bio}</p>
      </section>

      {/* Popular posts */}
      <section aria-label="Popular posts">
        <h3 className={widgetTitle}>Popular Posts</h3>
        <ul className="space-y-6">
          {popularPosts.map((post) => (
            <li key={post.title} className="flex items-center gap-4">
              <img
                src={imgUrl(post.seed, 80, 80)}
                alt=""
                className="h-20 w-20 shrink-0 object-cover"
              />
              <div>
                <h3 className="font-heading text-base leading-5 text-heading">
                  <a
                    href="#"
                    className="transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  >
                    {post.title}
                  </a>
                </h3>
                <p className="mt-1 text-xs text-meta">{post.time}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Ad banner */}
      <section aria-label="Advertisement">
        <img src={adImage} alt={adAlt} className="w-full" />
      </section>

      {/* Post categories */}
      <section aria-label="Categories">
        <h3 className={widgetTitle}>Post Categories</h3>
        <ul>
          {categories.map(({ label, count }) => (
            <li
              key={label}
              className="border-b-2 border-dotted border-line transition-colors hover:border-primary"
            >
              <a
                href="#"
                aria-label={`${label} ${String(count).padStart(2, '0')}`}
                className="flex items-center justify-between py-3 text-sm text-body transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-primary"
              >
                <span>{label}</span>
                <span>{String(count).padStart(2, '0')}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* Tag cloud */}
      <section aria-label="Tags">
        <h3 className={widgetTitle}>Tag Clouds</h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <a
              key={`${tag}-${index}`}
              href="#"
              className="border border-line bg-white px-[13px] py-1.5 text-sm text-body transition-colors hover:bg-primary hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              {tag}
            </a>
          ))}
        </div>
      </section>
    </aside>
  )
}
