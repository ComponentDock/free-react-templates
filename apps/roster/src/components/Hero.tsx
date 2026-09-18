import { useState } from 'react'
import { Button } from '@free-react-templates/ui'
import { Search } from 'lucide-react'

const categories = ['All Categories', 'Restaurants', 'Hotels', 'Shopping', 'Health']

export function Hero() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState(categories[0])

  return (
    <section
      id="home"
      className="relative flex min-h-[600px] items-center bg-cover bg-center pt-24"
      style={{
        backgroundImage:
          'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://picsum.photos/seed/roster-hero/1600/900)',
      }}
    >
      <div className="mx-auto w-full max-w-5xl px-4 text-center">
        <h1 className="mb-4 text-5xl font-light text-white md:text-7xl">Explore Your City</h1>
        <p className="mb-10 text-lg text-white/90">
          Let&apos;s uncover the best places to eat, drink, and shop nearest to you.
        </p>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="mx-auto mb-10 flex max-w-3xl flex-wrap items-center gap-3 rounded-lg bg-white/20 p-3 backdrop-blur"
        >
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="What are you looking for?"
            className="h-14 flex-1 rounded-md bg-white px-5 text-text-dark placeholder-gray-400 focus:outline-none"
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="h-14 w-48 rounded-md bg-white px-4 text-text-dark focus:outline-none"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
          <Button variant="primary" size="lg" className="h-14 px-8">
            <Search className="mr-2 inline h-5 w-5" />
            Search
          </Button>
        </form>

        <div className="flex justify-center gap-6">
          {['🍽️ Restaurants', '🏨 Hotels', '🛍️ Shopping'].map((item) => (
            <a
              key={item}
              href="#categories"
              className="flex h-20 w-20 flex-col items-center justify-center rounded-full bg-white/90 text-2xl transition-transform hover:scale-110"
            >
              <span>{item.split(' ')[0]}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
