import { ArrowRight } from 'lucide-react'
import {
  blogCard,
  imgUrl,
  mostLiked,
  mostLikedHeading,
  readmoreLabel,
  topRated,
  topRatedHeading,
  type RecipeListEntry,
} from '../data'
import { StarRating } from './StarRating'

interface RecipeListProps {
  heading: string
  entries: readonly RecipeListEntry[]
}

function RecipeList({ heading, entries }: RecipeListProps) {
  return (
    <div>
      <h2 className="mb-6 text-lg font-medium text-ink dark:text-white">{heading}</h2>
      <ul className="space-y-5">
        {entries.map((entry) => (
          <li key={entry.name} className="flex items-start gap-4">
            <img
              src={imgUrl(entry.seed, 77, 77)}
              alt={entry.name}
              className="h-[77px] w-[77px] shrink-0 object-cover"
            />
            <div>
              <p className="text-xs font-medium text-primary">{entry.date}</p>
              <h3 className="mt-0.5 text-sm font-medium text-ink dark:text-gray-200">
                {entry.name}
              </h3>
              <StarRating className="mt-1" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function Widgets() {
  return (
    <section aria-label="Recipe widgets" className="bg-soft py-16 dark:bg-gray-900 lg:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 md:grid-cols-3">
        <RecipeList heading={topRatedHeading} entries={topRated} />
        <RecipeList heading={mostLikedHeading} entries={mostLiked} />

        <div>
          <h2 className="mb-6 text-lg font-medium text-ink dark:text-white">From the blog</h2>
          <article className="relative overflow-hidden bg-white shadow-[0_17px_29px_rgba(0,0,0,0.15)] dark:bg-gray-800">
            <div className="relative">
              <img
                src={imgUrl(blogCard.seed, 400, 220)}
                alt=""
                className="h-48 w-full object-cover"
              />
              <span className="absolute left-0 top-0 bg-primary px-3 py-2 text-sm font-medium text-white">
                {blogCard.date}
              </span>
            </div>
            <div className="p-6 pb-14">
              <h3 className="text-lg font-medium text-ink dark:text-white">{blogCard.title}</h3>
              <p className="mt-1 text-xs text-meta">{blogCard.author}</p>
              <p className="mt-3 text-sm leading-relaxed text-ink/70 dark:text-gray-300">
                {blogCard.excerpt}
              </p>
              <a
                href="#reviews"
                className="mt-4 inline-block text-xs font-medium text-meta transition-colors hover:text-primary"
              >
                {blogCard.comments}
              </a>
            </div>
            <a
              href="#reviews"
              aria-label={readmoreLabel}
              className="absolute bottom-0 right-0 flex h-[41px] w-[41px] items-center justify-center bg-primary text-white transition-colors hover:bg-primary/90"
            >
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </a>
          </article>
        </div>
      </div>
    </section>
  )
}
