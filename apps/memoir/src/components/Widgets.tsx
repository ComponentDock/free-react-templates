import { useState, type FormEvent } from 'react'
import { Calendar, MessageCircle, Search, User } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const categories = [
  { name: 'Fashion', count: 6 },
  { name: 'Technology', count: 8 },
  { name: 'Travel', count: 2 },
  { name: 'Food', count: 2 },
  { name: 'Photography', count: 7 },
] as const

const popular = [
  {
    seed: 'memoir-popular-1',
    title: 'Why We Wander: A Love Letter to Slow Travel',
    date: 'June 28, 2019',
    author: 'Dave Lewis',
    comments: '19',
  },
  {
    seed: 'memoir-popular-2',
    title: 'The Quiet Power of an Early Morning',
    date: 'June 20, 2019',
    author: 'Ana Field',
    comments: '12',
  },
  {
    seed: 'memoir-popular-3',
    title: 'Notes on Cooking for the People You Love',
    date: 'June 12, 2019',
    author: 'Mara Quinn',
    comments: '8',
  },
] as const

const tags = ['animals', 'human', 'people', 'cat', 'dog', 'nature', 'leaves', 'food'] as const

const archives = [
  { month: 'December 2018', count: 10 },
  { month: 'September 2018', count: 6 },
  { month: 'August 2018', count: 8 },
  { month: 'July 2018', count: 2 },
  { month: 'June 2018', count: 7 },
  { month: 'May 2018', count: 5 },
] as const

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function Widgets() {
  const [newsletterEmail, setNewsletterEmail] = useState('')
  const [newsletterError, setNewsletterError] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleNewsletterSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!emailPattern.test(newsletterEmail)) {
      setNewsletterError('Please enter a valid email address.')
      return
    }
    setNewsletterError('')
    setSubscribed(true)
    setNewsletterEmail('')
  }

  return (
    <div className="space-y-10 bg-soft-100 p-6 lg:p-8">
      {/* Search */}
      <form className="bg-soft-200 p-2.5">
        <label htmlFor="widget-search" className="sr-only">
          Search
        </label>
        <div className="relative flex items-center">
          <input
            id="widget-search"
            type="search"
            placeholder="Type a keyword and hit enter"
            className="w-full bg-transparent py-2 pr-9 text-sm text-body-900 placeholder:text-meta-500 focus:outline-none"
          />
          <Search className="absolute right-0 h-4 w-4 text-meta-500" aria-hidden="true" />
        </div>
      </form>

      {/* Categories */}
      <div>
        <h3 className="mb-8 font-serif text-xl text-ink-900 italic">Categories</h3>
        <ul>
          {categories.map((category) => (
            <li
              key={category.name}
              className="flex items-center justify-between border-b border-line-200 py-2.5"
            >
              <a href="#" className="text-body-900 transition-colors hover:text-sky-500">
                {category.name}
              </a>
              <span className="text-body-900">({category.count})</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Popular Articles */}
      <div>
        <h3 className="mb-8 font-serif text-xl text-ink-900 italic">Popular Articles</h3>
        <ul className="space-y-6">
          {popular.map((article) => (
            <li key={article.seed} className="flex gap-4">
              <img
                src={`https://picsum.photos/seed/${article.seed}/160/160`}
                alt={article.title}
                loading="lazy"
                className="h-20 w-20 shrink-0 object-cover"
              />
              <div className="min-w-0">
                <h4 className="text-base leading-snug">
                  <a href="#" className="text-ink-900 transition-colors hover:text-sky-500">
                    {article.title}
                  </a>
                </h4>
                <p className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-meta-500">
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                    {article.date}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <User className="h-3.5 w-3.5" aria-hidden="true" />
                    {article.author}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />
                    {article.comments}
                  </span>
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Tag Cloud */}
      <div>
        <h3 className="mb-8 font-serif text-xl text-ink-900 italic">Tag Cloud</h3>
        <ul className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <li key={tag}>
              <a
                href="#"
                className="inline-block border border-cloud-500 px-2.5 py-1 text-[11px] tracking-wide text-black uppercase transition-colors hover:border-black"
              >
                {tag}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Newsletter card */}
      <div className="relative overflow-hidden bg-gradient-to-br from-sky-800 via-sky-900 to-night-900 py-6 px-6 text-white">
        <div aria-hidden="true" className="absolute inset-0 bg-black/60" />
        <div className="relative">
          <h3 className="font-serif text-xl text-white">Newsletter</h3>
          <p className="mt-3 text-sm text-white/70">
            Far far away, behind the word mountains, far from the countries Vokalia.
          </p>
          {subscribed ? (
            <p role="status" className="mt-5 text-sm text-white">
              Thank you for subscribing — see you in your inbox!
            </p>
          ) : (
            <form onSubmit={handleNewsletterSubmit} noValidate className="mt-5">
              <label htmlFor="widget-newsletter-email" className="sr-only">
                Newsletter email
              </label>
              <input
                id="widget-newsletter-email"
                type="email"
                value={newsletterEmail}
                onChange={(event) => setNewsletterEmail(event.target.value)}
                placeholder="Email Address"
                className="w-full border-b border-white/40 bg-transparent py-2 text-sm text-white placeholder:text-white/50 focus:border-white focus:outline-none"
              />
              {newsletterError && (
                <p role="alert" className="mt-2 text-sm text-white">
                  {newsletterError}
                </p>
              )}
              <button
                type="submit"
                className={cn(
                  'mt-4 w-full rounded-full bg-white py-2.5 text-sm font-medium text-black transition-colors hover:text-sky-500',
                )}
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Archives */}
      <div>
        <h3 className="mb-8 font-serif text-xl text-ink-900 italic">Archives</h3>
        <ul>
          {archives.map((archive) => (
            <li
              key={archive.month}
              className="flex items-center justify-between border-b border-line-200 py-2.5"
            >
              <a href="#" className="text-body-900 transition-colors hover:text-sky-500">
                {archive.month}
              </a>
              <span className="text-body-900">({archive.count})</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Paragraph */}
      <div>
        <h3 className="mb-8 font-serif text-xl text-ink-900 italic">Paragraph</h3>
        <p className="text-sm leading-relaxed text-body-900">
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
          there live the blind texts. Separated they live in Bookmarksgrove right at the coast of
          the Semantics, a large language ocean.
        </p>
      </div>
    </div>
  )
}
