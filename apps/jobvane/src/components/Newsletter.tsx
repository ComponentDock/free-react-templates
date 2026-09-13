import { Send } from 'lucide-react'

export function Newsletter() {
  return (
    <section
      className="relative flex items-center bg-cover bg-center py-20"
      style={{ backgroundImage: 'url(https://picsum.photos/seed/jobvane-newsletter/1920/600)' }}
    >
      <div className="absolute inset-0 bg-accent-400/80" />
      <div className="relative mx-auto max-w-7xl px-4 text-center text-white lg:px-8">
        <h2 className="mb-4 text-3xl font-extrabold md:text-4xl">Subscribe to our Newsletter</h2>
        <p className="mx-auto mb-8 max-w-xl text-white/80">
          Get the latest job opportunities delivered straight to your inbox.
        </p>
        <form onSubmit={(e) => e.preventDefault()} className="mx-auto flex max-w-lg gap-2">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 rounded px-4 py-3 text-sm text-ink outline-none"
            required
          />
          <button
            type="submit"
            className="flex items-center gap-2 rounded bg-primary-400 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-primary-500"
          >
            <Send className="h-4 w-4" />
            Subscribe
          </button>
        </form>
      </div>
    </section>
  )
}
