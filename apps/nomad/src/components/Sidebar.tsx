import { useState, type FormEvent } from 'react'
import { Search } from 'lucide-react'
import { archives, destinations, popularArticles, tags } from '../data'

function SearchWidget() {
  return (
    <div className="sidebar-box mb-10 bg-[#fafafa] p-2.5">
      <form
        role="search"
        onSubmit={(event) => event.preventDefault()}
        className="flex items-center"
      >
        <input
          type="text"
          placeholder="Type a keyword and hit enter"
          aria-label="Search keywords"
          className="w-full bg-transparent px-3 py-2 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none"
        />
        <button
          type="submit"
          aria-label="Search"
          className="shrink-0 rounded p-2 text-gray-500 transition-colors hover:text-coral"
        >
          <Search className="h-5 w-5" aria-hidden="true" />
        </button>
      </form>
    </div>
  )
}

function DestinationWidget() {
  return (
    <div className="sidebar-box mb-10">
      <h3 className="mb-6 border-b-2 border-gray-100 pb-3 text-lg font-semibold text-black">
        Destination
      </h3>
      <ul className="space-y-2">
        {destinations.map((item) => (
          <li key={item.label}>
            <a
              href="#blog"
              className="group flex items-baseline justify-between text-body transition-colors hover:text-coral"
            >
              <span>{item.label}</span>
              <span className="text-sm text-muted">({item.count})</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

function PopularWidget() {
  return (
    <div className="sidebar-box mb-10">
      <h3 className="mb-6 border-b-2 border-gray-100 pb-3 text-lg font-semibold text-black">
        Popular Articles
      </h3>
      <div className="space-y-6">
        {popularArticles.map((item) => (
          <a key={item.id} href="#blog" className="group flex gap-4">
            <img src={item.thumb} alt="" className="h-20 w-20 shrink-0 object-cover" />
            <div>
              <h4 className="mb-1 text-lg leading-snug font-light text-black transition-colors group-hover:text-coral">
                {item.title}
              </h4>
              <p className="text-xs text-muted">{item.meta}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}

function TagCloud() {
  return (
    <div className="sidebar-box mb-10">
      <h3 className="mb-6 border-b-2 border-gray-100 pb-3 text-lg font-semibold text-black">
        Tag Cloud
      </h3>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <a
            key={tag}
            href="#blog"
            className="border border-gray-300 px-2.5 py-1 text-[11px] tracking-wide text-black uppercase transition-colors hover:border-black"
          >
            {tag}
          </a>
        ))}
      </div>
    </div>
  )
}

function NewsletterWidget() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address.')
      setSubscribed(false)
      return
    }
    setError(null)
    setSubscribed(true)
  }

  return (
    <div className="sidebar-box subs-wrap mb-10 bg-coral p-6 text-white">
      <h3 className="mb-3 text-2xl font-semibold text-white">Subscribe to our Newsletter</h3>
      <p className="mb-6 text-sm text-white/80">
        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.
      </p>
      <form onSubmit={handleSubmit} noValidate className="space-y-3">
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          id="newsletter-email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Email address"
          className="w-full border border-white/40 bg-transparent px-4 py-3 text-sm text-white placeholder:text-white/60 focus:border-white focus:outline-none"
        />
        <button
          type="submit"
          className="w-full bg-white py-3 text-sm font-medium text-black transition-colors hover:text-coral"
        >
          Subscribe
        </button>
      </form>
      {error && (
        <p role="alert" className="mt-3 text-sm font-semibold text-white">
          {error}
        </p>
      )}
      {subscribed && (
        <p role="status" className="mt-3 text-sm font-semibold text-white">
          You&rsquo;re subscribed! Check your inbox to confirm.
        </p>
      )}
    </div>
  )
}

function ArchivesWidget() {
  return (
    <div className="sidebar-box mb-10">
      <h3 className="mb-6 border-b-2 border-gray-100 pb-3 text-lg font-semibold text-black">
        Archives
      </h3>
      <ul className="space-y-2">
        {archives.map((item) => (
          <li key={item.label}>
            <a
              href="#blog"
              className="flex items-baseline justify-between text-body transition-colors hover:text-coral"
            >
              <span>{item.label}</span>
              <span className="text-sm text-muted">({item.count})</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

function ParagraphWidget() {
  return (
    <div className="sidebar-box">
      <h3 className="mb-6 border-b-2 border-gray-100 pb-3 text-lg font-semibold text-black">
        Paragraph
      </h3>
      <p className="text-sm leading-relaxed text-body">
        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
        there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the
        Semantics, a large language ocean.
      </p>
    </div>
  )
}

export function Sidebar() {
  return (
    <div className="sidebar">
      <SearchWidget />
      <DestinationWidget />
      <PopularWidget />
      <TagCloud />
      <NewsletterWidget />
      <ArchivesWidget />
      <ParagraphWidget />
    </div>
  )
}
