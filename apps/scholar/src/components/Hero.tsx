import { Search } from 'lucide-react'

export function Hero() {
  return (
    <section id="home" className="bg-section-bg">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-4 py-16 sm:px-6 lg:flex-row lg:py-24">
        <div className="flex-1 text-center lg:text-left">
          <h1 className="font-display text-3xl font-bold leading-tight text-heading sm:text-4xl lg:text-5xl">
            Learn new skills online with top educators
          </h1>
          <p className="mt-4 text-base text-body sm:text-lg">
            Learn 100% online with world-class universities and industry experts.
          </p>

          <form
            className="mt-8 flex w-full max-w-md rounded-lg border border-gray-200 bg-white shadow-sm mx-auto lg:mx-0"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="text"
              placeholder="What do you want to learn?"
              className="flex-1 rounded-l-lg px-4 py-3 text-sm text-gray-700 outline-none"
              aria-label="Search courses"
            />
            <button
              type="submit"
              className="flex items-center justify-center gap-2 rounded-r-lg bg-accent-400 px-6 py-3 text-sm font-semibold text-white hover:bg-accent-500"
            >
              <Search className="h-4 w-4" aria-hidden="true" />
              Search
            </button>
          </form>
        </div>

        <div className="flex-1">
          <img
            src="https://picsum.photos/seed/scholar-hero/600/400"
            alt="Student learning online"
            className="w-full rounded-xl object-cover"
            width={600}
            height={400}
          />
        </div>
      </div>
    </section>
  )
}
