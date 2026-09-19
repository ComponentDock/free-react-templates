import { useState, type FormEvent } from 'react'

export function Newsletter() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setEmail('')
  }

  return (
    <section className="relative py-16 md:py-24">
      <img
        src="https://picsum.photos/seed/learnly-newsletter/1600/400"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-brand/90" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8 md:flex-row">
          <div className="md:w-1/2">
            <h2 className="mb-3 text-3xl font-bold text-white">Subscribe to us!</h2>
            <p className="text-white/80">
              Stay updated with the latest courses, campus news, and learning resources delivered
              straight to your inbox.
            </p>
          </div>
          <div className="md:w-1/2">
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 rounded-none border-0 bg-white px-4 py-3 text-ink placeholder:text-mist"
                required
              />
              <button
                type="submit"
                className="rounded-none bg-ink px-6 py-3 font-semibold text-white transition-colors hover:bg-ink/80"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
