import { Mail } from 'lucide-react'

export function Newsletter() {
  return (
    <section className="relative py-24">
      <div className="absolute inset-0 bg-brand-parallax" />
      <div className="absolute inset-0 bg-black/20" />

      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center">
        <h2 className="mb-4 text-3xl font-bold text-white">Subscribe to our Newsletter</h2>
        <p className="mb-8 text-white/80">
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
          there live the blind texts.
        </p>
        <form className="mx-auto flex max-w-md gap-2" onSubmit={(e) => e.preventDefault()}>
          <div className="flex flex-1 items-center gap-2 rounded bg-white px-4 py-3">
            <Mail size={18} className="text-gray-400" />
            <input
              type="email"
              placeholder="Enter email address"
              className="w-full bg-transparent text-sm outline-none"
            />
          </div>
          <button
            type="submit"
            className="rounded bg-brand-green px-6 py-3 font-semibold text-white transition-colors hover:bg-green-500"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  )
}
