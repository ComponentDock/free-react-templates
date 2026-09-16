import { useState } from 'react'
import { Countdown } from './Countdown'

export function SplitHero() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [targetDate] = useState(() => new Date(Date.now() + 30 * 86400000).toISOString())

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setEmail('')
  }

  return (
    <section className="flex min-h-screen">
      {/* Left panel — dark content */}
      <div className="w-1/2 flex flex-col justify-center items-center bg-[#1a1a2e] px-8 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Coming Soon</h1>
        <p className="text-gray-400 mb-10 max-w-sm">
          We are working hard to bring you something amazing. Stay tuned for our launch.
        </p>

        <Countdown targetDate={targetDate} />

        <form onSubmit={handleSubmit} className="mt-10 w-full max-w-sm">
          {submitted ? (
            <p className="text-green-400 text-sm" role="status">
              Thank you! We will notify you.
            </p>
          ) : (
            <div className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/40"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-lg bg-white text-[#1a1a2e] font-semibold hover:bg-gray-200 transition-colors"
              >
                Notify Me
              </button>
            </div>
          )}
        </form>
      </div>

      {/* Right panel — image */}
      <div
        className="w-1/2 bg-cover bg-center hidden md:block"
        style={{
          backgroundImage: 'url(https://picsum.photos/seed/prelude-hero/1200/900)',
        }}
      />
    </section>
  )
}
