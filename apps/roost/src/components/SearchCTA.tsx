import { Search } from 'lucide-react'

export function SearchCTA() {
  return (
    <section
      className="flex items-center bg-cover bg-center py-20"
      style={{
        backgroundImage:
          'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://picsum.photos/seed/roost-cta/1600/600)',
      }}
    >
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
        <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">Choose Your Dream House</h2>
        <p className="mb-8 max-w-xl mx-auto text-gray-200">
          We can manage your dream building. A small river named Duden flows by their place.
        </p>
        <a
          href="#search"
          className="inline-flex items-center gap-2 rounded-full bg-primary-600 px-8 py-3 font-medium text-white transition-colors hover:bg-primary-700"
        >
          <Search className="h-4 w-4" />
          Search Places
        </a>
      </div>
    </section>
  )
}
