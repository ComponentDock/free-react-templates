import { useState, type FormEvent } from 'react'
import { Search } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { BrandIcon } from './BrandIcon'
import { categories, popularPosts, socialLabels, socialLinks, tags } from '../data'

export function Sidebar() {
  const [query, setQuery] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <aside aria-label="Sidebar" className="flex flex-col gap-8">
      <form onSubmit={handleSubmit} role="search" className="relative">
        <label htmlFor="sidebar-search" className="sr-only">
          Search
        </label>
        <input
          id="sidebar-search"
          type="search"
          placeholder="Type a keyword and hit enter"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          className="w-full bg-surface px-4 py-4 text-sm text-ink placeholder:text-body focus:outline-none focus:ring-2 focus:ring-brand dark:bg-gray-900 dark:text-gray-200"
        />
        <Search
          className="absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-body dark:text-gray-400"
          aria-hidden="true"
        />
      </form>

      <div className="border border-line bg-white px-4 pb-4 pt-16 text-center dark:border-gray-700 dark:bg-gray-900">
        <img
          src="https://picsum.photos/seed/gazette-bio/100/100"
          alt="Meagan Smith"
          className="mx-auto -mt-[4em] h-[100px] w-[100px] rounded-full object-cover"
        />
        <h3 className="mt-4 font-sans text-xl font-bold text-ink dark:text-white">Meagan Smith</h3>
        <p className="mt-3 text-sm leading-relaxed text-body dark:text-gray-400">
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
          there live the blind texts.
        </p>
        <a
          href="#home"
          className="mt-4 inline-block border-2 border-brand bg-brand px-5 py-2 text-sm text-white transition-colors hover:border-brand-hover hover:bg-brand-hover"
        >
          Read my bio
        </a>
        <ul className="mt-5 flex items-center justify-center gap-3" aria-label="Bio social links">
          {socialLinks.map((name) => (
            <li key={name}>
              <a
                href="#home"
                aria-label={socialLabels[name]}
                className="text-ink transition-colors hover:text-brand dark:text-gray-300"
              >
                <BrandIcon name={name} className="h-4 w-4" />
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="border-b border-line pb-5 font-sans text-lg font-bold text-ink dark:border-gray-700 dark:text-white">
          Popular Posts
        </h3>
        <ul className="mt-6 flex flex-col gap-5">
          {popularPosts.map((post) => (
            <li key={post.seed} className="flex items-center gap-4">
              <img
                src={`https://picsum.photos/seed/${post.seed}/90/90`}
                alt=""
                className="h-[90px] w-[90px] object-cover"
              />
              <div>
                <h4 className="font-sans text-lg font-bold leading-snug text-ink dark:text-gray-100">
                  <a href="#home" className="transition-colors hover:text-brand">
                    {post.title}
                  </a>
                </h4>
                <p className="mt-1 text-sm text-meta dark:text-gray-400">{post.date}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="border-b border-line pb-5 font-sans text-lg font-bold text-ink dark:border-gray-700 dark:text-white">
          Categories
        </h3>
        <ul className="mt-2">
          {categories.map((category, index) => (
            <li key={category.name}>
              <a
                href="#home"
                className={cn(
                  'flex items-center justify-between border-b border-dotted border-gray-300 py-2.5 text-sm text-ink transition-colors hover:text-brand dark:text-gray-200',
                  index === 0 && 'italic dark:text-gray-100',
                )}
              >
                {category.name}
                <span className="text-[#ccc]">{category.count}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="border-b border-line pb-5 font-sans text-lg font-bold text-ink dark:border-gray-700 dark:text-white">
          Tags
        </h3>
        <ul className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <li key={tag}>
              <a
                href="#home"
                className="inline-block bg-tag px-1.5 py-0.5 text-sm text-body transition-colors hover:bg-brand hover:text-white dark:bg-gray-800 dark:text-gray-300"
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
