import { Search } from 'lucide-react'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: 'url(https://picsum.photos/seed/laurel-hero/1920/1080)' }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-brand-dark/80" />

      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h1 className="font-heading text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
          Develop a passion for learning new things.
        </h1>
        <p className="mt-6 text-lg text-gray-300">
          Join thousands of students who are transforming their lives through education. Expert
          instructors, flexible schedules, and courses designed for your success.
        </p>

        {/* Search bar */}
        <form
          className="mx-auto mt-8 flex max-w-lg overflow-hidden rounded-lg"
          onSubmit={(e) => e.preventDefault()}
        >
          <label htmlFor="hero-search" className="sr-only">
            Search courses
          </label>
          <input
            id="hero-search"
            type="text"
            placeholder="Search for courses..."
            className="flex-1 px-4 py-3 text-sm text-brand-dark outline-none"
          />
          <button
            type="submit"
            aria-label="Search"
            className="flex items-center gap-2 bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent"
          >
            <Search className="h-4 w-4" />
            Search
          </button>
        </form>
      </div>
    </section>
  )
}
