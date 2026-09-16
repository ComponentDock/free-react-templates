import { useState } from 'react'

export function Subscribe() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setEmail('')
  }

  return (
    <section className="bg-white py-12" data-testid="subscribe">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div>
            <h3 className="mb-1 text-xl font-bold text-brand-dark">Subscribe To Our Newsletter</h3>
            <h6 className="text-sm text-muted-text">Subscribe and tell us about your story</h6>
          </div>
          <form onSubmit={handleSubmit} className="flex w-full gap-2 md:w-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email"
              className="w-full rounded-sm border border-gray-300 px-4 py-2.5 text-sm focus:border-brand focus:outline-none md:w-72"
              aria-label="Email address"
            />
            <button
              type="submit"
              className="whitespace-nowrap rounded-[3px] bg-brand px-6 py-2.5 text-xs font-bold uppercase text-white transition-colors hover:bg-brand-dark"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
