import { type FormEvent, useState } from 'react'

export function Newsletter() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
  }

  return (
    <section id="contact" className="bg-mist py-8">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col items-center gap-6 md:flex-row">
          <div className="md:w-1/3">
            <h2 className="text-2xl font-bold uppercase tracking-wider text-ink">
              Get News &amp; Updates
            </h2>
          </div>
          <div className="md:w-2/3">
            <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="flex-1 rounded border border-gray-300 px-4 py-3 text-sm focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
              />
              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 rounded border border-gray-300 px-4 py-3 text-sm focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
              />
              <button
                type="submit"
                className="rounded bg-brand px-8 py-3 font-semibold text-white hover:bg-brand-hover"
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
