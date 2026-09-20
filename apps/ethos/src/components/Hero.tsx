import { type FormEvent } from 'react'
import { Search } from 'lucide-react'

export function Hero() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <section
      id="home"
      className="relative flex min-h-[500px] items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('https://picsum.photos/seed/ethos-1/1600/800')" }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h1 className="text-4xl font-bold uppercase tracking-wide text-white md:text-5xl">
          Find Online Courses That Suit You
        </h1>

        <form
          onSubmit={handleSubmit}
          className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center"
        >
          <label htmlFor="hero-search" className="sr-only">
            Search courses
          </label>
          <input
            id="hero-search"
            type="text"
            placeholder="What do you want to learn?"
            className="flex-1 rounded-none border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-500 focus:border-brand-400 focus:outline-none"
          />
          <select
            aria-label="Category"
            className="rounded-none border border-gray-300 bg-white px-4 py-3 text-sm text-gray-700 focus:border-brand-400 focus:outline-none"
          >
            <option value="">Select Category</option>
            <option value="arts">Arts &amp; Sciences</option>
            <option value="engineering">Engineering</option>
            <option value="business">Business</option>
            <option value="education">Education</option>
          </select>
          <select
            aria-label="Difficulty"
            className="rounded-none border border-gray-300 bg-white px-4 py-3 text-sm text-gray-700 focus:border-brand-400 focus:outline-none"
          >
            <option value="">Select Difficulty</option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
          <button
            type="submit"
            className="flex items-center justify-center gap-2 bg-brand-400 px-8 py-3 text-sm font-semibold text-white shadow-md transition-colors hover:bg-brand-500"
          >
            <Search className="h-4 w-4" />
            Search
          </button>
        </form>
      </div>
    </section>
  )
}
