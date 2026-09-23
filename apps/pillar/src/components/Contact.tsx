import { type FormEvent, useState } from 'react'

export function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
  }

  return (
    <section id="contact" className="bg-gray-50 py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h4 className="mb-1 text-sm font-semibold uppercase tracking-wider text-accent">
            Get In Touch
          </h4>
          <h2 className="mb-4 text-3xl font-bold text-gray-900">Contact Us</h2>
          <p className="mx-auto max-w-xl text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, explicabo, quasi.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="mx-auto max-w-3xl space-y-6">
          <div>
            <label htmlFor="name" className="mb-1 block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded border border-gray-300 px-4 py-3 text-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded border border-gray-300 px-4 py-3 text-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="mb-1 block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full resize-none rounded border border-gray-300 px-4 py-3 text-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
              placeholder="Your message"
            />
          </div>
          <button
            type="submit"
            className="rounded bg-accent px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-dark"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}
