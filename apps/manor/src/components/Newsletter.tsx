import { Gift } from 'lucide-react'

export function Newsletter() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="mb-2 font-heading text-2xl font-bold text-navy-800">
              subscribe to our newsletter
            </h2>
            <span className="mb-6 block text-sm text-gray-500">Get the latest offers</span>
            <form onSubmit={(e) => e.preventDefault()} className="flex gap-3">
              <input
                type="email"
                placeholder="Your email here"
                required
                className="flex-1 rounded border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-700 focus:border-coral-400 focus:outline-none"
              />
              <button
                type="submit"
                className="rounded bg-coral-400 px-6 py-3 font-heading text-sm font-semibold text-white transition-colors hover:bg-coral-500"
              >
                subscribe
              </button>
            </form>
          </div>

          <a href="#" className="group block overflow-hidden rounded-lg bg-gray-50">
            <div className="flex items-center gap-4 p-4">
              <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-coral-400">
                <Gift className="h-6 w-6 text-white" />
              </div>
              <span className="font-heading text-lg font-semibold text-navy-800">weekly offer</span>
            </div>
            <div
              className="h-32 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
              style={{ backgroundImage: 'url(https://picsum.photos/seed/manor-weekly/600/200)' }}
            />
          </a>
        </div>
      </div>
    </section>
  )
}
