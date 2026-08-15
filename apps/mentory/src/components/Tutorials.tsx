import { useState, type FormEvent } from 'react'
import { Search } from 'lucide-react'
import { tutorials, sidebarItems } from '../data'
import { BrandIcon } from './BrandIcon'

const shareButtons = ['facebook', 'twitter', 'linkedin']

export function Tutorials() {
  const [query, setQuery] = useState('')
  const [message, setMessage] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const trimmed = query.trim()
    if (!trimmed) {
      setError('Please enter a subject to search.')
      setMessage(null)
      return
    }
    setError(null)
    setMessage(`Searching tutorials for "${trimmed}"...`)
  }

  return (
    <section id="tutorials" className="site-section bg-light">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-5 flex flex-col gap-4 md:flex-row md:items-center">
          <form className="flex md:flex-1" onSubmit={handleSubmit} role="search">
            <label htmlFor="search-subjects" className="sr-only">
              Search subjects
            </label>
            <input
              id="search-subjects"
              type="search"
              placeholder="Search subjects"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              className="h-[55px] w-full bg-control px-4 text-body focus:bg-control-focus focus:border-brand focus:outline-none"
            />
            <button
              type="submit"
              className="flex items-center gap-2 bg-brand px-4 font-bold text-white uppercase transition-colors hover:bg-brand-dark"
            >
              <Search className="h-4 w-4" />
              Search
            </button>
          </form>
          <div className="flex items-center gap-2 md:justify-end">
            <span className="mr-2">Share:</span>
            {shareButtons.map((name) => (
              <a
                key={name}
                href="#"
                aria-label={`Share on ${name}`}
                className="flex h-10 w-10 items-center justify-center bg-white text-body transition-colors hover:bg-brand hover:text-white"
              >
                <BrandIcon name={name} className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        {error && (
          <p role="alert" className="mb-4 text-sm text-red-600">
            {error}
          </p>
        )}
        {message && (
          <p role="status" className="mb-4 text-sm text-body">
            {message}
          </p>
        )}
        <div className="mb-4">
          <p className="text-xs font-bold tracking-[0.2em] uppercase">Latest</p>
          <h2 className="mt-2 text-[30px] font-bold text-brand">Tutorials</h2>
        </div>
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-8">
            {tutorials.map((tutorial) => (
              <article
                key={tutorial.title}
                className="mb-4 flex flex-col rounded-[4px] bg-white p-5 shadow-[0_10px_20px_rgba(0,0,0,0.1)] sm:flex-row"
              >
                <img
                  src={tutorial.image}
                  alt=""
                  className="h-auto w-full object-cover sm:w-[250px] sm:shrink-0"
                />
                <div className="mt-4 sm:ml-[30px] sm:mt-0">
                  <h3 className="text-xl font-normal">
                    <a href="#" className="text-black">
                      {tutorial.title}
                    </a>
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-body">
                    Far far away, behind the word mountains, far from the countries Vokalia and
                    Consonantia, there live the blind texts.
                  </p>
                  <div className="mt-3 flex items-center gap-2 text-brand">
                    {tutorial.icons.map((icon) => (
                      <BrandIcon key={icon} name={icon} className="h-5 w-5" />
                    ))}
                  </div>
                  <p className="mt-3 text-sm text-meta">{tutorial.meta}</p>
                  <p className="mt-4">
                    <a
                      href="#"
                      className="inline-block bg-brand px-4 py-2 text-xs font-bold tracking-[0.1rem] text-white uppercase transition-colors hover:bg-brand-dark"
                    >
                      View
                    </a>
                  </p>
                </div>
              </article>
            ))}
            <nav aria-label="Tutorial pages" className="mt-8">
              <ul className="flex gap-2">
                {[1, 2, 3, 4, 5].map((page) => (
                  <li key={page}>
                    {page === 1 ? (
                      <span className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-brand text-xl text-white">
                        {page}
                      </span>
                    ) : (
                      <a
                        href="#"
                        aria-label={`Page ${page}`}
                        className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-white text-xl text-body transition-colors hover:bg-brand hover:text-white"
                      >
                        {page}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <aside className="flex flex-col gap-4 lg:col-span-4">
            {sidebarItems.map((item) => (
              <article
                key={item.image}
                className="rounded-[4px] bg-white p-5 shadow-[0_10px_20px_rgba(0,0,0,0.1)]"
              >
                <img src={item.image} alt="" className="mb-5 h-auto w-full object-cover" />
                <h3 className="text-xl font-normal">
                  <a href="#" className="text-black">
                    {item.title}
                  </a>
                </h3>
              </article>
            ))}
          </aside>
        </div>
      </div>
    </section>
  )
}
