import { ArrowRight } from 'lucide-react'
import { heroReadMore, recentLabel, recentStories } from '../data'

export function RecentStories() {
  return (
    <section aria-label={recentLabel} className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* heading-section — serif heading with the 10px yellow square dot
            after the last word (h2 span:after in the original). */}
        <h2 className="mb-10 font-serif text-3xl font-normal text-ink dark:text-white">
          {recentLabel}
          <span aria-hidden="true" className="ml-2 inline-block h-2.5 w-2.5 bg-accent" />
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {recentStories.map((story) => (
            <article key={story.title} className="group relative overflow-hidden">
              <img
                src={`https://picsum.photos/seed/${story.seed}/600/500`}
                alt={story.title}
                className="h-72 w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                  {story.category}
                </span>
                <h3 className="mt-2 font-serif text-2xl leading-snug text-white">
                  <a href="#" className="transition-colors hover:text-accent">
                    {story.title}
                  </a>
                </h3>
                <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-white">
                  <a href="#" className="inline-flex items-center gap-2 hover:text-accent">
                    {heroReadMore}
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
