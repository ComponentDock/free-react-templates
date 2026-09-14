import { type FormEvent, useState } from 'react'

export function Newsletter() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setEmail('')
  }

  return (
    <section className="bg-ink py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          <div>
            <h2 className="text-3xl font-semibold text-white">Do You Have a Question?</h2>
          </div>
          <div className="w-full md:w-auto">
            <form onSubmit={handleSubmit} className="flex gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email"
                required
                className="flex-1 rounded-full border border-gray-600 bg-transparent px-6 py-3 text-white placeholder-gray-400 focus:border-brand focus:outline-none"
              />
              <button
                type="submit"
                className="rounded-full bg-brand px-8 py-3 text-sm font-semibold uppercase text-white transition-colors hover:bg-white hover:text-brand"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
