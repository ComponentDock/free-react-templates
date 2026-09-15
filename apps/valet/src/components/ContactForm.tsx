import { useState } from 'react'

function handleSubmit(e: React.FormEvent) {
  e.preventDefault()
}

export function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  return (
    <section
      id="contact"
      className="relative py-20"
      style={{ backgroundImage: 'url(https://picsum.photos/seed/valet-contact/1920/800)' }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 container mx-auto px-4">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-8 text-center text-3xl font-bold text-white">Make an Appointment</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-white px-4 py-3 text-gray-900"
              aria-label="Your Name"
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-white px-4 py-3 text-gray-900"
              aria-label="Email"
            />
            <textarea
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={5}
              className="w-full bg-white px-4 py-3 text-gray-900"
              aria-label="Message"
            />
            <button
              type="submit"
              className="w-full bg-blue-600 py-3 font-semibold text-white transition-colors hover:bg-blue-700"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
