import { useState, type FormEvent } from 'react'
import { User, Mail, Send } from 'lucide-react'

function handleSubmit(e: FormEvent) {
  e.preventDefault()
}

export function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  return (
    <div>
      <h2 className="mb-6 text-xl font-semibold text-text-primary">Get in touch</h2>
      <form onSubmit={handleSubmit} aria-label="Contact form">
        <div className="mb-3 flex items-center rounded-full bg-bg-input px-4 py-3">
          <User className="mr-3 h-4 w-4 text-text-secondary" aria-hidden="true" />
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full bg-transparent text-sm text-text-primary outline-none placeholder:text-text-placeholder"
            aria-label="Name"
          />
        </div>
        <div className="mb-3 flex items-center rounded-full bg-bg-input px-4 py-3">
          <Mail className="mr-3 h-4 w-4 text-text-secondary" aria-hidden="true" />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-transparent text-sm text-text-primary outline-none placeholder:text-text-placeholder"
            aria-label="Email"
          />
        </div>
        <textarea
          placeholder="Message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="mb-4 w-full resize-none rounded-2xl bg-bg-input px-4 py-3 text-sm text-text-primary outline-none placeholder:text-text-placeholder"
          rows={4}
          aria-label="Message"
        />
        <button
          type="submit"
          className="w-full rounded-full bg-brand-purple py-3 text-sm font-medium text-white transition-colors hover:bg-brand-purple-dark"
        >
          <Send className="mr-2 inline h-4 w-4" aria-hidden="true" />
          Send
        </button>
      </form>
    </div>
  )
}
