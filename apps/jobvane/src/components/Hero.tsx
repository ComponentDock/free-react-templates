import { Search } from 'lucide-react'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[600px] items-center bg-cover bg-center pt-20"
      style={{ backgroundImage: 'url(https://picsum.photos/seed/jobvane-hero/1920/1080)' }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative mx-auto max-w-7xl px-4 py-20 text-center text-white lg:px-8">
        <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary-300">
          We have 0 great job offers you deserve!
        </p>
        <h1 className="mb-6 text-4xl font-extrabold md:text-6xl">Largest Job Site In The World</h1>

        <div className="mx-auto mt-8 max-w-4xl rounded-lg bg-white p-6 shadow-xl">
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="flex flex-1 items-center gap-2 rounded border border-gray-200 px-4 py-3">
              <Search className="h-5 w-5 text-smoke" />
              <input
                type="text"
                placeholder="Job title, keywords..."
                className="w-full bg-transparent text-sm text-ink outline-none placeholder:text-smoke"
              />
            </div>
            <div className="flex flex-1 items-center gap-2 rounded border border-gray-200 px-4 py-3">
              <Search className="h-5 w-5 text-smoke" />
              <input
                type="text"
                placeholder="City, state..."
                className="w-full bg-transparent text-sm text-ink outline-none placeholder:text-smoke"
              />
            </div>
            <button className="rounded bg-primary-400 px-8 py-3 text-sm font-bold text-white transition-colors hover:bg-primary-500">
              Search
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
