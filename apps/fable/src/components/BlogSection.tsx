import { ArrowRight, MapPin, Search } from 'lucide-react'
import {
  aboutMeTitle,
  authorBio,
  authorImageAlt,
  authorName,
  authorSeed,
  blogEntries,
  blogHeading,
  blogSectionLabel,
  categories,
  categoriesTitle,
  heroReadMore,
  searchLabelText,
  searchPlaceholder,
} from '../data'

export function BlogSection() {
  return (
    <section aria-label={blogSectionLabel} className="bg-white py-20 dark:bg-white/0">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_320px]">
          {/* Blog list. */}
          <div>
            <h2 className="mb-10 font-serif text-3xl font-normal text-ink dark:text-white">
              {blogHeading}
            </h2>
            <div className="grid gap-10 sm:grid-cols-2">
              {blogEntries.map((entry) => (
                <article key={entry.title} className="flex flex-col">
                  <img
                    src={`https://picsum.photos/seed/${entry.seed}/600/420`}
                    alt={entry.title}
                    className="h-56 w-full object-cover"
                  />
                  <div className="flex items-center gap-3 pt-4 text-xs font-semibold uppercase tracking-wide">
                    <span className="text-accent">{entry.category}</span>
                    <span className="text-meta">{entry.date}</span>
                  </div>
                  <h3 className="mt-2 font-serif text-xl leading-snug text-ink dark:text-white">
                    <a href="#" className="transition-colors hover:text-brand">
                      {entry.title}
                    </a>
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/70 dark:text-white/70">
                    {entry.excerpt}
                  </p>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-ink dark:text-white">
                    <a href="#" className="inline-flex items-center gap-2 hover:text-brand">
                      {heroReadMore}
                      <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </a>
                  </p>
                </article>
              ))}
            </div>
          </div>

          {/* Sidebar. */}
          <aside className="flex flex-col gap-8">
            <div className="bg-paper p-6 text-center dark:bg-white/5">
              <h3 className="mb-4 font-serif text-xl text-ink dark:text-white">{aboutMeTitle}</h3>
              <img
                src={`https://picsum.photos/seed/${authorSeed}/200/200`}
                alt={authorImageAlt}
                className="mx-auto h-24 w-24 rounded-full object-cover"
              />
              <p className="mt-4 text-sm leading-relaxed text-ink/70 dark:text-white/70">
                Hi! My name is{' '}
                <strong className="font-semibold text-ink dark:text-white">{authorName}</strong>,{' '}
                {authorBio}
              </p>
            </div>

            <div className="bg-paper p-6 dark:bg-white/5">
              <form role="search" className="flex items-center gap-2">
                <label htmlFor="fable-search" className="sr-only">
                  {searchLabelText}
                </label>
                <input
                  id="fable-search"
                  type="search"
                  placeholder={searchPlaceholder}
                  className="w-full border border-ink/10 bg-white px-4 py-2.5 text-sm outline-none transition-colors focus:border-brand dark:bg-coal dark:text-white"
                />
                <button
                  type="submit"
                  aria-label={searchLabelText}
                  className="flex h-10 w-10 shrink-0 items-center justify-center bg-brand text-white transition-colors hover:bg-primary-700"
                >
                  <Search className="h-4 w-4" aria-hidden="true" />
                </button>
              </form>
            </div>

            <div className="bg-paper p-6 dark:bg-white/5">
              <h3 className="mb-4 font-serif text-xl text-ink dark:text-white">
                {categoriesTitle}
              </h3>
              <ul className="space-y-3">
                {categories.map((category) => (
                  <li key={category.label}>
                    <a
                      href="#"
                      className="group flex items-center gap-3 transition-colors hover:text-brand"
                    >
                      <span className="flex h-10 w-10 items-center justify-center bg-white text-ink/40 transition-colors group-hover:bg-accent group-hover:text-ink dark:bg-coal dark:text-white/40">
                        <MapPin className="h-4 w-4" aria-hidden="true" />
                      </span>
                      <span className="text-sm font-semibold text-ink dark:text-white">
                        {category.label}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
