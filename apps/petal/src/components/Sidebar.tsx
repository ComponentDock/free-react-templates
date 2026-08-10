import { useState, type FormEvent } from 'react'
import { Search } from 'lucide-react'
import { Badge, Button, ButtonLink } from '@free-react-templates/ui'
import { BrandIcon, type BrandName } from './BrandIcon'
import {
  authorBio,
  authorName,
  imgUrl,
  instagramThumbs,
  latestPosts,
  newsletterHeading,
  newsletterLabel,
  newsletterPlaceholder,
  newsletterSubmitLabel,
  newsletterSuccess,
  searchLabel,
  sidebarCategories,
  tags,
} from '../data'

const authorSocials: ReadonlyArray<{ label: string; name: BrandName }> = [
  { label: 'Facebook', name: 'facebook' },
  { label: 'X', name: 'x' },
  { label: 'Instagram', name: 'instagram' },
  { label: 'Pinterest', name: 'pinterest' },
]

function SectionTitle({ children }: { children: string }) {
  return (
    <h3 className="mb-6 font-display text-lg font-semibold uppercase tracking-[0.15em] text-ink dark:text-gray-100">
      {children}
    </h3>
  )
}

export function Sidebar() {
  const [subscribed, setSubscribed] = useState(false)

  function handleSubscribe(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubscribed(true)
  }

  return (
    <aside aria-label="Sidebar" className="space-y-12">
      {/* About author */}
      <section className="px-6 pb-6 pt-0 shadow-[0_10px_40px_rgba(0,0,0,0.2)] dark:bg-gray-800">
        <img
          src={imgUrl('petal-author', 300, 300)}
          alt={authorName}
          className="mx-auto -mt-8 max-w-[150px] -translate-y-5 rounded-[3px]"
        />
        <h3 className="mt-2 text-center font-display text-xl font-semibold text-ink dark:text-gray-100">
          {authorName}
        </h3>
        <p className="mt-3 text-center text-sm leading-relaxed text-body dark:text-gray-400">
          {authorBio}
        </p>
        <a
          href="#about"
          className="mt-4 block text-center text-sm font-medium tracking-[0.2em] text-brand underline decoration-brand/40 underline-offset-4 transition-colors hover:decoration-brand"
        >
          Read More
        </a>
        <ul className="mt-5 flex items-center justify-center gap-3">
          {authorSocials.map((social) => (
            <li key={social.label}>
              <a
                href="#about"
                aria-label={social.label}
                className="text-faint transition-colors hover:text-brand dark:text-gray-500 dark:hover:text-brand"
              >
                <BrandIcon name={social.name} className="h-4 w-4" />
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* Search */}
      <section>
        <div role="search" className="relative">
          <label htmlFor="sidebar-search" className="sr-only">
            {searchLabel}
          </label>
          <input
            id="sidebar-search"
            type="search"
            placeholder="Search…"
            className="w-full border-0 border-b border-[#bbb] bg-transparent py-3 pr-12 text-sm text-ink outline-none transition-colors focus:border-brand dark:border-gray-600 dark:text-gray-200"
          />
          <button
            type="button"
            aria-label={searchLabel}
            className="absolute right-0 top-1/2 -translate-y-1/2 text-muted transition-colors hover:text-brand dark:text-gray-400"
          >
            <Search className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-night p-6 dark:bg-gray-950">
        <h3 className="font-display text-lg font-semibold uppercase tracking-[0.15em] text-white">
          {newsletterHeading}
        </h3>
        {subscribed ? (
          <p role="status" className="mt-4 text-sm text-brand">
            {newsletterSuccess}
          </p>
        ) : (
          <form onSubmit={handleSubscribe} className="mt-4 space-y-3">
            <label htmlFor="newsletter-email" className="sr-only">
              {newsletterLabel}
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              placeholder={newsletterPlaceholder}
              className="w-full bg-white px-4 py-2.5 text-sm text-ink outline-none placeholder:text-muted focus:ring-2 focus:ring-brand"
            />
            <Button
              type="submit"
              className="w-full rounded-sm bg-brand text-white hover:bg-primary-700"
            >
              {newsletterSubmitLabel}
            </Button>
          </form>
        )}
      </section>

      {/* Categories */}
      <section>
        <SectionTitle>Categories</SectionTitle>
        <ul className="space-y-5">
          {sidebarCategories.map((category) => (
            <li key={category.name}>
              <a
                href={`#${category.name.toLowerCase()}`}
                className="group relative block overflow-hidden"
              >
                <img
                  src={imgUrl(category.seed, 360, 160)}
                  alt={category.name}
                  className="h-32 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <span className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-brand px-5 py-2 text-xs font-medium text-white">
                  {category.name}
                  <span className="rounded-full bg-white/25 px-2 py-0.5">{category.count}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* Latest posts */}
      <section>
        <SectionTitle>Latest Posts</SectionTitle>
        <ul className="space-y-5">
          {latestPosts.map((post) => (
            <li key={post.title} className="flex gap-4">
              <img
                src={imgUrl(post.seed, 80, 80)}
                alt=""
                className="h-20 w-20 shrink-0 rounded-sm object-cover"
              />
              <div>
                <Badge className="rounded-sm bg-brand px-2 py-0.5 text-[10px] font-medium text-white">
                  {post.category}
                </Badge>
                <a
                  href="#top"
                  className="mt-1.5 block font-display text-sm font-medium leading-snug text-ink transition-colors hover:text-brand dark:text-gray-100"
                >
                  {post.title}
                </a>
                <p className="mt-1 text-xs text-faint dark:text-gray-500">{post.date}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Advertisement */}
      <section>
        <div className="relative overflow-hidden">
          <img
            src={imgUrl('petal-ad', 360, 300)}
            alt="Advertisement"
            className="h-72 w-full object-cover"
          />
          <ButtonLink
            href="#top"
            className="absolute bottom-5 left-1/2 w-52 -translate-x-1/2 rounded-sm border border-white bg-transparent px-4 py-2 text-sm font-medium text-white hover:border-brand hover:bg-brand"
          >
            Discover
          </ButtonLink>
        </div>
      </section>

      {/* Instagram */}
      <section>
        <SectionTitle>Instagram</SectionTitle>
        <ul className="grid grid-cols-3 gap-2">
          {instagramThumbs.map((thumb) => (
            <li key={thumb.seed}>
              <a href="#top" aria-label={thumb.alt} className="block overflow-hidden">
                <img
                  src={imgUrl(thumb.seed, 120, 120)}
                  alt={thumb.alt}
                  className="aspect-square w-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#top"
          className="mt-4 inline-flex items-center gap-1.5 text-sm text-body transition-colors hover:text-brand dark:text-gray-300"
        >
          <BrandIcon name="instagram" className="h-4 w-4" />
          Follow me © instagram
        </a>
      </section>

      {/* Tags */}
      <section>
        <SectionTitle>Tags</SectionTitle>
        <ul className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <li key={tag}>
              <a
                href={`#${tag.toLowerCase()}`}
                className="inline-block bg-section px-4 py-2 text-sm text-body transition-colors hover:bg-brand hover:text-white dark:bg-gray-800 dark:text-gray-300"
              >
                {tag}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </aside>
  )
}
