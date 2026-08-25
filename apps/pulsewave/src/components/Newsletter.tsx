import { useState, type FormEvent } from 'react'
import { Send } from 'lucide-react'

export function Newsletter() {
  const [email, setEmail] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setEmail('')
  }

  return (
    <section className="bg-gradient-to-br from-brand to-accent-lavender py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-[88px]">
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-white">
              Newsletter — Stay tune and get the latest update
            </h2>
          </div>
          <form onSubmit={handleSubmit} className="flex w-full max-w-md">
            <input
              type="email"
              placeholder="Enter email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 rounded-l-full px-6 py-3 text-sm outline-none"
              aria-label="Email address"
            />
            <button
              type="submit"
              aria-label="Subscribe"
              className="rounded-r-full bg-brand px-6 text-white transition-colors hover:bg-brand/90"
            >
              <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
