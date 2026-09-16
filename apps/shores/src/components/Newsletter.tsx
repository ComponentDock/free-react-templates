import { useState } from 'react'
import { Button } from '@free-react-templates/ui'

export function Newsletter() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setEmail('')
  }

  return (
    <section className="bg-paper py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col items-center justify-between gap-8 rounded-lg bg-brand px-8 py-12 md:flex-row">
          <h2 className="text-2xl font-bold text-white md:text-3xl">Do you have a question?</h2>
          <form onSubmit={handleSubmit} className="flex w-full max-w-md gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 rounded px-4 py-3 text-sm text-ink outline-none"
            />
            <Button
              type="submit"
              variant="outline"
              className="border-accent bg-accent text-ink hover:bg-accent-hover"
            >
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
