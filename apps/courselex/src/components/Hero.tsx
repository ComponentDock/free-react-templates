import { cn } from '@free-react-templates/ui'
import { Search } from 'lucide-react'
import { useState } from 'react'

const tags = ['Ruby on Rails', 'Python', 'Marketing', 'Block Chain', 'Data Science', 'UI/UX']

export function Hero() {
  const [query, setQuery] = useState('')

  return (
    <section
      id="home"
      className="relative flex min-h-[600px] items-center justify-center bg-gradient-to-r from-teal-grad-start to-teal-grad-end px-4 pt-24 pb-16 text-center"
    >
      <div className="mx-auto max-w-3xl">
        <h1 className="font-heading text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-5xl">
          We Rank the Best Courses on the Web
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-base text-white/80 sm:text-lg">
          Discover top-rated courses from the world's leading platforms. Your next great learning
          experience starts here.
        </p>

        {/* Search form */}
        <form
          className="mx-auto mt-8 flex max-w-md overflow-hidden rounded-md bg-white shadow-lg"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            placeholder="Search courses..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Search courses"
            className="flex-1 px-4 py-3 text-sm text-brand-dark outline-none"
          />
          <button
            type="submit"
            aria-label="Search"
            className="flex items-center justify-center bg-teal-grad-end px-5 text-white transition-colors hover:bg-teal-grad-start"
          >
            <Search className="h-5 w-5" />
          </button>
        </form>

        {/* Tag pills */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className={cn(
                'cursor-pointer rounded-full bg-white/20 px-4 py-1.5 text-xs font-medium text-white',
                'transition-colors hover:bg-white/30',
              )}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
