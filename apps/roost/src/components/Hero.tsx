import { Search } from 'lucide-react'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[600px] items-center bg-cover bg-center pt-20"
      style={{
        backgroundImage:
          'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(https://picsum.photos/seed/roost-hero/1600/900)',
      }}
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <h1 className="mb-4 text-4xl font-bold leading-tight text-white sm:text-5xl">
            Get your way home worldwide
          </h1>
          <p className="mb-8 text-lg text-gray-200">
            A small river named Duden flows by their place and supplies it with the necessary
            regelialia.
          </p>
          <div className="flex w-full max-w-lg overflow-hidden rounded-full bg-white shadow-lg">
            <input
              type="text"
              placeholder="Search places..."
              className="flex-1 px-5 py-3 text-sm text-gray-700 outline-none"
              aria-label="Search places"
            />
            <button
              type="button"
              className="flex items-center gap-2 bg-primary-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-primary-700"
            >
              <Search className="h-4 w-4" />
              Search Places
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
