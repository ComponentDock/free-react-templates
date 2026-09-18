import { Send } from 'lucide-react'

export function Newsletter() {
  return (
    <section className="relative py-20">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(https://picsum.photos/seed/toothzen-newsletter/1920/400)' }}
      />
      <div className="absolute inset-0 bg-tooth-dark-blue/85" />

      <div className="relative z-10 mx-auto max-w-2xl px-4 text-center sm:px-6">
        <h2 className="text-3xl font-bold text-white">Subscribe to our Newsletter</h2>
        <p className="mt-3 text-white/70">
          A small river named Duden flows by their place and supplies it with the necessary
          regelialia.
        </p>
        <form onSubmit={(e) => e.preventDefault()} className="mt-8 flex gap-2">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 rounded px-4 py-3 text-sm focus:outline-none"
          />
          <button
            type="submit"
            className="flex items-center gap-2 rounded bg-tooth-blue px-6 py-3 font-semibold text-white transition-colors hover:bg-tooth-dark-blue"
          >
            <Send className="h-4 w-4" /> Subscribe
          </button>
        </form>
      </div>
    </section>
  )
}
