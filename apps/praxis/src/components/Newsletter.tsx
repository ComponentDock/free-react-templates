import { type FormEvent } from 'react'

export function Newsletter() {
  function handleSubmit(e: FormEvent) {
    e.preventDefault()
  }

  return (
    <section
      className="relative bg-cover bg-center bg-fixed py-16"
      style={{ backgroundImage: "url('https://picsum.photos/seed/praxis-news/1600/400')" }}
    >
      <div className="absolute inset-0 bg-coral-400/80" />
      <div className="relative z-10 mx-auto max-w-2xl px-4 text-center sm:px-6">
        <h2 className="mb-6 text-2xl font-bold text-white">Subscribe to our newsletter</h2>
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="email"
            placeholder="Your Email"
            required
            className="flex-1 rounded-full bg-white px-5 py-3 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none"
          />
          <button
            type="submit"
            className="rounded-full bg-gray-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-gray-800"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  )
}
