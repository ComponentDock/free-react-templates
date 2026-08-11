import { blogEntries } from '../data'
import { SocialIcons } from './SocialIcons'

export function BlogList() {
  return (
    <section id="blog" aria-label="Blog" className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {blogEntries.map((entry) => (
          <article
            key={entry.seed}
            className="group mb-10 grid gap-4 md:grid-cols-12 md:items-center"
          >
            <a
              href="#blog"
              aria-label={entry.title}
              className="block overflow-hidden md:col-span-8"
            >
              <img
                src={`https://picsum.photos/seed/${entry.seed}/800/400`}
                alt={entry.title}
                className="h-[400px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </a>
            <div className="md:col-span-4 md:pl-6">
              <span className="text-sm font-medium uppercase tracking-wide text-black/30">
                {entry.category}
              </span>
              <h2 className="mt-2 text-3xl font-bold leading-tight text-ink md:text-[40px]">
                <a href="#blog" className="transition-colors hover:text-brand">
                  {entry.title}
                </a>
              </h2>
              <SocialIcons hoverReveal />
              <p className="mt-3 text-sm text-black/40">
                {entry.date} | {entry.readTime}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
