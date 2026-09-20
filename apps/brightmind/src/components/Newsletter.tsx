import { Send } from 'lucide-react'

export function Newsletter() {
  return (
    <section
      className="flex items-center bg-cover bg-center bg-no-repeat py-20"
      style={{
        backgroundImage:
          'linear-gradient(rgba(106,0,255,0.6), rgba(106,0,255,0.6)), url(https://picsum.photos/seed/brightmind-newsletter/1600/600)',
      }}
    >
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="mb-4 text-2xl font-bold text-white">Subscribe to our Newsletter</h2>
        <p className="mb-8 text-white/80">
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
          there live the blind texts.
        </p>
        <form className="mx-auto flex max-w-md gap-2" onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            placeholder="Enter your email"
            required
            className="flex-1 rounded px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-white/50"
          />
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded bg-gold-400 px-6 py-3 text-sm font-semibold text-dark transition-colors hover:bg-gold-500"
          >
            <Send className="h-4 w-4" />
            Subscribe
          </button>
        </form>
      </div>
    </section>
  )
}
