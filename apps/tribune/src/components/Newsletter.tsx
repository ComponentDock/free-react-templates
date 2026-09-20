import { useState } from 'react'
import { Button } from '@free-react-templates/ui'

export function Newsletter() {
  const [email, setEmail] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
  }

  return (
    <section
      className="relative py-20 bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url('https://picsum.photos/seed/tribune-newsletter/1920/600')" }}
    >
      <div className="absolute inset-0 bg-primary/90" />
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h2 className="mb-4 text-3xl font-bold text-white">Subscribe to our Newsletter</h2>
        <p className="mb-8 text-white/80">
          Get the latest updates on speakers, schedule, and exclusive offers delivered to your
          inbox.
        </p>
        <form onSubmit={handleSubmit} className="mx-auto flex max-w-md gap-2">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 rounded bg-white px-4 py-3 text-sm text-gray-900 placeholder-gray-500 outline-none focus:ring-2 focus:ring-white"
          />
          <Button type="submit" className="bg-dark-bg text-white hover:bg-dark-surface">
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  )
}
