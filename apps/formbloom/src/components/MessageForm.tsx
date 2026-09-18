import { type FormEvent, useState } from 'react'

export function MessageForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
  }

  return (
    <section aria-labelledby="message-heading" className="mt-12">
      <h2 id="message-heading" className="mb-6 text-2xl font-bold uppercase tracking-wider">
        Message Us
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border-b border-border bg-transparent py-2 font-mono text-sm text-text-primary placeholder:text-text-label focus:outline-none focus:ring-0"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border-b border-border bg-transparent py-2 font-mono text-sm text-text-primary placeholder:text-text-label focus:outline-none focus:ring-0"
            />
          </div>
        </div>
        <div>
          <textarea
            placeholder="Write your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={3}
            className="w-full resize-none border-b border-border bg-transparent py-2 font-mono text-sm text-text-primary placeholder:text-text-label focus:outline-none focus:ring-0"
          />
        </div>
        <button
          type="submit"
          className="rounded bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
        >
          Send Message
        </button>
      </form>
    </section>
  )
}
